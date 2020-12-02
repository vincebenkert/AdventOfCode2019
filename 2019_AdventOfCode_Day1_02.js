
//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2019/day1/input.txt', 'utf8');
let inputArray = input.split("\r\n");

let totalFuel = 0;

for(let i=0; i<inputArray.length; i++){
	
	
	let mass = Number(inputArray[i]);
	let fuel = Math.floor(mass/3) - 2;
	totalFuel = totalFuel + fuel;
	
	while(fuel >= 9){
		fuel = Math.floor(fuel/3) - 2;
		totalFuel = totalFuel + fuel;
	}

}


console.log("What is the sum of the fuel requirements for all of the modules on your spacecraft? " + totalFuel);

//too low: 5233246  
//right answer --   while loop needed to include 9...  

