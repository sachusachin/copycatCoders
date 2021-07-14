


export default codeDatas =[
    {
        title : "C",

        question : "Unsigned short output check using C ,

        code:

            "
    #include<stdio.h>
    main()
    {
        unsigned short a,b,c,d;
        a=65535;
        b=65536;
        c=65537;
        d=65538;  /* unsigned Short value range is 0 to 65,535, if we give unsigned short value:65536 it takes the value:0, if we give unsigned short value:65537 it takes the value:1. */
        printf("a value is:%d \n b value is:%d \n c value is:%d \n c value is:%d",a,b,c,d);
} "

},

{

    title : "C",

        question : "Octal to decimal",

    code :

    " #include<stdio.h>
    #include<conio.h>
    main()
    {
        int a=031;
        printf("any number start with 0 the computer save the number  as a octal number.\nthe value of the 031 in decimal is 25\n");
        printf("\nthe a value is:%d",a);
        getch();
    }
    "
},


{
    title : "C",

        question : "Hexadecimal to decimal",

    code :
    "
    #include<stdio.h>
    #include<conio.h>
    main()
    {
        int a=0x20,b=0X19;
        printf("\a the decimal value of a:%d \n the decimal value of b is: %d",a,b);
        getch();
    }
    "
},


{
    title : "C",

        question : "String output",

    code :
    "
    #include <stdio.h>
    #include<string.h>


    int main()
    {

        char a[100];
        strcpy(a,"arun adit");
        printf("%s,\n%s\n%s\n%c",a,a+5,a+6,a[5]);
    }

    "
},

{
    title : "C",

        question : "Console otput exaple (or) salary management system",

    code :
    "

    #include<stdio.h>
    #include<conio.h>
    main() {
    float arun_bp, arun_da, arun_net;
    float praveen_bp, praveen_da, praveen_net;
    float navin_bp, navin_da, navin_net;

    /* calulation for arun */
    arun_bp =10000;
    arun_da = arun_bp * 15.0/100;
    arun_net = arun_bp + arun_da;

    /* claculation for praveen */
    praveen_bp = 12500;
    praveen_da = praveen_bp * 15.0/100;
    praveen_net = praveen_bp + praveen_da;

    /* calulation for navin */
    navin_bp = 15000;
    navin_da = navin_bp * 15.0/100;
    navin_net = navin_bp + navin_da;
    printf("             SALARY MANAGEMENT SYSTEM                      \n");
    printf("-----------------------------------------------------------");
    printf("\nS.NO      NAME        BASIC PAY      DA       NET_SALARY\n");
    printf("-----------------------------------------------------------\n");
    printf("%2d %11s %15.2f %13.2f %10.2f\n",1,"ARUN",arun_bp,arun_da,arun_net);
    printf("%2d %11s %15.2f %13.2f %10.2f\n",2,"PRAVEEN",praveen_bp,praveen_da,praveen_net);
    printf("%2d %11s %15.2f %13.2f %10.2f\n",3,"NAVIN",navin_bp,navin_da,navin_net);
    printf("-----------------------------------------------------------\n");
    printf("TOTAL          %15.2f %13.2f %10.2f\n",
        arun_bp + praveen_bp + navin_bp,
        arun_da + praveen_da + navin_da,
        arun_net + praveen_net + navin_net);
    printf("-----------------------------------------------------------");


}
    "

},

{
    title : "C",

        question : " Ternary operator",

    code :
    "

    #include <stdio.h>
    #include <conio.h>
    int main()
    {

        int a,b;
        printf("enter a number:");
        scanf("%d",&a);
        printf("\nenter second number:");
        scanf("%d",&b);
        if(a==b)
        {
            printf("\n\nBOTH NUMBERS ARE EQUAL. THE NUMBERS ARE:%d",a);
        }
        else{

            (a>b)? printf("\na is biggest number:%d",a):printf("\nb is biggest number:%d",b);
        }

    }

    "

},

{
    title : "C",

        qestion : " arithmetic progression",

    code :
    "

    #include<stdio.h>
    #include<conio.h>

    int main()
    {
        int a,d,n,res;

        printf("ENTER FIRST NUMBER:");
        scanf("%d",&a);
        printf("ENTER THE DIFFERENCE:");
        scanf("%d",&d);
        printf("enter which term do you want:");
        scanf("%d",&n);


        res=a+(n-1)*d;
        printf("the number is:%d",res);
        getch();

    }
    "
},

{
    title : "C",

        question : "Biggest of two numbers"

    code :
        "

    #include <stdio.h>
    #include<string.h>


    int main()
    {

        char a,b;
        a=12;
        b=70;

        if(a>b)
        {

            printf("\n%d is biggest number",a);
        }

        else
        {

            printf("\n%d is biggest number",b);
        }
    }


    "
},
{
    title :"java programming"

    question :"Fibonacci numbers"

    code:
        "
import java.util.Scanner;
    public class Fiboscan
{
    public static void main(String[] args)
{
    int n,a=0,b=0,c=1;
    Scanner s=new Scanner(System.in);
    System.out.println("Enter value of n;");
    n=s.nextInt();
    System.out.println("Fibonacci series:");
    for(int i=1;i<=n;i++)
{
    a=b;
    b=c;
    c=a+b;
    System.out.println(a+" ");
}
}
}
    "
},

{

    title :"java programming"

    question :"Sorting numbers"

    code:
        "
import java.util.Scanner;
    public class Sorting
{
    public static void main(String[] args)
{
    int n,temp;
    Scanner s=new Scanner(System.in);
    System.out.println("Enter number of elements in array:");
    n=s.nextInt();
    int numbers[]=new int[n];
    Scanner s1=new Scanner(System.in);
    System.out.println("Enter all the elements:");
    for(int i=0;i<n;i++)
{
    numbers[i]=s1.nextInt();
}
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(numbers[i]>numbers[j])
            {
                temp=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=temp;
            }
        }
    }
    System.out.println("Sorting order:");
    for(int i=0;i<n-1;i++)
    {
        System.out.println(numbers[i]+" ");
    }
    System.out.println(numbers[n-1]);
}
}
    "
},

