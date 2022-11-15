function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  return input.map(keyValuePair => keyValuePair.split('='));
}

function thirdStep(input) {
  // Your code here
  return input.map(([key, value]) => [key, value.replace(/\+/, ' ')]);
}

function fourthStep(input) {
  // Your code here
  return input.map(([key, value]) => [key, decodeURIComponent(value)]);
}

function fifthStep(input) {
  // Your code here
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc
  }, {});
}

function parseBody(str) {
  // Your code here
  str = firstStep(str);
  str = secondStep(str);
  str = thirdStep(str);
  str = fourthStep(str);
  str = fifthStep(str);
  return str;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
