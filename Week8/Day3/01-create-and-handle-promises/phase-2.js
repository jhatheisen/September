function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  console.log('time left ', timeLeft);
  return new Promise((resolve, reject) => {
    if (timeLeft - 1000 >= 0) {
      timeLeft -= 1000;
      setTimeout(() => {
        console.log('Done Stretching');
        resolve(timeLeft);
      }, 1000);
    } else {
      reject('Error: you dont have enough time to stretch');
    }
  });
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  console.log('time left ', timeLeft);
  return new Promise((resolve, reject) => {
    if (timeLeft - 500 >= 0) {
      timeLeft -= 500;
      setTimeout(() => {
        console.log('Done running');
        resolve(timeLeft);
      }, 500);
    } else {
      reject('Error: you dont have enough time to run on the treadmill');
    }
  });
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  console.log('time left ', timeLeft);
  return new Promise((resolve, reject) => {
    if (timeLeft - 2000 >= 0) {
      timeLeft -= 2000;
      setTimeout(() => {
        console.log('Done Lifting Weights');
        resolve(timeLeft);
      }, 2000);
    } else {
      reject('Error: you dont have enough time to lift weights');
    }
  });

}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime).then((timeLeft) => runOnTreadmill(timeLeft)).then(liftWeights).then((timeLeft) => console.log(`You finished your workout with ${timeLeft} miliseconds left.`)).catch(console.log);
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