{

    title :"java programming"

    question :"Mark statement with result and grade"

    code:
        "
import java.util.Scanner;
    public class Marksheet
{
    public static void main(String args[])
{
    int marks[]=new int[5];
    int i;
    float total=0,avg;
    Scanner s=new Scanner(System.in);
    for(i=0;i<5;i++)
{
    System.out.print("Enter marks of subject"+(i+1)+":");
    marks[i]=s.nextInt();
    total=total+marks[i];
}
    s.close();
    avg=total/5;
    System.out.println("Total:"+total);
    System.out.println("Average:"+avg);
    System.out.println("The student grade is:");
    if(avg>80)
    {
        System.out.print("A");
    }
    else if(avg>=60&&avg<80)
    {
        System.out.print("B");
    }
    else if(avg>=40&&avg<60)
    {
        System.out.print("C");
    }
    else
    {
        System.out.print("D");
    }
}
}
    "
},

{

    title :"java programming"

    question :"Method overloading"

    code:
        "
    class MethodOverloading
    {
        void sum (int a, int b)
    {
        System.out.println("sum is "+(a+b)) ;
    }
    void sum (float a, float b)
    {
        System.out.println("sum is "+(a+b));
    }
    void sum (String a, String b)
    {
        System.out.println("sum is "+(a+b));
    }
    public static void main (String[] args)
    {
        MethodOverloading  cal = new MethodOverloading();
        cal.sum (8,5);
        cal.sum (4.6f, 3.8f);
        cal.sum("Method","Overloading");
    }
}
    "
},

{

    title :"java programming"

    question :"String extraction"

    code:
        "
import java.util.*;
    class Extract
    {
        public static void main(String args[])
    {
        String str,substr;
        int extract,start,len,check;
        Scanner s=new Scanner(System.in);
        System.out.print("Enter String : ");
        str=s.next();
        len=str.length();
        System.out.print("Enter Starting position to extract characters  : ");
        start=s.nextInt();
        start=start-1;
        if(start<0 || start>len)
    {
        System.out.println("INVALID POSITION");
        System.exit(1);
    }
    System.out.print("Enter Number of characters want to extract : ");
    extract=s.nextInt();
    check=extract+start;
    if(check<0 || check>len )
    {
        System.out.println("TRYING TO EXTRACT INVALID POSITION");
        System.exit(1);
    }
    substr=str.substring(start,check);
    System.out.println("\nEXTRACTED STRING IS "+substr);
}
}
    "
},

