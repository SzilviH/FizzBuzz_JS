describe('FizzBuzz', function() {
  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      expect(fizzbuzz.play(3)).toBe('Fizz');
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 5', function(){
      expect(fizzbuzz.play(5)).toBe('Buzz');
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 3 and 5', function(){
      expect(fizzbuzz.play(15)).toBe('FizzBuzz');
    });
  });

  describe('returns the number passed to it', function(){
    it('when not divisible by 3 or 5', function(){
      expect(fizzbuzz.play(1)).toBe(1);
    });
  });

});
