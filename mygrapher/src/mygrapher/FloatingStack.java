package mygrapher;
import DataStructures.*;

public class FloatingStack {
    FloatingNode top;
    int number;
    
    public FloatingStack() {
        top=null;
        number=0;
    }
    
    public boolean isEmpty(){
        return (top==null); 
    }
    
    public int size(){
        return number;
    }
    
    public void push(double n){
        top=new FloatingNode(n,top);
     number++;
    }
    
    public double pop(){
        if(isEmpty())
            return 0;
        FloatingNode tmp=top;
        top=tmp.getLink();
        number--;
        return tmp.getData();
        
        }
    public double peep(){
        if(isEmpty())
            return 0;
        return top.getData();
    }
}