{

    title :"java programming"

    question :"Vector"

    code:
        "
import java.util.*;
    public class VectorDemo
{
    public static void main(String[] args)
{
    Vector<Integer>vec = new Vector<Integer>(6);
    int n;
    vec.add(33);
    vec.add(34);
    vec.add(22);
    vec.add(11);
    vec.add(22);
    vec.add(12);
    System.out.println("The elements in the vector are:");
    for (Integer number : vec)
{
    System.out.println("Number = " + number);
}
    Scanner s = new Scanner(System.in);
    System.out.print("Enter index of element to be deleted:");
    n = s.nextInt();
    vec.remove(n);
    System.out.println("The elements in the vector after deletion:");
    for (Integer number : vec)
    {
        System.out.println("Number = " + number);
    }
}
}
    "
},

{

    title :"java programming"

    question :"Package"

    code:
        "
    Package code....

    package arithmetic;
    public class Arith
{
    public int add(int x,int y)
{
    return x+y;
}
    public int sub(int x,int y)
    {
        return x-y;
    }
    public int mul(int x,int y)
    {
        return x*y;
    }
    public double div(int x,int y)
    {
        return (double)x/y;
    }
    public int mod(int x,int y)
    {
        return x%y;
    }
}

    Package calling code:

    import arithmetic.*;
    class Operations
    {
        public static void main(String as[])
    {
        Arith m=new Arith();
        System.out.println("Addition: "+m.add(8,5));
        System.out.println("Subraction: "+m.sub(8,5));
        System.out.println("Multiplication: "+m.mul(8,5));
        System.out.println("Division: "+m.div(8,5));
        System.out.println("Modulo: "+m.mod(8,5));
    }
}
    "
},

{

    title :"java programming"

    question :"Multiple inheritance"

    code:
        "
import java.util.*;
    class student
    {
        int rollNumber;
        void getNumber(int n)
    {
        rollNumber=n;
    }
    void printNumber()
    {
        System.out.println("RollNo is " +rollNumber);
    }
}
    class test extends student
    {
        float part1,part2;
        void getMarks(float a, float b)
    {
        part1=a;
        part2=b;
    }
    void putMarks()
    {
        System.out.println("Marks Part1 "+part1);
        System.out.println("Marks Part2 "+part2);
    }
}
    interface sports
    {
        float sportwt=6.0F;
        void putwt();
    }
    class results extends test implements sports
    {
        float total;
        public void putwt()
    {
        System.out.println("Sports Marks "+ sportwt);
    }
        void display()
    {
        total=part1+part2+sportwt;
        System.out.println("Total marks of " +rollNumber+" is "+total);
    }
    }
    class Inheritance
    {
        public static void main(String srgs[])
    {
        results a=new results();
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the Register Number:");
        int r=s.nextInt();
        System.out.println("Enter the Two Subject mark:");
        float p1=s.nextInt();
        float p2=s.nextInt();
        a.getNumber(r);
        a.printNumber();
        a.getMarks(p1,p2);
        a.putMarks();
        a.putwt();
        a.display();
    }
}
    "
},

{

    title :"java programming"

    question :"Multithread"

    code:
        "
import java.lang.*;
    class Five extends Thread
    {
        public void run()
    {
        try
        {
            for(int i=1; i<=5; i++)
            {
                System.out.println(i+"*5="+i*5);
                sleep(100);
            }
        }
        catch(Exception x)
        { }
    }
    }
    class Seven extends Thread
    {
        public void run()
    {
        try
        {
            for(int i=1; i<=5; i++)
            {
                System.out.println(i+"*7="+i*7);
                sleep(200);
            }
        }
        catch(Exception x)
        { }
    }
    }
    class Nine extends Thread
    {
        public void run()
    {
        try
        {
            for(int i=1; i<=5; i++)
            {
                System.out.println(i+"*9="+i*9);
                sleep(300);
            }
        }
        catch(Exception x)
        { }
    }
    }
    class MultiThread
    {
        public static void main(String arg[])
    {
        Five a1 = new Five();
        Seven b1 = new Seven();
        Nine c1 = new Nine();
        a1.setPriority(10);
        b1.setPriority(7);
        c1.setPriority(1);
        a1.start();
        b1.start();
        c1.start();
    }
}
    "
},

