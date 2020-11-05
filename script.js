var order;
const beerCost = 2;
const wineCost = 2.5;
const sodaCost = 1.75;
const snack8Cost = 4;
const snack16Cost = 7.5;
var beerAmount = 0;
var wineAmount = 0;
var sodaAmount = 0;
var snack8Amount = 0;
var snack16Amount = 0;
var beerAmountCurrent = 0;
var wineAmountCurrent = 0;
var sodaAmountCurrent = 0;
var snack8AmountCurrent = 0;
var snack16AmountCurrent = 0;
var beerPrice = 0;
var winePrice = 0;
var sodaPrice = 0;
var snack8Price = 0;
var snack16Price = 0;
var totalPrice = 0;

function priceCal(amount, price){ //rekent de prijs van de hoeveelheid bier/wijn/fris/snacks voor ons uit
	return amount * price
}

function askAmount(){ //vraagt hoeveel wij van het gegeven ding willen
	return parseInt(prompt("How much " + order + " would you like?"));
}

function printRekening(beerAmount, wineAmount, sodaAmount, snack8Amount, snack16Amount, beerPrice, winePrice, sodaPrice, snack8Price, snack16Price){ //geeft ons de rekening
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

	if(snack8Amount >= 1){
	document.getElementById("snack8Text").innerHTML = snack8Amount + " 8 bitterballen plate = " + snack8Price + " euros";
	}

	if(snack16Amount >= 1){
	document.getElementById("snack16Text").innerHTML = snack16Amount + " 16 bitterballen plate = " + snack16Price + " euros";
	}

	document.getElementById("lineMiddle").innerHTML = "------------------------------------------------------------";

	totalPrice = beerPrice + winePrice + sodaPrice + snack8Price + snack16Price;

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
		if(snack8or16 == 8){
			order = "8 bitterballen plates"
			snack8AmountCurrent = askAmount();
			snack8Amount += snack8AmountCurrent;
			snack8Price += priceCal(snack8AmountCurrent, snack8Cost);
		}else if(snack8or16 == 16){
			order = "16 bitterballen plates"
			snack16AmountCurrent = askAmount();
			snack16Amount += snack16AmountCurrent;
			snack16Price += priceCal(snack16AmountCurrent, snack16Cost);
		}else{
			alert("This is no option!");
		}
	}else if(order == "stop"){
		printRekening(beerAmount, wineAmount, sodaAmount, snack8Amount, snack16Amount, beerPrice, winePrice, sodaPrice, snack8Price, snack16Price);
	}else{
		alert("This is no option!");
	}
}