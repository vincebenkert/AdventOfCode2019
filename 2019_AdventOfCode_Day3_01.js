//Input
fs = require('fs')
let input = fs.readFileSync('/adventofcode/2019/day3/input.txt', 'utf8');
let inputArray = input.split("\r\n");
let wireOne = inputArray[0].split(",");
let wireTwo = inputArray[1].split(",");
let leastSteps = 99999;

//Mapping a wire's path 

function mapPath(wire){
	// Start at origin
		let x = 0;
		let y = 0;
		let steps = 0;

	// Create an empty array to pass back after filling
		var xyArray = new Array();
	
	for(let i=0;  i<wire.length; i++){
		let instruction = wire[i];
		let direction = instruction.substring(0,1);
		let travelDist = Number(instruction.substring(1,instruction.length));

			switch(direction){
				case "R":
					//Moving X in a positive direction, but Y remains the same...
					for(let z=0; z<travelDist; z++){
						x = x+1;
						steps++;
						xyArray.push(x + "," + y + "," + steps);
					}
					break;
				case "L":
					//Moving X in a negative direction, but Y remains the same.
					for(let z=0; z<travelDist; z++){
						x = x-1;
						steps++;
						xyArray.push(x + "," + y + "," + steps);
					}	
					break;
				case "U":
					//Moving Y in a postive direction, but X stays the same.
					for(let z=0; z<travelDist; z++){
						y = y+1;
						steps++;
						xyArray.push(x + "," + y + "," + steps);
					}
					break;
				case "D":
					//Moving Y in a negative direction, but X stays the same.
					for(let z=0; z<travelDist; z++){
						y = y-1;
						steps++;
						xyArray.push(x + "," + y + "," + steps);
					}	
					break;
				default:
					console.log("Should never be here....!!!!!");
			}

	}
	
	return xyArray;
	
}
/*
function findManhattenDistance(theArray){
	
	let testDistance = Math.abs(Number(theArray[0])) + Math.abs(Number(theArray[1]));
	//console.log("Testdistance... " + testDistance);
	
	return testDistance;
}
*/
wireOneMap = mapPath(wireOne);
wireTwoMap = mapPath(wireTwo);

/*
console.log(wireOneMap);
console.log(wireTwoMap);
*/

//finding cross sections...  Oh man... this cranks along...

for(let i=0; i<wireOneMap.length; i++){
	for(let z=0; z<wireTwoMap.length; z++){
		
		//Do ordered pair equal???
		let wireOneXYandStep = wireOneMap.split(",");
		let wireTwoXYandStep = wireTwoMap.split(",");

		if((wireOneXYandStep[0] == wireTwoXYandStep[0])&&(wireOneXYandStep[1] == wireTwoXYandStep[1])){
			let	test = Number(wireOneXYandStep[2]) + Number(wireTwoXYandStep[2];
			
			if(test < leastSteps){
				leastSteps = test;	
			}	
		}	
	}
}
console.log("What is the Manhattan distance from the central port to the closest intersection? " + leastSteps);
