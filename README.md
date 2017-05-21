# eslint-config-sk22

[![npm](https://img.shields.io/npm/v/eslint-config-sk22.svg?label=npm)](https://npmjs.com/package/eslint-config-sk22)
[![David](https://img.shields.io/david/peer/sk22/eslint-config.svg)](https://github.com/sk22/eslint-config)
[![GitHub stars](https://img.shields.io/github/stars/sk22/eslint-config.svg?style=social&label=Star)](https://github.com/sk22/eslint-config)

based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## Installation

Add [`eslint-config-sk22`](https://npmjs.com/package/eslint-config-sk22)
with all peer dependencies to your project. (Just like in
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)).

This can be done using [`install-peerdeps`](https://www.npmjs.com/package/install-peerdeps)

```
install-peerdeps --dev eslint-config-sk22
```

Add the `--yarn` flag to your `install-peerdeps` command if you prefer to use
yarn instead of npm.

## Differences
in opposite to [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### using babel as parser
[`parser: 'babel-eslint'`](https://www.npmjs.com/package/babel-eslint)

### no semicolons
[`semi: ['error', 'never']`](http://eslint.org/docs/rules/semi#never)
(instead of [`always`](https://github.com/airbnb/javascript#semicolons--required))

```javascript
const increment = n => n + 1
const object = {
  value: increment(0)
}
```

### no comma dangle
[`comma-dangle: ['error', 'never']`](http://eslint.org/docs/rules/comma-dangle#never)
(instead of [`always-multiline`](https://github.com/airbnb/javascript#commas--dangling))


```javascript
const object = {
  foo: 'bar',
  baz: 'quux'
}
```

### arrow function parens only as needed
[`arrow-parens: ['error', 'as-needed']`](http://eslint.org/docs/rules/arrow-parens#as-needed)
(instead of [`requireForBlockBody`](https://github.com/airbnb/javascript#arrows--implicit-return))

```javascript
const add = (a, b) => a + b // parens needed
const identity = _ => _ // no parens allowed
const prepare = str => { // no parens allowed
  const beautified = beautify(str)
  return beautified.trim()
}
```

### allow console
[`no-console: 'off'`](http://eslint.org/docs/rules/no-console)
(instead of [`no-console: 'warn'`](https://github.com/airbnb/javascript/blob/772bbb5b7d2f6990e519c3d70539f807257492fe/packages/eslint-config-airbnb-base/rules/errors.js#L25))

```javascript
console.log('ServiceWorker successfully registered')
```

### `js` filename extension for jsx
[`react/jsx-filename-extension: ['error', { extensions: ['.js'] }]`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
(instead of [`.jsx`](https://github.com/airbnb/javascript/tree/master/react#naming))

```javascript
const ListItem = props => (<li {...props} />)
export default ListItem
// -> filename must end with .js
```


### kebab-case for file naming
[`filenames/match-exported: ['error', 'kebab']`](https://github.com/selaux/eslint-plugin-filenames)
(instead of [PascalCase for React components](https://github.com/airbnb/javascript/tree/master/react#naming))

```javascript
const ListItem = props => (<li {...props} />)
export default ListItem
// -> filename must be list-item.js
```
