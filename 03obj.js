// ------------------------------
        //for of loop
// ------------------------------

// The for...of loop in JavaScript is primarily used for iterating over the values of iterable objects, such as arrays, strings, maps, sets, and more. 
// It provides a cleaner syntax for iterating through the elements compared to the traditional for loop and is especially useful when dealing with arrays.




var names = ["Labeeb", 23 ,"Jowhar", 28, "Usman", 60]

for(const n of names){
    console.log(n);
}

// In this example, the for...of loop iterates over the names array. In each iteration, the variable n takes on the value of the current element in the array.

// First Iteration:

// n is assigned the value "Labeeb".
// console.log(n) prints "Labeeb" to the console.
// Second Iteration:

// n is assigned the value 23.
// console.log(n) prints 23 to the console.
// Third Iteration:

// n is assigned the value "Jowhar".
// console.log(n) prints "Jowhar" to the console.
// ... and so on until all elements of the array have been iterated.



console.log("---------------------------");



for(const n of names){
    if(typeof(n)=="string")
    console.log(n);
}



// For each element n in the array, it checks if the type of n is a string using the typeof operator.

// If n is a string:

// The typeof(n) === "string" condition is true.
// The string n is printed to the console using console.log(n).
// If n is not a string:

// The typeof(n) === "string" condition is false.
// The loop moves to the next element in the names array.
// In essence, this loop filters and prints only the string elements from the names array. The typeof operator is used to determine the type of the variable, and the loop prints the strings it encounters during the iteration.



console.log("---------------------------");


//---------------------
// Important Points:
//---------------------
// The for...of loop simplifies the process of iterating through arrays and other iterable objects, making the code more concise and readable.
// It automatically iterates over the values, not the indices, which is convenient when you don't need the index information.
// It cannot be used to iterate over plain objects (objects without an iterable protocol). For iterating over object properties, you would typically use a for...in loop.