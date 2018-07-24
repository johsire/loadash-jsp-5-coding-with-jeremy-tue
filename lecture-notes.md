
<!-- #PROCEDURAL
//js is procedural, starts from the top to the bottom;

// OBJECT oriented Programming:
// everything is a class - an object;
// C -shirp/ C++ are all about

// FUNCTIONAL Programming;
// set of concepts of breaking ur app into small functions so you can build bigger apps - like legos;
// multiple pieaces put together to make a big app;
// 1. Good functions - are pure funtions: a function that follows two rules: never modifies anything outside themselves; they are self contained; they return a new copy;
// 2. Given the same set of inputs I will always give the same set of output;
//  e.g filter/ forEach/ map/ reduce/ slice;

// Chaining:
// - when you invock a function you always get a value - even undefined is a value

// code does follow up context;

function add(x,y) {
  return x + y
}

Number.prototype.addY = function(y) {
  
  return this + y;
}

const sum = add(2, 5).addY(5).addY(3);
// const sum = 12.addY(3);
sum; 15

//loadash is a minimum requirement for entry level developer:
<!-- It's indentified by underscore dash _ -->
<!-- lodash is not a prototype, so we cant use chaining; so we still pass our info to filter then our callback function;

 -->