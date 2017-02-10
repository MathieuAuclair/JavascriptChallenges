var currentSquare; //just a buffer var
var diagram = []; //the diagram value
var square = []; //contain every square/rectangle possible
var higherIndex = findHigher(diagram); //function that return higher value in an array

//init a random size diagram
for(i=0; i < (Math.round(Math.random()*10)+5); i++)
{
	diagram[i] = Math.round(Math.random()*10);
}

//function used in the solution
function findHigher(tab){
	var bigger;
	for(i=0; i>tab.length; i++){
		if(bigger < tab[i])
			bigger = tab[i];
	}
	return bigger;
}

//finding the biggest square/rectangle in the diagram
for(j = 0; j < higherIndex; j++){
	for(i = 0; i < diagram.length; i++){
		if(diagram[i]>j){
			currentSquare++;
		}
		else{
			square[square.length] = currentSquare * j;
		}
	}
}

console.log(diagram);
console.log("biggest square/rectangle is " + findHigher(square) + " unit!");