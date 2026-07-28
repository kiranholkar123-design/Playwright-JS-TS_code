// length is a property
let fruits = ['apple', 'banana', 'mango', 'cherry']
console.log(fruits.length);

// Push method - it will add the value after the last index/at the end
fruits.push('watermelon')
console.log(fruits);

//unshift() method - it will add the value at the oth index/at the biginning of the array
fruits.unshift('orange');
console.log(fruits);

//pop() method - Removes the last element from an array and returns it
let newFruits = fruits.pop()
console.log(fruits);
console.log(newFruits);

//shift() - Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
fruits.shift();
console.log(fruits);

//splice() - Removes elements from an array and, if necessary, 
// inserts new elements in their place, returning the deleted elements.
let deletedValues = fruits.splice(1, 2, 'dragenFruit', 'coconute')
console.log(fruits);
console.log(deletedValues);









