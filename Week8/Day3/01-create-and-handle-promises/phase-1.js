function stretch() {
  // Your code here
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
      console.log('Done Stretching')
    }, 1000);
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
      console.log('Done Running on treadmill');
    }, 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
      console.log('Done Lifting Weights');
    }, 2000);
  });
}

function workout() {
  // Your code here
  stretch().then(runOnTreadmill).then(liftWeights);
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
