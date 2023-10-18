// for...in loop is used to iterate over the properties of an object.




// for...in Loop:

// The for...in loop iterates over the properties of the obj object.
// The variable n represents the property names of the object (name1, name2, etc.).
// During each iteration, n takes on the property name.
// obj[n] accesses the value associated with the current property.

var obj={
    name1:"Labeeb",
    name2:"Vibin",
    name3:"Sadeed",
    name4:"Rohith",
    nmae5:"sabareesh",
    name6:"Sayooj",
    name7:"Thusin",
    name8:"Muhsin",
    name9:"Yadu"
}

 for( const n in obj){
    console.log(`${n} => ${obj[n]}`);
 }



//  Output Explanation:

// For each iteration, the loop prints the property name (n) followed by its corresponding value (obj[n]).
// For example, during the first iteration, n is "name1" and obj[n] is "Labeeb". So, it prints "name1 => Labeeb".
// This process continues for each property in the obj object.


// The for...in loop is useful when you need to iterate over the properties of an object and perform specific operations based on those properties, such as printing their names and values or manipulating the object's content. 
// It's important to note that for...in iterates over enumerable properties, including inherited ones, so it's often used in objects created with constructor functions or classes to access instance properties.