var currentSquare = 0; //just a buffer var
var diagram = []; //the diagram value
var square = []; //contain every square/rectangle possible

//init a random size diagram
for(i=0; i < (Math.round(Math.random()*10)+5); i++)
{
	diagram[i] = Math.round(Math.random()*10);
}

//to know how high we need to scan for square/rectangle
var higherIndex = findHigher(diagram);

//function used in the solution
function findHigher(tab){
	var bigger = 0;
	for(i=0; i<tab.length; i++){
		if(bigger < tab[i])
			bigger = tab[i];
	}
	return bigger;
}

//finding the biggest square/rectangle in the diagram
for(j = 1; j < higherIndex; j++){
	for(i = 0; i < diagram.length; i++){
		if(diagram[i]>j){
			currentSquare++;
		}
		else{
			square[square.length] = currentSquare * j;
			currentSquare = 0; //reset the buffer
		}
	}
}

console.log("biggest square/rectangle is " + findHigher(square) + " unit!");
