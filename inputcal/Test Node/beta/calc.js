var num1, num2, operator;

function startId(){
	document.getElementById("resultPlacement1").innerHTML = ("startID Successful Connection");

	var selectionVar = document.getElementById('selection').value;

	if(selectionVar === "NodeS")
		NodeS();
    if(selectionVar === "Fund")
        MutualFund();
    if(selectionVar === "TARs")
        TARs();
}
var TARs = function(){
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection aka You checked.");
};

//make sure to added similarity feature
function NodeS (){
		document.getElementById("resultPlacement2").innerHTML = ("NodeS Successful Connection");
/*
	var specialNames = [
        "",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quintillion"
    ];

	var tensNames = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

	var numNames = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

	//good up to here

	function convertLessThanOneThousand (number) {
		//alert("convert long working --- "+number);
		///*
        var current;
        if ((number % 100) < 20){
            alert("<20 working")
            current = numNames[number % 100];
            number /= 100;
        }else{
            alert("else working")
            current = numNames[number % 10];
            number /= 10;

            current = tensNames[number % 10] + current;
            number /= 10;
        }
		if (number == 0){
                    alert("2nd if")
                    return(current)
                }; //alert was return
        return(numNames[number] + "hundred" + current); //alert was return
		//
    }

	function convert (number) {
		if(number === 0){
			alert("ZERO");
		}
		var prefix = " p ";
		if (number < 0) {
            number = -number;
            prefix = "negative";
			alert(prefix);
        }
		var current = "";
        var place = 0;
		do {
			//number--;
            var n = number % 1000;
			//alert("N is  --- "+n);
			//convertLessThanOneThousand(n);
			///*
            if (n != 0){
                var s = convertLessThanOneThousand(n);
                current = s + specialNames[place] + current;
            }
            place++;
            number /= 1000;
			//
		} while (number > 0);
		//alert("While test")
        //alert((prefix + current).trim()); //alert was return
		//document.getElementById("resultPlacement5").innerHTML = (prefix + current).trim();
		//"____hundred_____thousand_____hundredone"
		return (prefix + current).trim()
}
*/

var a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'Stack overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + '' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + '' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + '' + a[n[3][1]]) + 'thousand' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + '' + a[n[4][1]]) + 'hundred' : '';
    str += (n[5] != 0) ? ((str != '') ? ''/*'and '*/ : '') + (a[Number(n[5])] || b[n[5][0]] + '' + a[n[5][1]]) : '';
    return str;
}


		var y = parseInt(document.getElementById("numEntry1").value);
		var z = parseInt(document.getElementById("numEntry2").value);
		//var x = 1;

		document.getElementById("resultPlacement4").innerHTML = ("y:"+y+" -- z:"+z);
		//document.getElementById("resultPlacement5").innerHTML = inWords(y);
		var text = "";
	    var i;
	    for (i = 0; i < 5; i++) {
			var yR = Math.floor((Math.random() * y) + 1);
			var zR = Math.floor((Math.random() * z) + 1);
			var yW = inWords(yR)
			var zW = inWords(zR)
	        text += yW+ " -- links -> " + zW + "<br>";
	    }
	    document.getElementById("links").innerHTML = text;
}

var MutualFund = function(){
	//Conformation Prompt
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection");
	//Calculation
		//Text enteries
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
};
