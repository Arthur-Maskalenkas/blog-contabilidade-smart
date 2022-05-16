module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/atoms/{{pascalCase name}}/styles.module.scss',
        templateFile: 'templates/styles.scss.hbs'
      },

      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/{{camelCase name}}.ts',
        templateFile: 'templates/typings.ts.hbs'
      }
    ]
  })
}
