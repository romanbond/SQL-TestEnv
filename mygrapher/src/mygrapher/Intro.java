package mygrapher;
import java.awt.*;
import javax.swing.*;
import javax.swing.SwingUtilities;
import java.awt.Event;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Intro extends JPanel implements ActionListener
{
    private JButton b;
    private JPanel pane;
    private JLabel lab;
    private static JFrame frame;
    
    public Intro() {
        super(new BorderLayout());
        b=new JButton("WELCOME TO GRAPHER");
        pane=new JPanel();
        lab=new JLabel("CREATED BY PrithviJC");
        pane.setOpaque(true);
        b.addActionListener(this);
        b.setHorizontalAlignment(SwingConstants.CENTER);
        b.setVerticalAlignment(SwingConstants.CENTER);
        b.setVerticalTextPosition(SwingConstants.BOTTOM);
        b.setHorizontalTextPosition(SwingConstants.CENTER);

        pane.add(b,BorderLayout.CENTER);
        b.setRolloverIcon(new ImageIcon("C:\\Users\\Public\\Pictures\\Sample Pictures\\GraphIcon.png"));        
        b.setIcon(new ImageIcon("C:\\Users\\Public\\Pictures\\Sample Pictures\\Intro.png"));
        add(pane,BorderLayout.CENTER);
    }
    
    public void actionPerformed(ActionEvent e){
        Displayer2.main(null);
        frame.dispose();
    }
    public static void main(String []args){
        frame=new JFrame("Grapher");
        frame.setSize(500,500);
        frame.add(new Intro(),BorderLayout.CENTER);
        frame.setVisible(true);
    }
}
