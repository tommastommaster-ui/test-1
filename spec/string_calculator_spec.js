describe('String Calculator', function () {
	beforeEach(function () {
		calculator = new StringCalculator();
	});

	it('should return Spaceship lost forever. for an empty map', function () {
		expect(calculator.add('')).toEqual('Spaceship lost forever.');
	});

	it('should return "Spaceship lost forever." for map without ship', function () {

		expect(calculator.add('...')).toEqual('Spaceship lost forever.')

	})
	it('should return "[2,0]"', function () {

		expect(calculator.add('...\n..X')).toEqual([2, 0])

	})



});
