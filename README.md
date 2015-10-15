# Javascript Basics

For fancy documentation with basically the same information, go to:  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

### Table of Contents  

 |  |   
 --:|:----------:  
  1 | Primitives  
  2 | Arrays     
  3 | Objects    
  4 | Functions  
  5 | Logic / Loops     
  6 | Classes

## (Primitives)[#primitives]

Primitives are the most basic data types.  They cover any type of data one could want to store.

### (Boolean)[#boolean]

A boolean is a variable that's either `true` or `false`

```javascript
var yes = true;
var no = false;
```

### (Null)[#null]

Null is a value to represent nothing.  When a variable is set to null it has the value "null".
```javascript
var nothing = null;
console.log(nothing); // null
```

### (Undefined)[#undefined]

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

### (Number)[#number]

Numbers are the data type for any number.  Javascript doesn't distinguish between integers and numbers with decimals (floats).

```javascript
// these are the same type to javascript
var number = 1;
var another = 1.337;
```

Numbers can be added `+`, subtracted `-`, multiplied `*`, and divided `/`

### (String)[#string]

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

## (Arrays)[#arrays]
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

## (Objects)[#objects]
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
## (Functions)[#functions]

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

## (Logic / Loops)[#logic-loops]

### (`if / else if / else`)[#if-else-if-else]

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
 - `||` "or" connects two conditions. One or both conditions must be true to return true


### (`for` loops)[#for-loops]

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

To break out of a for loop, use the keyword `break`.

```javascript

array = [1, 2, 3, 'bad', 5];

for (var i = 0; i < array.length; i++) {
  if (array[i] === 'bad') {
    break; // get out of there!
  } else {
    console.log(array[i]);
  }
}

// this loop doesn't print 'bad' or 5
```

Another `for` pattern is the `for..in` loop

```javascript
var array = ['one', 'two', 'three', 'four'];

for (var index in array) {
  console.log(i); // 0 1 2 3
  console.log(array[i]); // one two three four
}
```

the `for..in` loop also works on objects

```javascript
var object = {
  zero: 'bleh',
  one: 'foo',
  two: 'bar',
  three: 'lel so random'
}

for (var key in object) {
  console.log(key); // zero one two three
  console.log(object[key]); // bleh foo bar lol so random
}

```

## (Classes)[#classes]

(here's the complex concept)

Classes are like blueprints that take parameters. You create different things with classes, and can tweak the class with the parameters it takes

Class syntax:
```javascript
// we're making an animal class!
class Animal {
  constructor(type, color, name, age) {

    // notice the variable `this`?
    // it's a reference to the object or function or class that it's inside.

    this.type = type;
    this.color = color;
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('hi! I\'m' + this.name + '. I\'m a ' + this.type);
  }
}

var bobo = new Animal('bear', 'brown', 'bobo', 3);
bobo.sayHello(); // hi! I'm bobo. I'm a bear
```

Here we've made an Animal. It's a bear, and it's named bobo.  But what if we want to make another bear?  We'd have to type all that stuff again.

What if we want to give only bears a certain function? We want all bears to have a "clawAttack" function.  With classes that can be easy.  We just have to `extend` the Animal class with a Bear class.

```javascript
// the Bear class is going to have all the properties of the Animal class
class Bear extends Animal{
  constructor(color, name, age) {
    // the `super` method calls the parent class' constructor with the parameters given to super
    super('bear', color, name, age);
  }
  clawAttack(target) {
    console.log(this.name + ' swiped ' + target.name + ' with their claws!');
  }
}

var bozo = new Bear('black', 'bozo', 5);
bozo.sayHello(); // hi! I'm bozo. I'm a bear
bozo.clawAttack(bobo); // bozo swiped bobo with their claws!
```

Poor bobo is a 'bear', but he isn't a Bear. So he can't fight back!

But this is why classes are so important. Because they're a great tool to prevent the programmer from needing to repeat themselves.  

Classes can inherit each other as much as you want. So we can even make a BrownBear class that inherits from the Bear class.


```javascript
class BrownBear extends Bear {
  constructor(name, age) {
    super('brown', name, age);
  }

  beCool() {
    console.log('fun fact: brown bears are cool');
  }
}
```
