# High Promise

This is a wrapper for the native es6 promise to make the Promise syntax a bit nicer.

## How to use high-promise
```javascript
// import high-promise
const highPromise = require('high-promise');
```
```javascript
const multiplyVal = highPromise((resolve, reject, x) => resolve(x * x));
  
const fs = require('fs');
const readFile = highPromise((resolve, reject, path) => 
    fs.readFile(path, 'utf-8', (err, data) => resolve(data)));
    
// Same use
multiplyVal(3).then(console.log) // 9
readFile('path.txt').then(console.log) // path.txt content
```

`highPromise` has to receive a function with `(resolve, reject)` as the first two parameters, additional paramteres are
added later like this `(resolve, reject, x, y, z)`

## Before high-promise
```javascript
const multiplyVal = x => 
  new Promise(resolve, reject) => resolve(x * x);
  
const fs = require('fs');

const readFile = path => 
  new Promise(resolve, reject) => 
    fs.readFile(path, 'utf-8', (err, data) => resolve(data))
    
 multiplyVal(3).then(console.log) // 9
 readFile('path.txt').then(console.log) // path.txt content
```

Notice the constant `new Promise` which is nested inside a function, it's necessary to wrap the promise because it's 
evaluated instantly without any way to pass extra variables into it.