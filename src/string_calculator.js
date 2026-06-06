// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	let checkShip = 0;
	if(string_numbers === '')
	{
		return "Spaceship lost forever.";
	}

	for (let char of string_numbers){
		if(char === 'X')
		{
			checkShip = 1;
		}
	}
	if(checkShip === 0)
	{
		return "Spaceship lost forever.";
	}

};
