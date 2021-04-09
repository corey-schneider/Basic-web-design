var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
	return document.getElementById(id);
};



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	document.getElementById("name").focus();
};


function addScore() {
	//names.push("test");
	//scores.push(99);
	var nameElement = document.getElementById("name").value;
	var scoreElement = document.getElementById("score").value;

	if ((nameElement !== null && nameElement !== '') && (scoreElement !== null && scoreElement !== '') && !isNaN(scoreElement) && scoreElement >= 0 && scoreElement <= 100) {
		names.push(document.getElementById('name').value);
		scores.push(parseInt(document.getElementById('score').value));
		alert("added");
		document.getElementById("name").focus();
	} else {
		alert("You must enter a name and a valid score.");
		return; //do not submit the data
	}
}


function displayResults() {
	const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
	const arrMax = arr => Math.max(...arr);
	let arrMaxIndex = scores.indexOf(Math.max(...scores));

	//alert("display results");
	var title = document.createElement("h2");
	var node = document.createTextNode("Results");
	title.appendChild(node);
	var element = document.getElementById("results");
	element.appendChild(title);


	var body = document.createElement("p");
	var node2 = document.createTextNode("Average score = "+arrAvg(scores));
	var node3 = document.createTextNode("High score = "+names[arrMaxIndex]+" with a score of "+arrMax(scores));
	body.appendChild(node2);
	body.appendChild(document.createElement("br"));
	body.appendChild(node3);
	var element = document.getElementById("results");
	element.appendChild(body);
}
function displayScores() {
	var scoresStringMessy = "";
	for(let i = 0; i < scores.length; i++) {
		scoresStringMessy += names[i]+" --- "+scores[i]+"\n";
	}
	//For debugging:  alert(scoresStringMessy);
	var title = document.createElement("h2");
	var node = document.createTextNode("Scores");
	title.appendChild(node);
	var element = document.getElementById("scores_table");
	element.appendChild(title);

	// Find a <table> element with id="myTable":
	var table = document.getElementById("scores_table");

// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = table.insertRow(1);


// Add some text to the new cells:

	cell1.innerHTML = "<span style='font-weight:bold'>Name</span>";
	cell2.innerHTML = "<span style='font-weight:bold'>Score</span>";


	for (let i = 0; i < names.length; i++) {
		//alert("i is "+i+" - length is "+names.length);
		cell3 = table.insertRow(i+1);
		//cell4 = table.insertRow(i+1, i+1);
		cell3.innerHTML = names[i];
		//cell4.innerHTML = scores[i];
	}

/*	var y = table.rows[1].insertCell(0);
	y.innerHTML = scores[0].toString();
	y = table.rows[2].insertCell(0);
	y.innerHTML = scores[1].toString();
	y = table.rows[3].insertCell(0);
	y.innerHTML = scores[2].toString();
	y = table.rows[4].insertCell(0);
	y.innerHTML = scores[3].toString();*/

// TODO Professor / TA: can you look at this and tell me why it's stopping the iteration at 1?????
// TODO  scores.length shows 4, but it only runs once. this has drove me insane for a few hours.
/*	var y;
	for(let k = 0; k < scores.length; k++) {
		alert("k is "+k+" - length is "+scores.length);
		y = table.rows[k+1].insertCell(k);
		y.innerHTML = scores[k].toString();
	}*/

//This loop doesn't print the scores vertically. It puts them horizontally. But it completes the iteration in full length of scores
	var y;// = table.rows[1].insertCell(0);
	for(let i = 0; i < scores.length; i++) {
		y = table.rows[1].insertCell(i);
		y.innerHTML = scores[i].toString();
	}

}