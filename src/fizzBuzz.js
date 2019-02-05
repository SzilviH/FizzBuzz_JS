var FizzBuzz = function(){};

FizzBuzz.prototype._isDivisibleBy = function(divisor, num) {
  return (num % divisor === 0);
};

FizzBuzz.prototype.play = function(num) {
  if (this._isDivisibleBy(3, num) && this._isDivisibleBy(5, num)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(3, num)) {
    return 'Fizz';
  } else if (this._isDivisibleBy(5, num)) {
    return 'Buzz';
  } else {
    return num;
  }
};
