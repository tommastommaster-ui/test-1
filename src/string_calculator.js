// StringCalculator.js
function StringCalculator() { }
StringCalculator.prototype.add = function (string_numbers) {
	let checkShip = 0;
	if (string_numbers === '') {
		return "Spaceship lost forever.";
	}

	for (let char of string_numbers) {
		if (char === 'X') {
			checkShip = 1;
		}
	}
	if (checkShip === 0) {
		return "Spaceship lost forever.";
	}

	let rows = string_numbers.split('\n');

	for (let i = rows.length - 1; i >= 0; --i) {
		for (let j = 0; j <= rows[i].length; ++j) {
			if (rows[i][j] === 'X') {
				let invertedI = rows.length-1 - i;
				return [j, invertedI]
			}
		}
	}




};
