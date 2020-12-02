
//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2019/day2/input.txt', 'utf8');
let inputArray = input.split(",");

console.log(inputArray);


//Intcode

//OpCode 1 - adds together numbers read from two positions and stores the result in a third position
//OpCode 2 -
//OpCode 99 - Halt program immediately
//OpCode Unknown -  I did something wrong. =( 

var opCode = Number(inputArray[0]);
var instructPtr = 0;


function opCodeOne(paramOne,paramTwo,paramThree){
	
	let valueOne = Number(inputArray[paramOne]);
	let valueTwo = Number(inputArray[paramTwo]);
	inputArray[paramThree] = valueOne + valueTwo;
	//console.log("opCodeOne..."+ valueOne + " " + valueTwo + " " + inputArray[paramThree] + " Put into position " + paramThree + " of array");
	
}

function opCodeTwo(paramOne,paramTwo,paramThree){
	let valueOne = Number(inputArray[paramOne]);
	let valueTwo = Number(inputArray[paramTwo]);
	inputArray[Number(inputArray[paramThree])] = valueOne * valueTwo;
	//console.log("opCodeTwo..."+ valueOne + " " + valueTwo + " " + inputArray[paramThree] + " Put into position " + paramThree + " of array");
}



while(opCode != 99){
	//console.log("opCode = " + opCode);
	//console.log("instructPtr = " + instructPtr);
	switch(Number(opCode)) {
	  case 1:
		opCodeOne(Number(inputArray[instructPtr+1]),Number(inputArray[instructPtr+2]),Number(inputArray[instructPtr+3]));
		instructPtr = instructPtr + 4;
		opCode = Number(inputArray[instructPtr]);
		break;
	  case 2:
		opCodeTwo(Number(inputArray[instructPtr+1]),Number(inputArray[instructPtr+2]),Number(inputArray[instructPtr+3]));
		instructPtr = instructPtr + 4;
		opCode = Number(inputArray[instructPtr]);
		break;
		
	  case 99:
		console.log("Found end of program");

	  default:
		console.log("Something is wrong");

	}	
}


console.log("What value is left at position 0 after the program halts? " + inputArray[0]);

//Too low.... 1690717
//right answer --  forgot to change inputs before running program...


