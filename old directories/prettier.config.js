module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxBracketSameLine: true,
  arrowParens: 'avoid',
  parser: {
    oneOf: [{
      enum: ["markdown"], description: 'Markdown',
    }]
  }
};
