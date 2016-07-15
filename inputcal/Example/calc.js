var num1, num2, operator;

var startId = function (){
	alert("good");
	selectionVar = document.getElementById('selection').value;
    if(selectionVar === "Fund")
        MutualFund();
    if(selectionVar == "Split")
	alert("2")
	  //
    if(selectionVar == "NodeS")
    	alert("3")
        //nodeS()
   //alert(num3);
}
/*
	var MutualFund = function(){
	//Inital Prompt
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection")
	//document.write("Successful Connection");
	//document.write(selectionVar)
	//alert("Successful Connection")
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
		document.getElementById("resultPlacement3").innerHTML = ("Years: " + years + "  -  Amount: " + money);
		//alert("Number of Years: " + years + "    Amount: " + money);
	}


	var RowingCalc = function(){

var splitCal = function () {
    var question = prompt('Please enter the variable you would like to find such as Time, Split, or Distance!');

    //Time
    if (question === 'Time') {

    }
    //Split
    else if (question === 'Split') {
        var hour = prompt('You picked Split! Enter your time 00:00:00');
        var a = hour.split(':');
        var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

        var distance = prompt('How long is the piece?');
        var NumSplits = distance / 500;

        var a = (seconds / NumSplits) / 60;

        //I need to fix this
        //Use Math.floor

        if (a < 1) {
            a = 0;
        } else if (a < 2) {
            a = 1;
        } else if (a < 3) {
            a = 2;
        } else {
            a = 4;
        }


        var b = (seconds / NumSplits) % 60 / 100;

        var finalSplit = a + b;
        alert('Your split for a ' + distance + ' meter piece in ' + hour + ' is: ' + finalSplit);
    }
    //Distance
    else if (question === 'Distance') {
        alert('You picked Distance!');
    } else if (question === 'Quit') {
        alert('Thanks for using RSC 1.0');
    }
    //Mistake
    else {
        alert('Hey it looks like you did not spell the variable correctly, make sure the first letter is capitalized');
        splitCal();
    }
118 - 36 m  or  70 - 12 m
}
}
