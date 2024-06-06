const { execSync } = require('child_process')
const fs = require('fs')
const rimraf = require('rimraf')
const { rc } = require('./utils.cjs')

module.exports = (plop) => {
  plop.setGenerator('remove', {
    description: '删除一个模块',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入名称？',
      },
      { type: 'confirm', name: 'ok', message: '确认删除？' },
    ],
    actions: (res) => {
      const { name, ok } = res
      if (ok) {
        let dirname = plop.getHelper('camelCase')(name)
        if (!fs.existsSync(rc(dirname))) {
          dirname = `${dirname}.ts`
        }
        rimraf.sync(rc(dirname))
        console.log('✔ 删除成功')
        execSync('npm run entry')
      }
      return []
    },
  })
}
