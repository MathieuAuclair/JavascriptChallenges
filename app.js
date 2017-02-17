var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var currentSquare = 0; //just a buffer var
var diagram = []; //the diagram value
var square = []; //contain every square/rectangle possible

//set a color for the diagram
ctx.fillStyle = "red";

//init a random size diagram
for(i=0; i < (Math.round(Math.random()*10)+5); i++)
{
	diagram[i] = Math.round(Math.random()*10);	
	drawBand(i, diagram[i]);
}

//to know how high we need to scan for square/rectangle
var higherIndex = findHigher(diagram);


for(i=0; i < canvas.height/20; i++){

	//then draw a line to see the height
	ctx.beginPath();
	ctx.moveTo(0,canvas.height - i*20);
	ctx.lineTo(canvas.width,canvas.height - i*20);
	ctx.stroke();
}


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
	for(i = 0; i < diagram.length + 1; i++){
		if(diagram[i]>=j){
			currentSquare++;
		}
		else{
			square[square.length] = currentSquare * j;
			currentSquare = 0; //reset the buffer
		}
	}
}

document.getElementById("display").innerHTML = "the biggest square/rectangle is " + findHigher(square) + " unit";


function drawBand(X, Y)
{
	ctx.rect(X*20, canvas.height-(Y*20), 20, Y*20);
	ctx.fill();
	ctx.stroke();
}