{

    title :"java programming"

    question :"User defined exception"

    code:
        "
import java.util.*;
    class PayoutofBounds extends Exception
    {
        float a;
        PayoutofBounds(float b)
    {
        a=b;
    }
    public String toString()
    {
        return ("Balance is too Low\n Your Current Balance is"+a) ;
    }
}
    class UserException
    {
        public static void main(String args[])
    {
        Scanner s=new Scanner(System.in);
        int ch;
        float balance=500,amt;
        do
    {
        System.out.println("\n\tBank Operations\n1.Deposit\n2.Withdrawal\n3.Enquiry\n4.Exit\n");
        System.out.print("Enter Your Choice:");
        ch=s.nextInt();
        switch(ch)
        {
        case 1:
            System.out.println("\n\tDeposit Operation");
            System.out.print("Enter the amount to be deposited:");
            amt=s.nextInt();
            balance=balance+amt;
            System.out.print("Your Balance is"+balance);
            break;
        case 2:
            System.out.println("\nWithdrawal Operation");
            System.out.print("Enter the amount to be Withdraw:");
            amt=s.nextInt();
            if(balance-amt<0)
            {
                try
                {
                    throw new PayoutofBounds(balance);
                }
                catch(PayoutofBounds e)
                {
                    System.out.println(e) ;
                }
            }
            else
            {
                balance=balance-amt;
                System.out.print("Your Balance is"+balance);
            }
            break;
        case 3:
            System.out.println("\n\tEnquiry Operation");
            System.out.print("Your Balance is"+balance);
            break;
        }
    }
    while(ch<4);
}
}
    "
},

{

    title :"java programming"

    question :"Gridlines using applet"

    code:
        "
import java.applet.*;
import java.awt.*;
    public class GridLine extends Applet
{
    int width, height, rows=10, columns=10;
    public void paint(Graphics g)
{
    int k;
    width = getSize().width;
    height = getSize().height;
    int htOfRow = height / (rows);
    for (k = 0; k < rows; k++)
    g.drawLine(0, k * htOfRow , width, k * htOfRow );
    int wdOfRow = width / (columns);
    for (k = 0; k < columns; k++)
    g.drawLine(k*wdOfRow , 0, k*wdOfRow , height);
}
}

    /*<applet code="GridLine" width="500" height="500">
    </applet>*/
    "
},

{

    title :"java programming"

    question :"Applet for textfield and textarea"

    code:
        "
import java.awt.*;
import java.applet.*;
    /* <applet code="Details" width=400 height=400>
   </applet> */
    public class Details extends Applet
{
    TextField t1,t2;
    TextArea ta;
    Label l1,l2,l3;
    Button b1,b2;
    public void init()
{
    setLayout(new GridLayout(4,2));
    l1=new Label("Student Name");
    l2=new Label("Qualification");
    l3=new Label("Address");
    t1=new TextField();
    t2=new TextField();
    ta=new TextArea();
    b1=new Button("Save");
    b2=new Button("Cancel");
    add(l1);
    add(t1);
    add(l2);
    add(t2);
    add(l3);
    add(ta);
    add(b1);
    add(b2);
}
}
    "
},

{

    title :"java programming"

    question :"Multiple selection listbox"

    code:
        "
import java.applet.*;
import java.awt.*;
import java.awt.event.*;
    /*<applet code="MultiSelect" width=200 height=200>
    </applet>*/
    public class MultiSelect extends Applet implements ItemListener
{
    List list;
    public void init()
{
    list = new List(5, true);
    list.add("Britannia");
    list.add("Sunfeast");
    list.add("Anmol");
    list.add("Parle");
    list.add("Patanjali");
    list.add("Priyagold");
    add(list);
    list.addItemListener(this);
}
    public void paint(Graphics g)
{
    String[] items = list.getSelectedItems();
    String msg = "";
    for(int i=0; i<items.length; i++)
{
    msg = items[i] + ", " + msg;
}
    g.drawString("Selected Items: "+ msg, 10, 120);
}
    public void itemStateChanged(ItemEvent ie)
    {
        repaint();
    }
}
    "
},

