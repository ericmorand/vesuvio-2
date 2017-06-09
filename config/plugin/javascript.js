module.exports = {
  plugin: [
    ['tsify', {target: 'es5'}]
  ],
  transform: [
    ['stringify', {
      appliesTo: {
        includeExtensions: ['html']
      }
    }],
    ['babelify', {
      presets: [require('babel-preset-es2015')]
    }]
  ]
};
