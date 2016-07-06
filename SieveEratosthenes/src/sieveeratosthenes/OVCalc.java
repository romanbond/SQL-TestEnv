//romanbond
package sieveeratosthenes;
import static java.lang.Integer.parseInt;
import java.util.Scanner;

public class OVCalc {

    public static void main(String[] args){
        yearsTax();
    }
    
    public static void yearsTax(){
        Scanner in = new Scanner(System.in);
        System.out.print("Amount here:");
        String aInput = in.nextLine();
        int a = parseInt(aInput);
        System.out.print("Years here:");
        String yInput = in.nextLine();
        int y = parseInt(yInput);
        System.out.println("A="+a+" Y="+y);
        double ans = ((a*78.5)/100)*y;
        System.out.println("After taxes for "+y+" year(s) making $"+a+" a year, you will have: $"+ans);
    }
    
}
