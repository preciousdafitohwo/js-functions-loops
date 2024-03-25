console.log("loops");
// const foods = ["pizza", "chocolate", "ice cream", "cheese"];
// for (let food of foods) {
//   console.log(food);
// }

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}
// const foods = ["pizza", "chocolate", "ice cream", "cheese"];
// foods.forEach(function (food) {
//   console.log(food);
// });
  

favouriteNumbers.forEach(function (favouriteNumbers) {console.log(favouriteNumbers)})

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
foods.forEach(function (food, index) {
  console.log(index, food);
});

const favNum = [1, 2, 3, 4, 5]