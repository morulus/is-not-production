is-not-production
==

Detect if you are NOT in the *production* mode of the nodejs.

Simply, it checks `process.env.NODE_ENV !== 'production'`.

Install
----

```
npm install is-not-production --S
```

Usage
----

```js
import isNotProduction from 'is-not-production';

if (isNotProduction) {
  throw new Error('You are should be in the production mode to stay alive');
}
```

`isNotProduction` is a constant, defined at the moment of script initialize. Typically, the value of NODE_ENV does not change through runtime. But still if you want to be sure, use `isNotProductionRuntime()` fn to get `isNotProduction` state at the current moment.

```js
// process.env.NODE_ENV == 'production'
import isNotProduction from 'is-not-production';
import isNotProductionRuntime from 'is-not-production/runtime';

console.log(isNotProduction); // false

process.env.NODE_ENV == 'development';
console.log(isNotProduction); // false
console.log(isNotProductionRuntime()); // true
```

Author
----

Vladimir Kalmykov <vladimirmorulus@gmail.com>

License
----

MIT, 2017
