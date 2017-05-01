# eslint-config-sk22

[![npm](https://img.shields.io/npm/v/eslint-config-sk22.svg?label=npm)](https://npmjs.com/package/eslint-config-sk22)
[![David](https://img.shields.io/david/sk22/eslint-config.svg)](https://github.com/sk22/eslint-config)
[![GitHub stars](https://img.shields.io/github/stars/sk22/eslint-config.svg?style=social&label=Star)](https://github.com/sk22/eslint-config)

based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## Installation

Add [`eslint-config-sk22`](https://npmjs.com/package/eslint-config-sk22)
and its peer dependency [`eslint`](https://npmjs.com/package/eslint) as dev
dependencies to your project.

```
yarn add --dev eslint-config-sk22 eslint
```

## Changes

### using babel as parser
[`parser: 'babel-eslint'`](https://www.npmjs.com/package/babel-eslint)

### no semicolons
[`semi: ['error', 'never']`](http://eslint.org/docs/rules/semi#never)
(instead of [`always`](https://github.com/airbnb/javascript#20.1))

```javascript
const increment = n => n + 1
const object = {
  value: increment(0)
}
```

### no comma dangle
[`comma-dangle: ['error', 'never']`](http://eslint.org/docs/rules/comma-dangle#never)
(instead of [`always-multiline`](https://github.com/airbnb/javascript#19.2))


```javascript
const object = {
  foo: 'bar',
  baz: 'quux'
}
```

### arrow function parens only as needed
[`arrow-parens: ['error', 'as-needed']`](http://eslint.org/docs/rules/arrow-parens#as-needed)
(instead of [`requireForBlockBody`](https://github.com/airbnb/javascript#8.2))

```javascript
const add = (a, b) => a + b // parens needed
const identity = _ => _ // no parens allowed
const prepare = str => { // no parens allowed
  const beautified = beautify(str)
  return beautified.trim()
}
```

### `js` filename extension for jsx
[`react/jsx-filename-extension: ['warning', { extensions: ['.js'] }]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
(instead of [`{ extensions: ['.jsx'] }`](https://github.com/airbnb/javascript/tree/master/react#naming)) // todo

### kebab-case for file naming
[`filenames/match-exported: ['error', 'kebab']`](https://github.com/selaux/eslint-plugin-filenames)
(instead of [PascalCase for React components](https://github.com/airbnb/javascript/tree/master/react#naming))

```javascript
const ListItem = props => (<li {...props} />)
export default ListItem
// -> filename must be list-item.js
```
