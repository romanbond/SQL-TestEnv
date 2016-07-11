var num1, num2, num3, operator;

function evaluateId(){
    num1 = parseInt(document.getElementById("numEntry1").value);
    num2 = parseInt(document.getElementById("numEntry2").value);

    var operator = document.getElementsByName('operatorRadio');
	//if(op_value == "plus")
	//	num3 = num1+num2;

	var op_value = operator.value;


	alert(operator)
	/*
    var op_value;
    for(var i = 0; i < operator.length; i++){
        if(operator[i].selected){
            op_value = operator[i].value;
        }
    }
    if(op_value == "plus")
        num3 = num1+num2;
    if(op_value == "minus")
        num3 = num1-num2;
    if(op_value== "multi")
        num3 = num1*num2;
    if(op_value== "divide")
        num3 = num1/num2;

   alert(num3);
   */
    document.getElementById("result").value = num3;
    num1 = num3;
    num3 = 0;
    document.getElementById("numEntry1").value = num1;
}
