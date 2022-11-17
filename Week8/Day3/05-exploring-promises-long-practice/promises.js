/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
async function num1() {
  return 1;
}
// async puts it in the message queue

// num2().then(result => console.log('1st in code ', result));
// console.log('num1', num1());
// console.log('num1', num1());
// console.log('num1', num1());
// console.log('num1', num1());
// console.log('num1', num1());
// console.log('2nd in code', num2().then(result => console.log(result)));


async function num2() {
  return 2;
}

// num2().then(console.log);


/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
// await resolves the promise and makes the code wait for it to resolve, then moves on
// async function waiting() {
//   const value = await num2();
//   console.log('waiting', value);
//   const value2 = await num1();
//   console.log('waiting', value2);
// }
// waiting();

function waiting() {
  num2().then(console.log);
}
// waiting();

// func().then(res => func2(res)).then

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function waitForMyPromise() {
  const promise = new Promise((resolve) => {
      setTimeout(() => {
          resolve('done!!!');
      }, 1000)
  });

  const result = await promise;
  console.log('my promise is', result);
}
// waits for 1 sec then 1.5

// waitForMyPromise()
// .then(() => new Promise((resolve) => {
//   setTimeout(() => {
//       resolve('done!');
//   }, 1500)
// }))
// .then(r => console.log('then my other promise is', r));


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
// new Promise((resolve) => {
//   setTimeout(() => {
//       resolve('done!');
//   }, 1500)
// }).then(r => console.log('then my other promise is', r));


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}

function printAfter(ms) {
  wait(ms).then(console.log);
}
// printAfter(1000);

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = (random) => new Promise((resolve, reject) =>{
  if (random > 0.5) {
    resolve('success!!');
  } else {
    reject('random error');
  }
});

// tryRandomPromise(0).then(console.log, console.log);
// tryRandomPromise(1)
// .then(console.log)
// .then(() => tryRandomPromise(0))
// .then(console.log)
// .catch(console.log);

for (let i = 1; i < 10; i++) {
  const random = Math.random();
  wait(2000 + random * 1000)
      .then(() => tryRandomPromise(random))
      .then(result => console.log('random try #', i, result))
      .catch(error => console.error('random try #', i, error));
}


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
