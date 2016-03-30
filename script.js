$(function(){

//budget information
var budget = 100;
$(".budgetPrice").text(budget);

var numApple = 0;
var numOrange = 0;
var numBanana = 0;
var numGrape = 0;
//fruit information
var costApple =70;
var costBanana =85;
var costOrange =65;
var costGrape =55;

var appleArray = [];
var bananaArray = [];
var orangeArray = [];
var grapeArray = [];

//click behavior
$(".buyApple").on("click", function(event){
	event.preventDefault();
	budget -= (costApple / 100);
	numApple ++;
	$(".budgetPrice").text(budget);
	$(".appleInv").text(" " + numApple);
	appleArray.push(costApple);
	var count = 0;
	for(var i = 0; i < appleArray.length; i++){
		count = count + appleArray[i];
	}
	var avgApple = (count / appleArray.length) / 100;
	$(".averageApple").text(" " + avgApple);
	console.log(avgApple);
})

$(".buyOrange").on("click", function(event){
	event.preventDefault();
	budget -= (costOrange / 100);
	numOrange ++;
	$(".budgetPrice").text(budget);
	$(".orangeInv").text(" " + numOrange);
	orangeArray.push(costApple);
	var count = 0;
	for(var i = 0; i < orangeArray.length; i++){
		count = count + orangeArray[i];
	}
	var avgOrange = (count / orangeArray.length) / 100;
	$(".averageOrange").text(" " + avgOrange);
	console.log(avgOrange);
})
$(".buyBanana").on("click", function(event){
	event.preventDefault();
	budget -= (costBanana / 100);
	numBanana ++;
	$(".budgetPrice").text(budget);
	$(".bananaInv").text(" " + numBanana);
	bananaArray.push(costBanana);
	var count = 0;
	for(var i = 0; i < bananaArray.length; i++){
		count = count + bananaArray[i];
	}
	var avgBanana = (count / bananaArray.length) / 100;
	$(".averageBanana").text(" " + avgBanana);
	console.log(avgBanana);
})
$(".buyGrape").on("click", function(event){
	event.preventDefault();
	budget -= (costGrape / 100);
	numGrape ++;
	$(".budgetPrice").text(budget);
	$(".grapeInv").text(" " + numGrape);
	grapeArray.push(costGrape);
	var count = 0;
	for(var i = 0; i < grapeArray.length; i++){
		count = count + grapeArray[i];
	}
	var avgGrape = (count / grapeArray.length) / 100;
	$(".averageGrape").text(" " + avgGrape);
	console.log(avgGrape);
})


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
$(".applePrice").text(costApple / 100);
$(".bananaPrice").text(costBanana / 100);
$(".orangePrice").text(costOrange / 100);
$(".grapePrice").text(costGrape / 100);
},3000)






});
//Put only whole numbers in randomNumber(-50,50)
randomNumber(-50, 50);
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
//This is an example setInterval function
//setInterval(function(){alert("Hello");},3000);



//figure out how to make it work once

//figure out how to put it into setInterval function
// console.log("Apple before function:" + costApple);
// console.log("Banana before function:" + costBanana);
// console.log("Orange before function:" + costOrange);
// console.log("Grape before function:" + costGrape);
