const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
console.log(numbers)

const groceries = ["Apple", "Peach", "Tomato"];
console.log(groceries.toString()); // "Apple,Peach,Tomato"