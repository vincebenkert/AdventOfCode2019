
//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2019/day2/input.txt', 'utf8');
let inputArray = input.split(",");



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

function inputNounVerb(noun,verb){
	inputArray[1] = noun;
	inputArray[2] = verb;
}

function resetArray(){
	inputArray = input.split(",");
	opCode = Number(inputArray[0]);
	instructPtr = 0;
}






for(var noun = 0; noun<=99; noun++){
	for(var verb = 0; verb<=99; verb++){
		resetArray();
		inputNounVerb(noun,verb);
			while(opCode != 99){
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

			if(Number(inputArray[0]) == 19690720){
				let puzzleAnswer = (100 * noun) + verb;
				console.log("Find the input noun and verb that cause the program to produce the output 19690720. What is 100 * noun + verb? " + puzzleAnswer);
				noun = 100;
				verb = 100;
			}
				

	}
}

