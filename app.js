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



