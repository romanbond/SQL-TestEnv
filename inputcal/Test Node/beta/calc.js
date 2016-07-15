var num1, num2, operator;

function startId(){
	document.getElementById("resultPlacement1").innerHTML = ("startID Successful Connection")

	var selectionVar = document.getElementById('selection').value;

	if(selectionVar == "NodeS")
		NodeS()
    if(selectionVar == "Fund")
        MutualFund()
    if(selectionVar == "TARs")
        TARs()
}
var TARs = function(){
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection aka You checked.")
}

//make sure to added similarity feature
function NodeS (){
		document.getElementById("resultPlacement2").innerHTML = ("NodeS Successful Connection")

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
        var current;
        if (number % 100 < 20){
            current = numNames[number % 100];
            number /= 100;
        }else{
            current = numNames[number % 10];
            number /= 10;

            current = tensNames[number % 10] + current;
            number /= 10;
        }
        if (number == 0) alert(current); //alert was return
        aler(numNames[number] + "hundred" + current); //alert was return
    }
	function convert (number) {
		alert("Convert working")
        if (number == 0) { alert("zero"); } //alert was return
        var prefix = "";
        if (number < 0) {
            number = -number;
            prefix = "negative";
        }
        var current = "";
        var place = 0;
        do {
            var n = number % 1000;
            if (n != 0){
                var s = convertLessThanOneThousand(n);
                current = s + specialNames[place] + current;
            }
            place++;
            number /= 1000;
        } while (number > 0);
        alert((prefix + current).trim()); //alert was return
    }
	*/
        //System.out.println("*** " + obj.convert(123456789));
        //System.out.println("*** " + obj.convert(-55));
        //System.out.println("TEST GEN ------- TEST GEN");
        //Random rand = new Random();
        //Scanner in = new Scanner(System.in);

		//-------------- Old Input --------------//
		/*
        System.out.println("Enter the amount of NODE LINKS:");
        String xIN = in.nextLine();      //x input
        var x = parseInt(xIN);            //parse node link
        System.out.println("Enter the y value:");
        String yIN = in.nextLine();    //y input
        var yi = parseInt(yIN);          //parse y value
        //int y = 0;                  //default value
        System.out.println("Enter the z value:");
        String zIN = in.nextLine();    //z input
        var zi = parseInt(zIN);          //parse z value
        //int z = 0;                  //default value
		*/
		//-------------- Old Input --------------//
		// y and z are the max vars		x is the number of gens


		var y = parseInt(document.getElementById("numEntry1").value);
		var z = parseInt(document.getElementById("numEntry2").value);
		var x = 1;

		document.getElementById("resultPlacement4").innerHTML = (y+" -- "+z)

		var text = "";
	    var i;
	    for (i = 0; i < 5; i++) {
			var yR = Math.floor((Math.random() * y) + 1);
			var zR = Math.floor((Math.random() * z) + 1);
			convert(yR)
			//var yW = convert(yR)
			//var zW = convert(zR)
	        text += yR+ " -- links -> " + zR + "<br>";
	    }
	    document.getElementById("links").innerHTML = text

/*
		var text = "";
		var i = 0;
        for(i = 0; i<x; i++){
			alert("forloop")
            //System.out.println("y value: "+y);
            //----var yR = Math.floor((Math.random() * y) + 1); //Say it's 37
            //so then 37 links to...
            //System.out.println("z value: "+z);
            //----var zR = Math.floor((Math.random() * z) + 1); //Say it's 13
            //so then 37 links to 13
			//alert("y="+yR+" - "+"x="+zR)
			//----text += yR + zR + i + "<br>";
			//document.getElementById("resultPlacement5").innerHTML = ("y="+yR+" - "+"x="+zR)
			//document.getElementById("resultPlacement5").innerHTML = (convert(yR) + " -- links -> " + convert(zR)+";");
		}
		//----document.getElementById("demo").innerHTML = text;

*/
}

var MutualFund = function(){
	//Conformation Prompt
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection")
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
}