{

    title :"java programming"

    question :"Menubar"

    code:
        "
import java.awt.*;
import java.awt.event.*;
    public class SimpleMenu extends Frame implements ActionListener
{
    Menu states, cities;
    public SimpleMenu()
    {
        MenuBar mb = new MenuBar();
        setMenuBar(mb);
        states = new Menu("Indian States");
        cities = new Menu("Indian Cities");
        mb.add(states);
        mb.add(cities);
        states.addActionListener(this);
        cities.addActionListener(this);
        states.add(new MenuItem("Himachal Pradesh"));
        states.add(new MenuItem("Rajasthan"));
        states.add(new MenuItem("West Bengal"));
        states.addSeparator();
        states.add(new MenuItem("Andhra Pradesh"));
        states.add(new MenuItem("Tamilnadu"));
        states.add(new MenuItem("Karnataka"));
        cities.add(new MenuItem("Delhi"));
        cities.add(new MenuItem("Jaipur"));
        cities.add(new MenuItem("Kolkata"));
        cities.addSeparator();
        cities.add(new MenuItem("Hyderabad"));
        cities.add(new MenuItem("Chennai"));
        cities.add(new MenuItem("Bengaluru"));
        setTitle("Simple Menu Program");
        setSize(300, 300);
        setVisible(true);
    }
    public void actionPerformed(ActionEvent e)
{
    String str = e.getActionCommand();
    System.out.println("You selected " + str);
}
    public static void main(String args[])
    {
        new SimpleMenu();
    }
}
    "
},

{

    title :"java programming"

    question :"File append"

    code:
        "
import java.io.*;
    public class FileAppend
{
    public static void main(String[] args) throws Exception
{
    try
{
    BufferedWriter out = new BufferedWriter(new FileWriter("filename"));
    DataInputStream din = new DataInputStream(System.in);
    System.out.println("Enter the String");
    String s=din.readLine();
    out.write(s);
    out.close();
    System.out.println("Content of File :\n");
    BufferedReader in = new BufferedReader(new FileReader("filename"));
    String str;
    while ((str = in.readLine()) != null)
{
    System.out.println(str);
}
in.close();
    out = new BufferedWriter(new FileWriter("filename",true));
    System.out.println("Enter the String to be appended");
    s=din.readLine();
    out.write(s);
    out.close();
    System.out.println("Content of File after Appended:\n");
in = new BufferedReader(new FileReader("filename"));
    while ((str = in.readLine()) != null)
    {
        System.out.println(str);
    }
in.close();
}
catch (IOException e)
    {
        System.out.println("exception occoured"+ e);
    }
}
}
    "
},

{
    title :"java programming"

    question :"Fibonacci numbers"

    code:
        "
import java.util.Scanner;
    public class Fiboscan
{
    public static void main(String[] args)
{
    int n,a=0,b=0,c=1;
    Scanner s=new Scanner(System.in);
    System.out.println("Enter value of n;");
    n=s.nextInt();
    System.out.println("Fibonacci series:");
    for(int i=1;i<=n;i++)
{
    a=b;
    b=c;
    c=a+b;
    System.out.println(a+" ");
}
}
}
    "
},

{

    title :"java programming"

    question :"Sorting numbers"

    code:
        "
import java.util.Scanner;
    public class Sorting
{
    public static void main(String[] args)
{
    int n,temp;
    Scanner s=new Scanner(System.in);
    System.out.println("Enter number of elements in array:");
    n=s.nextInt();
    int numbers[]=new int[n];
    Scanner s1=new Scanner(System.in);
    System.out.println("Enter all the elements:");
    for(int i=0;i<n;i++)
{
    numbers[i]=s1.nextInt();
}
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(numbers[i]>numbers[j])
            {
                temp=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=temp;
            }
        }
    }
    System.out.println("Sorting order:");
    for(int i=0;i<n-1;i++)
    {
        System.out.println(numbers[i]+" ");
    }
    System.out.println(numbers[n-1]);
}
}
    "
},

{

    title :"java programming"

    question :"Mark statement with result and grade"

    code:
        "
import java.util.Scanner;
    public class Marksheet
{
    public static void main(String args[])
{
    int marks[]=new int[5];
    int i;
    float total=0,avg;
    Scanner s=new Scanner(System.in);
    for(i=0;i<5;i++)
{
    System.out.print("Enter marks of subject"+(i+1)+":");
    marks[i]=s.nextInt();
    total=total+marks[i];
}
    s.close();
    avg=total/5;
    System.out.println("Total:"+total);
    System.out.println("Average:"+avg);
    System.out.println("The student grade is:");
    if(avg>80)
    {
        System.out.print("A");
    }
    else if(avg>=60&&avg<80)
    {
        System.out.print("B");
    }
    else if(avg>=40&&avg<60)
    {
        System.out.print("C");
    }
    else
    {
        System.out.print("D");
    }
}
}
    "
},

