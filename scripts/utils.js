const path = require('path')
const nodeDir = require('node-dir')
const { exec } = require('child_process')

const r = (...args) => path.resolve(__dirname, '..', ...args)
const rt = (...args) => r('scripts/templates', ...args)
const rc = (...args) => r('src', ...args)

const execAsync = (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err || stderr) reject(err || stderr)
      else resolve(stdout)
    })
  })

const requireFilePath = (directory = '', recursive, regExp) => {
  if (directory[0] === '.') {
    // Relative path
    directory = path.join(__dirname, directory)
  } else if (!path.isAbsolute(directory)) {
    // Module path
    directory = require.resolve(directory)
  }
  return nodeDir
    .files(directory, {
      sync: true,
      recursive: recursive || false,
    })
    .filter((file) => {
      return file.replace(/\\/g, '/').match(regExp || /\.(json|js|tsx)$/)
    })
}

module.exports = {
  r,
  rt,
  rc,
  requireFilePath,
  execAsync,
}
