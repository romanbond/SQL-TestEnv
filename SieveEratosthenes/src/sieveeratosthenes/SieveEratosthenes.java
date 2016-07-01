package sieveeratosthenes;
import static java.lang.Integer.parseInt;
import java.security.SecureRandom;
import java.util.Scanner;

public class SieveEratosthenes {
    static final String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    static final String ABS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?<>@#$%^&*-+=";
    
    static SecureRandom  rnd = new SecureRandom();
    //Random String Gen
    public static String randomNoSymbol(int length){
        StringBuilder sb = new StringBuilder(length);
        for( int i = 0; i < length; i++ ){ 
            sb.append( AB.charAt( rnd.nextInt(AB.length()) ) );
        }
        return sb.toString();
    }
    public static String randomSymbol(int length){
        StringBuilder sb = new StringBuilder(length);
        for( int i = 0; i < length; i++ ){ 
            sb.append( ABS.charAt( rnd.nextInt(ABS.length()) ) );
        }
        return sb.toString();
    }
    public static String begin(){
        Scanner in = new Scanner(System.in);
        System.out.print("Type \"s\" for symbols: ");
        String symbol = in.nextLine();
        System.out.println("How many characters?");
        String input = in.nextLine();
        int len = parseInt(input);
        System.out.println("How many times?");
        String inputTimes = in.nextLine();
        int times = parseInt(inputTimes);
        if(symbol.equals("s")){
            System.out.println("//////////////////////////////");
            System.out.println("//////////////////////////////");
            for(int x=0;x<times;x++){
                System.out.println(randomSymbol(len));
            }System.out.println("//////////////////////////////");
            System.out.println("//////////////////////////////");
        }else{
            System.out.println("//////////////////////////////");
            for(int x=0;x<times;x++){
                System.out.println(randomNoSymbol(len));
            }System.out.println("//////////////////////////////");
        }
        System.out.println("Want to do it again?");
        String ans = in.nextLine();
        if(ans.equals("y")){
            begin();
        }else{
            System.out.println("Adios! Thank you!");
        }
        return inputTimes;
    }
        
    
    public static void main(String[] args) {
        begin();
    }
}