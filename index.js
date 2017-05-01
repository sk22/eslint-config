module.exports = {
  extends: ['airbnb'],
  plugins: ['filenames'],
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
    'filenames/match-exported': ['error', 'kebab']
  }
}
