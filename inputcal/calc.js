var num1, num2, num3, operator;

function evaluateId(){
    //num1 = parseInt(document.getElementById("numEntry1").value);
    //num2 = parseInt(document.getElementById("numEntry2").value);

    var operator = document.getElementsByName('operatorRadio');

    var op_value;
    for(var i = 0; i < operator.length; i++){
        if(operator[i].checked){
            op_value = operator[i].value;
        }
    }
    if(op_value == "M")
        MutualFund()
    if(op_value == "minus")
        num3 = num1-num2;
    if(op_value== "multi")
        num3 = num1*num2;
    if(op_value== "divide")
        num3 = num1/num2;
   //alert(num3);
}



	var MutualFund = function(){
	//Inital Prompt
	alert("connect")
/*
	var deposit0 = prompt("Please enter the amount you will deposit:", "Initial Deposit Amount Here");
	var maxamount0 = prompt("PLease enter the desired withdraw amount:", " End Withdraw Amount Here");
	var deposit = parseInt(deposit0);
	var maxamount = parseInt(maxamount0);

	alert(deposit + " - " + maxamount);
*/
	//Calculation
		var deposit = parseInt(document.getElementById("numEntry1").value);
		var maxamount = parseInt(document.getElementById("numEntry2").value);
		alert(deposit + " - " + maxamount);
		var years = 0;
		for (var money = deposit; money < maxamount; money += OneYearDiv){
    		var OneYearDiv = money * 0.10;
    		years++;
		}
		money = Math.round(money);
		alert("Number of Years: " + years + "    Amount: " + money);
	}
