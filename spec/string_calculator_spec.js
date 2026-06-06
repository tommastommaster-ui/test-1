describe('String Calculator', function () {
	beforeEach(function () {
		calculator = new StringCalculator();
	});

	it('should return "Spaceship lost forever." for an empty map', function () {
		expect(calculator.findSpaceship('')).toEqual('Spaceship lost forever.');
	});

	



});