{

    title :"java programming"

    question :"Method overloading"

    code:
        "
    class MethodOverloading
    {
        void sum (int a, int b)
    {
        System.out.println("sum is "+(a+b)) ;
    }
    void sum (float a, float b)
    {
        System.out.println("sum is "+(a+b));
    }
    void sum (String a, String b)
    {
        System.out.println("sum is "+(a+b));
    }
    public static void main (String[] args)
    {
        MethodOverloading  cal = new MethodOverloading();
        cal.sum (8,5);
        cal.sum (4.6f, 3.8f);
        cal.sum("Method","Overloading");
    }
}
    "
},

{

    title :"java programming"

    question :"String extraction"

    code:
        "
import java.util.*;
    class Extract
    {
        public static void main(String args[])
    {
        String str,substr;
        int extract,start,len,check;
        Scanner s=new Scanner(System.in);
        System.out.print("Enter String : ");
        str=s.next();
        len=str.length();
        System.out.print("Enter Starting position to extract characters  : ");
        start=s.nextInt();
        start=start-1;
        if(start<0 || start>len)
    {
        System.out.println("INVALID POSITION");
        System.exit(1);
    }
    System.out.print("Enter Number of characters want to extract : ");
    extract=s.nextInt();
    check=extract+start;
    if(check<0 || check>len )
    {
        System.out.println("TRYING TO EXTRACT INVALID POSITION");
        System.exit(1);
    }
    substr=str.substring(start,check);
    System.out.println("\nEXTRACTED STRING IS "+substr);
}
}
    "
},

{

    title :"java programming"

    question :"Vector"

    code:
        "
import java.util.*;
    public class VectorDemo
{
    public static void main(String[] args)
{
    Vector<Integer>vec = new Vector<Integer>(6);
    int n;
    vec.add(33);
    vec.add(34);
    vec.add(22);
    vec.add(11);
    vec.add(22);
    vec.add(12);
    System.out.println("The elements in the vector are:");
    for (Integer number : vec)
{
    System.out.println("Number = " + number);
}
    Scanner s = new Scanner(System.in);
    System.out.print("Enter index of element to be deleted:");
    n = s.nextInt();
    vec.remove(n);
    System.out.println("The elements in the vector after deletion:");
    for (Integer number : vec)
    {
        System.out.println("Number = " + number);
    }
}
}
    "
},

{

    title :"java programming"

    question :"Package"

    code:
        "
    Package code....

    package arithmetic;
    public class Arith
{
    public int add(int x,int y)
{
    return x+y;
}
    public int sub(int x,int y)
    {
        return x-y;
    }
    public int mul(int x,int y)
    {
        return x*y;
    }
    public double div(int x,int y)
    {
        return (double)x/y;
    }
    public int mod(int x,int y)
    {
        return x%y;
    }
}

    Package calling code:

    import arithmetic.*;
    class Operations
    {
        public static void main(String as[])
    {
        Arith m=new Arith();
        System.out.println("Addition: "+m.add(8,5));
        System.out.println("Subraction: "+m.sub(8,5));
        System.out.println("Multiplication: "+m.mul(8,5));
        System.out.println("Division: "+m.div(8,5));
        System.out.println("Modulo: "+m.mod(8,5));
    }
}
    "
},

