package mygrapher;
import DataStructures.*;

import java.util.Scanner;

public class ExpEvaluater {
    public static double findY(String theExp){
        StringBuffer exp=new StringBuffer(theExp);
        LinkedStack s=new LinkedStack();
        StringBuffer postFix=new StringBuffer();
        //System.out.println("EXP: "+exp);
        
        eliminateTrig(exp);
        eliminateDecimal(exp);
        if(theExp.charAt(0)=='-')
            theExp="0"+theExp;
        addMinus(exp);
        //System.out.println("The original string= "+exp);
        s.push(0);
        exp.append(')');
        for(int i=0;i<exp.length();i++){
            char c=exp.charAt(i);
            if(c=='(')
                s.push(0);
            else if(c=='+'||c=='-'||c=='*'||c=='/'||c=='^'){
                int j=0;
                while(s.peep()!=0){
                    if(getPrecedence(getTheOperator(s.peep()))>=getPrecedence(c)){
                        int tmp=s.pop();
                        postFix.append(" "+getTheOperator(tmp));
                    }
                    if(j>=exp.length())
                    {
                        j=0;
                        break;
                        }
                    
                    j++;
                }//while
                s.push(getOperatorNo(c));
                postFix.append(" ");
    }
            else if(c==')'){
                while(s.peep()!=0){
                int tmp=s.pop();
                postFix.append(" "+getTheOperator(tmp));
                }//while
                int trash=s.pop();
            }
            else 
                postFix.append(c);
            
            }//for
            //System.out.println("res"+evaluateExp(postFix));
    return evaluateExp(postFix);
    }   
    public static char getTheOperator(int n){
        switch(n){
        case 0: return '(';
        case 1: return ')';
        case 2: return '+';
        case 3: return '-';
        case 4: return '*';
        case 5: return '/';
        case 6: return '^';
    }
        return 'Z';
    }
    
    public static int getOperatorNo(char ch){
        switch(ch){
        case '(': return 0;
        case ')': return 1;
        case '+': return 2;
        case '-': return 3;
        case '*': return 4;
        case '/': return 5;
        case '^': return 6;
    }
        return 1024;
    }
    
    
    public static int getPrecedence(char ch){
        switch(ch){
        case '+':return 0;
        case '-':return 0;
        case '*':return 1;
        case '/':return 1;
        case '^':return 2;
        }
        return 1024;
}

    public static double evaluateExp(StringBuffer s){
        FloatingStack stack=new FloatingStack();
        StringBuffer tmp=new StringBuffer();
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);

            if(ch=='+'||ch=='-'||ch=='*'||ch=='/'||ch=='^'){
                double a=stack.pop();
                double b=stack.pop();
                switch(ch){
                case '+':stack.push(b+a);
                        break;
                case '-':stack.push(b-a);
                        break;
                case '*':stack.push(b*a);
                        break;
                case '/':stack.push(b/a);
                        break;
                case '^':stack.push(Math.pow(b,a));
                        break;
                }//swtich
            }
                else if(ch!=' ')
                    tmp.append(ch);
            else if(ch==' '&&(s.charAt(i-1)!='+'&&s.charAt(i-1)!='-'&&s.charAt(i-1)!='*'&&s.charAt(i-1)!='/'&&s.charAt(i-1)!='^')){
                    stack.push(Integer.parseInt(tmp.toString()));
                    tmp.setLength(0);
            }
        }//for
        if(stack.isEmpty())
            return (Integer.parseInt(tmp.toString()));
        return (stack.pop());
    }
    
    public static void eliminateTrig(StringBuffer s){
        for(int i=0;i<s.length()-3;i++){
            if(checkLetter(s.charAt(i))&&s.charAt(i)!='x'){
                String function="";
                if(s.substring(i,i+3).equals("sin"))
                    function="sin";
                else if(s.substring(i,i+3).equals("cos"))
                    function="cos";
                else if(s.substring(i,i+3).equals("tan"))
                    function="tan";
                s.delete(i, i+3);
                int j=i;
                double res=0.0;
                for(;j<s.length();j++)
                    if(s.charAt(j)==')'){
                        StringBuffer inner=new StringBuffer(s.substring(i+1, j));
                    
                        //double res=0.0;
                        if(function.equals("sin")){
                            res=(round(Math.sin(findY(inner.toString())),4));
                            //System.out.println("Inner:"+inner);
                            //break;

                        }
                        else if(function.equals("cos"))
                            res=round(Math.cos(findY(inner.toString())),4);
                            //res=round(1-Math.pow(round(Math.pow(Math.sin(findY(inner.toString())),2),4),0.5),2 );
                        else if(function.equals("tan"))
                            res=round(Math.tan(findY(inner.toString())),4);
                        
                    }  
                s.replace(i+1, j, ""+res+")");
                //System.out.println("S "+s);
                    
            }
        }
    }//end method.
    
    public static void addMinus(StringBuffer s){
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='-')
                if(!checkNumber(s.charAt(i-1)))
                    s.insert(i,"0");
        }
    }
    
    public static boolean checkLetter(char ch){
        boolean b=false;
        if((ch>'a'&&ch<'z')||(ch>'A'&&ch<'Z'))
            b=true;
        return b;
    }
    
    public static boolean checkNumber(char ch){
        boolean b=true;
        int i=0;
        try{
            i=Integer.parseInt(""+ch);
        }
        catch(NumberFormatException e){
            b=false;
        }
        
        return b;
    }
    
    public static double round(double Rval, int Rpl) {
      double p = Math.pow(10,Rpl);
      Rval = Rval * p;
      double tmp = Math.round(Rval);
      return (double)tmp/p;
      }
    
    public static void addZeros(StringBuffer s){
        if(s.charAt(0)=='-')
            s.insert(0,'0');
        for(int i=1;i<s.length();i++)
            if(s.charAt(i)=='-'&&checkNumber(s.charAt(i-1))==false)
                s.insert(i,'0');
                    }
    
    public static void eliminateDecimal(StringBuffer s){
        //addZeros(s);
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='.'){
                s.deleteCharAt(i);
                int j=i,k=i;
                for(;j>=0;j--)
                    if(s.charAt(j)=='('||s.charAt(j)=='+'||s.charAt(j)=='-'||s.charAt(j)=='*'||s.charAt(j)=='/'||s.charAt(j)=='^')
                        break;
                for(;k<=s.length();k++)
                    if(k==s.length()||s.charAt(k)==')'||s.charAt(k)=='+'||s.charAt(k)=='-'||s.charAt(k)=='*'||s.charAt(k)=='/'||s.charAt(k)=='^')
                        break;
               
                 s.insert(j+1, "(");
                long l=(long)(Math.pow(10,(k-i)));
                s.insert(k+1,"/"+l+")");
                if(s.charAt(0)=='-')
                    s.insert(0,"0");
            }
        }
    }
    
}

