
# assertKind v1.0.0 

Throw an error if a value doesn't inherit from the given constructor.

```js
const assertKind = require('assertKind')

assertKind({}, Object)  // => undefined
assertKind([], Object)  // => undefined
assertKind(10, Object)  // => TypeError('Expected a kind of Object')
assertKind(10, Object, 'config')  // => TypeError('`config` must be a kind of Object')
```

