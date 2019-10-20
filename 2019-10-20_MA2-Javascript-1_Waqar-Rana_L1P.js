//1. Create a function that displays prototypal inheritance.
function MyCar() {
  this.make = "Porsche"
}

MyCar.prototype.model = function () {
  console.log("I am a Panamera but I inherit my make "+ this.make + " from my parent");
};

var turbo = new MyCar();
turbo.model();

//2. Create an array of numbers from 1 – 10; slice the 5th number in the array.

var numbers = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
console.log(numbers.slice(5));


//3. Delete the last number in the array that you created above.

numbers.pop();

//7. Create a simple function that logs the date.

var displayDate = new Date();
console.log(displayDate);
