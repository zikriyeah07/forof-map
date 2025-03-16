
let languages =new Map();
languages.set("onion",12)
// console.log(languages.get("onion"));
//it will print onion

languages.set("tomato" ,20)
languages.set("JavaScript",'js')
// for (const key of languages) {
//     console.log(key.values);
    
// }
// console.log(languages.size);//gives the number of like thing in map on=bject whic is three

// console.log(languages.has("onion")); //give if the value is present or not
for (const key of languages) {
    // console.log(key);
    
}

//this will print 
// [ 'onion', 12 ]
// [ 'tomato', 20 ]
// [ 'JavaScript', 'js' ]

//but what if we want to print the value or key only 

for (const [key,value] of languages) {
    // console.log(`this key: ${key}, and this is Value: ${value}`);
    
}

// this key: onion, and this is Value: 12
// this key: tomato, and this is Value: 20
// this key: JavaScript, and this is Value: js

//remeber map can not be itretable by for in 

// second way to itreate a ma p

languages.forEach((key,value)=>{
//     console.log(value);
    
})
// onion
// tomato
// JavaScript

let heros = ["superman","spiderman","batman"]

heros.forEach((key,value)=>{//console.log(`${key} and value ${value}`);
})
// superman and value 0
// spiderman and value 1
// batman and value 2
// new