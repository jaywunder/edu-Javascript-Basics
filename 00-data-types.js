// this file is about the most basic data types: numbers, strings, and booleans

/////////////
//VARIABLES//
/////////////
// Use the a `var` keyword when making a variable.
// Here I create a variable, but don't give it a value.  It's automatically set
// to be `undefined`.
var foo;
console.log('foo: ' + foo); // uncomment this line to see the value of foo.

// a variable can be referenced before it's set. don't use this behaivior. It's bad
console.log('bar: ' + bar); // DON'T USE VARIABLES BEFORE YOU SET THEM!!s
var bar;

///////////
//NUMBERS//
///////////
// Javascript doesn't distinguish between integers and numbers with decials
// Javascript also doesn't use a different keyword for declaring numbers
var num = 1;
var decimal = 1.337;

console.log('num: ' + num);
console.log('decimal: ' + decimal);

// WARNING: Sometimes numbers have funny behaivior
// this is 6.666666666666667 because the computer only
console.log(20 / 3);

///////////
//STRINGS//
///////////


////////////
//BOOLEANS//
////////////
