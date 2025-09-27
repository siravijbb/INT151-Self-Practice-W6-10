// JavaScript Functional Programming: reduce() and Other Functions
// reduce(): aggregates array elements into a single value
// forEach(), some(), every(), find() and more

// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
    { name: 'Alice', age: 25, profession: 'Engineer', salary: 75000 },
    { name: 'Bob', age: 17, profession: 'Student', salary: 0 },
    { name: 'Charlie', age: 32, profession: 'Designer', salary: 65000 },
    { name: 'Diana', age: 19, profession: 'Student', salary: 5000 },
    { name: 'Edward', age: 45, profession: 'Engineer', salary: 95000 }
];
const shoppingCart = [
    { item: 'Laptop', price: 1200, qty: 1 },
    { item: 'Mouse', price: 25, qty: 2 },
    { item: 'Keyboard', price: 85, qty: 1 },
    { item: 'Monitor', price: 350, qty: 1 }
];

// EXERCISES:

// 1. Use reduce() to sum all numbers
// Expected: 55
function sumNumbers() {
    return numbers.reduce((acc, cur) => acc + cur, 0);

}

// 2. Use reduce() to calculate the product of all numbers
// Expected: 3628800
function multiplyNumbers() {
    return numbers.reduce((acc,cur) => acc * cur)
}

// 3. Use reduce() to find the maximum number
// Expected: 10
function findMaxNumber() {
   return numbers.reduce((max,cur) => Math.max(max,cur))
}

// 4. Use reduce() to calculate total salary of all people
// Expected: 240000
function calculateTotalSalary() {
    // Your code here
}

// 5. Use reduce() to create an object grouping people by profession
// Expected: { Engineer: [Alice, Edward objects], Student: [Bob, Diana objects], Designer: [Charlie object] }
function groupByProfession() {
    // Your code here
}

// 6. Use reduce() to calculate the total cost of the shopping cart
// Expected: 1685
function calculateCartTotal() {
    // Your code here
}

// 7. Chain methods: use filter, map, and reduce to calculate the average age of engineers
// Expected: 35
function calculateAverageEngineerAge() {
    // Your code here
}

// 8. Use forEach() to create a string with all people's names
// Expected: "Alice, Bob, Charlie, Diana, Edward"
function listPeopleNames() {
    // Your code here
}

// 9. Use some() to check if any number is greater than 9
// Expected: true
function hasNumberGreaterThanNine() {
    // Your code here
}

// 10. Use every() to check if all people are adults (age >= 18)
// Expected: false
function areAllAdults() {
    // Your code here
}

// 11. Use find() to get the first student
// Expected: Bob object
function findFirstStudent() {
    // Your code here
}

// 12. Advanced: Implement your own version of reduce()
function myReduce(array, callback, initialValue) {
    // Your code here
}

// Run tests to check your solutions
console.log("Exercise 1:", sumNumbers());
console.log("Exercise 2:", multiplyNumbers());
console.log(findMaxNumber())
// Add more tests here