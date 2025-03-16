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
