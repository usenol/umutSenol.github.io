var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;


};

function displayScores() {
	var table = document.getElementById("scores_table");
	table.innerHTML = "<tr><th>Name</th><th>Score</th></tr>";

	for (var i = 0; i < names.length; i++) {
		var row = "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
		table.innerHTML += row;
	}
}



function addScore() {
	// get the name and score inputs
	var name = document.getElementById("name");
	var score = document.getElementById("score");

	if (name.value === "" ||isNaN(score.value)|| score.value==""|| score.value < 0 || score.value > 100) {
		alert("You must enter a name and a valid score.");
		return;
	}

	names.push(name.value);
	scores.push(score.value);
}

function displayResults() {

	var average=0;
	var name = "";
	var sum = 0;
	var highest = 0;
	for (var i = 0; i < scores.length; i++) {
		
		sum += parseInt(scores[i]);
		if (scores[i] > highest) {
			highest = scores[i];
			name = names[i];
		}
	}
	//var length=scores.length;
	average = sum / scores.length;


	document.getElementById("results").innerHTML = "<h2> Results </h2><br /><p>Average score= " + average + "</p><p>High score= " + name + " with a score of " + highest + "</p><br\> "//+"<br /> Lenght score= " + length 
}

