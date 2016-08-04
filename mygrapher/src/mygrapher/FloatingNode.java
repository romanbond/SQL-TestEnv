package mygrapher;

public class FloatingNode {
    double data;
    FloatingNode link;
    FloatingNode linkBefore;
    
    public FloatingNode() {
        link=null;
        linkBefore=null;
        data=0.0;
    }
    
    public FloatingNode(double d,FloatingNode n){
        data=d;
        link=n;
       // n.setLinkBefore(this);
    }
    
    public void setLink(FloatingNode n){
        link=n;
        linkBefore=this;
    }
    
    public void setLinkBefore(FloatingNode n){
        linkBefore=n;
        link=this;
    }
    
    public void setData(double d){
        data=d;
    }
    
    public FloatingNode getLink(){
        return link;
    }
    
    public FloatingNode getLinkBefore(){
        return linkBefore;
    }
    
    public double getData(){
        return data;
    }
}
