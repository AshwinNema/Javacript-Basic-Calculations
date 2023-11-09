const { getNumWithDecimalAndDivingFactor } = require('./common');

const addTwoNumbers = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 != 'number') {
    return num1 + num2;
  }
  const firstDetails = getNumWithDecimalAndDivingFactor(num1);
  const secondDetails = getNumWithDecimalAndDivingFactor(num2);
  const totalMaxFactor = firstDetails.factor * secondDetails.factor;
  const converted1 = firstDetails.num * secondDetails.factor;
  const converted2 = secondDetails.num * firstDetails.factor;
  const total = converted1 + converted2;
  return total / totalMaxFactor;
};

const multiplyTwoNumbers = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 != 'number') {
    return num1 * num2;
  }
  const firstDetails = getNumWithDecimalAndDivingFactor(num1);
  const secondDetails = getNumWithDecimalAndDivingFactor(num2);
  let totalMaxFactor = firstDetails.factor * secondDetails.factor;
  totalMaxFactor *= totalMaxFactor;
  const converted1 = firstDetails.num * secondDetails.factor;
  const converted2 = secondDetails.num * firstDetails.factor;
  const total = converted1 * converted2;
  return total / totalMaxFactor;
};

const divideTwoNos = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 != 'number') {
    return num1 / num2;
  }
  const firstDetails = getNumWithDecimalAndDivingFactor(num1);
  const secondDetails = getNumWithDecimalAndDivingFactor(num2);
  const converted1 = firstDetails.num * secondDetails.factor;
  const converted2 = secondDetails.num * firstDetails.factor;
  return converted1 / converted2;
};

module.exports = {
  addTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNos,
};
