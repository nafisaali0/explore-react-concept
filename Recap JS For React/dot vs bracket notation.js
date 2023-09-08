const person = {
    name : "nafisa",
    profession : 'Web Developer',
    age : 23,
}
// const getPer1 = person.profession;
// console.log(getPer1)

// if you want to value with third brucket then put it with string
const getPer2 = person['profession'];
console.log(getPer2)
// you can get value like this also 
const storeProf = 'profession';
const getPer3 = person[storeProf];
console.log(getPer3)