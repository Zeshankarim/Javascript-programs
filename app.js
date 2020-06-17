// // A Smarter Way To Learn Javascript (BOOK)?
// //              CHAPTER 1----------------------------------------------------------------------------------------------

// // 1. Write a script to greet your website visitor using JS alert box. 

// alert("Welcome");

// // 2. Write a script to display following message on your web page: 

// alert("Error! Please enter a valid password.");

// // 3. Write a script to display following message on your web page: (Hint : Use line break) 

// alert("Welcome to js land..\n Happy Coding! ");

// // 4. Write a script to display following messages in sequence: 

// alert("Welcome to JS land..");
// alert("Happy coding! \n  Prevent this page from creating additional dialogs.");


// // 5. Generate the following message through browser’s developer console: 

// var message = "Hello.. I can run JS through my web browser's console";
// alert(message);


// // CHAPTER 2 ---------------------------------------------------------------------------
// // Q1 to Q8 Answers
// var username;
// var myName="Zeshan karim";
// var message;
// message="Hello World";
// alert(message);

// var name="Zeshan";
// alert(name);
// var age = "15 years old";
// alert(age);
// var course="Certified Mobile Application Development";
// alert(course);

// var sentense = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(sentense);

// var email="example@example.com";
// alert("My email address is " +email);

// var book= "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book" + book);

// var yah = "Yah! I can write HTML content through JavaScript";
// document.write(yah);

// alert('"_________@&$#_________"');

// // CHAPTER 3  --------------------------------------------------------------------------
// // Q1 to Q4 Answers
// var age="22";
// alert("I am "+ age + " years old");
//  var visitors=10;
//  alert("You have visited this site " + visitors + " times");
//  var birthYear=1997;
//  document.write('My birth year is ' + birthYear  + ' <br/> Data type of my declared variable is number'); 

//  // CHAPTER 4 --------------------------------------------------------------------------
// // Answer Q1 to Q3
// var a,b,c;

// // legal
// var c;
// var d;
// var e;
// var f;
// var g;

// illegal
// var 1a;
// var 2a;
// var #a;
// var @#a;
// var !#a;
// var ist="numbers";
// var second="$ and_";
// var third=".For example: ";
// var forth="$my_1st variable";
// var dolr="$ or_";
// var example="For example : $name ";
// var nam="_name or name";

 
// document.write("Rules for naming JS variables <br/>"); 
// document.write("Variable names only contain" + ist +second + third + " and "+ forth);
// document.write("<br/> Variables must begin with a letter"+ dolr + example+ nam +"<br/>");
// document.write(" Variable names are case sensitive <br/>");
// document.write("Variable names should not be JS keyword");


// // chapter 5   --------------------------------------------------------------
// var a=3;
// var b=5;
// var c=a+b;
// var d=a*b;
// var e=a/b;
// var f=a%b;
// document.write("Sum of " + a +" and "+ b +" is "+ c +"<br/>");
// document.write("Multiplication of " + a +" and "+ b +" is "+ d + "<br/>");
// document.write("Division of " + a +" and "+ b +" is "+ e + "<br/>");
// document.write("Modlus of " + a +" and "+ b +" is "+ f);

// var variable="zeshan";
// document.write("<br/> Value after variable declaration is: "+variable);
// var varr=5;
// document.write(" <br/> Initial value : " + varr);
// var varrr= varr+1;
// document.write(" <br/> Value after increment is  : " + varrr);
// var varrrr= varrr+7;
// document.write("<br/>Value after addition is: " + varrrr);
// var dec=varrrr-1;
// document.write("<br/>Value after decrement is: " + dec);
// var remi=dec %3;
// document.write("<br/>The remainder is: " + remi);

// // Q4
// var ticketPrice=600;
// var buyingTickets=5;
// var totall=ticketPrice*buyingTickets;
// document.write(" <br/>Total cost to buy"+ buyingTickets +" tickets to a movie is "+ totall+"PKR");
// // Q5
// document.write("<br/>Table of 4");
// var firstNum=4;
// var secondd=1;
// var thirdd=2;
// var fourthh=3;
// var fifthh=4;
// var sixthh=5;
// var seventh=6;
// var eighthh=7;
// var ninthh=8;
// var tenthh=9;
// var elevethh=10;
// document.write("<br/>"+ firstNum + "x" + secondd + "=" + secondd*firstNum );
// document.write("<br/>"+ firstNum + "x" + thirdd+ "=" + thirdd*firstNum );
// document.write("<br/>"+ firstNum + "x" + fourthh+ "=" + fourthh*firstNum );
// document.write("<br/>"+ firstNum + "x" + fifthh+ "=" + fifthh*firstNum );
// document.write("<br/>"+ firstNum + "x" + sixthh+ "=" + sixthh*firstNum );
// document.write("<br/>"+ firstNum + "x" + seventh+ "=" + seventh*firstNum );
// document.write("<br/>"+ firstNum + "x" + eighthh+ "=" + eighthh*firstNum );
// document.write("<br/>"+ firstNum + "x" + ninthh+ "=" + ninthh*firstNum );
// document.write("<br/>"+ firstNum + "x" + tenthh+ "=" + tenthh*firstNum );
// document.write("<br/>"+ firstNum + "x" + elevethh+ "=" + elevethh*firstNum );
// // Q6

