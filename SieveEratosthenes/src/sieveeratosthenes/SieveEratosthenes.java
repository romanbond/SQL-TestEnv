package sieveeratosthenes;
import static java.lang.Integer.parseInt;
import java.security.SecureRandom;
import java.util.Scanner;

public class SieveEratosthenes {
    static final String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-+=";
    static SecureRandom  rnd = new SecureRandom();
    //Random String Gen
    public static String randomString(int len){
        StringBuilder sb = new StringBuilder(len);
        for( int i = 0; i < len; i++ ){ 
            sb.append( AB.charAt( rnd.nextInt(AB.length()) ) );
        }
        return sb.toString();
    }
    public static String keyyy(){
        Scanner in = new Scanner(System.in);
        System.out.println("How many characters?");
        String input = in.nextLine();
        int len = parseInt(input);
        System.out.println("How many times?");
        String inputTimes = in.nextLine();
        int times = parseInt(inputTimes);
        for(int x=0;x<times;x++){
            System.out.println(randomString(len));
        }
        return "hello";
    };
    public static void main(String[] args) {
        keyyy();
    }
}