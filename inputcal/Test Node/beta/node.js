var num1, num2, operator;

function startId(){

	var selectionVar = document.getElementById('selection').value;

	if(selectionVar == "NodeS")
		NodeS()
    if(selectionVar === "Fund")
        MutualFund()
    if(selectionVar == "TARs")
        TARs()

}
var TARs = function(){
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection aka You checked.")
}

//make sure to added similarity feature
var NodeS = function(){
	document.getElementById("resultPlacement1").innerHTML = ("Successful Connection")
	const specialNames = [
        "",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quintillion"
    ];
	tensNames = [
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
	numNames = [
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
	convertLessThanOneThousand(number) {
        String current;
        if (number % 100 < 20){
            current = numNames[number % 100];
            number /= 100;
        }else{
            current = numNames[number % 10];
            number /= 10;

            current = tensNames[number % 10] + current;
            number /= 10;
        }
        if (number == 0) return current;
        return numNames[number] + "hundred" + current;
    }
	convert(number) {
        if (number == 0) { return "zero"; }
        String prefix = "";
        if (number < 0) {
            number = -number;
            prefix = "negative";
        }
        String current = "";
        int place = 0;
        do {
            int n = number % 1000;
            if (n != 0){
                String s = convertLessThanOneThousand(n);
                current = s + specialNames[place] + current;
            }
            place++;
            number /= 1000;
        } while (number > 0);
        return (prefix + current).trim();
    }
	
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

        for(int i=0; i<x;i++){
            //System.out.println("y value: "+y);
            var yR = Math.floor((Math.random() * y) + 1); //Say it's 37
            //so then 37 links to...
            //System.out.println("z value: "+z);
            var zR = Math.floor((Math.random() * z) + 1); //Say it's 13
            //so then 37 links to 13
            document.getElementById("resultPlacement2").innerHTML = (convert(yR) + " -- links -> " + convert(zR)+";");

        }

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