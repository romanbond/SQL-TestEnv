var num1, num2, operator;

function startId(){

	var selectionVar = document.getElementById('selection').value;

	if(selectionVar == "NodeS")
		NodeS()
    if(selectionVar === "Fund")
        MutualFund()
    if(selectionVar == "TARs")
        alert("Not a vaild choice")

}


var NodeS = function(){
	alert("Good Connection")
}

var MutualFund = function(){
	//Conformation Prompt
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection")
	//Calculation
		var deposit = parseInt(document.getElementById("numEntry1").value);
		var maxamount = parseInt(document.getElementById("numEntry2").value);
		document.getElementById("resultPlacement2").innerHTML = (deposit + " - " + maxamount);
		//alert(deposit + " - " + maxamount);
		var years = 0;
		for (var money = deposit; money < maxamount; money += OneYearDiv){
    		var OneYearDiv = money * 0.10;
    		years++;
		}
	money = Math.round(money);
	//add function to put in a comma
	document.getElementById("resultPlacement3").innerHTML = ("Years: " + years + "    Amount: $" + money);
}