{

    title :"java programming"

    question :"Multiple inheritance"

    code:
        "
import java.util.*;
    class student
    {
        int rollNumber;
        void getNumber(int n)
    {
        rollNumber=n;
    }
    void printNumber()
    {
        System.out.println("RollNo is " +rollNumber);
    }
}
    class test extends student
    {
        float part1,part2;
        void getMarks(float a, float b)
    {
        part1=a;
        part2=b;
    }
    void putMarks()
    {
        System.out.println("Marks Part1 "+part1);
        System.out.println("Marks Part2 "+part2);
    }
}
    interface sports
    {
        float sportwt=6.0F;
        void putwt();
    }
    class results extends test implements sports
    {
        float total;
        public void putwt()
    {
        System.out.println("Sports Marks "+ sportwt);
    }
        void display()
    {
        total=part1+part2+sportwt;
        System.out.println("Total marks of " +rollNumber+" is "+total);
    }
    }
    class Inheritance
    {
        public static void main(String srgs[])
    {
        results a=new results();
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the Register Number:");
        int r=s.nextInt();
        System.out.println("Enter the Two Subject mark:");
        float p1=s.nextInt();
        float p2=s.nextInt();
        a.getNumber(r);
        a.printNumber();
        a.getMarks(p1,p2);
        a.putMarks();
        a.putwt();
        a.display();
    }
}
    "
},

{

    title :"java programming"

    question :"Multithread"

    code:
        "
import java.lang.*;
    class Five extends Thread
    {
        public void run()
    {
        try
        {
            for(int i=1; i<=5; i++)
            {
                System.out.println(i+"*5="+i*5);
                sleep(100);
            }
        }
        catch(Exception x)
        { }
    }
    }
    class Seven extends Thread
    {
        public void run()
    {
        try
        {
            for(int i=1; i<=5; i++)
            {
                System.out.println(i+"*7="+i*7);
                sleep(200);
            }
        }
        catch(Exception x)
        { }
    }
    }
    class Nine extends Thread
    {
        public void run()
    {
        try
        {
            for(int i=1; i<=5; i++)
            {
                System.out.println(i+"*9="+i*9);
                sleep(300);
            }
        }
        catch(Exception x)
        { }
    }
    }
    class MultiThread
    {
        public static void main(String arg[])
    {
        Five a1 = new Five();
        Seven b1 = new Seven();
        Nine c1 = new Nine();
        a1.setPriority(10);
        b1.setPriority(7);
        c1.setPriority(1);
        a1.start();
        b1.start();
        c1.start();
    }
}
    "
},

{

    title :"java programming"

    question :"User defined exception"

    code:
        "
import java.util.*;
    class PayoutofBounds extends Exception
    {
        float a;
        PayoutofBounds(float b)
    {
        a=b;
    }
    public String toString()
    {
        return ("Balance is too Low\n Your Current Balance is"+a) ;
    }
}
    class UserException
    {
        public static void main(String args[])
    {
        Scanner s=new Scanner(System.in);
        int ch;
        float balance=500,amt;
        do
    {
        System.out.println("\n\tBank Operations\n1.Deposit\n2.Withdrawal\n3.Enquiry\n4.Exit\n");
        System.out.print("Enter Your Choice:");
        ch=s.nextInt();
        switch(ch)
        {
        case 1:
            System.out.println("\n\tDeposit Operation");
            System.out.print("Enter the amount to be deposited:");
            amt=s.nextInt();
            balance=balance+amt;
            System.out.print("Your Balance is"+balance);
            break;
        case 2:
            System.out.println("\nWithdrawal Operation");
            System.out.print("Enter the amount to be Withdraw:");
            amt=s.nextInt();
            if(balance-amt<0)
            {
                try
                {
                    throw new PayoutofBounds(balance);
                }
                catch(PayoutofBounds e)
                {
                    System.out.println(e) ;
                }
            }
            else
            {
                balance=balance-amt;
                System.out.print("Your Balance is"+balance);
            }
            break;
        case 3:
            System.out.println("\n\tEnquiry Operation");
            System.out.print("Your Balance is"+balance);
            break;
        }
    }
    while(ch<4);
}
}
    "
},

{

    title :"java programming"

    question :"Gridlines using applet"

    code:
        "
import java.applet.*;
import java.awt.*;
    public class GridLine extends Applet
{
    int width, height, rows=10, columns=10;
    public void paint(Graphics g)
{
    int k;
    width = getSize().width;
    height = getSize().height;
    int htOfRow = height / (rows);
    for (k = 0; k < rows; k++)
    g.drawLine(0, k * htOfRow , width, k * htOfRow );
    int wdOfRow = width / (columns);
    for (k = 0; k < columns; k++)
    g.drawLine(k*wdOfRow , 0, k*wdOfRow , height);
}
}

    /*<applet code="GridLine" width="500" height="500">
    </applet>*/
    "
},

