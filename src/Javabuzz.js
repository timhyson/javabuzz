var Javabuzz = function() {};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Javabuzz.prototype.says = function(number) {
  if (this.isDivisibleByFive(number)) {
    return 'Buzz';
  }

  if (this.isDivisibleByThree(number)) {
    return 'Java';
  }

};

// Javabuzz.prototype.says = function(number) {
//   if (this.isDivisibleByFive(number)) return "Buzz";
// };
