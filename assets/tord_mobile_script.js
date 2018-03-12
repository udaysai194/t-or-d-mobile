
var names = [];
var size = 0;
var score = 0;
var display_name = 0;

	function random1(){
		var x = Math.floor(Math.random() * (size - 0 + 1) ) + 0;
		return x;
}

	function myFunction1() {
		var x = random1(size);
		document.getElementById("result_name").innerHTML = names[x].toUpperCase();
		display_name = x;
	}


	
	function scorecard(){
		var uday = document.getElementById('players_name');
		var udaysai = document.getElementById('players_score');
		var paragraph = [];
		var paragraphtwo = [];
		for(i=0;i<size;i++){
			paragraph[i] = document.createElement("p");
			paragraphtwo[i] = document.createElement("p");
			uday.appendChild(paragraph[i]);
			udaysai.appendChild(paragraphtwo[i]);
			paragraph[i].innerHTML = names[i];
			paragraphtwo[i].innerHTML = parseInt(score);
			}

}

	function scorecardIncrement(){
		var udaysai = document.getElementById('players_score');
			udaysai.childNodes[display_name+1].innerHTML = parseInt(udaysai.childNodes[display_name+1].innerHTML)+1;
			myFunction1();
	}

		

	function myFunction(){
		size = prompt("enter the no of players");
		for(i=0;i<size;i++){
			names[i] = prompt("enter player ");
			names[i] = names[i].toUpperCase();
		}
		scorecard();
		myFunction1();
	}