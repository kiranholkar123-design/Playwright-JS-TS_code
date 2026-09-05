//String concatination - join two or more string together

// using + operator
let firstName = 'Kiran';
let lastName = 'Holkar';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// using += operator
let greeting = 'Hello, '
greeting += fullName;
console.log(greeting);

// using concat() method
let combine = firstName.concat(' ', lastName)
console.log(combine);

// string + number
console.log('test' + 23);
console.log('23' + 45);
console.log('34' + '34')