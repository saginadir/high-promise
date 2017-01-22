const fs = require('fs');
const highPromise = require('./index');

const multiplyPromise = highPromise((resolve, reject, x) => resolve(x * x));
const openFile = highPromise((resolve, reject, path) => {
  fs.readFile(path, 'utf-8', (err, data) => resolve(data))
});

multiplyPromise(3).then(x => x != 9 ? console.error('Test Failed') : console.info('Sync Test Passed +1'));
openFile('test.txt').then(x => x != 'Success' ? console.error('Test Failed') : console.info('Async Test Passed + 1'));