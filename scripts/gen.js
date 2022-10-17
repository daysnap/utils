const { execSync } = require('child_process')
const { rt, rc } = require('./utils')

module.exports = (plop) => {
  plop.setActionType('end', async () => {
    execSync(`npm run entry`)
  })

  plop.setHelper('upperCase', function (text) {
    return text.toUpperCase()
  })

  plop.setGenerator('module', {
    description: '创建一个新组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入名称？',
      },
    ],
    actions: [
      {
        type: 'add',
        path: rc('{{ camelCase name }}.ts'),
        templateFile: rt('m.hbs'),
      },
      {
        type: 'end',
      },
    ],
  })
}
