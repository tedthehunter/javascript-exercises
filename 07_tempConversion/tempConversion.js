const convertToCelsius = function(temp) {
  return Number(((temp - 32) * (5 / 9)).toPrecision(2));
};

const convertToFahrenheit = function(temp) {
  return Number(((temp * (9 / 5)) + 32).toPrecision(2));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
