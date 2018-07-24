
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

- You add dots at your break-points to debug the line of code;

USING THE DEBUGGER: - its a visual that makes more sense & helps you understand how the computer works better;

Blue-arrow: says go to the next line/ keep going/ resume;
Hot-Skippy: step over/ run the function and go to the next one without going into the function
Green-arrow- Refresh
Step-into- runs the function and gets into/ steps into the function so you can read the code/ function.
Step over- the code;


GOOGLE CHROME DevTools:
-inspect elements;

- always check the console first when you get an error in your code;

-source - has all the files you have in your code; - Command + P to open search and type in the filename you want to look for;

-you can break-point debug anyones code to check it out or find the problem. Has the same 5 tools to walk through the code;

-Network -does all the CRUD requests; (header, preview, response, cookies, timing)
- can filter by types of networks that code ran by - XHR for axios call/ JS for javascript/ img for images/ WS - web sockets/ CSS for css;
This helps you check what was downloaded btwn you and the server;

Parformance - the record give you a record of the website performance;
This tool can help you increase the website performance

Memory - your websites memory

Hardware Memory Garbage Collector:
PSU - Power Supply Unit (reduces power from code to make sure ur comp doesnt fry)
Mother-Board; connects a bunch of the comp together
CPU - brain of the computer 3.2 billion per second;
Hard-Drive - bucket/ container that holds comp things/ components
the disk - it spins super fast in circles - it has a lazer that it uses to read a bunch of onez and zeros - the lazor knows how to change them back and forth since they are magnetic lazors;
5400 rpms per sec
RAM is betwen cpu and hard disk since cpu is super fast than hard disk and it would always have to wait for it ...so RAM is in-btwn them to enhance/ store info from hard disk and cpu can access it.
- This is where you go to fix memory problems

Application; cookies - local storage;

Security: is it safe to put in the credit card info or not

Audits: checks all sorts of performance related stuff - memory stuff, disabilities(color-blindness), etc.
 -->