// worker.ts
import { parentPort } from 'worker_threads';

parentPort?.on('message', (data) => {
  let result = 0;
  console.log("worker start" + data.start);
  for(let i=data.start; i < data.end; i++) {
    result += i;
  }
  parentPort?.postMessage(result);
});
