# eslint-config-sk22

[![npm](https://img.shields.io/npm/v/eslint-config-sk22.svg?label=npm)](https://npmjs.com/package/eslint-config-sk22)
[![David](https://img.shields.io/david/sk22/eslint-config.svg)](https://github.com/sk22/eslint-config)
[![GitHub stars](https://img.shields.io/github/stars/sk22/eslint-config.svg?style=social&label=Star)](https://github.com/sk22/eslint-config)

based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## Changes

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

### arrow function parens as needed
[`arrow-parens: ['error', 'as-needed']`](http://eslint.org/docs/rules/arrow-parens#as-needed)
(instead of [`requireForBlockBody`](https://github.com/airbnb/javascript#8.2))

```javascript
const add = (a, b) => a + b // parens needed
const identity = _ => _ // no parens allowed
const prepare = str => { // no parens allowed
  const optimized = optimize(str)
  return prepare
}
```
