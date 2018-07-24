let numbers = [3, 5, 2, 5, 7, 7, 3, 4, 4];

// when you make a class your are really making a type - a classification of a new type;
Array.prototype.filter = function(callbackFn) {
  // make new array
  let newArray = [];
  let array = this;

    // loop through the array
  for (let i = 0; i < array.length; i++) {
    const element= array[i];

      // invock callback passing in item from array
      const passesFilter = callbackFn(element);
        // if return is true,
        if (passesFilter) {
          // Add to new array;
          newArray.push(element);
       };
};
return newArray
};
// higher-order function only knows how to do part of the function; so we have to pass a callback function/ another function that does the rest of the job;


// types/ class/ classification;
// Number 
// const num = new Number(7) is the same as 
// const num = 7;
// Object


let evens = numbers.filter(x => x % 2 === 0)
// evens; [2, 4, 4]

// filter /map / reduce/ sort / is a higher order function;
