// JavaScript Functional Programming: map() and filter() Exercises
// map(): transforms each element in an array using a function
// filter(): creates a new array with elements that pass a condition

// Sample data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
    { name: 'Alice', age: 25, profession: 'Engineer' },
    { name: 'Bob', age: 17, profession: 'Student' },
    { name: 'Charlie', age: 32, profession: 'Designer' },
    { name: 'Diana', age: 19, profession: 'Student' },
    { name: 'Edward', age: 45, profession: 'Engineer' }
];
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// EXERCISES:

// 1. Use map() to create an array with each number doubled
// Expected: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
function doubleNumbers() {

    return numbers.map( e => e *2)
}

// 2. Use filter() to create an array with only even numbers
// Expected: [2, 4, 6, 8, 10]
function getEvenNumbers() {
    return numbers.filter(e => e%2==0)
}

// 3. Use map() to create an array of people's names
// Expected: ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward']
function getPeopleNames() {
    let arrayofname= []
     arrayofname = people.map(p => p.name)

    return arrayofname
}

// 4. Use filter() to get people who are 21 or older
// Expected: [Alice, Charlie, Edward objects]
function getAdults() {
   return  (people.filter(p => p.age >= 21)).map(p => p.name)
}

// 5. Chain filter() and map() to get names of people who are Engineers
// Expected: ['Alice', 'Edward']
function getEngineerNames() {
    return (people.filter(p => p.profession == 'Engineer')).map(p => p.name)
}

// 6. Use map() to create an array of fruit lengths
// Expected: [5, 6, 6, 4, 10]
function getFruitLengths() {
    // Your code here
}

// 7. Use filter() to get fruits with names longer than 5 characters
// Expected: ['banana', 'cherry', 'elderberry']
function getLongFruitNames() {
    // Your code here
}

// 8. Advanced: Implement your own version of map()
function myMap(array, callback) {
    // Your code here
}

// 9. Advanced: Implement your own version of filter()
function myFilter(array, callback) {
    // Your code here
}

// Run tests to check your solutions
console.log("Exercise 1:", doubleNumbers());
console.log("Exercise 2:", getEvenNumbers());
console.log(getPeopleNames())
console.log(getAdults())
console.log(getEngineerNames())
// Add more tests here