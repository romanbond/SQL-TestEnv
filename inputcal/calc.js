var num1, num2, operator;

function evaluateId(){
    //num1 = parseInt(document.getElementById("numEntry1").value);
    //num2 = parseInt(document.getElementById("numEntry2").value);

    var operator = document.getElementsByName('operatorRadio');
	var slel = document.getElementById('sel').value;
	alert(slel)
    var op_value;
    for(var i = 0; i < operator.length; i++){
        if(operator[i].checked){
            op_value = operator[i].value;
        }
    }
    if(op_value == "M")
        MutualFund()
    if(op_value == "SK")
        num3 = num1-num2;
    if(op_value== "W")
        num3 = num1*num2;
    if(op_value== "//")
        num3 = num1/num2;
   //alert(num3);
}

	var MutualFund = function(){
	//Inital Prompt
	alert("connect")
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
