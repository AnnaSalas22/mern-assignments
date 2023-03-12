//Problem1
let cars = ['Tesla', 'Mercedes', 'Honda'];
let [ randomCar ] = cars
let [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//output:
//==> Tesla
//==> Mercedes


//Problem2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla',
};
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
//output:
// ==> ReferenceError: name is not defined


//Problem3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//output:
// ==> 12345
//==> undefined

//Problem4
let numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
let [,first] = numbers;
let [,,,second] = numbers;
let [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);  
//output:
// ==> false
//==> true


//Problem5
let lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
let { key } = lastTest;
let{ secondKey } = lastTest;
let [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//output:
//  value
//  [ 1, 5, 1, 8, 3, 3 ]
//   1
//   5