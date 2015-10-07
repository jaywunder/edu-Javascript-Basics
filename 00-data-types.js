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

var baz = 1;

baz + 1; // this doesn't change baz

// this will change the value of baz
baz = baz + 1; // addition
baz = baz - 1; // subtraction
baz = baz * 1; // multiplication
baz = baz / 1; // division

console.log('baz: ' + baz);

// it's cleaner to use these operators though
baz += 1; // addition
baz -= 1; // subtraction
baz *= 1; // multiplication
baz /= 1; // division

console.log('baz: ' + baz);

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
// a string contains something that you don't want to be interpreted as code
var string = 'this is jsut text, it can have numbers too! 123i5y4327';

string += ' | appended using `+=`';

console.log(string);

////////////
//BOOLEANS//
////////////
// boolean means "either true or false"

var yes = true;
var no = false;

if (yes) {
  console.log('yay!');
} else if (no) {
  console.log('this will never be called');
}

// use booleans to store something that only has two possible states such as "on/off"
// DON'T use booleans for something like color, where there's more than two colors
