// main.ts
import { Worker } from 'worker_threads';
import path from 'path';

// console.time('Main thread');
let result = 0;
// for(let i=0; i < 1e9; i++) {
//     result += i;
// }
// console.log(result);
// console.timeEnd('Main thread');

console.time('Worker thread');
const worker = new Worker(path.join(__dirname, './worker.js'));

worker.postMessage({start: 1e8, end: 1e9});
result = 0;
for(let i=0; i < 1e8; i++) {
    result += i;
}
console.log("main"+ result);
worker.once('message', (result) => {
  console.log("worker" + result);
  worker.terminate();  
  console.timeEnd('Worker thread');
});
