//object literals:
let student = {
    name:"name",
    class:"12th",
    1:"1",//js automatically converts key into string we can also use number as key
    null:"3",
    address:{ //nested object
       city:"ambala",
       state:"haryana"
    }
};
console.log(student["name"]);
console.log(student.class);
let prop = "name";
console.log(student[prop]);
console.log(student.prop);
console.log(student[1]); // here 1 is first converted into string and then key is searched
// console,log(student.1) it will give error
console.log(student.null) //it will work
//adding changing values:
student["roll"] = 12; //adding value
student.name = "simran" //override,changing value
student[1] = [1,2,3];
//to delete
delete student.null;
console.log(student);
console.log(student["address"]["city"]);
console.log(student.address["state"]);


//ARRAY OF OBJECTS:
const info = [{name:"simran",class:"12th"},{name:"yash",class:"10th"}];
console.log(info[0]["class"]);
console.log(info[1].class);

//Math object
//random number between 20 to 50 50-20+1 = 31 max-min+1
let random = Math.floor(Math.random()*30)+20; //Math.random() is never equal to 1
console.log(random);

//FUNCTIONS: lexical,global,local scope:
function outterfun()
{
    let x = 1;
    function innerfun()
    {
        console.log(x); //this x has lexical scope
        console.log(y);
    }
    let y = 2;// it is possible to access y if it is declared above the function call
    innerfun();
    //let y = 2; now it will give error as it is not possible to access y as it is declared after
    //function call
    //hoisting 
}
outterfun();
let greet = "hello";//global scope
function changegreet(greet)
{
    greet = "namaste";//local scope
    console.log(greet);
    function changeagain()
    {
        console.log(greet);//lexical scope
    }
};
console.log(greet);
changegreet(greet);

//Funciton expression
let sum = function(a,b)
{
    return a+b;
}
console.log(sum(1,3)); //like a normal variable all things are possible to do with function expressions also

//Higher order function:
function multiplegreet(func,n) //func is a callback
{
    for(let i = 0;i < n; i++)
    {
        func();
    }
}
function greet1()
{
    console.log("hello");
}
let greet2 = function()
{
    console.log("namste");
}
multiplegreet(greet1,5);
multiplegreet(greet2,2);
multiplegreet(function(){console.log("hiii")},3);

//METHODS: actions performed on objects: function of objects

//THIS in JS:
//method of an object can't directly access the variables of that object
//so we have to use 'this' keyword which refer to the calling object:
student.fun1=function(){
   console.log(this.class);
   console.log(this);
}

student.fun1();
console.log(this);
window.multiplegreet(greet1,2);

//try catch:
try
{
    console.log(a);
}
catch(err)
{
    console.log("ERROR FOUND:");
    console.log(err);
}

//Arrow functions:
const sum1 = (a,b)=>{
    return a+b;
}
console.log(sum1(2,3));
const cube = n=>{return n*n*n}; //IN CASE OF SINGLE ARGUMENT ONLY: paranthesis are optional
console.log(cube(2));
const fun1 = ()=>{console.log("using arrow funcitons")};

//Implicit return in Arrow function:
//in case arrow function is only returning something then we can write value only it will be returned implicitly
const square = n =>(n*n); //curly braces are changed with paranthesis
console.log(square(5));

//setTimeout function: inbuilt function of window object
setTimeout(()=>{console.log("set timeout")},4000); //time is taken in second 4000 second

//setInterval: it will repeat the function
let id = setInterval(()=>{console.log("set interval"),100});
// //HOW TO STOP IT:
// console.log("id = ",id);

function f1(x)
{
    console.log(x);
}
function f2()
{
    let x = 4;
    f1(x);
}
function f3()
{
    let x = 6;
    f1(x);
}
if(1==2)
{
    f2();
}
else{
    f3();
}
clearInterval(id);

//THIS WITH ARROW FUNCTION:
student.fun2 = function(){
    console.log(this);
    setTimeout(() => {
        console.log("for set time out in object's function with arrow function",this) //this is student object for arrow function this is parent, settimeout is window's object called inside student thus parent is student thus this is student object
    }, 2000);
};
student.fun3 = function()
{
    console.log(this);
    setTimeout(function(){
        console.log("for set time out in object's function with normal function",this); //this is window object as for normal function this is caller object caller object for settimeout is window object
    }, 2000);
};

function fun4()
{
    console.log(this)
    setTimeout(() => {
        console.log("for set time out ",this)
    }, 2000);
}; 
student.fun2();
student.fun3();
fun4();
//for normal function this refers to caller object, for arrow function this refers to parent of caller object:
