let myMoney = 0;
if(myMoney){
    console.log("yes i have  money",myMoney)
}else{
    console.log("i have no money")
}


let myMoneys = 0;
if(!myMoneys){
    console.log("yes i have no money",myMoneys)
}else{
    console.log("i have money")
}





let myMoneysss = 110;
if(myMoneysss){
    console.log("yes i have no money",myMoneysss)
}else{
    console.log("i have money")
}


let myMoneyss = 110;
if(!myMoneyss){
    console.log("yes i have no money",myMoneyss)
}else{
    console.log("i have money")
}

// number to string 
const num1 = 45;
const numStr = num1 + "";
console.log(numStr)
console.log(typeof numStr)


// string to number
const str  = "55";
const makeNumber = +str 
console.log(makeNumber)
console.log(typeof makeNumber)

// call function using ternary operator 

let isActive = true ;
const showUser = () => console.log('display User')
const hideUser = () => console.log('hide User')

isActive ? showUser() : hideUser ()

isActive && showUser();
isActive || hideUser();

// toggle boolean 
isActive = !isActive;