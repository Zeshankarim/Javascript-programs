// A Smarter Way To Learn Javascript (BOOK)?
//              CHAPTER 1----------------------------------------------------------------------------------------------

// 1. Write a script to greet your website visitor using JS alert box. 

alert("Welcome");

// 2. Write a script to display following message on your web page: 

alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web page: (Hint : Use line break) 

alert("Welcome to js land..\n Happy Coding! ");

// 4. Write a script to display following messages in sequence: 

alert("Welcome to JS land..");
alert("Happy coding! \n  Prevent this page from creating additional dialogs.");


// 5. Generate the following message through browser’s developer console: 

var message = "Hello.. I can run JS through my web browser's console";
alert(message);


// CHAPTER 2 ---------------------------------------------------------------------------
// Q1 to Q8 Answers
var username;
var myName="Zeshan karim";
var message;
message="Hello World";
alert(message);

var name="Zeshan";
alert(name);
var age = "15 years old";
alert(age);
var course="Certified Mobile Application Development";
alert(course);

var sentense = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(sentense);

var email="example@example.com";
alert("My email address is " +email);

var book= "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + book);

var yah = "Yah! I can write HTML content through JavaScript";
document.write(yah);

alert('"_________@&$#_________"');

// CHAPTER 3  --------------------------------------------------------------------------
// Q1 to Q4 Answers
var age="22";
alert("I am "+ age + " years old");
 var visitors=10;
 alert("You have visited this site " + visitors + " times");
 var birthYear=1997;
 document.write('My birth year is ' + birthYear  + ' <br/> Data type of my declared variable is number'); 

 // CHAPTER 4 --------------------------------------------------------------------------
// Answer Q1 to Q3
var a,b,c;
// legal
var c;
var d;
var e;
var f;
var g;
// illegal
// var 1a;
// var 2a;
// var #a;
// var @#a;
// var !#a;
var ist="numbers";
var second="$ and_";
var third=".For example: ";
var forth="$my_1st variable";
var dolr="$ or_";
var example="For example : $name ";
var nam="_name or name";

 
document.write("Rules for naming JS variables <br/>"); 
document.write("Variable names only contain" + ist +second + third + " and "+ forth);
document.write("<br/> Variables must begin with a letter"+ dolr + example+ nam +"<br/>");
document.write(" Variable names are case sensitive <br/>");
document.write("Variable names should not be JS keyword");


// chapter 5   --------------------------------------------------------------
var a=3;
var b=5;
var c=a+b;
var d=a*b;
var e=a/b;
var f=a%b;
document.write("Sum of " + a +" and "+ b +" is "+ c +"<br/>");
document.write("Multiplication of " + a +" and "+ b +" is "+ d + "<br/>");
document.write("Division of " + a +" and "+ b +" is "+ e + "<br/>");
document.write("Modlus of " + a +" and "+ b +" is "+ f);

var variable="zeshan";
document.write("<br/> Value after variable declaration is: "+variable);
var varr=5;
document.write(" <br/> Initial value : " + varr);
var varrr= varr+1;
document.write(" <br/> Value after increment is  : " + varrr);
var varrrr= varrr+7;
document.write("<br/>Value after addition is: " + varrrr);
var dec=varrrr-1;
document.write("<br/>Value after decrement is: " + dec);
var remi=dec %3;
document.write("<br/>The remainder is: " + remi);

// Q4
var ticketPrice=600;
var buyingTickets=5;
var totall=ticketPrice*buyingTickets;
document.write(" <br/>Total cost to buy"+ buyingTickets +" tickets to a movie is "+ totall+"PKR");
// Q5
document.write("<br/>Table of 4");
var firstNum=4;
var secondd=1;
var thirdd=2;
var fourthh=3;
var fifthh=4;
var sixthh=5;
var seventh=6;
var eighthh=7;
var ninthh=8;
var tenthh=9;
var elevethh=10;
document.write("<br/>"+ firstNum + "x" + secondd + "=" + secondd*firstNum );
document.write("<br/>"+ firstNum + "x" + thirdd+ "=" + thirdd*firstNum );
document.write("<br/>"+ firstNum + "x" + fourthh+ "=" + fourthh*firstNum );
document.write("<br/>"+ firstNum + "x" + fifthh+ "=" + fifthh*firstNum );
document.write("<br/>"+ firstNum + "x" + sixthh+ "=" + sixthh*firstNum );
document.write("<br/>"+ firstNum + "x" + seventh+ "=" + seventh*firstNum );
document.write("<br/>"+ firstNum + "x" + eighthh+ "=" + eighthh*firstNum );
document.write("<br/>"+ firstNum + "x" + ninthh+ "=" + ninthh*firstNum );
document.write("<br/>"+ firstNum + "x" + tenthh+ "=" + tenthh*firstNum );
document.write("<br/>"+ firstNum + "x" + elevethh+ "=" + elevethh*firstNum );
// Q6

var calsius=25;
var foreheight=(calsius*9/5)+32;
document.write("<br/>"+ calsius+" is "+foreheight);
var forenhig=70;
var C =(forenhig-32)*5/9;
document.write("<br/>"+forenhig+" is " +C);
 
// Q7
var priceOfItem=650;
var priceOfItem2=100;
var orderdQuatity1=3;
var orderdQuatity2=7;
var shippigCharges=100;
document.write("<br/>Shipping cart <br/>")
document.write("<br/> price of item 1 is"+ priceOfItem);
document.write("<br/>Quantity of item 1 is "+ orderdQuatity1)
document.write("<br/>price of item 2 is"+priceOfItem2 );
document.write("<br/>Quantity of item 1 is"+ orderdQuatity2);
document.write("<br/>Shipping charges "+ shippigCharges)
tottal=priceOfItem*orderdQuatity1+priceOfItem2*orderdQuatity2+shippigCharges;
document.write("<br/> Total cost of order is "+tottal+"<br/>");
// Q8
var totalMarks=980;
var obtmarks=804;
var percentage=obtmarks/totalMarks*100;
document.write("Total marks: "+totalMarks+"<br/>"+"Marks obtain : "+obtmarks+"<br/>"+"Percetage: "+  percentage);

// Q9
var us$= 10*104.80 ;
var riyal=25 *28;
var convert=riyal+us$;
document.write("<br/> Total currecy in PKR "+convert);


// Q10
var first=10;
var sec= first+5*10/2;
document.write(sec);
// Q11
var currentYear=2020;
var birthYear=1997;
var age=currentYear-birthYear;
document.write("<br/>current Year:"+currentYear+"<br/> Birth year"+birthYear+"<br/> Your age is "+ age);

// Q12
var radius=20;
var circum=2*3.142*radius;
document.write("<br/> the Circumferece of a circle is "+circum);
var area=3.142*radius;
document.write("<br/> the area is "+area); //valur depend on value of r2

// Q13
var snack="chocolate chip"
var age=15;
var maxage= 65;
var perDay=3;
var need=(maxage-age)*perDay;
document.write( "<br/>You will need "+need+" "+snack+" to last you until the ripe old age of " + maxage);

