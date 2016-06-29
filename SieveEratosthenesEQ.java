/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javadistanceapplication;

import static java.lang.Integer.parseInt;
import java.util.Scanner;

/**
 *
 * @author roman.bond
 */
public class SieveEratosthenesEQ {
    
    public static void main(String[] args) {
        System.out.println("Enter the max: ");
    Scanner in = new Scanner(System.in);
    String max = in.nextLine();
    int maxNum = parseInt(max);

    System.out.println("Generate Prime numbers between 1 and " + max);
    int cc = 0;
    // loop through the numbers one by one
    for (int i = 1; i < maxNum; i++) {
        boolean isPrimeNumber = true;
        //int cc = 0;
        // check to see if the number is prime
        for (int j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrimeNumber = false;
                break; // exit the inner for loop
            }
        }
        // print the number if prime
        if (isPrimeNumber) {
            cc++;
            System.out.println(cc+": "+i);
        }
    }

}
    
    
}
