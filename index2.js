/*  Reference types -> Objects , Array , Functions 
   Objects
 let name= 'Ali';
 let age= 18; */

 let person = {
    name: 'Ali' , age: 18  // Properties of a person
 };
 console.log( person);
 // Ways o change properties
 //1- dot Notation
 person.name = 'Ayesha';
 console.log( person.name);

 //2- Bracket Notation
 person ['name'] = 'John';
 console.log( person.name);

 //Arrays
 let selectedcolor = ['red' , 'blue','orange'];
 selectedcolor [3] = 'purple';
 selectedcolor [4] =  4;   // we can also assign numbers in a list of string arrray  
 console.log(selectedcolor);
 console.log(selectedcolor[1]); 

 /*Array is a datastructure used to represent a list of items.
  An array is an object in javascript*/
  console.log(selectedcolor.length);

         // Functions
function greet() {
    console.log('Hello world');
}
greet();
// performing a task
function greet_to(name) {
    console.log('Hello '+ name);
}
greet_to('Mary');
greet_to('John');

// Types of functions
// 1- performing a task
// 2- Calculating a value
function square(num){
return num * num;
}
let num= square(5);
console.log(num);
console.log(square(7));
console.log(square(9));