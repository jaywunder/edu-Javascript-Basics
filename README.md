# Javascript Basics

For fancy documentation with basically the same information, go to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

### Table of Contents  
|||
|:- | :--------- |
| 1 | Primitives |
| 2 | Arrays     |
| 3 | Objects    |
| 4 | Functions  |
| 5 | Classes    |

## Primitives

Primitives are the most basic data types.  They cover any type of data one could want to store.

### Boolean

A boolean is a variable that's either `true` or `false`

```javascript
var yes = true;
var no = false;
```

### Null

Null is a value to represent nothing.  When a variable is set to null it has the value "null".
```javascript
var nothing = null;
console.log(nothing); // null
```

### Undefined

Undefined is when a variable doesn't have a value. Variables are set to be undefined when they're not given a value at creation.

```javascript
var whatsThis;
console.log(whatsThis); // undefined
```

Variables can be set to the value `undefined`.
```javascript
var stillNoValue = undefined;
console.log(stillNoValue); // undefined
```
But there's no reason to do that, so don't...

### Number

Numbers are the data type for any number.  Javascript doesn't distinguish between integers and numbers with decimals (floats).

```javascript
// these are the same type to javascript
var number = 1;
var another = 1.337;
```

Numbers can be added `+`, subtracted `-`, multiplied `*`, and divided `/`

### String

Strings hold text. They're used to hold data that isn't a number. Strings are denoted using a single or double quote `''` `""`. Strings can also be denoted with back ticks
` `` `

```javascript
var string = "the cat in the hat";
```

Strings can be "indexed" by using square braces with a number inside `[n]` after the variable name. Indexing a string returns the value at that position in the string.

WARNING: Indexing starts counting at 0

```javascript
var string = "the cat in the hat";
string[0]; // t
string[5]; // a
```

The operators `+` and `+=` can also be used for strings.

## Arrays
Arrays are used to hold more than one value. Arrays can also be indexed using `[n]`. Their index also starts at 0.  

Put items in arrays with the `push` function.

```javascript
var array = [];

array.push(1);
array.push('another');

array.length; // 2

array[0]; // 1
array[1]; // 'another'
```
Arrays can also be initialized with values.

```javascript
var array = [1, 2, 'strings too', 1337, 3.14, 'π', [5, 'woah arrays in arrays', []]];
array[4] // 3.14

array.length // 7

array.push('8th value');

array.length // 8
```

When arrays are printed they look like this:
```javascript
console.log(array);

// prints as this:
[ 1,
  2,
  'strings too',
  1337,
  3.14,
  'π',
  [ 5, 'woah arrays in arrays', [] ],
  '8th value' ]
```

## Objects
Objects hold key/value pairs.  The key can be any value, but is traditionally a string or a number.

```javascript
var object = {
  key: 'value'
};
```

Objects can also be indexed, but use the key instead of a number as the index.

```javascript
object['key']; // 'value'
```

Object's value can also be accessed with "dot notation"

```javascript
object.key; // 'value'
```

Values can also be set with indexing and dot notation

```javascript
object['otherKey'] = 'other value';
object.anotherKey = 3.1
object.bleh = [1, 'hey'];
```

Objects can be printed also

```javascript
console.log(object);

// prints as this
{ key: 'value',
  otherKey: 'other value',
  anotherKey: 3.1,
  bleh: [ 1, 'hey' ] }
```
## Functions

Functions do stuff.

There's two ways to make functions

```javascript
function foo () {
  console.log('fooie!');
} // notice the semicolon isn't necessary here

var foo = function() {
  console.log('fooie!');
};

foo(); // fooie!
```

Functions take arguments, which are set to their corresponding variable in the argument list at the declaration of the function.

```javascript
function sayHello(name) {
  console.log('hello ' + name + '!');
}

sayHello('jacob'); // hello jacob!
```

## Logic / Loops

### `if / else if / else`

```javascript
if (2 < 1) {
  console.log('this won\'t get printed');
} else if (1 < 2) {
  console.log(' this will get printed');
} else {
  console.log('this happens if all other conditions don\'t');
}
```

 - `<` less than
 - `<=` less than or equal to
 - `>` greater than
 - `>=` greater than or equal to
 - `===` equal to
 - `!==` not equal to
 - `&&` "and" connects two conditions. Both conditions must be true for the condition to return true
 - `||` "or" connects two conditions. Only one condition or both must be true to return true


### `for loops`

this prints each item in an array
```javascript
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

`for` loops have three parts in the parentheses
`for (runs at start; test whether to stop loop; runs after code inside loop is executed) {}`

so let's break down the traditional for loop.
 - `var i = 0;` in initializes variable i to be the counter variable
 - `i < array.length;` the loop will run until i is greater than or equal to the array length
 - `i++` adds one to the value of `i`
## Classes