// var calsius=25;
// var foreheight=(calsius*9/5)+32;
// document.write("<br/>"+ calsius+" is "+foreheight);
// var forenhig=70;
// var C =(forenhig-32)*5/9;
// document.write("<br/>"+forenhig+" is " +C);
 
// // Q7
// var priceOfItem=650;
// var priceOfItem2=100;
// var orderdQuatity1=3;
// var orderdQuatity2=7;
// var shippigCharges=100;
// document.write("<br/>Shipping cart <br/>")
// document.write("<br/> price of item 1 is"+ priceOfItem);
// document.write("<br/>Quantity of item 1 is "+ orderdQuatity1)
// document.write("<br/>price of item 2 is"+priceOfItem2 );
// document.write("<br/>Quantity of item 1 is"+ orderdQuatity2);
// document.write("<br/>Shipping charges "+ shippigCharges)
// tottal=priceOfItem*orderdQuatity1+priceOfItem2*orderdQuatity2+shippigCharges;
// document.write("<br/> Total cost of order is "+tottal+"<br/>");
// // Q8
// var totalMarks=980;
// var obtmarks=804;
// var percentage=obtmarks/totalMarks*100;
// document.write("Total marks: "+totalMarks+"<br/>"+"Marks obtain : "+obtmarks+"<br/>"+"Percetage: "+  percentage);

// // Q9
// var us$= 10*104.80 ;
// var riyal=25 *28;
// var convert=riyal+us$;
// document.write("<br/> Total currecy in PKR "+convert);


// // Q10
// var first=10;
// var sec= first+5*10/2;
// document.write(sec);
// // Q11
// var currentYear=2020;
// var birthYear=1997;
// var age=currentYear-birthYear;
// document.write("<br/>current Year:"+currentYear+"<br/> Birth year"+birthYear+"<br/> Your age is "+ age);

// // Q12
// var radius=20;
// var circum=2*3.142*radius;
// document.write("<br/> the Circumferece of a circle is "+circum);
// var area=3.142*radius;
// document.write("<br/> the area is "+area); //valur depend on value of r2

// // Q13
// var snack="chocolate chip"
// var age=15;
// var maxage= 65;
// var perDay=3;
// var need=(maxage-age)*perDay;
// document.write( "<br/>You will need "+need+" "+snack+" to last you until the ripe old age of " + maxage);

// // Chapter 6-9 -------------------------------------
// // Q1
// var a=prompt("Enter a number","Number");

// document.write("<br/>The value of a is: "+ a+ "<br/");


// document.write("<br/> <br/>The value of ++a is: "+ ++a);
// document.write("<br/>The value of a is: "+ a);

// document.write("<br/> <br/>The value of a++ is: "+ a++);
// document.write("<br/>The value of a is: "+ a);

// document.write("<br/> <br/>The value of --a is: "+ --a);
// document.write("<br/>The value of a is: "+ a);

// document.write("<br/> <br/>The value of a-- is: "+ a--);
// document.write("<br/>The value of a is: "+ a);

// // Q2
// var a=2,b=1;
// document.write("<br/>"+ --a +"<br/>");
// document.write("<br/>"+ --a- --b+ ++b +"<br/>");
// document.write("<br/>"+  --a- --b+ ++b+b-- +"<br/>");

// var result=--a- --b+ ++b+b--;
// document.write("<br/>"+result );

// // Q3

// var name=prompt("Enter your Name","Name")
// document.write("<br/> Welcome "+ name);

