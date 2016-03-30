$(function(){

//budget information
var budget = 100;

// fruit count
var numApple = 0;
var numOrange = 0;
var numBanana = 0;
var numGrape = 0;

//fruit information
var costApple =70;
var costBanana =85;
var costOrange =65;
var costGrape =55;

// purchased fruit
var appleArray = [];
var bananaArray = [];
var orangeArray = [];
var grapeArray = [];

//click behavior Apple
$(".buyApple").on("click", function(event){
	event.preventDefault();
	budget -= (costApple / 100).toFixed(2);
	if(budget < 0){
		budget = 0;
	}
	numApple ++;
	$(".budgetPrice").text(budget);
	$(".appleInv").text(" " + numApple);
	appleArray.push(costApple);
	var count = 0;
	for(var i = 0; i < appleArray.length; i++){
		count = count + appleArray[i];
	}
	var avgApple = ((count / appleArray.length) / 100).toFixed(2);
	$(".averageApple").text(" " + avgApple);
	console.log(avgApple);

})
//click behavior Orange
$(".buyOrange").on("click", function(event){
	event.preventDefault();
	budget -= (costOrange / 100);
	if(budget < 0){
		budget = 0;
	}
	numOrange ++;
	$(".budgetPrice").text(budget);
	$(".orangeInv").text(" " + numOrange);
	orangeArray.push(costApple);
	var count = 0;
	for(var i = 0; i < orangeArray.length; i++){
		count = count + orangeArray[i];
	}
	var avgOrange = ((count / orangeArray.length) / 100).toFixed(2);
	$(".averageOrange").text(" " + avgOrange);
	console.log(avgOrange);

})
//click behavior Banana
$(".buyBanana").on("click", function(event){
	event.preventDefault();
	budget -= (costBanana / 100);
	if(budget < 0){
		budget = 0;
	}
	numBanana ++;
	$(".budgetPrice").text(budget);
	$(".bananaInv").text(" " + numBanana);
	bananaArray.push(costBanana);
	var count = 0;
	for(var i = 0; i < bananaArray.length; i++){
		count = count + bananaArray[i];
	}
	var avgBanana = ((count / bananaArray.length) / 100).toFixed(2);
	$(".averageBanana").text(" " + avgBanana);
	console.log(avgBanana);

})
//click behavior Grape
$(".buyGrape").on("click", function(event){
	event.preventDefault();
	budget -= (costGrape / 100);
	if(budget < 0){
		budget = 0;
	}
	numGrape ++;
	$(".budgetPrice").text(budget);
	$(".grapeInv").text(" " + numGrape);
	grapeArray.push(costGrape);
	var count = 0;
	for(var i = 0; i < grapeArray.length; i++){
		count = count + grapeArray[i];
	}
	var avgGrape = ((count / grapeArray.length) / 100).toFixed(2);
	$(".averageGrape").text(" " + avgGrape);
	console.log(avgGrape);

})

// Price generator every 15 seconds
setInterval(function(fruit){
  costApple = costApple + randomNumber(-50,50);
	costBanana = costBanana + randomNumber(-50,50);
	costOrange = costOrange + randomNumber(-50,50);
	costGrape = costGrape + randomNumber(-50,50);
	if(costApple < 50){
	costApple = 50;
}else if(costApple > 999){
	costApple = 999;
}
if(costBanana < 50){
costBanana = 50;
}else if(costBanana > 999){
costBanana = 999;
}
if(costOrange < 50){
costOrange = 50;
}else if(costOrange > 999){
costOrange = 999;
}
if(costGrape < 50){
costGrape = 50;
}else if(costGrape > 999){
costGrape = 999;
}
// $(".applePrice").text((costApple / 100) * 100 / 100);
$(".applePrice").text(costApple / 100);
$(".bananaPrice").text(costBanana / 100);
$(".orangePrice").text(costOrange / 100);
$(".grapePrice").text(costGrape / 100);
},15000)






});

//Put only whole numbers in randomNumber(-50,50)
randomNumber(-50, 50);
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
