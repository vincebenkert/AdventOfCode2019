//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2019/day4/input.txt', 'utf8');
let inputArray = input.split("-");

//console.log(inputArray);

var minValue = Number(inputArray[0]);
var maxValue = Number(inputArray[1]);
let pwdArray = new Array();

function checkDouble(num){
	let result = false;
	let attempt = num.toString();
	//Can't be part of a larger group...
	for(let x=0; x<attempt.length-1; x++){
		if(attempt[x] == attempt[x+1]){
			if(x == 0){
				if(attempt[x+1] !== attempt[x+2]){
					result = true;
					break;
				}
			}else if(x == 4){
				if(attempt[x-1] !== attempt[x]){
					result = true;
					break;
				}
			}else{
				if((attempt[x-1] !== attempt[x]) && (attempt[x+1] !== attempt[x+2])){
					result = true;
					break;
				}
			}	
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
		console.log(i + " never decreses from left to right...");
		if(checkDouble(i)){
			console.log(i + " has a double as well...");
			pwdArray.push(i);
		}
	}
}


console.log ("How many different passwords within the range given in your puzzle input meet these criteria? " + pwdArray.length);

// 246  -  Too low..
// Correct answer...  stupid closing brackets...

 