// // Q5
// var input=prompt("Enter a umber",5)
// document.write("<br/>"+input*1+"<br/>");
// document.write(input*2+"<br/>");
// document.write(input*3+"<br/>");
// document.write(input*4+"<br/>");
// document.write(input*5+"<br/>");
// // Q6  +sign convert integer
// var  sub1=prompt("Enter a 1st  subject name","English");
// var marks1=+prompt("Enter Obtain Marks");
// var  sub2=prompt("Enter a Secod subject name","math");
// var marks2=+prompt("Enter Obtain Marks");
// var  sub3=prompt("Enter a third subject name","Urdu");
// var marks3=+prompt("Enter Obtain Marks");

// var totalMarks=100;


// document.write("<br/>"+"Subj "+"    "+ "T.M"+"    "+"O.M"+ "    "+"%");
// document.write("<br/>"+sub1+" " +totalMarks+" "+marks1+ " "+marks1/100*100);
// document.write("<br/>"+sub2+" " +totalMarks+" "+marks2+ " "+marks2/100*100);
// document.write("<br/>"+sub3+" " +totalMarks+" "+marks3+ " "+marks3/100*100);

// var totalMarkks = 300;
// var totalObtMarkss = marks1+marks2+marks3;

// var totalper = totalObtMarkss/totalMarkks*100;
// document.write("<br/>"+"total "+totalMarkks+" "+totalObtMarkss +" " +totalper);


// // Chapter 9-11
// // Q1
// var cityname=prompt("Enter a City name");
// if (cityname=== "karachi"){
// document.write("Welcome to city of light");
// }
// // Q2
// var gender=prompt("Enter your gender");
// if(gender==="Male"){
//     document.write("Good Moring Sir");
// }
// if(gender==="Female"){
// document.write("Good morning Ma'am ");
// }
// // Q3
// var color=prompt("Enter the colour of traffic road sigal");
// if(color==="red"){
//     document.write("Must stop");
// }
// else if(color==="yellow"){
//     document.write("Ready to move");
// }
// else if(color==="green"){
//     document.write("Move now");
// }
// else{
//     document.write("Enter correct color");
// }


// // Q4
// var fuel=+prompt("Enter your remaining fuel");
// if(fuel===0.25){
//     document.write("Please refill the fuel in your car");
// }

// // Q5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost) {
//         alert("The cost equals");
//     }
//     if (true) {
//         alert("True");
//     }
//     if (false) {
//         alert("False");
//     }
//     var b = 82;
//     if (b++ === 83) {
//         alert("given condition for variable b is true");
//     } \
//     var c = 12;
//     if (c++ === 13) {
//         alert("condition 1 is true");
//     }
//     if (c === 13) {
//         alert("condition 2 is true");
//     }
//     if (++c < 14) {

