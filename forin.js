const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York


// we see that for of dont work on onject and for in comes heer 

let arr = ["superman", 'spiderman','batman']
for (const key of arr) {
    // console.log(key);
    
}

// for is also can be used for array but is not advisible as for each or for of shall be used 
