//ctrl+l to clear on console
// if a = 1.99999999999999999999 then a is updated as a = 1
// ** is the power, exponential operator in JS
//NaN is a number type represents somthing which is not a valid number
//eg: 0/0 = NaN
//priority : () -> ** -> * / % -> + -
//it is possible to change type of any variable in js unlike other languages
//js is dynamically typed for the above reason
//typescript is statically typed thus different form js,hence it's variable's type can't be
//changed
//typescript is a strict type of js
//javaScript is case sensitive i.e a and A are different
console.log("hello world");
let a = 9;
b = 8;
console.log(a+b,"hello world");
let pencil = 10;
let eraser = 5;
let output = "the total price is " + pencil+eraser + "rupees";
console.log(output);
//Template Literals: backtick are used when we have
//to print a mixture of data types eg:
let ans = `the total orice is :${a} and the water is ${44}`;
console.log(ans);
//${} anything inside it is first calculated and
//then embdded into string
console.log(4>=4);
let x = '6';
let y = 6;
console.log(x == y);
//comparison operator ignore the type of the 
// value 
//for strict comparison: in which we have to 
//compare the type also we will use ===
console.log(x===y)
console.log("NOTICE:");
console.log(null == undefined);
console.log(null === undefined);
console.log('a' > 'A');
//conditional statements:
if(x === y)
{
    console.log("x and y are equal strictly");
}
else
{
    console.log("x and y are not strictyly equal");
}
//traffic light system:
let color = "Red";
if(color == "red")
{
    console.log("stop");
}
else if(color == "yellow")
{
    console.log("ready");
}
else if(color == "green")
{
    console.log("move");
}
let str1 = "aaa";
if(str1[0] == 'a' && str1.length == 3)
{
    console.log("good string");
}
else
{
    console.log("Not a good string");
}
//truthy and falsy value:
//every entity of js has it's true or false value
//associated with it
console.log("TRUTHY AND FALSY VALUES:");
if("")
{
    console.log("true value");
}
else
{
    console.log("false value");
}
if("dfjd")
{
    console.log("true value");
}
else
{
    console.log("false value");
}
if(null)
{
    console.log("true value");
}
else
{
    console.log("false value");
}
//by default false,0,On(BigInt value),null,undefined,"",NaN has false value everything else is true
//SWITCH STATEMENT:
color = "green";
switch(color)
{
    case "red": console.log("break");break;
    case "green": console.log("move"); break;
    case "yellow": console.log("start"); break;
    default : console.log("nothing");
}
let day = 2;
switch(day)
{
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
}
//ALERTS AND PROMPT AND CONSOLE.ERROR AND CONSOLE.WARN:
console.error("this is an error");
console.warn("this is an warning");

let firstname = prompt("Enter your Name");
let age = prompt("Enter your age");
alert(`${firstname} is ${age} years old`);