//         alert("condition 3 is true");
//     }
//     if (c === 14) {
//         alert("condition 4 is true");
//     }
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost) {
//         alert("The cost equals");
//     }
//     if (true) {
//         alert("True");
//     }
//     if (false) {
//         alert("False");
//     }  

    
// // Q6
// var chemistry=+prompt("Enter your chemistry marks");
// var math=+prompt("Enter your Math marks");
// var english=+prompt("Enter your Eglish marks");
// var totalObt=chemistry+math+english;
// var totalMarks=300;
// document.write("Total marks "+totalMarks+"<br/>");
// document.write("Obtain marks "+totalObt+"<br/>");
// var percentage=totalObt/totalMarks*100;
// document.write("Percentage "+percentage+"<br/>");

// if(percentage >=80){
//     document.write("Grade : A-one <br/> Remarks : Excellent")
// }
// if(percentage >=70){
//     document.write("Grade : A <br/> Remarks : Good")
// }
// if(percentage >=60){
//     document.write("Grade : B <br/> Remarks : You need to improve")
// }
// else{
//     document.write("Grade : fail <br/> Remarks : Sorry")

// }

// // Q7
// var guess=+prompt("Enter your secret number 0-10");
// if(guess===5){
//     document.write('"Bingo! Correct answer"');
// }
// else if(guess===4){
//     document.write('“Close enough to the correct answer”');
// }
// else{
//     document.write('“No match”');

// }

// // Q8
// var num=+prompt("Enter a number");
// var modlus=num%3;
// if (modlus===0){
//     document.write(" completly divisible by 3")
// }
// else{
//     document.write(" It is not divisible by 3")
// }

// // Q9
// var num=+prompt("Enter a number");
// var modlus=num%2;
// if (modlus===0){
//     document.write("Even number")
// }
// else{
//     document.write("Odd number")
// }

// // Q10
// var t=+prompt("Enter a Temperature value");
// if (t>40){
//     document.write("Its too hot outside");
// }
// else if (t>30){
//     document.write("The weather today is Normal");
// }
// else if (t>20){
//     document.write("Today's weather is cool");
// }
// else if (t>10){
//     document.write("OMG! Today’s weather is so Cool");
// }


//  Q11

// var first=+prompt("Enter first num");
// var second=+prompt("Enter second num");
// var operatur=prompt(" Operation (+, -, *, /, %) ");
// if(operatur==="+"){
//     document.write(first+second);
// }
// else if(operatur==="*"){
//     document.write(first*second);
// }
// else if(operatur==="/"){
//     document.write(first/second);
// }
// else if(operatur==="%"){
//     document.write(first%second);
// }

// chapter 12-13 ------------------------------------------------------------

// 1. Write a program that takes a character (number or string) in 
// a variable & checks whether the given input is a number, uppercase
//  letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

// Ans
// 

// Q2
// var num1=+prompt("enter first number");
// var num2=+prompt("enter second number");
// if(num1>num2){
// 	document.write(num1+" is larger");
// }
// else if(num2>num1){
// 	document.write(num2+" is larger");
// }

// Q3
// var first=+prompt("Enter a num");
// if(first<0){
// 	document.write("number is Negtive");
// }
// if(first>0){
// 	document.write("number is possitive");
// }
// if(first===0){
// 	document.write("number is Zero");
// }

// // Q4
// var char=prompt("Enter a character for checking vovel ");
// if(char==="a" || char==="e" || char==="i" || char==="o" ||char==="u" ){
// 	document.write("True it is true");
// }
// else{
// 	document.write("False");

// }

// Q5
// var password=12345;
// var guess=+prompt("Enter password");
// if (guess===""){
// 	document.write(" Please enter your password");
// }
// if (guess===password){
// 	document.write( "Correct! The password you entered matches the original password");
// }
// else{
// 	document.write("Incorrect password");
// }

// // Q6
// var greeting;
// var hour = 13; 
// if (hour < 18) {
// 	greeting = "Good day";
//  }
//  else { 
// 	 greeting = "Good evening"; 
// }
// // Q7 
// var time=+prompt("enter a time");
// if(time>=0000 && time<1200){
// 	document.write("Good mornig");
// }
// else if(time>=1200 && time<1700){
// 	document.write("Good Afternoon!");
// }
// else if(time>=1700 && time<2100){
// 	document.write("Good Evening!");
// }
// else if(time>=2100 && time<=2359){
// 	document.write("Good night!");
// }

// // Chapter 14-16 ----------------------------------------------------------
// Q1-Q6
// var names=[];
// var name1=[];
// var array=["karachi", "Lahore","Multan"];
// var array1=[1,2,3,4];
// var boolean=[1.1,1.2,1.3];
// var mixedarray=[1,3,"karachi","lahore",2];
// // Q7
// var education=["CSS","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write(education[0] +"<br/>");
// document.write(education[1] +"<br/>");
// document.write(education[2] +"<br/>");
// document.write(education[3] +"<br/>");
// document.write(education[4] +"<br/>");
// document.write(education[5] +"<br/>");
// document.write(education[6] +"<br/>");
// document.write(education[7] +"<br/>");

// Q8
// var student=["Michael","John","Tony"];
// var totalMarks=500;
// var marks=[320,230,480]
// var percentage=marks[0]/totalMarks*100;
// var percentage1=marks[1]/totalMarks*100;
// var percentage2=marks[2]/totalMarks*100;

// document.write("Score of "+ student[0]+" is "+marks[0]+"."+"Percentage: "+percentage+"%");
// document.write("<br/>Score of "+ student[1]+" is "+marks[1]+"."+"Percentage: "+percentage1+"%");
// document.write(" <br/>Score of "+ student[2]+" is "+marks[2]+"."+"Percentage: "+percentage2+"%");

// Q9

// var colorname=["Red","Blue","Green","White"];
// var choice=prompt(" What color you want to add to the beginning");
// colorname.unshift(choice);
// document.write("<br/>"+colorname);
// var choice1=prompt(" What color you want to add to the end");
// colorname.push(choice1);
// document.write("<br/>"+colorname);
// var choice2=prompt(" Add two more colors in the begning of array. comma sperated ");
// colorname.unshift(choice2);
// document.write("<br/>"+colorname);
// colorname.shift();
// document.write("<br/>"+colorname);
// colorname.pop();
// document.write("<br/>"+colorname);
// var user=prompt(" which index you wants to add a color & color name.");
// colorname.splice(2,0,"purple");
// document.write("<br/>"+colorname);
// colorname.splice(2,2)
// document.write("<br/>"+colorname);


// Q10
// var arr=[320,230,480,120];

// Q11
// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var slectedCities=cities.slice(2,4);
// document.write(slectedCities);

// Q12
// var arr = ["This ", " is ", " my ", " cat"];
// document.write(arr[0]+arr[1]+arr[2]+arr[3]);

// Q13
// var devices=["keyboard","mouse","printer","monitor"];
// document.write("Out:<br/>"+devices[0]+"<br/>"+"Out:<br/>"+devices[1]+"<br/>"+"Out:<br/>"+devices[2]+"<br/>"+"Out:<br/>"+devices[3]+"<br/>");

// Q14
// var devices=["keyboard","mouse","printer","monitor"];
// document.write("Out:<br/>"+devices[3]+"<br/>"+"Out:<br/>"+devices[2]+"<br/>"+"Out:<br/>"+devices[1]+"<br/>"+"Out:<br/>"+devices[0]+"<br/>");

// Q15
// var phoe=[ Apple, Samsung, Motorola, Nokia, Sony, Haier];


// // Chapter 17-20 ---------------------------------------------------------------
// Q1 
// var multidimention=[  [],[],[] ];

// Q2
// var multi=[ [0,1,2,3],[1,0,1,2],[2,1,0,1] ]
// for(var i=0;i<=3;i++){
//     for(var x=1;x<=3;x++){
//     document.write(multi[i][x]+" ");
//     }
//     document.write("<br/>");
// }

// Q3
// for(a=1;a<=10;a++){
// document.write(a+"<br/>");
// }

// Q4
// var num1=+prompt("Enter a number to to show its multiplication table");
// var num2=+prompt("Enter length multiplication table");
// for(var a=1;a<=num2;a++){
//     document.write(num1+" x "+a+ " = "+ +num1*a+"<br>");
// }

// Q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(a=0;a<=4;a++) {
//     document.write("<br/>"+fruits[a]+"<br>");
//     document.write("<br>Element at index " +a+" is "+fruits[a])
// }

// Q6 a
// for(a=1;a<=15;a++){
//     document.write(a+",");
// }

// Q6 b
// for(var a=10;a>=1;a--){
//     document.write(a+",");
// }

// Q6 c
// for(var a=0;a<=20;a+=2){
//     document.write(a+",");
// }

// Q6 d
// for(var a=1;a<=20;a+=2){
//         document.write(a+",");
//     }

// Q6 e
// for(var a=2;a<=20;a+=2){
//         document.write(a+"k,");
//     }

// Q7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]; 
// var avalable=prompt("Welcome to ABC bakery,What do you want to order sir/ma'am");
//     if(avalable===A[0] || avalable===A[1] ||avalable===A[2] || avalable===A[3] || avalable===A[4] ){
//     document.write("<br>"+avalable+" is available at index in our bakery <br>");    
//     } 
// else{
//     document.write("We are sorry."+avalable+" is not available in our bakery");
// }

// Q8
// var A = [24, 53, 78, 91, 12];
// if(A[0]>A[1]){
//     A.splice(1,2);
// }
// else if(A[1]>A[0]){
//     A.splice(0,1);
// }
// if(A[0]>A[1]){
//     A.splice(1,2);

// }
// else if(A[1]>A[0]){
//     A.splice(0,1);
// }
// if(A[0]>A[1]){
//     A.splice(1,2);
// }
// else if(A[1]>A[0]){
//     A.splice(0,1);
// }
// if(A[0]>A[1]){
//     A.splice(1,2);
// }
// else if(A[1]>A[0]){
//     A.splice(0,1);
// }
// document.write("Largest number is "+A);

// Q9
// var A = [24, 53, 78, 91, 12];
// if(A[0]<A[1]){
//     A.splice(1,2);
// }
// else if(A[1]<A[0]){
//     A.splice(0,1);
// }
// if(A[0]<A[1]){
//     A.splice(1,2);
// }
// else if(A[1]<A[0]){
//     A.splice(0,1);
// }
// if(A[0]<A[1]){
//     A.splice(1,2);
// }
// else if(A[1]<A[0]){
//     A.splice(0,1);
// }
// if(A[0]<A[1]){
//     A.splice(1,2);
// }
// else if(A[1]<A[0]){
//     A.splice(0,1);
// }
// document.write("Smallest number is "+A);

// Q10
// for(var a=5;a<=100;a+=5){
//     document.write(a+", ");
// }