{

    title :"java programming"

    question :"Applet for textfield and textarea"

    code:
        "
import java.awt.*;
import java.applet.*;
    /* <applet code="Details" width=400 height=400>
   </applet> */
    public class Details extends Applet
{
    TextField t1,t2;
    TextArea ta;
    Label l1,l2,l3;
    Button b1,b2;
    public void init()
{
    setLayout(new GridLayout(4,2));
    l1=new Label("Student Name");
    l2=new Label("Qualification");
    l3=new Label("Address");
    t1=new TextField();
    t2=new TextField();
    ta=new TextArea();
    b1=new Button("Save");
    b2=new Button("Cancel");
    add(l1);
    add(t1);
    add(l2);
    add(t2);
    add(l3);
    add(ta);
    add(b1);
    add(b2);
}
}
    "
},

{

    title :"java programming"

    question :"Multiple selection listbox"

    code:
        "
import java.applet.*;
import java.awt.*;
import java.awt.event.*;
    /*<applet code="MultiSelect" width=200 height=200>
    </applet>*/
    public class MultiSelect extends Applet implements ItemListener
{
    List list;
    public void init()
{
    list = new List(5, true);
    list.add("Britannia");
    list.add("Sunfeast");
    list.add("Anmol");
    list.add("Parle");
    list.add("Patanjali");
    list.add("Priyagold");
    add(list);
    list.addItemListener(this);
}
    public void paint(Graphics g)
{
    String[] items = list.getSelectedItems();
    String msg = "";
    for(int i=0; i<items.length; i++)
{
    msg = items[i] + ", " + msg;
}
    g.drawString("Selected Items: "+ msg, 10, 120);
}
    public void itemStateChanged(ItemEvent ie)
    {
        repaint();
    }
}
    "
},

{

    title :"java programming"

    question :"Menubar"

    code:
        "
import java.awt.*;
import java.awt.event.*;
    public class SimpleMenu extends Frame implements ActionListener
{
    Menu states, cities;
    public SimpleMenu()
    {
        MenuBar mb = new MenuBar();
        setMenuBar(mb);
        states = new Menu("Indian States");
        cities = new Menu("Indian Cities");
        mb.add(states);
        mb.add(cities);
        states.addActionListener(this);
        cities.addActionListener(this);
        states.add(new MenuItem("Himachal Pradesh"));
        states.add(new MenuItem("Rajasthan"));
        states.add(new MenuItem("West Bengal"));
        states.addSeparator();
        states.add(new MenuItem("Andhra Pradesh"));
        states.add(new MenuItem("Tamilnadu"));
        states.add(new MenuItem("Karnataka"));
        cities.add(new MenuItem("Delhi"));
        cities.add(new MenuItem("Jaipur"));
        cities.add(new MenuItem("Kolkata"));
        cities.addSeparator();
        cities.add(new MenuItem("Hyderabad"));
        cities.add(new MenuItem("Chennai"));
        cities.add(new MenuItem("Bengaluru"));
        setTitle("Simple Menu Program");
        setSize(300, 300);
        setVisible(true);
    }
    public void actionPerformed(ActionEvent e)
{
    String str = e.getActionCommand();
    System.out.println("You selected " + str);
}
    public static void main(String args[])
    {
        new SimpleMenu();
    }
}
    "
},

{

    title :"java programming"

    question :"File append"

    code:
        "
import java.io.*;
    public class FileAppend
{
    public static void main(String[] args) throws Exception
{
    try
{
    BufferedWriter out = new BufferedWriter(new FileWriter("filename"));
    DataInputStream din = new DataInputStream(System.in);
    System.out.println("Enter the String");
    String s=din.readLine();
    out.write(s);
    out.close();
    System.out.println("Content of File :\n");
    BufferedReader in = new BufferedReader(new FileReader("filename"));
    String str;
    while ((str = in.readLine()) != null)
{
    System.out.println(str);
}
in.close();
    out = new BufferedWriter(new FileWriter("filename",true));
    System.out.println("Enter the String to be appended");
    s=din.readLine();
    out.write(s);
    out.close();
    System.out.println("Content of File after Appended:\n");
in = new BufferedReader(new FileReader("filename"));
    while ((str = in.readLine()) != null)
    {
        System.out.println(str);
    }
in.close();
}
catch (IOException e)
    {
        System.out.println("exception occoured"+ e);
    }
}
}
    "
}

]