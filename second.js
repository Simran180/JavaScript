//DIFFERENCE BETWEEN JAVASCRIPT AND TYPESCRIPT:
//typescript is static typed and javascript is dynamic typed
//TEMPLATE LITERALS ARE USED TO ADD EMBEDDED EXPRESSIONS IN A STRING
//METHODS:
//1 TRIM METHOD:
let password = prompt("Enter your password");
let new_pass = password.trim();
console.log(password + " --> " + new_pass);
//trim method igonre the space at begining and ending of the string
//it creates the new string with the changes not changes the original string
//that is why string in js are IMMUTABLE i.e they can't be changed
let str = new_pass.toUpperCase();
console.log(new_pass);
console.log(str);
//indexOf: return first index of occurence
str = "kanika";
console.log(str.indexOf("nika"));
console.log(str.indexOf("pr"));
//METHOD CHAINING:
str = "   kanika    ";
let strs = str.trim().toUpperCase();
console.log(strs);
//SLICE:
let msg = "hello";
console.log(msg.slice(2));
console.log(msg.slice(1,3));// 1st,2nd indexes last index is not considered
//slice(-1) = slice(string.length()-1);
console.log(msg.slice(-2));
//REPLACE:
console.log(msg.replace("l","t"));
//first occurence is replaced
//REPEAT: to repeat n number of times
console.log("REPEAT:")
console.log(msg.repeat("2"));
msg = "        help!";
console.log(msg.trim().toUpperCase());
msg = "ApnaCollege";
console.log(msg.slice(4).replace('l','t'));
let student = [2,"simran"];
console.log(student[0] +  student[1]);
console.log(student.length);
console.log(student[1][5]);
//ARRAYS ARE MUTABLE
student[0] = "kritika";
console.log(`${student[0]} ${student[1]}`);
//we can acces an index which don't exists right now IT WILL NOT GIVE AN ERROR UNLIKE C++/JAVA
student[6] = "9";
// kritika, simran, empty*4,9 length = 7 now
//ARRAY METHODS:
//push unshift pop shift indexOf includes
//concat : to merge two arrays
//reverse : to reverse the arrays
//slice: copies a portion of an array
//slice(3) : slice starting from 3rd index
//slice() : copies original array
//slice(2,3) : slice 2nd index not included last index
//slice(-1) : slice(nums.length-1);
//splice: removes/replace/add elements in place
//splice(starting_index,delete_count,item0---itemN)
//change the original array
student.push(3);
student.unshift(4); //adding in beginning
console.log(student.indexOf("simran"));
console.log(student.includes("kritika"));
console.log(student.includes("oooo"));
let primary = [1,2,3,6,6,3,5,5];
let secondary = ['x','y','z'];
console.log(primary.concat(secondary));
console.log(primary.concat(secondary).reverse());
//REVERSE AFFECTS THE ORIGINAL ARRAY INSTEAD OF CREATING A NEW ARRAY WITH CHANGES
//CONCAT CREATES A NEW ARRAY
console.log("SLICE");
console.log(primary.slice());
console.log(primary.slice(2));
console.log(primary.slice(9,3));
console.log(primary.length);
console.log(primary.slice(-2));
console.log("SPLICE");
console.log(primary.splice(7));
console.log(primary);
console.log(primary.splice(3,2));
console.log(primary);
console.log(primary.splice(2,2,"kritika","kanika"));
console.log(primary);
//adding elements at the front
console.log(primary.splice(0,0,"simran","saini"));
console.log(primary);
//replacing using splice:
console.log(primary.splice(0,1,"kritika"));
console.log(primary);
//slice don't make any change in 
//original array but splice does
//sort:
primary.sort();
console.log(primary);

//Array References: address in memory
//in case of string value and types are same
//but in case of array their references are different
//array's name is called as reference variable that stores the address of the first element of the array
//while comparing it is storing index of two different locations that is why it give different values
console.log("name" == "name");
console.log("name" == "name");
console.log([1] == [1]);
console.log([1]===[1]);
console.log([] == []);
let myarr = [1,2,3];
let myarr2 = myarr;
console.log(myarr2==myarr)//true as address are same
//CONSTANT ARRAY: we can push change value but we can't change the referncew of the array i.e array1 = [44,...] is not possible
const array1 = [11,2,3,3];
console.log(array1);
array1[0] = 1;
console.log(array1);