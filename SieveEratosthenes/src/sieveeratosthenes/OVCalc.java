//romanbond
package sieveeratosthenes;
import static java.lang.Double.parseDouble;
import static java.lang.Integer.parseInt;
import java.util.Scanner;


public class OVCalc {

    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        System.out.print("(h)our (e)xtra or (y)ear:");
        String input = in.nextLine();
        if(input.equals("y")){
            yearsTax();    
        }if(input.equals("h")){
            hourTax();    
        }if(input.equals("e")){
            exTRA();    
        }
    }

    public static void hourTax(){
        Scanner in = new Scanner(System.in);
        System.out.print("Enter hour rate:");
        String aInput = in.nextLine();
        int a = parseInt(aInput);
        System.out.print("Weeks here:");
        String yInput = in.nextLine();
        int y = parseInt(yInput);
        //System.out.print("A="+a+" Y="+y);
        int total = ((a*8)*5)*y;
        double fin = (total*78.5)/100;
        System.out.println("After taxes: "+fin);
    }
    
    public static void exTRA(){
        Scanner in = new Scanner(System.in);
        System.out.print("Item amount:");
        String aInput = in.nextLine();
        double a = parseDouble(aInput);
        System.out.print("Times a day:");
        String dInput = in.nextLine();
        int d = parseInt(dInput);
        System.out.print("Weeks here:");
        String yInput = in.nextLine();
        int y = parseInt(yInput);
        System.out.println("A="+a+" Y="+y);
        double fin = ((a*5)*d)*y;
        System.out.println("Total saving: $"+fin);
    }

    public static void yearsTax(){
        Scanner in = new Scanner(System.in);
        System.out.print("Amount here:");
        String aInput = in.nextLine();
        int a = parseInt(aInput);
        System.out.print("Years here:");
        String yInput = in.nextLine();
        int y = parseInt(yInput);
        //System.out.println("A="+a+" Y="+y);
        double ans = ((a*78.5)/100)*y;
        System.out.println("After taxes for "+y+" year(s) making $"+a+" a year, you will have: $"+ans);
    }
    
    //Add mutal here
    //Roman Bond
        //CONVERT THIS TO JAVA
//Inital Prompt
/*
var deposit0 = prompt("Please enter the amount you will deposit:", "Initial Deposit Amount Here");
var maxamount0 = prompt("PLease enter the desired withdraw amount:", " End Withdraw Amount Here");
var deposit = parseInt(deposit0);
var maxamount = parseInt(maxamount0);

alert(deposit + " - " + maxamount);


//Calculation
var years = 0;
for (var money = deposit; money < maxamount; money += OneYearDiv){
    var OneYearDiv = money * 0.10;
    years++;
}
money = Math.round(money);
alert("Number of Years: " + years + "    Amount: " + money);
*/
}
