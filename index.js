module.exports = {
  extends: ['airbnb'],
  plugins: ['filenames'],
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'filenames/match-exported': ['error', 'kebab']
  }
}
