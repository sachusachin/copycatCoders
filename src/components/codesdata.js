export const Codesdata = [
    {
        head: 'C',
        question: 'Sum and Average of N marks of a student using C',
        coding: `<pre>#include<<stdio.h>stdio.h>

int main()
{
int i,n,Sum=0,numbers;
float Average;

printf("\\nEnter Number Of Subjects \\n");
scanf("%d",&n);

for(i=1;i<=n;++i)
 {
   printf("\\nEnter the Subject %d Mark :\\n",i);
   scanf("%d",&numbers);
   Sum = Sum +numbers;
 }

Average = Sum/n;

printf("\\nSum of the %d Subjects is = %d",n, Sum);
printf("\\nAverage of the %d Subjects is = %.2f",n, Average);

return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'Fibonacci series for a given limit using C',
        coding: `<pre>#include<<stdio.h>stdio.h>    
int main()    
{    
int n1=0,n2=1,n3,i,number;    
printf("Enter the number of elements:");    
scanf("%d",&number);    
printf("\\n%d %d",n1,n2);//printing 0 and 1    
for(i=2;i<<number>number;++i)//loop starts from 2 because 0 and 1 are already printed    
{    
n3=n1+n2;    
printf(" %d",n3);    
n1=n2;    
n2=n3;    
}  
return 0;  
}</pre>`
    },
    {
        head: 'C',
        question:
            'Number is prime or not and display the n range of prime numbers using C',
        coding: `<pre>#include<<stdio.h>stdio.h>  

int main(){    
int n,i,j,m=0,flag=0,flag_var;    
printf("Enter the number to check prime:");    
scanf("%d",&n);    
m=n/2;    
for(i=2;i<=m;i++)    
{    
if(n%i==0)    
{    
printf("%d is not prime\\n",n);    
flag=1;    
break;    
}    
}    
if(flag==0)
{
printf("%d is prime\\n",n);
}
printf("Prime numbers from 2 and %d are:\\n", n);
 for(i=2; i<<n>n; ++i)
 {
    flag_var=0;
    for(j=2; j<=i/2; ++j)
    {
       if(i%j==0)
       {
          flag_var=1;
          break;
       }
    }
    if(flag_var==0)
       printf("%d\\n",i);
}
return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'Sum of Natural Numbers Using Recursion (C)',
        coding: `<pre>#include<<stdio.h>stdio.h>  

int sum(int n);

int main() {
  int number, result;

  printf("Enter a positive integer: ");
  scanf("%d", &number);

  result = sum(number);

  printf("sum = %d", result);
  return 0;
}

int sum(int n) {
  if (n != 0)
      // sum() function calls itself
      return n + sum(n-1); 
  else
      return n;
}</pre>`
    },
    {
        head: 'C',
        question: 'Find the number of palindromes in a given sentence Using C',
        coding: `<pre>#include<<stdio.h>stdio.h> 
#include<<string.h>string.h>  

int main()
{
int i,j,k,l,len,count = 0;
char s[80];
 printf("Enter your sentence : ");
fgets(s, 80, stdin);
// more details about <a style="color:blue" target="_blank" href="https://www.geeksforgeeks.org/fgets-gets-c-language/">fgets()</a>

len = strlen(s);

for(i=0;i<<len>len;i++)
{
  if(s[i] != ' ' || s[i] != '\\n')
  {
    for(j=i;j<<len>len;j++)
    {
        if(s[j] == ' ' || s[j] == '\\n')
          break;
    }
  }

  for(k=i,l=j-1;;)
  {
    if(s[k] != s[l])
      break;
    else if(k >= l)
    {
      count = count + 1;
      break;
    }
    else
    {
      k = k + 1;
      l = l - 1;
      continue;
    }
  }

  i = j;
}

printf("\\n%d",count);
return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'Manipulate strings using string functions Using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<string.h>string.h>  

int main()
{
char fname[30],lname[30],name[30];
int result;
  
printf("Enter FirstName: ");
gets(fname);     //Function to read string from user.
printf("Enter LastName: ");
gets(lname);
  
result = strcmp(fname, lname);
printf("strcmp(FirstName,LastName) = %d\\n",result); //Function to compare two strings it will return 0 or non-zero integer.
  
strcat(fname, lname); // Function to contcatenates (joins) two strings

strcpy(name,fname); //Function to copy strings
  
printf("Name: ");
puts(name);    //Function to display string.
  
printf("Length of the name is = %zu \\n",strlen(fname));  //Function calculates the length of a given string.
  
return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'Swap two integers using pointers (C)',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<string.h>string.h>  

// function to swap the two numbers
void swap(int *x,int *y)
{
  int t;
   t   = *x;
  *x   = *y;
  *y   =  t;
}

int main()
{
  int num1,num2;

  printf("Enter value of num1: ");
  scanf("%d",&num1);
  printf("Enter value of num2: ");
  scanf("%d",&num2);

  //displaying numbers before swapping
  printf("Before Swapping: num1 is: %d, num2 is: %d\\n",num1,num2);

  //calling the user defined function swap()
  swap(&num1,&num2);

  //displaying numbers after swapping
  printf("After  Swapping: num1 is: %d, num2 is: %d\\n",num1,num2);

  return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'Array of Pointers Using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<string.h>string.h>  

const int MAX = 3;

int main () {
  
int  var[3];
printf("Enter 3 integers: \\n");

// taking input and storing it in an array

for(int i = 0; i < 3; ++i) {
  
  scanf("%d", &var[i]);
}

int i, *ptr[MAX];

for ( i = 0; i < MAX; i++) {
  ptr[i] = &var[i]; /* assign the address of integer. */
}
 
for ( i = 0; i < MAX; i++) {
  printf("Value of var[%d] = %d\\n", i, *ptr[i] );
}
 
 return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'Structures Using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<string.h>string.h>  

struct Books {
 char  title[50];
 char  author[50];
 char  subject[100];
 int   book_id;
};

int main( ) {

 struct Books Book1;        /* Declare Book1 of type Book */
 struct Books Book2;        /* Declare Book2 of type Book */

 /* book 1 specification */
 strcpy( Book1.title, "C Programming Absolute Beginner's Guide (3rd Edition)"); 
 strcpy( Book1.author, "Greg Perry and Dean Miller");
 strcpy( Book1.subject, "C Programming Tutorial");
 Book1.book_id = 6495407;

 /* book 2 specification */
 strcpy( Book2.title, "C Programming: A Modern Approach (2nd Edition)");
 strcpy( Book2.author, "K. N. King");
 strcpy( Book2.subject, "C Programming");
 Book2.book_id = 6495700;

 /* print Book1 info */
 printf( "Book 1 title : %s\\n", Book1.title);
 printf( "Book 1 author : %s\\n", Book1.author);
 printf( "Book 1 subject : %s\\n", Book1.subject);
 printf( "Book 1 book_id : %d\\n", Book1.book_id);

 /* print Book2 info */
 printf( "Book 2 title : %s\\n", Book2.title);
 printf( "Book 2 author : %s\\n", Book2.author);
 printf( "Book 2 subject : %s\\n", Book2.subject);
 printf( "Book 2 book_id : %d\\n", Book2.book_id);

 return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'Array of Structures Using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<string.h>string.h>  

struct student{    
int rollno;    
char name[30];    
};    
int main(){    
int n,i;   
printf("Enter Students Count :");
scanf("%d",&n);
struct student st[n];    
printf("Enter Records of %d students",n);    
for(i=0;i<<n>n;i++){    
printf("\\nEnter Rollno:");    
scanf("%d",&st[i].rollno);    
printf("\\nEnter Name:");    
scanf("%s",&st[i].name);    
}    
printf("\\nStudent Information List:");    
for(i=0;i<<n>n;i++){    
printf("\\nRollno:%d, Name:%s",st[i].rollno,st[i].name);    
}    
 return 0;    
}</pre>`
    },
    {
        head: 'C',
        question: 'Calculate electricity bill Using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<string.h>string.h>  
#include <<stdlib.h>stdlib.h>

int calc_Electricity();  //function prototype
int main()
{
//rates apply
// 1- 50 units - 1.50
//51- 150 units - 2.00
//101 - 250 units - 3.00
//above 251  units - 4.00
int unit=0;

printf("Enter total units consumed\\n");
scanf("%d",&unit);  //Reads input from user and store in variable unit
calc_Electricity(unit);  //function call
return 0;
}
int calc_Electricity(int unit){  //function definition
double amount;
if((unit>=1)&&(unit<=50))  //between 1 - 50 units
  {
      amount=unit*1.50;

  }
else if((unit>50)&&(unit<=150))  //between 50 - 150 units
  {
      amount=((50*1.5)+(unit-50)*2.00);
  }
else if((unit>150)&&(unit<=250)){  //between 150 - 250 units
      amount=(50*1.5)+((150-50)*2.00)+(unit-150)*3.00;
  }
else if(unit>250){//above 250 units
      amount=(50*1.5)+((150-50)*2.00)+((250-150)*3.00)+(unit-250)*4;

  }
else{
      printf("No usage ");
      amount=0;
  }
printf("Electricity bill = Rs. %.2f",amount);

}</pre>`
    },
    {
        head: 'C',
        question:
            'Copy the contents of one file to another file using Command Line Arguments Using C',
        coding: `<pre>
// Use Turbo C++ for run this code <a target="_blank" href="https://developerinsider.co/download-turbo-c-for-windows-7-8-8-1-and-windows-10-32-64-bit-full-screen/" style="color: blue">Download</a>

#include<<stdio.h>stdio.h>
#include<<string.h>string.h>  

int main(int argc,char *argv[])
{
FILE *fs,*ft;
int ch;
if(argc!=3)
{
printf("Invalide numbers of arguments.");
return 1;
}
fs=fopen(argv[1],"r");
if(fs==NULL)
{
printf("Can't find the source file.");
return 1;
}
ft=fopen(argv[2],"w");
if(ft==NULL)
{
printf("Can't open target file.");
fclose(fs);
return 1;
}

/* while(1) is used there for infinite loop. 
if feof is found then we are exiting loop here...
feof means end of file..
when file ended break executes */

while(1)
{
ch=fgetc(fs);
if (feof(fs)) break;
fputc(ch,ft);
}

fclose(fs);
fclose(ft);
return 0;
}</pre>`
    },
    {
        head: 'C',
        question: 'String output using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>
#include<<string.h>string.h>
int main()
{
  char a[100];
  strcpy(a,"Copycat Coders");
  printf("%s,\\n%s\\n%s\\n%c",a,a+5,a+6,a[5]);
} </pre>`
    },
    {
        head: 'C',
        question: 'Unsigned short output check using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>
int main()
{
unsigned short a,b,c,d;
a=65535;
b=65536;
c=65537;
d=65538;

/* unsigned Short value range is 0 to 65,535, 
if we give unsigned short value:65536 it takes the value:0,
if we give unsigned short value:65537 it takes the value:1. */

printf("a value is:%d \\n b value is:%d \\n c value is:%d \\n c value is:%d",a,b,c,d);
}</pre>`
    },
    {
        head: 'C',
        question: 'Octal to decimal using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>
int main()
{
int a=031;
printf("any number start with 0 the computer save the number  as a octal number.\\nthe value of the 031 in decimal is 25\\n");
printf("\\nthe a value is:%d",a);
getch();
}</pre>`
    },
    {
        head: 'C',
        question: 'Hexadecimal to decimal using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>
int main()
{
int a=0x20,b=0X19;
printf("\\a the decimal value of a is:%d \\n the decimal value of b is: %d",a,b);
getch();
}</pre>`
    },
    {
        head: 'C',
        question: 'salary management system using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>
int main() {
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
printf("             SALARY MANAGEMENT SYSTEM                      \\n");
printf("-----------------------------------------------------------");
printf("\\nS.NO      NAME        BASIC PAY      DA       NET_SALARY\\n");
printf("-----------------------------------------------------------\\n");
printf("%2d %11s %15.2f %13.2f %10.2f\\n",1,"ARUN",arun_bp,arun_da,arun_net);
printf("%2d %11s %15.2f %13.2f %10.2f\\n",2,"PRAVEEN",praveen_bp,praveen_da,praveen_net);
printf("%2d %11s %15.2f %13.2f %10.2f\\n",3,"NAVIN",navin_bp,navin_da,navin_net);
printf("-----------------------------------------------------------\\n");
printf("TOTAL          %15.2f %13.2f %10.2f\\n", arun_bp + praveen_bp + navin_bp,arun_da + praveen_da + navin_da,arun_net + praveen_net + navin_net);
printf("-----------------------------------------------------------");

}</pre>`
    },
    {
        head: 'C',
        question: 'Ternary operator using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>
int main()
{
int a,b;
printf("enter a number:");
scanf("%d",&a);
printf("\\nenter second number:");
scanf("%d",&b);
if(a==b)
{
 printf("\\n\\nBOTH NUMBERS ARE EQUAL. THE NUMBERS ARE:%d",a);
}
else{
  (a>b)? printf("\\na is biggest number:%d",a):printf("\\nb is biggest number:%d",b);
}
 
}</pre>`
    },
    {
        head: 'C',
        question: 'arithmetic progression using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>

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

}</pre>`
    },
    {
        head: 'C',
        question: 'Biggest of two numbers using C',
        coding: `<pre>#include<<stdio.h>stdio.h>
#include<<conio.h>conio.h>

int main()
{
char a,b;
a=12;
b=70;
  
if(a>b){
printf("\\n%d is biggest number",a);
else{
printf("\\n%d is biggest number",b);
}
}
</pre>`
    },
    {
        head: 'Java',
        question: 'Fibonacci numbers using Java',
        coding: `<pre>import java.util.Scanner;
public class Fibonacci{  

public static void main(String args[])  
{    

int n1=0,n2=1,n3,i,n;    
Scanner s=new Scanner(System.in);
System.out.println("Enter value of n;");
n=s.nextInt();
System.out.print(n1+" "+n2);//printing 0 and 1    
  
for(i=2;i<<n>n;++i)//loop starts from 2 because 0 and 1 are already printed    
{    
n3=n1+n2;    
System.out.print(" "+n3);    
n1=n2;    
n2=n3;    
}    

} 
}</pre>`
    },
    {
        head: 'Java',
        question: 'Sorting numbers using Java',
        coding: `<pre>import java.util.Scanner;
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
for(int i=0;i<<n>n;i++)
{
numbers[i]=s1.nextInt();
}
for(int i=0;i<<n>n;i++)
{
for(int j=i+1;j<<n>n;j++)
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
for(int i=0;i<<n>n-1;i++)
{
System.out.println(numbers[i]+" ");
}
System.out.println(numbers[n-1]);
}
}</pre>`
    },
    {
        head: 'Java',
        question: 'Mark statement with result and grade using Java',
        coding: `<pre>import java.util.Scanner;
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
}</pre>`
    },
    {
        head: 'Java',
        question: 'Method overloading using Java',
        coding: `<pre>public class MethodOverloading
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
</pre>`
    },
    {
        head: 'Java',
        question: 'String extraction using Java',
        coding: `<pre>import java.util.*;
public class Extract 
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
System.out.println("\\nEXTRACTED STRING IS "+substr);
}
}</pre>`
    },
    {
        head: 'Java',
        question: 'Vector using Java',
        coding: `<pre>import java.util.*;
public class VectorDemo
{
public static void main(String[] args) 
{
Vector<<Integer>Integer>vec = new Vector<<Integer>Integer>(6);
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
System.out.print("Enter index of element to be deleted:"); // index are startfrom 0
n = s.nextInt();
vec.remove(n);
System.out.println("The elements in the vector after deletion:");     
for (Integer number : vec) 
{         
System.out.println("Number = " + number);
}
}    
}</pre>`
    },
    {
        head: 'Java',
        question: 'Package using Java',
        coding: `<pre>
<b>Use Command Prompt to run this Program</b>

<b>Package code :</b>

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

<b>Package calling code :</b>

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
}</pre>`
    },
    {
        head: 'Java',
        question: 'Multiple inheritance using Java',
        coding: `<pre>import java.util.Scanner;

class student
{
String rollNumber;
public void getNumber(String n)
{
rollNumber=n;
}
public void printNumber()
{
System.out.println("RollNo is " +rollNumber);
}
}
class test extends student
{
float part1,part2;
public void getMarks(float a, float b)
{
part1=a;
part2=b;
}
public void putMarks()
{
System.out.println("Marks Part1 "+part1);
System.out.println("Marks Part2 "+part2);
}
}
interface sports
{
float sportwt=6.0F;
public void putwt();
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
public class Inheritance
{
public static void main(String srgs[])
{
results a=new results();
Scanner s=new Scanner(System.in);
System.out.println("Enter the Register Number:");
String r=s.next();
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
}</pre>`
    },
    {
        head: 'Java',
        question: 'Multithread using Java',
        coding: `<pre>import java.lang.*;

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
public class MultiThread
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
}</pre>`
    },
    {
        head: 'Java',
        question: 'User defined exception using Java',
        coding: `<pre>import java.util.*;

class PayoutofBounds extends Exception
{
float a;
PayoutofBounds(float b) 
{
a=b;
}
public String toString()
{
return ("Balance is too Low\\n Your Current Balance is"+a) ;
}
}
public class UserException
{
public static void main(String args[])
{
Scanner s=new Scanner(System.in);
int ch;
float balance=500,amt;
do
{
System.out.println("\\n\\tBank Operations\\n1.Deposit\\n2.Withdrawal\\n3.Enquiry\\n4.Exit\\n");
System.out.print("Enter Your Choice:");
ch=s.nextInt();
switch(ch)
{
case 1:
System.out.println("\\n\\tDeposit Operation");
System.out.print("Enter the amount to be deposited:");
amt=s.nextInt();
balance=balance+amt;
System.out.print("Your Balance is"+balance);
break;
case 2:
System.out.println("\\nWithdrawal Operation");
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
System.out.println("\\n\\tEnquiry Operation");
System.out.print("Your Balance is"+balance);
break;    
}
}
while(ch<4);
}
}</pre>`
    },
    {
        head: 'Java',
        question: 'Gridlines using applet (Java)',
        coding: `<pre><b>Use Command Prompt to run this Program</b>

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

/*<<applet>applet code="GridLine" width="500" height="500">
<<applet>/applet>*/</pre>`
    },
    {
        head: 'Java',
        question: 'Applet for textfield and textarea (Java)',
        coding: `<pre> <b>Use Command Prompt to run this Program</b>

import java.awt.*;
import java.applet.*;

/* <<applet>applet code="Details" width=400 height=400>
<<applet>/applet> */

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
}</pre>`
    },
    {
        head: 'Java',
        question: 'Multiple selection listbox using applet  (Java)',
        coding: `<pre><b>Use Command Prompt to run this Program</b>

import java.applet.*;
import java.awt.*;
import java.awt.event.*;

/*<<applet>applet code="MultiSelect" width=200 height=200>
<<applet>/applet*/ 

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
for(int i=0; i<<items.length>items.length; i++)
{
msg = items[i] + ", " + msg;
}
g.drawString("Selected Items: "+ msg, 10, 120);
}
public void itemStateChanged(ItemEvent ie) 
{
repaint();\t
}
}</pre>`
    },
    {
        head: 'Java',
        question: 'Menubar using applet (Java)',
        coding: `<pre><b>Use Command Prompt to run this Program</b>

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
}</pre>`
    },
    {
        head: 'Java',
        question: 'File append using Java',
        coding: `<pre><b>Use Command Prompt to run this Program</b>

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
System.out.println("Content of File :\\n");
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
System.out.println("Content of File after Appended:\\n");
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
}</pre>`
    },
    {
        head: 'PHP',
        question: 'Message passing using PHP',
        coding: `<pre>
<b style="color:blue">Use Xampp for run this program</b>

<u><b>Page1.html</b></u>

&lt;form id="form" method="post" action="page2.php">

&lt;p>Enter Name: &lt;input type="text" name="name" />&lt;/p>

&lt;p>Enter Age: &lt;input type="text" name="age" />&lt;/p>

&lt;p>Enter Hometown: &lt;input type="text" name ="town" />&lt;/p>

&lt;p>&lt;input type="submit" name="form_submit" value="Send" />&lt;/p>


<u><b>Page2.html</b></u>

&lt;?php

$name=$_POST["name"];
$age=$_POST["age"];
$town=$_POST["town"];
echo(" 

&lt;p>Hello my name is &lt;b>$name&lt;/b>,&lt;br>I am &lt;b>$age&lt;/b> years old and &lt;br>Live in &lt;b>$town&lt;/b> and &lt;br>

i am learning how to use PHP to create typing shortcut by passing information from one page to another page with in my weppages....&lt;/p>

");

?></pre>`
    },
    {
        head: 'PHP',
        question: 'String function and Arrays using PHP',
        coding: `<pre>
&lt;?php

$names = array("Name1","Name2","Name3");

echo "&lt;h1>STRING FUNCTION&lt;/h1>";
for($i=0;$i&lt;count($names);$i++){

echo $names[i]."&lt;br>";

}
echo "&lt;h2>LENGTHS&lt;/h2>&lt;br>";
for($i=0;$i&lt;count($names);$i++){

echo "The Length of the $names[$i] is ".strlen($names[$i])."&lt;br>";

}
echo "&lt;h2>REVERSE&lt;/h2>&lt;br>";
for($i=0;$i&lt;count($names);$i++){

echo "The Reverse of the $names[$i] is ".strrev($names[$i])."&lt;br>";

}
echo "&lt;h2>LOWER CASE&lt;/h2>&lt;br>";
for($i=0;$i&lt;count($names);$i++){

echo "The Lowercase of the $names[$i] is ".strtolower($names[$i])."&lt;br>";

}
echo "&lt;h2>UPPER CASE&lt;/h2>&lt;br>";
for($i=0;$i&lt;count($names);$i++){

echo "The Uppercase of the $names[$i] is ".strtoupper($names[$i])."&lt;br>";

}
?></pre>`
    },
    {
        head: 'PHP',
        question: 'Display student information using MYSQL table (PHP)',
        coding: `<pre><b style="color:blue">Use Xampp for run this program</b>

<u><b>Studentmark.html</b></u>

&lt;div class="form-box">

&lt;form method="POST" action="db.php">
  
&lt;div class="inputname">
 &lt;input type="text" name="name" placeholder="Enter Your Name...." required="" spellcheck="none">
&lt;/div>&lt;br>

&lt;div class="inputreg">
    &lt;input type="text" name="reg" placeholder="Enter Your RegisterNumber...." required="" spellcheck="off">
&lt;/div>&lt;br>

&lt;div class="inputreg">
 &lt;input type="text" name="class" placeholder="Enter Your class...." required="" spellcheck="off">
&lt;/div>&lt;br>

&lt;div class="inputreg">
&lt;input type="text" name="mark1" placeholder="Enter Your sub1mark...." required="" spellcheck="off">
&lt;/div>&lt;br>

&lt;div class="inputreg">
 &lt;input type="text" name="mark2" placeholder="Enter Your sub2mark...." required="" spellcheck="off">
&lt;/div>&lt;br>

&lt;div class="inputreg">
&lt;input type="text" name="mark3" placeholder="Enter Your sub3mark...." required="" spellcheck="off">
&lt;/div>&lt;br>

&lt;div class="inputreg">
 &lt;input type="text" name="mark4" placeholder="Enter Your sub4mark...." required="" spellcheck="off">
&lt;/div>&lt;br>

&lt;div class="inputreg">
 &lt;input type="text" name="mark5" placeholder="Enter Your sub5mark...." required="" spellcheck="off">
&lt;/div>&lt;br>
  
&lt;div class="inputsubmit">
&lt;input type="submit" name="submit" value="submit">
&lt;/div>

&lt;/form>
&lt;/div>

<b>Create Database to Store this Details..</b>


<u><b>db.php</b></u>

&lt;?php

//Database connection

$con=new mysqli('localhost','root','','college');

if($con->connect_errno)
{
echo "$con->connect_error";
die();
}

$Name=$_POST['name'];
$Reg=$_POST['reg'];
$Class=$_POST['class'];
$Mark1=$_POST['mark1'];
$Markk2=$_POST['mark2'];
$Mark3=$_POST['mark3'];
$Markk4=$_POST['mark4'];
$Markk5=$_POST['mark5'];


if($Name!="" && $Reg!="" && $Mark1!="" && $Mark2!="" && $Mark3!="" && $Mark4!=""&& $Mark5!=""  )
{

$sql="INSERT INTO details (name,reg,mark1,mark2,mark3,mark4,mark5) VALUES ('$Name','$Reg','$Class','$Mark1','$Mark2','$Mark3','$Mark4','$Mark5')";

if ($con->query($sql))
{


echo  "data stored successfully...";

}
else
{

echo "data not stored...";
?>
&lt;div>
&lt;h2>Oops! Operation Not Completed!&lt;/h2>
&lt;p>Go to home page &lt;a href="Studentmark.html">click here&lt;/a>&lt;/p>
&lt;/div>
&lt;?php
}
}
?>
</pre>`
    },
    {
        head: 'PHP',
        question: 'College application form using MYSQL table (PHP)',
        coding: `<pre><b style="color:blue">Use Xampp for run this program</b>

<u><b>Application.html</b></u>

&lt;div class="form-box">

&lt;form method="POST" action="db.php" autocomplete="off">
  
&lt;div class="inputname">
&lt;input type="text" name="name" placeholder="Enter Your Name...." required="" spellcheck="none">
&lt;/div>

&lt;div class="inputreg">
&lt;input type="text" name="fname" placeholder="Enter Your Father's Name...." required="" spellcheck="off">
&lt;/div>

&lt;div class="inputreg">
&lt;input type="text" name="mname" placeholder="Enter Mother's Name...." required="" spellcheck="off">
&lt;/div>&lt;br>

&lt;div class="inputreg">
&lt;label>Gender:&lt;/label>
&lt;input type="radio" id="male" name="gender" value="male">

&lt;label for="male">Male&lt;/label>
&lt;input type="radio" id="female" name="gender" value="female">

&lt;label for="female">Female&lt;/label>
&lt;input type="radio" id="other" name="gender" value="other">

&lt;label for="other">Other&lt;/label>
&lt;/div>&lt;br>

&lt;div class="inputreg">
&lt;input type="text" name="religion" placeholder="Religion...." required="" spellcheck="off">
&lt;/div>

&lt;div class="inputreg">
&lt;input type="text" name="community" placeholder="Community...." required="" spellcheck="off">
&lt;/div>
  
&lt;div class="inputsubmit">
&lt;input type="submit" name="submit" value="submit">\t
&lt;/div>

&lt;/form>

&lt;/div>

<b>Create Database to Store this Details..</b>

<u><b>db.php</b></u>

&lt;?php

//Database connection

$con=new mysqli('localhost','root','','college');

if($con->connect_errno)
{
echo "$con->connect_error";
die();
}

$Name=$_POST['name'];
$Fname=$_POST['fname'];
$Mname=$_POST['mname'];
$Gender=$_POST['gender'];
$Religion=$_POST['religion'];
$Community=$_POST['community'];


if($Name!="" && $Fname!="" && $Mname!="" && $Gender!="" && $Religion!="" && $Community!=""  )
{

$sql="INSERT INTO details (name,fname,mname,gender,religion,community) VALUES ('$Name','$Fname','$Mname','$Gender','$Religion','$Community')";

if ($con->query($sql))
{


echo  "data stored successfully...";

}
else
{

echo "data not stored...";
?>
&lt;div>
&lt;h2>Oops! Registeration Not Completed!&lt;/h2>
&lt;p>Go to home page &lt;a href="Application.html">click here&lt;/a>&lt;/p>
&lt;/div>
&lt;?php
}
}
?>
</pre>`
    },
    {
        head: 'PHP',
        question: 'Parsing functions (use Tokenizing) Using PHP',
        coding: `<pre>&lt;?php

$string = "Welcome to Copycat Coders site!!";
$token = strtok($string ," ");

while($token != false){

echo "$token&lt;br>";
$token = (" ");

}

?></pre>`
    },
    {
        head: 'PHP',
        question: 'Regular Expression, HTML functions, Hashing functions Using PHP',
        coding: `<pre>&lt;?php

$str ="my name is test..";
?>
&lt;b>REGULAR FUNCTION&lt;/b>
&lt;?php
$pattern = "/name/i";  // "name" is a pattern word

echo "&lt;/br>";
echo "&lt;/br>";
if(preg_match($pattern, $str)) {
echo "match!!";
}else{
echo "Oops not match!!";
};
echo "&lt;/br>";
echo "&lt;/br>";
?>
&lt;b>HTML FUNCTION&lt;/b>
&lt;?PHP
echo "&lt;/br>";
echo "&lt;/br>";
$str="&lt;b>".$str."&lt;/b>";
echo "without 'htmlspecialchars' function output = ".$str;
echo "&lt;/br>";

$str = htmlspecialchars($str);

echo "&lt;/br>";

echo "with 'htmlspecialchars' function output = ".$str;
echo "&lt;/br>";
echo "&lt;/br>";
?>
&lt;b>HASH FUNCTION&lt;/b>
&lt;?php
echo "&lt;/br>";
echo "&lt;/br>";
echo "without hash = ". $str;
echo "&lt;/br>";
echo "&lt;/br>";
echo "with hash = ". sha1($str);

?>&lt;/pre>`
    },
    {
        head: 'PHP',
        question:
            'File System functions, Network functions, Date and time functions Using PHP',
        coding: `<pre><b style="color:blue">Use Xampp for run this program</b>

&lt;?php

echo "&lt;h2>FILE SYSTEM FUNCTION&lt;/h2>";

$a = fopen("filename.txt","w"); // create new text file on your localhost folder. 

fwrite($a, "this is file");
fwrite($a, "System function program");
fclose($a);
echo "File written Successfully&lt;/br>&lt;/br>";

$b = file_get_contents("filename.txt","w");
echo "&lt;b>The content in this file is &lt;/b> $b";

echo "&lt;h2>FILE SYSTEM FUNCTION&lt;/h2>";

$c = gethostbyaddr($SERVER["REMOTE_ADDR"]);
echo "&lt;b>The domain name for the given ip address is :&lt;/b> $c &lt;/br>&lt;/br>";

$d = getprotobyname("udp");
echo "&lt;b>The protocol number for the given protocol name udp is :&lt;/b> $d &lt;/br>&lt;/br>";

$d = getservbyport(80,"tcp");
echo "&lt;b>The internet service for the given port tcp is :&lt;/b> $e &lt;/br>&lt;/br>";

echo "&lt;h2>DATE AND TIME FUNCTION&lt;/h2>";

echo "&lt;h3>The Time stamp is :&lt;/h3>".time();

echo "&lt;h3>The Date is :&lt;/h3>".date("M D Y");

echo "&lt;h3>Time,Date,Month and etc... are printed in array&lt;/h3>";
print_r( getdate() );

?></pre>`
    },
    {
        head: 'CPP',
        question: 'Formatted Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>
void main()
{
clrscr();
cout<<"\\n FORMATED FUNCTIONS \\n \\n";
cout.fill('=');
cout.setf(ios::right,ios::adjustfield);
cout.width(20);
cout<<"c plus plus"<<"\\n";
cout.setf(ios::left,ios::adjustfield);
cout.width(20);
cout<<"c plus plus"<<"\\n";
cout.precision(2);
cout<<3.1452;
getch();
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'UnFormatted Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>
#include&lt;string.h>

void main()
{
clrscr();
char a,x[30];
int len;
cout<<"\\n  UNFORMATED FUNCTIONS";
cout<<"\\n Enter the string: ";
cin.getline(x,30);
cout<<"\\n Entered string is: ";
len=strlen(x);
for(a=0;a<=len+1;a++)
{
 cout<<"\\n";
 cout.write(x,a);
}
getch();
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Inline function Using C++',
        coding: `<pre>#include &lt;iostream.h>
//using namespace std;
class operation
{
\tint a,b,add,sub,mul;
\tfloat div;
public:
\tvoid get();
\tvoid sum();
\tvoid difference();
\tvoid product();
\tvoid division();
};
inline void operation :: get()
{
\tcout << "Enter first value:";
\tcin >> a;
\tcout << "Enter second value:";
\tcin >> b;
}

inline void operation :: sum()
{
\tadd = a+b;
\tcout << "Addition of two numbers: " << a+b << "\\n";
}

inline void operation :: difference()
{
\tsub = a-b;
\tcout << "Difference of two numbers: " << a-b << "\\n";
}

inline void operation :: product()
{
\tmul = a*b;
\tcout << "Product of two numbers: " << a*b << "\\n";
}

inline void operation ::division()
{
\tdiv=a/b;
\tcout<<"Division of two numbers: "<< a/b <<"\\n" ;
}

int main()
{
\tcout << "Program using inline function\\n";
\toperation s;
\ts.get();
\ts.sum();
\ts.difference();
\ts.product();
\ts.division();
\treturn 0;
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Constructer and Desructer Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>
class byte
{
int bit;
int bytes;
public:
byte()
{
cout<<"\\n constructer invocked";
bit=64;
bytes=bit/8;
}
~byte()
{
cout<<"\\n Destructor invocked";
cout<<"\\n Bit="<&lt;bit;
cout<<"\\n Byte="<&lt;bytes;
}
};
int main()
{
clrscr();
cout<<"\\n\\t\\t constructer and Desructer";
byte x;
byte();
x.byte::byte();
getch();
return 0;
}</pre>`
    },
    {
        head: 'CPP',
        question: 'Single and Multilevel Inheritance Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>
class A1
{
protected:
char name[15];
int age;
};
class A2:public A1
{
protected:
float height;
float weight;
};
class A3:public A2
{
protected:
char gender[15];
public:
void getdata()
{
cout<<"enter name and age : ";
cin>>name>>age;
cout<<"height and weight : ";
cin>>height>>weight;
cout<<"enter gender : ";
cin>>gender;
}
void show()
{
cout<<"\\nname = "<&lt;name<<"\\nage = "<&lt;age;
cout<<"\\nweight = "<&lt;weight<<"\\nheight = "<&lt;height;
cout<<"\\ngender = "<&lt;gender;
}
};
void main()
{
clrscr();
A3 x;
x.getdata();
x.show();
getch();
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Stack Using C',
        coding: `<pre>#include&lt;stdio.h>

#include&lt;stdlib.h>

#define MAX 50 

int Top=-1, inp_array[MAX];
void Push();
void Pop();
void show();

int main()
{
int choice;
   
while(1)    
{
printf("\\nOperations performed by Stack");
printf("\\n1.Push the element\\n2.Pop the element\\n3.Show\\n4.End");
printf("\\n\\nEnter the choice:");
scanf("%d",&choice);
       
switch(choice)
{
case 1: Push();
  break;
case 2: Pop();
  break;
case 3: show();
  break;
case 4: exit(0);
           
default: printf("\\nInvalid choice!!");
}
}
}

void Push()
{
int x;
   
if(Top==MAX-1)
{
  printf("\\nOverflow!!");
}
else
{
  printf("\\nEnter element to be inserted to the stack:");
  scanf("%d",&x);
  Top=Top+1;
  inp_array[Top]=x;
}
}

void Pop()
{
if(Top==-1)
{
  printf("\\nUnderflow!!");
}
else
{
printf("\\nPopped element:  %d",inp_array[Top]);
Top=Top-1;
}
}

void show()
{

int i;

if(Top==-1)
{
printf("\\nUnderflow!!");
}
else
{
  printf("\\nElements present in the stack: \\n");
for(i=Top;i>=0;--i)
  printf("%d\\n",inp_array[i]);
}
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Queue Using C',
        coding: `<pre>#include &lt;stdio.h>
#include&lt;stdlib.h>
#define MAX 50
void insert();
void delete();
void display();
int queue_array[MAX];
int rear = - 1;
int front = - 1;
int main()
{
int choice;
while (1)
{
printf("1.Insert element to queue \\n");
printf("2.Delete element from queue \\n");
printf("3.Display all elements of queue \\n");
printf("4.Quit \\n");
printf("Enter your choice : ");
scanf("%d", &choice);
switch(choice)
{
case 1:
insert();
break;
case 2:
delete();
break;
case 3:
display();
break;
case 4:
exit(1);
default:
printf("Wrong choice \\n");
}
}
}
void insert()
{
int item;
if(rear == MAX - 1)
printf("Queue Overflow \\n");
else
{
if(front== - 1)
front = 0;
printf("Inset the element in queue : ");
scanf("%d", &item);
rear = rear + 1;
queue_array[rear] = item;
}
}
void delete()
{
if(front == - 1 || front > rear)
{
printf("Queue Underflow \\n");
return;
}
else
{
printf("Element deleted from queue is : %d\\n", queue_array[front]);
front = front + 1;
}
}
void display()
{
int i;
if(front == - 1)
printf("Queue is empty \\n");
else
{
printf("Queue is : ");
for(i = front; i <= rear; i++)
printf("%d ", queue_array[i]);
printf("\\n");
}
}</pre>`
    },
    {
        head: 'CPP',
        question: 'Sorting Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>

void bubblesort(int[],int);
void main()
{
int arr[10],num,i;
clrscr();
printf("\\n  SORTING \\n");
printf("\\n Enter number of elements: ");
scanf("%d",&num);
printf("\\n Enter the array elements:\\n");
for(i=0;i&lt;num;i++)
scanf("\\n %d",&arr[i]);
printf("\\n BUBBLE SORT \\n");
bubblesort(arr,num);
getch();
}
void bubblesort(int a[],int num)
{
int i,j,k,temp;
printf("\\n unsorted: ");
for(k=0;k&lt;num;k++)
{
printf(" %d",a[k]);
}
for(i=0;i&lt;num;i++)
{
for(j=0;j&lt;num-1;j++)
{
if(a[j]>a[j+1])
{
temp=a[j];
a[j]=a[j+1];
a[j+1]=temp;
}
}
printf("\\n After pass %d: ",i);
for(k=0;k&lt;num;k++)
{
printf("%d",a[k]);
}
}
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'operator overloading Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>

class num
{
private:
int a,b,c,d;
public:
num(int j,int k,int m,int l)
{
a=j;
b=k;
c=m;
d=l;
}
void show(void);
void operator ++();
};
void num::show()
{
cout<&lt;" A="<&lt;a <&lt;" B="<&lt;b <&lt;" C="<&lt;c <&lt;" D="<&lt;d;
}
void num::operator++()
{
++a;
++b;
++c;
++d;
}
int main()
{
clrscr();
cout<<"\\n OPERATOR OVERLOADING";
num x(3,2,5,7);
cout<<"\\n\\n Before increment of x :";
x.show();
++x;
cout<<"\\n After increment of x  :";
x.show();
getch();
return 0;
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Function overloading Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>

int sqr(int);
float sqr(float);
main()
{
clrscr();
int a=15;
float b=2.5;
cout<<"FUNCTION OVERLOADING \\n";
cout<<"\\n square(15)= "<&lt;sqr(a)<&lt;"\\n";
cout<<"\\n square(2.5)= "<&lt;sqr(b)<&lt;"\\n";
getch();
return 0;
}
int sqr(int s)
{
return(s*s);
}
float sqr(float j)
{
return(j*j);
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Compare and Concadination string Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>
#include&lt;string.h>

class string
{
private:
char str1[15],str2[15],str[30];
public:
void read();
void concat();
void cmpr();
};
void string::read()
{
clrscr();
cout<&lt;"\\n STRING FUNCTIONS \\n\\n";
cout<&lt;"\\n Enter the first string: ";
cin>>str1;
cout<&lt;"\\n Enter the second string: ";
cin>>str2;
}
void string::cmpr()
{
if(!strcmp(str1,str2))
{
cout<&lt;"\\n Both strings are equal"<&lt;endl;
}
else
{
cout<&lt;"\\n Both strings are different"<&lt;endl;
}
}
void string::concat()
{
strcpy(str,str1);
strcat(str,str2);
strcat(str1,str2);
cout<&lt;"\\n After concadination: "<&lt;str<&lt;endl;
}
void main()
{
clrscr();
string x;
x.read();
x.cmpr();
x.concat();
getch();
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Friend function Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>

class complex
{
float real,image;
public:
complex()
{
real=image=0;
}
complex(float r,float i)
{
real=r;
image=i;
}
friend complex operator-(complex c)
{
c.real=-c.real;
c.image=-c.image;
return c;
}
void display()
{
cout<&lt;"\\n real="<&lt;real;
cout<&lt;"\\n image="<&lt;image;
}
};
void main()
{
clrscr();
cout<&lt;"\\n  FRIEND FUNCTION \\n";
complex c1(1.5,2.5),c2;
c1.display();
c2=-c1;
cout<<"\\n\\n After negation \\n";
c2.display();
getch();
}
</pre>`
    },
    {
        head: 'CPP',
        question: 'Binary Search Using C++',
        coding: `<pre>#include&lt;iostream.h>
#include&lt;conio.h>

int binarySearch(int arr[], int l, int r, int x)
{
if (r >= l) {
int mid = l + (r - l) / 2;

if (arr[mid] == x)
return mid;

if (arr[mid] > x)
return binarySearch(arr, l, mid - 1, x);

return binarySearch(arr, mid + 1, r, x);
}

return -1;
}

int main(void)
{
int arr[] = { 2, 3, 4, 10, 40 };
int x;
clrscr();
cout<<"Enter the Element:";
cin>>x ;
int n = sizeof(arr) / sizeof(arr[0]);
int result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? cout << "Element is not present in array"
\t\t: cout << "Element is present at index " << result;
return 0;
}
</pre>`
    }
];
