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

//let me show yow one more thing
arr.forEach((key,value,array)=>{console.log(`this is key:${key}, this value ${value} , and this is full array ${array}`);
})

// this is key:superman, this value 0 , and this is full array superman,spiderman,batman
// this is key:spiderman, this value 1 , and this is full array superman,spiderman,batman
// this is key:batman, this value 2 , and this is full array superman,spiderman,batman