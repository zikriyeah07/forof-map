//for of is used as a loop to itreat full string or onject or array let see
let fullName="zikriya";
for (const key of fullName) {
    // console.log(`this is ${key}`);
    
}
// this is z
// this is i
// this is k
// this is r
// this is i
// this is y
// this is a
//array
let heros = [`superman`,`spiderman`,`batman`]
for (const key of heros) {
    // console.log(key);
    
}
// superman
// spiderman
// batman

//object
let team = {
    fullName:"zikriya",
    classIs :11
}

// for (const key of team) {
//     console.log(key);
    
// }  
//this will give error becoz for of can not be used for object

//but let see whats map and how its itreatable

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
