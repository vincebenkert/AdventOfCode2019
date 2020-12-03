//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2019/day4/input.txt', 'utf8');
let inputArray = input.split("-");

//console.log(inputArray);

var minValue = Number(inputArray[0]);
var maxValue = Number(inputArray[1]);
let pwdArray = new Array();

function areAdjacent(num){
	let result = false;
	let attempt = num.toString();
	
	for(let x=0; x<attempt.length - 1; x++){
		if(attempt[x] == attempt[x+1]){
			result = true;
			console.log("Pass double: " + attempt);
			break;
		}	
	}
	return result;
}


function neverDecrease(num){
	let result = true;
	let attempt = num.toString();	
	
	for(let x=0; x<attempt.length -1; x++){
		if(Number(attempt[x]) > Number(attempt[x+1])){
			result = false;
			break;
		}
	}
	

	return result;
	
	
}





for(i=minValue; i<=maxValue; i++){
	
	if(neverDecrease(i)){
		//console.log(i + " never decreses from left to right...");
		if(areAdjacent(i)){
			//console.log(i + " has a double as well...");
			pwdArray.push(i);
		}
	}
}


console.log ("How many different passwords within the range given in your puzzle input meet these criteria? " + pwdArray.length);



 