package sieveeratosthenes;
import static java.lang.Integer.parseInt;
import java.security.SecureRandom;
import java.util.Random;
import java.util.Scanner;

public class SieveEratosthenes {
    static final String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //abcdefghijklmnopqrstuvwxyz";
    static final String ABS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?<>@#$%^&*-+=";
    //static final String ABC = "0123456789ABCabcABCabc";
    static SecureRandom  rnd = new SecureRandom();
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    //              v NO SYMBOL v
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
        public static String randomNoSymbol(int length){
            //Random rand = new Random();
            //length = rand.nextInt(50)+1;
            StringBuilder sb = new StringBuilder(length);
            for( int i = 0; i < length; i++ ){ 
                sb.append( AB.charAt( rnd.nextInt(AB.length()) ) );
            }
            return sb.toString();
        }
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    //              ^ NO SYMBOL ^
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    public static String randomSymbol(int length){
        //Random rand = new Random();
        //length = rand.nextInt(50)+1;
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
        int length = parseInt(input);
        //Random rand = new Random();
        //int length = 0; 
        //length = rand.nextInt(50)+1;
        System.out.println("How many times?");
        String inputTimes = in.nextLine();
        int times = parseInt(inputTimes);
        if(symbol.equals("s")){
            System.out.println("//////////////////////////////");
            System.out.println("//////////////////////////////");
            for(int x=0;x<times;x++){
                System.out.println(randomSymbol(length));
            }System.out.println("//////////////////////////////");
            System.out.println("//////////////////////////////");
        }else{
            System.out.println("//////////////////////////////");
            for(int x=0;x<times;x++){
                System.out.println("rr"+randomNoSymbol(length));
            }System.out.println("//////////////////////////////");
        }
        System.out.print("Want to do it again?");
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

//////////////////////////////////////////////////////////
//       Domain
//////////////////////////////////////////////////////////
/*

Domain Name: ROMANBOND.COM 
Registry Domain ID: 1355688139_DOMAIN_COM-VRSN 
Registrar WHOIS Server: whois.godaddy.com 
Registrar URL: http://www.godaddy.com 
Update Date: 2015-12-15T08:54:50Z 
Creation Date: 2007-12-15T01:24:33Z 
Registrar Registration Expiration Date: 2017-12-15T01:24:33Z 
Registrar: GoDaddy.com, LLC 
Registrar IANA ID: 146 
Registrar Abuse Contact Email: abuse@godaddy.com 
Registrar Abuse Contact Phone: +1.4806242505 
Domain Status: clientTransferProhibited http://www.icann.org/epp#clientTransferProhibited 
Domain Status: clientUpdateProhibited http://www.icann.org/epp#clientUpdateProhibited 
Domain Status: clientRenewProhibited http://www.icann.org/epp#clientRenewProhibited 
Domain Status: clientDeleteProhibited http://www.icann.org/epp#clientDeleteProhibited 
Registry Registrant ID: Not Available From Registry 
Registrant Name: Roman Bond 
Registrant Organization: 
Registrant Street: 101-6832 Arcola st. 
Registrant City: Burnaby 
Registrant State/Province: British Columbia 
Registrant Postal Code: V5E 1H3 
Registrant Country: CA 
Registrant Phone: (604) 777-4026 
Registrant Phone Ext: 
Registrant Fax: 
Registrant Fax Ext: 
Registrant Email: info@morningstarweb.net 
Registry Admin ID: Not Available From Registry 
Admin Name: Roman Bond 
Admin Organization: 
Admin Street: 101-6832 Arcola st. 
Admin City: Burnaby 
Admin State/Province: British Columbia 
Admin Postal Code: V5E 1H3 
Admin Country: CA 
Admin Phone: (604) 777-4026 
Admin Phone Ext: 
Admin Fax: 
Admin Fax Ext: 
Admin Email: info@morningstarweb.net 
Registry Tech ID: Not Available From Registry 
Tech Name: Roman Bond 
Tech Organization: 
Tech Street: 101-6832 Arcola st. 
Tech City: Burnaby 
Tech State/Province: British Columbia 
Tech Postal Code: V5E 1H3 
Tech Country: CA 
Tech Phone: (604) 777-4026 
Tech Phone Ext: 
Tech Fax: 
Tech Fax Ext: 
Tech Email: info@morningstarweb.net 
Name Server: NS47.DOMAINCONTROL.COM 
Name Server: NS48.DOMAINCONTROL.COM 
DNSSEC: unsigned 
URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/ 
>>> Last update of WHOIS database: 2016-07-01T19:00:00Z <<< 

For more information on Whois status codes, please visit https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en 

The data contained in GoDaddy.com, LLC's WhoIs database, 
while believed by the company to be reliable, is provided "as is" 
with no guarantee or warranties regarding its accuracy. This 
information is provided for the sole purpose of assisting you 
in obtaining information about domain name registration records. 
Any use of this data for any other purpose is expressly forbidden without the prior written 
permission of GoDaddy.com, LLC. By submitting an inquiry, 
you agree to these terms of usage and limitations of warranty. In particular, 
you agree not to use this data to allow, enable, or otherwise make possible, 
dissemination or collection of this data, in part or in its entirety, for any 
purpose, such as the transmission of unsolicited advertising and 
and solicitations of any kind, including spam. You further agree 
not to use this data to enable high volume, automated or robotic electronic 
processes designed to collect or compile this data for any purpose, 
including mining this data for your own personal or commercial purposes. 

Please note: the registrant of the domain name is specified 
in the "registrant" section. In most cases, GoDaddy.com, LLC 
is not the registrant of domain names listed in this database. 
The Registry database contains ONLY .COM, .NET, .EDU domains and Registrars.

*/