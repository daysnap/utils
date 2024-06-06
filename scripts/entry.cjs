const path = require('path')
const { requireFilePath, rc, rt } = require('./utils.cjs')
// const { version } = require('../package.json')

const modules = ((entry) => {
  return requireFilePath(entry, true, /\.ts$/)
    .map(item => {
      const { dir, name } = path.parse(
        item.replace(`${entry}${path.sep}`, '')
      )
      if (!dir && name === 'index') {
        // 排除 src/index.ts
        return ''
      }
      if (dir) {
        const { name } = path.parse(dir)
        return name
      }
      return name
    })
    .filter(Boolean)
    .reduce((r, item) => {
      // 过滤重复
      if (!r.includes(item)) {
        r.push(item)
      }
      return r
    }, [])
})(rc())

module.exports = (plop) => {
  plop.setGenerator('entry', {
    description: '创建入口文件',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: rc('index.ts'),
        templateFile: rt('entry.hbs'),
        data: {
          modules,
          // version,
        },
      },
    ],
  })
}
