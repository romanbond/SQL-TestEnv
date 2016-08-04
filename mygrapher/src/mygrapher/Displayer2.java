package mygrapher;
import java.awt.*;
import javax.swing.*;
import javax.swing.SwingUtilities;
import java.awt.Event;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.border.TitledBorder;


public class Displayer2 extends JPanel implements ActionListener
{
    private static JPanel panel;
    private static JPanel top;
    private static JPanel bottom;
    private static JButton showGraph;
    private static JButton clear;
    private static JButton forRange;
    private static JTextField forExpression;
    private static Plotter2 graphArea;
    private static JPanel settings;
    final static int gap=25;
    static int range=10,rangeY=10;
    static double step=1;
    String relation="";
    int count;
    
    public Displayer2() 
    {
      super(new BorderLayout());
    
       panel=new JPanel();
       graphArea=new Plotter2("");
       panel.add(graphArea);

       top=new JPanel();
       bottom=new JPanel();
       forRange=new JButton("RANGE");
       forExpression=new JTextField(25);
       showGraph=new JButton("GRAPH");
       clear=new JButton("CLEAR");
       TitledBorder border=BorderFactory.createTitledBorder("");
       
       panel.setBorder(border);
       showGraph.addActionListener(this);
       forRange.addActionListener(this);
       clear.addActionListener(this);
        bottom.setLayout(new GridLayout(2,1));
        settings=new JPanel();
        settings.add(new RangeBox());
        bottom.add(settings);
        JPanel tmp=new JPanel();
        tmp.add(showGraph);
        //tmp.add(forRange);
        top.add(forExpression);
        tmp.add(clear);
        bottom.add(tmp);
        
        top.setBackground(Color.DARK_GRAY);
        bottom.setBackground(Color.DARK_GRAY);
        add(top,BorderLayout.NORTH);
        add(bottom,BorderLayout.SOUTH);
        panel.setBackground(Color.WHITE);
        panel.setVisible(true);
        add(panel,BorderLayout.CENTER);
    }
    
    public void actionPerformed(ActionEvent e){
        if(e.getSource()==showGraph){
            RangeBox.setRangeAndStepSettings();
            Graphics g=panel.getGraphics();
            String tmpRel=relation;
            relation=forExpression.getText(); 
            if(relation.charAt(0)=='-')
                relation="0"+relation;
            if(tmpRel.equals(relation)!=true){
                graphArea.addSeries("Function "+count);
                count++;
            }
            int i=0;
            //double div=getClosestPowerOfTen(range);
           // if(range>1000){
             //   for(;i<getClosestPowerOfTen(range);i+=500)
               //      new GraphSegmenter(i,relation,this).start();
                 //   drawGraph(i,range,relation);
                //}
            //else
                drawGraph(0,range,relation);
        }
        else if(e.getSource()==clear){
            graphArea.refresh();
            }
        else if(e.getSource()==forRange){
            if(!RangeBox.isOpen){
                RangeBox.showBox();
            }
            
        }
    }
    
    public static double getClosestPowerOfTen(int limit){
        int div=(""+limit).length();
        return Math.pow(10, (div-1));
    }
    
    public void drawGraph(int begin,int range,String exp){
        Graphics g=panel.getGraphics();
        
        for(double i=begin;i<=range;i+=step){
            StringBuffer tmp=new StringBuffer(exp);
            StringBuffer tmp4=new StringBuffer(exp);
            System.out.println("I: "+i);
            double X=i;
            double nX=-i;
            for(int j=0;j<tmp.length();j++){
                if(tmp.charAt(j)=='x'){
                    String tmp2=""+i;
                    tmp.deleteCharAt(j);
                    tmp.insert(j, tmp2);
                }
            }

            for(int j=0;j<tmp4.length();j++){
                if(tmp4.charAt(j)=='x'){
                    String tmp3="(0-"+i+")";
                    tmp4.deleteCharAt(j);
                    tmp4.insert(j,tmp3);
                }
            }
            
            
            double yTmp = ExpEvaluater.findY(tmp.toString());
            double nYTmp = ExpEvaluater.findY(tmp4.toString());
            
            int Y=0,nY=0;
            if(Double.isInfinite(yTmp)){
                graphArea.addPoint(X,3);
            }
            if(Double .isInfinite(nYTmp)){
                graphArea.addPoint(nX,3);
            }
            if(!(Double.isNaN(yTmp))){
                System.out.println("Y:"+yTmp);
                graphArea.addPoint(X,yTmp);
            }
            if(!(Double.isNaN(nYTmp))){
                graphArea.addPoint(nX,nYTmp);
            }
            
        }

            }
    
    public static void setRange(int n){
        range=n;
    }
    public static void setRangeY(int n){
        rangeY=n;
    }
    public static void setStep(double d){
        step=d;
    }
    private static void createAndShowGUI() 
    {   
        JFrame frame = new JFrame("Grapher");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new Displayer2());
        frame.getRootPane().setDefaultButton(showGraph);
        frame.setSize(550,475);
        frame.setVisible(true);
    }
    
 
    public static void main(String[] args)
    {
      SwingUtilities.invokeLater(new Runnable() 
      {
            public void run() 
            {
                UIManager.put("swing.boldMetal", Boolean.FALSE);
                createAndShowGUI();
            }
        });
    }

 
}

