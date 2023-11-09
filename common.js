const getNumWithDecimalAndDivingFactor = (num) => {
  let factor = 1;
  if (typeof num !== 'number' || !num) {
    return {
      num,
      factor,
    };
  }
  const splittedNum = `${num}`.split('.');
  const tenFactor = splittedNum?.[1]?.length || 0;
  if (tenFactor) {
    factor = Math.pow(10, tenFactor);
  }

  return {
    num: parseInt(splittedNum.join('')),
    factor,
  };
};

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

module.exports = { getNumWithDecimalAndDivingFactor };
