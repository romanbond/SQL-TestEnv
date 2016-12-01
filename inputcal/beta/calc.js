var num1, num2, operator;

function startId(){
	//Conformation Prompt
	document.getElementById("startIDResult").innerHTML = ("startID: Successful Connection");
	//This reads the menu value and directs said value to function
	var selectionVar = document.getElementById('selection').value;
	if(selectionVar === "NodeS")
		nodeS();
    if(selectionVar === "Fund")
        MFund();
    if(selectionVar === "TARs")
        TARs();
}

// --- Beginning of TARs --- //
var TARs = function(){
	//Conformation Prompt
	document.getElementById("functionOneResult").innerHTML = ("TARs: Successful Connection");
};
// --- End of TARs --- //

//make sure to added similarity feature
// --- Beginning of nodeS --- //
function nodeS (){
	//Conformation Prompt
	document.getElementById("functionOneResult").innerHTML = ("nodeS: Successful Connection");

  	//--Working?
	var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
	var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

	function toWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}
	//working

  	/*
  	// ES6 Number2Word Engine -- naomik //
	//--- Begining of N2W ---//
	let toWords = n => {
		if (n == 0) return 'zero';
	let a = [
    	'',
		'one',
		'two',
		'three',
		'four',
    	'five',
		'six',
		'seven',
		'eight',
		'nine',
    	'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
    	'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];
	let b = [
    	'',
		'',
		'twenty',
		'thirty',
		'fourty',
    	'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety'
	];
	let g = [
    	'',
		'thousand',
		'million',
		'billion',
		'trillion',
		'quadrillion',
    	'quintillion',
		'sextillion',
		'septillion',
		'octillion',
		'nonillion'
	];
	let grp = n => ('000' + n).substr(-3);
	let rem = n => n.substr(0, n.length - 3);
	let fmt = ([h,t,o]) => {
		return [
			Number(h) === 0 ? '' : a[h] + ' hundred ',
			Number(o) === 0 ? b[t] : b[t] && b[t] + '-' || '',
			a[t+o] || a[o]
		].join('');
	};
	let cons = xs => x => g => x ? [x, g && ' ' + g || '', ' ', xs].join('') : xs;
	let iter = str => i => x => r => {
		if (x === '000' && r.length === 0) return str;
		return iter(cons(str)(fmt(x))(g[i]))
			(i+1)
			(grp(r))
			(rem(r));
		};
		return iter('')(0)(grp(String(n)))(rem(String(n)));
	};
	// --- End of N2W --- //
	*/

	//User input parsed to an int
	var y = parseInt(document.getElementById("numEntry1").value);
	var z = parseInt(document.getElementById("numEntry2").value);
	//This just shows the "y:___" and "x:___" values to show the max number
	document.getElementById("functionOneResultOne").innerHTML = ("y:"+y+" -- z:"+z);
	var text = "";
	var i;
	//for now 5 is the x var, later on the x var will be determined by the user
	for (i = 0; i < 50; i++) {
		var yR = Math.floor((Math.random() * y) + 1);
		var zR = Math.floor((Math.random() * z) + 1);
		var yW = toWords(yR);
		var zW = toWords(zR);
	    text += yW+ " -- links -> " + zW + "<br>";
	};
	function copyToClipboard(text) {
    		window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
	}
	//copyToClipboard(text);
	//alert(text)
	document.getElementById("links").innerHTML = text;
};
// --- End of nodeS --- //

// --- Begining of MFund --- //
var MFund = function(){
	//Conformation Prompt
	document.getElementById("functionOneResult").innerHTML = ("MFund: Successful Connection");
	//Calculation
		//User input parsed to an int
		var deposit = parseInt(document.getElementById("numEntry1").value);
		var maxamount = parseInt(document.getElementById("numEntry2").value);
		document.getElementById("functionOneResultOne").innerHTML = ("d:"+deposit + " -- m:" + maxamount);
		//alert(deposit + " - " + maxamount);
		var years = 0;
		for (var money = deposit; money < maxamount; money += OneYearDiv){
    		var OneYearDiv = money * 0.10;
    		years++;
		}
	money = Math.round(money);
	//add function to put in a comma
	document.getElementById("functionOneResultTwo").innerHTML = ("Years: " + years + "    Amount: $" + money);
};
//-- End of MFund --//
