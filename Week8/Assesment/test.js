function logLater(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // line 4 - what would `message` be?
      console.log(message);
      resolve();
    }, delay);
  });
}

logLater('Hello', 1000)
  .then(() => logLater('Good bye', 5000));
