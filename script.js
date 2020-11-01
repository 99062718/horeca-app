var order;
const beerCost = 2;
const wineCost = 2.5;
const sodaCost = 1.75;
const snackCost = 0.375;
var beerAmount = 0;
var wineAmount = 0;
var sodaAmount = 0;
var snackAmount = 0;
var beerAmountCurrent = 0;
var wineAmountCurrent = 0;
var sodaAmountCurrent = 0;
var snackAmountCurrent = 0;
var beerPrice = 0;
var winePrice = 0;
var sodaPrice = 0;
var snackPrice = 0;
var totalPrice = 0;

function priceCal(amount, price){ //rekent de prijs van de hoeveelheid bier/wijn/fris/snacks voor ons uit
	return amount * price
}

function askAmount(){ //vraagt hoeveel wij van het gegeven ding willen
	return parseInt(prompt("How much " + order + " would you like?"));
}

function printRekening(beerAmount, wineAmount, sodaAmount, snackAmount, beerPrice, winePrice, sodaPrice, snackPrice){ //geeft ons de rekening
	document.getElementById("lineTop").innerHTML = "------------------------------------------------------------";

	if(beerAmount >= 1){
		document.getElementById("beerText").innerHTML = beerAmount + " beer = " + beerPrice + " euros";
	}

	if(wineAmount >= 1){
		document.getElementById("wineText").innerHTML = wineAmount + " wine = " + winePrice + " euros";
	}

	if(sodaAmount >= 1){
		document.getElementById("sodaText").innerHTML = sodaAmount + " soda = " + sodaPrice + " euros";
	}

	if(snackAmount >= 8){
	document.getElementById("snackText").innerHTML = snackAmount + " bitterballen = " + snackPrice + " euros";
	}

	document.getElementById("lineMiddle").innerHTML = "------------------------------------------------------------";

	totalPrice = beerPrice + winePrice + sodaPrice + snackPrice;

	document.getElementById("totalPriceText").innerHTML = "Total price = " + totalPrice + " euros";

	document.getElementById("lineBottom").innerHTML = "------------------------------------------------------------";
}

while(order != "stop"){
	order = prompt("What would you like to order?");
	if(order == "beer"){
		beerAmountCurrent = askAmount();
		beerAmount += beerAmountCurrent;
		beerPrice += priceCal(beerAmountCurrent, beerCost);
	}else if(order == "wine"){
		wineAmountCurrent = askAmount();
		wineAmount += wineAmountCurrent;
		winePrice += priceCal(wineAmountCurrent, wineCost);
	}else if(order == "soda"){
		sodaAmountCurrent = askAmount();
		sodaAmount += sodaAmountCurrent
		sodaPrice += priceCal(sodaAmountCurrent, sodaCost);
	}else if(order == "snack"){
		var snack8or16 = parseInt(prompt("Would you like 8 or 16 bitterballen?"));
		if(snack8or16 == 8 || 16){
			snackAmount += snack8or16;
			snackAmountCurrent = snack8or16;
			snackPrice += priceCal(snackAmountCurrent, snackCost);
		}else{
			alert("This is no option!");
		}
	}else if(order == "stop"){
		printRekening(beerAmount, wineAmount, sodaAmount, snackAmount, beerPrice, winePrice, sodaPrice, snackPrice);
	}else{
		alert("This is no option!");
	}
}