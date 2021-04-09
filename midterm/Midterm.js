//var item = ["espresso", "latte", "cappuccino", "coffee", "biscotti", "scone"];
//var cost = [1.95, 2.95, 3.45, 1.75, 1.95, 2.95];
var list = [ "" ];
var total = 0.00;

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	$("place_order").onclick = placeOrder;
	$("clear_order").onclick = clearOrder;
	$("contact_us").onclick = contactUs;

	$("espresso").onclick = addEspresso;
	$("latte").onclick = addLatte;
	$("cappuccino").onclick = addCappuccino;
	$("coffee").onclick = addCoffee;
	$("biscotti").onclick = addBiscotti;
	$("scone").onclick = addScone;
	// add mouseover and mouseout event to each image
	//add click handler to each image
	// for click event add item to order and update total
	// display order and total
	// add click event handler for Contact Us button
	// Bonus
        // add click event handler for check out button
		// add click event handler for clear button
};

function placeOrder() {
	var scoresStringMessy = "";
	for(let i = 0; i < list.length; i++) {
		scoresStringMessy += list[i]+"\n";
	}
	alert("Your order list:\n"+scoresStringMessy+"\n\nTotal: $"+total);
	document.location.href = "./checkout.html";
	document.getElementById("the_order").innerHTML = "Your order is blahblahlblah"; //TODO fix this, it doesn't work

}
function clearOrder() {
	alert("Cleared order.");
	total = 0.00;
	list.splice(0, list.length); // delete all values in list, starting from index 0 and ending in index "length's size"
	displayOrder(); //refresh our order list and total cost
}
function contactUs() {
	document.location.href = "./contact_us.html";
}

function addEspresso() {
	//alert("added espresso");
	list.push("$1.95 - Espresso");
	total += 1.95;
	displayOrder();
}
function addLatte() {
	//alert("latte");
	list.push("$2.95 - Latte");
	total += 2.95;
	displayOrder();
}
function addCappuccino() {
	//alert("capp");
	list.push("$3.45 - Cappuccino");
	total += 3.45;
	displayOrder();
}
function addCoffee() {
	//alert("coffee");
	list.push("$1.75 - Drip coffee");
	total += 1.75;
	displayOrder();
}
function addBiscotti() {
	//alert("biscotti");
	list.push("$1.95 - Biscotti");
	total += 1.95;
	displayOrder();
}
function addScone() {
	//alert("scone");
	list.push("$2.95 - Scone");
	total += 2.95;
	displayOrder();
}

function displayOrder() {
	var orderList = "";
	for(let i = 0; i < list.length; i++) {
		orderList += list[i]+"<br>";
	}
	document.getElementById("order").innerHTML = orderList;
	document.getElementById("total").innerHTML = "<em>Total: $"+total+"</em>";
}