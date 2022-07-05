//const & let
const a = 5;
const b = 2;
let myName = "hyeonSeok";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName);

myName = "hyeonseokYoon";

console.log(myName);


//boolean
const amIFat = null;
let something;

console.log(amIFat);
console.log(something);

//array
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

//Get Item from Array
console.log(dayOfWeek[0]);

// Add one more day to the Array
console.log(dayOfWeek);
dayOfWeek.push("sun");
console.log(dayOfWeek);


//Create Object
const player = {
    name:"hyeonseok",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);

player.fat = false;
console.log(player);

player.lastName = "potate";
console.log(player);

player.points += 15;
console.log(player);


//Create function
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("hyeonseok", 10);
sayHello("sujin", 20);
sayHello("somin", 29);
sayHello("nico", 28);


//Create Calc
function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
function divide(a, b){
    console.log(a / b);
}
plus(8,60);
divide(98,20);


// Create object in function
const player2 = {
    name: "hyeonseok",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you");
    },
};

player2.sayHello("hyeonseok");
player2.sayHello("mejoung");