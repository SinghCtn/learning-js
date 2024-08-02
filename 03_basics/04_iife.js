// Imediately invoced function expression

// IIFE stands for Immediately Invoked Function Expression. It's a design pattern in JavaScript that allows you to create a function and immediately execute it. This pattern is particularly useful for avoiding global scope pollution.

// Global scope pollution occurs when too many variables, functions, or objects are added to the global namespace (i.e., the global object, like window in browsers). This can lead to several issues

(function () {
  console.log("DB Connected");
})();

// if we want to write two iife's one after onother then it is needed to have a semicolon after the first one otherwise it will not execute second one as the context will not be finished

// https://youtu.be/GAIbn16Iytc?si=P5eUeMnmGNMfmMQt
