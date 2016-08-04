package mygrapher;
import java.awt.BorderLayout;
import java.awt.Color;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;

import javax.swing.JFrame;
import javax.swing.JPanel;


import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.NumberAxis;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.renderer.xy.XYLineAndShapeRenderer;
import org.jfree.data.xy.XYDataset;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;
import org.jfree.ui.ApplicationFrame;
import org.jfree.ui.RefineryUtilities;
//import org.jfree.ui.Spacer;

public class Plotter2 extends JPanel {

    XYSeries currentSeries;
    XYDataset dataset;
    XYSeriesCollection pointCollection;
    JFreeChart chart;
    ChartPanel chartPanel;
    
    int count =0;
    public Plotter2(final String title) {

        super();

        dataset = createDataset();
        chart = createChart(dataset);
        chartPanel = new ChartPanel(chart);
        chartPanel.setPreferredSize(new java.awt.Dimension(500, 270));
        //setContentPane(chartPanel);
        add(chartPanel);
    }
    
    public void addPoint(double x,double y){
        currentSeries.add(x,y);
    }
    
    public void refresh(){
        pointCollection.removeAllSeries();
    }
    
    public XYDataset getDataset(){
        return dataset;
    }
    
    public void addSeries(String s){
        currentSeries=new XYSeries(s);
        dataset=pointCollection;
        pointCollection.addSeries(currentSeries);
        
    }
    
    private XYDataset createDataset() {
        currentSeries=new XYSeries("SERIES");
        pointCollection = new XYSeriesCollection();
        pointCollection.addSeries(currentSeries);
                
        return pointCollection;
        
    }
    
    private JFreeChart createChart(final XYDataset dataset) {
        
        // create the chart...
        final JFreeChart chart = ChartFactory.createXYLineChart(
            "f(x)",                   // chart title
            "X",                      // x axis label
            "f(X)",                      // y axis label
            dataset,                  // data
            PlotOrientation.VERTICAL,
            true,                     // include legend
            true,                     // tooltips
            false                     // urls
        );

        chart.setBackgroundPaint(Color.white);

//        final StandardLegend legend = (StandardLegend) chart.getLegend();
  //      legend.setDisplaySeriesShapes(true);
        
        // get a reference to the plot for further customisation...
        final XYPlot plot = chart.getXYPlot();
        plot.setBackgroundPaint(Color.lightGray);
    //    plot.setAxisOffset(new Spacer(Spacer.ABSOLUTE, 5.0, 5.0, 5.0, 5.0));
        plot.setDomainGridlinePaint(Color.white);
        plot.setRangeGridlinePaint(Color.white);
        
        final XYLineAndShapeRenderer renderer = new XYLineAndShapeRenderer();
        renderer.setSeriesLinesVisible(0, false);
        renderer.setSeriesShapesVisible(1, false);
        plot.setRenderer(renderer);

        final NumberAxis rangeAxis = (NumberAxis) plot.getRangeAxis();
        //rangeAxis.setRange(-Displayer2.range,Displayer2.range);
        rangeAxis.setStandardTickUnits(NumberAxis.createIntegerTickUnits());
                
        return chart;
        
    }

    public static void main(final String[] args) {

        final Plotter2 demo = new Plotter2("Line Chart Demo 6");
        JButton b=new JButton("Add Point");
        
        JButton b2=new JButton("Add Point 2");
        b2.addActionListener(new ActionListener(){
        public void actionPerformed(ActionEvent e){
            demo.addPoint(15,16);
            //demo.addSeries();
            demo.addPoint(20,20);
                 demo.addPoint(25,25);
             }
        });
        
        demo.add(b2,BorderLayout.SOUTH);
        JFrame frame=new JFrame("n");
        frame.add(demo);
        frame.pack();
        frame.setVisible(true);
        //RefineryUtilities.centerFrameOnScreen(demo);
        demo.setVisible(true);

    }

}
