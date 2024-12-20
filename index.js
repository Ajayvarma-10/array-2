// map examples 

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 

// Output: [2, 4, 6, 8]

const fruits = ['apple', 'banana', 'cherry'];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); 

// Output: ['APPLE', 'BANANA', 'CHERRY']

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const names = users.map(user => user.name);
  console.log(names);
  
  // Output: ['Alice', 'Bob', 'Charlie']
  
  const numbers1 = [2, 3, 4];
const squares = numbers1.map(num => num ** 2);
console.log(squares); 

// Output: [4, 9, 16]

const animals = ['cat', 'dog', 'bird'];
const animalSounds = animals.map(animal => animal + ' sound');
console.log(animalSounds);

// Output: ['cat sound', 'dog sound', 'bird sound']


// filter examples----

const numbers2 = [1, 2, 3, 4, 5];
const oddNumbers = numbers2.filter(num => num % 2 !== 0);
console.log(oddNumbers); 

// Output: [1, 3, 5]

const words = ['apple', 'fig', 'banana', 'kiwi'];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); 

// Output: ['apple', 'banana']

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 }
  ];
  const expensiveProducts = products.filter(product => product.price > 50);
  console.log(expensiveProducts); 
  
  // Output: [{ name: 'Laptop', price: 1000 }, { name: 'Keyboard', price: 75 }]
  
  const mixedArray = [0, 'hello', false, 42, '', null];
  const truthyValues = mixedArray.filter(Boolean);
  console.log(truthyValues);
  
  // Output: ['hello', 42]
  
  const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 95 }
  ];
  const passingStudents = students.filter(student => student.score >= 70);
  console.log(passingStudents); 
  
  // Output: [{ name: 'Alice', score: 85 }, { name: 'Charlie', score: 95 }]
  


// foreach ------

const numbers3 = [1, 2, 3];
numbers3.forEach(num => console.log(num));


// Output:
// 1
// 2
// 3

const numbers4 = [10, 20, 30];
let sum = 0;
numbers4.forEach(num => {
  sum += num;
});
console.log(sum); 

// Output: 60

const cities = ['New York', 'London', 'Tokyo', 'Paris'];
let result = 'Top Cities: ';
cities.forEach((city, index) => {
  result += city;
  if (index < cities.length - 1) {
    result += ', ';
  }
});
console.log(result);
// Output: "Top Cities: New York, London, Tokyo, Paris"



const users1 = [
    { name: 'Alice', active: false },
    { name: 'Bob', active: false }
  ];
  users1.forEach(user => {
    user.active = true;
  });
  console.log(users1);


  // Output:
  // [
  //   { name: 'Alice', active: true },
  //   { name: 'Bob', active: true }
  // ]
  
  const letters = ['a', 'b', 'a', 'c', 'a', 'b'];
let countA = 0;
letters.forEach(letter => {
  if (letter === 'a') {
    countA++;
  }
});
console.log(countA);

// Output: 3



