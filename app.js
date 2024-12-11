                                  //    // ES6 TASK QUESTIONS //     //

// 1: Global Scope //
var globalVar = "I am a var variable";
let globalLet = "I am a let variable";
const globalConst = "I am a const variable";

console.log(globalVar); 
console.log(globalLet);  
console.log(globalConst); 

// 2: Function Scope //

function testFunctionScope() {
    var funcVar = "I am var";
    let funcLet = "I am let";
    const funcConst = "I am const";
}
console.log(typeof funcVar);  
console.log(typeof funcLet);  
console.log(typeof funcConst); 

// 3: Block Scope //

if (true) {
    var blockVar = "I am var";
    let blockLet = "I am let";
    const blockConst = "I am const";
}

console.log(blockVar);   
console.log(typeof blockLet);  
console.log(typeof blockConst);

// 4: Hoisting with var //

var hoistedVar = "I am hoisted";
console.log(hoistedVar); 

// 5: Hoisting with let and const //

let hoistedLet = "I am not hoisted";
console.log(hoistedLet); 

const hoistedConst = "I am also not hoisted";
console.log(hoistedConst);

// 6: Re-declaration //

var redeclareVar = "First";
var redeclareVar = "Second"; 

let redeclareLet = "First";
// let redeclareLet = "Second"; 

const redeclareConst = "First";
// const redeclareConst = "Second";

// 7: Re-assignment //

var reassignVar = "First";
reassignVar = "Second"; 

let reassignLet = "First";
reassignLet = "Second"; 

const reassignConst = "First";
// reassignConst = "Second"; // Error: Assignment to constant variable

// 8: Temporal Dead Zone (TDZ)

{
    let tdzLet = "I am in TDZ until this line";
    console.log(tdzLet);
    
    const tdzConst = "I am also in TDZ until this line";
    console.log(tdzConst);
};

// 9: When to use var, let, and const //

for (var i = 0; i < 5; i++) {
    console.log(i); 
}

// Use let for block-scoping
for (let i = 0; i < 5; i++) {
    console.log(i); 
}

// Use const for constants
const pi = 3.14;
console.log(pi); // Immutable values

// 10: String Interpolation //

let firstName = "Maria";
let lastName = "Yousuf";
console.log(`Full Name: ${firstName} ${lastName}`);


// 11: Multi-line Strings //

let address = `Karachi,
Pakistan`;
console.log(address);

// 12: Simple Expressions //

let num1 = 10;
let num2 = 20;
console.log(`The sum is ${num1 + num2}`);

//  13: Function Calls in Template Literals //

function multiply(a, b) {
    return a * b;
}
console.log(`The product is ${multiply(5, 4)}`);

//  14: Creating a Tagged Template //

function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
tag`Hello ${`world`}, welcome to ${`Adv JS..`}!`;

// 15: Formatting

function uppercaseTag(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i]?.toUpperCase() || ""), "");
}
console.log(uppercaseTag`Hello ${firstName}, ${lastName}!`);

//  16: Conditional Logic //

let hour = 14;
console.log(`Good ${hour < 12 ? "Morning" : "Afternoon"}`);

//  17: Loops within Template Literals //

// let items = ["Apples", "Bananas", "Oranges"];
// console.log(`<ul>${items.map(items = <li>${items}</li>).join("")}</ul>`);

// 18: Escaping Backticks //

let backtickString = `This is a backtick`;
console.log(backtickString);

//  19: Nested Template Literals//

let table = `
<table>
    ${[1, 2, 3].map(row => `
        <tr>
            <td>${row}</td>
        </tr>`).join("")}
</table>`;
console.log(table);

//  20: Simple Conditions //

let age1 = 20;
let canVote = age1 >= 18 ? "Yes" : "No";
console.log(canVote);

// 21: Even or Odd //

let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// 22: Grade Evaluation //

let score = 85;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" :
            score >= 60 ? "D" : "F";
console.log(grade);

// 23: Login Status //

let isLoggedIn = true;
let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

// 24: Discount Eligibility //

let isMember = true;
let purchaseAmount = 150;
let discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(discount);

// 25: Determine Max Value //

function maxValue(a, b) {
    return a > b ? a : b;
}
console.log(maxValue(5, 10));

// 26: Greeting Message //

function greet(name = "guest") {
    return `Hello, ${name}!`;
}
console.log(greet("Dora"));
console.log(greet());

// 27: Mapping Values //

let Nums = [1, 2, 3, 4, 5];
let mappedNums = Nums.map(nums => nums % 2 === 0 ? nums * 2 : nums * 3);
console.log(mappedNums);

// 28: Filtering Values //

let Names = ["apple", "bat", "cat", "dog", "elephant"];
let filteredNames = Names.filter(Names => Names.length > 3);
console.log(filteredNames);

// 29: Copying an Array //

let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
console.log(copiedArray);

// 30: Merging Arrays //

let array1 = [1, 2];
let array2 = [3, 4];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

// 31: Adding Elements to an Array //

let numbersArr = [2, 3, 4];
let updatedArray = [1, ...numbersArr, 5];
console.log(updatedArray);

// 32: Copying an Object //

let originalObject = { a: 1, b: 2 };
let copiedObject = { ...originalObject };
console.log(copiedObject);

// 33: Merging Objects //

let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

// 34: Updating Object Properties //

let user1 = { name: "Dora", age: 23, email: "doragmail.com" };
let updatedUser1 = { ...user1, email: "newemail@gmail.com", address: "123 Main St" };
console.log(updatedUser1);

// 35: Passing Array Elements as Arguments //

function sum(a, b, c) {
    return a + b + c;
}
let numbersToSum = [1, 2, 3];
console.log(sum(...numbersToSum));

// 36: Combining Multiple Arrays //

function combineArrays(...arrays) {
    return [].concat(...arrays);
}
console.log(combineArrays([1, 2], [3, 4], [5, 6]));

// 37: Rest Parameter with Spread Operator //

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
console.log(multiply(2, 1, 2, 3));

// 38: Spread Operator with Nested Structures //

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let shallowCopy = [...nestedArray];
shallowCopy[0][0] = 100; 

console.log(nestedArray);
console.log(shallowCopy);

// 39: Sum Function //

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));

// 40: Average Function //

function average(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}
console.log(average(2, 4, 6, 8));

// 41: First and Rest //

let nums = [10, 20, 30, 40];
let [first, ...rest] = nums;
console.log(first);
console.log(rest); 

// 42: Skip and Rest //

let colors = ["red", "green", "blue", "yellow", "purple"];
let [, , ...remainingColors] = colors;
console.log(remainingColors);

// 43: Basic Destructuring //

let User = { name: "Yousuf", age: 38, email: "yousuf@gmail.com", address: "123 Street, karachi." };
let { userName, email, ...restProps } = User;
console.log(userName, email, restProps);

// 44:Nested Destructuring //

let std = { id: 1, name: "Dora", grades: [90, 80], info: { age: 20, major: "CS" } };
let { stdId, stdName, info: { major }, ...Rest } = std;
console.log(stdId, stdName, major, rest);

// 45: Filter Even Numbers //

function filterEven(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4, 5));

// 46: Combine and Sort Arrays //

function combineAndSort(...arrays) {
    return [].concat(...arrays).sort((a, b) => a - b);
}
console.log(combineAndSort([3, 1], [4, 2], [6, 5]));

// 47: Basic Destructuring //

let fruits = ["apple", "banana", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

// 48: Skipping Elements //

let Colors = ["red", "green", "blue", "yellow"];
let [primaryColor, , tertiaryColor] = colors;
console.log(primaryColor, tertiaryColor);

// 49: Rest Operator //

let  numberVal = [1, 2, 3, 4, 5];
let [firstNumber, ...remainingNumbers] = numberVal;
console.log(firstNumber);
console.log(remainingNumbers);

// 50: Basic Object Destructuring //

let prsn = { name: "Namrah", ge: 20, city: "Islamabad" };
let { pname, page, city } = prsn;
console.log(pname, page, city);

// 51: Renaming Variables //

let vehicle = { make: "Toyota", model: "corolla", year: 2021 };
let { make: carMake, model: carModel, year: carYear } = vehicle;
console.log(carMake, carModel, carYear);

// 52: Default Values //

let mobSettings = { theme: "dark" };
let { theme, language = "English" } = mobSettings;
console.log(theme, language);

// 53: Array of Arrays //

let NestedArray = [[1, 2], [3, 4], [5, 6]];
let [[a], [, b], [, c]] = nestedArray;
console.log(a, b, c);

// 54: Object within an Object //

let profile = { username: "user123", details: { Email: "user@example.com", address: "123 Street" } };
let { username, details: { Email, Address } } = profile;
console.log(username, email, address);

// 55: Mix of Arrays and Objects //

let data = { id: 1, info: [{ name: "Alice" }, { age: 25 }] };
let { id, info: [{ name }, { age }] } = data;
console.log(id, name, age);

// 56: Array Parameters //

function printCoordinates([x, y]) {
    console.log(`x: ${x}, y: ${y}`);
}
printCoordinates([5, 10]);

// 57: Object Parameters //

function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Bob", age: 30 });

// 58: List Property Names //

let book = { title: "1984", author: "George Orwell", year: 1949 };
console.log(Object.keys(book));

// 59: Count Properties //

let student = { name: "John", age: 20, grade: "A", school: "XYZ High" };
console.log(Object.keys(student).length);

// 60: Iterate Over Keys //

let product = { name: "Laptop", price: 1000, category: "Electronics" };
Object.keys(product).forEach(key => console.log(`${key}: ${product[key]}`));

// 61: List Property Values //

let movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
console.log(Object.values(movie));

// 62: Sum Values //

let scores = { math: 90, science: 85, english: 88 };
let totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore);

// 63: Iterate Over Values //

let user = { username: "Dora", email: "dora@gmail.com", location: "Lahore" };
Object.values(user).forEach(value => console.log(value));

// 64: List Entries //

let car = { make: "Tesla", model: "Model S", year: 2020 };
console.log(Object.entries(car));

// 65: Convert Object to Array //

let person = { firstName: "John", lastName: "Doe", age: 30 };
console.log(Object.entries(person));

// 66: Iterate Over Entries //

let settings = { theme: "dark", notifications: true, privacy: "high" };
Object.entries(settings).forEach(([key, value]) => console.log(`${key}: ${value}`));

// 67: Filter Keys //

let inventory = { apples: 5, bananas: 12, oranges: 8, grapes: 15 };
let filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log(filteredKeys); 

// 68: Transform Values //

let temperatures = { morning: 20, afternoon: 25, evening: 18 };
let fahrenheitTemps = Object.fromEntries(
    Object.entries(temperatures).map(([key, temp]) => [key, temp * 1.8 + 32])
);
console.log(fahrenheitTemps);

// 69: Key-Value Swap //

let roles = { admin: "Admin", editor: "Editor", viewer: "Viewer" };
let swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);
console.log(swappedRoles);

// 70: Filter and Map //

let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(arr, filterFn, mapFn) {
    return arr.filter(filterFn).map(mapFn);
}
console.log(filterAndMap(val, n => n % 2 !== 0, n => n ** 2));

// 71: Sort and Reduce //

let fruit = ["apple", "banana", "cherry", "dates"];
function sortAndReduce(arr, sortFn, reduceFn) {
    return arr.sort(sortFn).reduce(reduceFn);
}
console.log(sortAndReduce(fruit, undefined, (acc, fruit) => acc + " " + fruit));

// // 72: Simple Callback //

// function greet (name, callback) {
//    callback (`Hello, ${name}!`);
// }
// function printGreeting(message) {
//     console.log(message);
// }
// greet("Alice", printGreeting);

// 73: Asynchronous Callback //

function fetchData(callback) {
    setTimeout(() => callback("Data fetched"), 1000);
}
function displayData(data) {
    console.log(data);
}
fetchData(displayData);

// 74: Simple Arrow Function //

const add = (a, b) => a + b;
console.log(add(3, 5)); 

// 75: Arrow Function with Array Methods //

let newValues = [1, 2, 3, 4, 5];
let squaredNumbers = newValues.map(num => num ** 2);

console.log(squaredNumbers);

// 76: Variable Scope //

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();

// 77: Closure //

function createCounter() {
    let counter = 0;
    return function() {
        counter++;
        console.log(counter);
    };
}
let counter1 = createCounter();
let counter2 = createCounter();
counter1(); 
counter1();
counter2(); 

// 78: Simple Default Parameters //

function greet(name = "World", message = "Hello") {
    console.log(`${message}, ${name}!`);
}
greet("Dora", "Hi"); 
greet(); 

// 79: Default Parameters with Other Arguments //

function calculateArea(width = 10, height = 5) {
    return width * height;
}
console.log(calculateArea());
console.log(calculateArea(6, 7)); 

// 80: Square Numbers //

let numbs = [1, 2, 3, 4, 5];
let squared = numbs.map(num => num ** 2);
console.log(squared); 

// 81: Convert to Uppercase //

let bakers = ["cakes", "Nimcos", "chips"];
let uppercased = bakers.map(bakers => bakers.toUpperCase());
console.log(uppercased);

// 82: Filter Even Numbers //

let nmbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = nmbers.filter(num => num % 2 === 0);
console.log(evens); 

// 83: Filter Long Words //

let Fruits = ["apple", "banana", "cherry", "date"];
let longWords = fruits.filter(Fruits => Fruits.length > 5);
console.log(longWords);

// 84: Log Numbers //

let logNum = [1, 2, 3, 4, 5];
logNum.forEach(logNum => console.log(logNum));

// 85: Log Word Lengths //

let  veg = ["carrots", "potatoes", "Peas"];
veg.forEach(veg => console.log(veg.length)); // Logs 5, 6, 6

// 85: Sum of Numbers //

let sumOfNum = [1, 2, 3, 4, 5];
let newSum = sumOfNum.reduce((acc, num) => acc + num, 0);
console.log(newSum);

// 86: Concatenate Strings //

let message = ["Hello", "world", "this", "is", "JavaScript"];
let sentence = message.reduce((acc, word) => acc + " " + word, "").trim();
console.log(sentence);

// 87: Check for Even Number //

let abc = [1, 3, 5, 7, 8];
let hasEven = abc.some(num => num % 2 === 0);
console.log(hasEven);

// 88: Check for Long Word //

let Mobiles = ["iphone", "Samsung", "Vivo", "Redmi"];
let hasLongWord = Mobiles.some(word => word.length > 5);
console.log(hasLongWord); 

// 89: Check All Even Numbers //

let evenNumbers = [2, 4, 6, 8, 10];
let allEven = evenNumbers.every(num => num % 2 === 0);
console.log(allEven); 

// 90: Check All Long Words //

let xyz = ["elephant", "giraffe", "hippopotamus"];
let allLong = xyz.every(word => word.length > 5);
console.log(allLong);

// 91: Find First Even Number //

let valNum = [1, 3, 5, 7, 8];
let firstEven = valNum.find(num => num % 2 === 0);
console.log(firstEven);

// 92: Find Long Word //

let stdNames = ["Hamza", "Ibrahim", "Fahad", "Abdullah"];
let firstLongWord = stdNames.find(word => word.length > 5);
console.log(firstLongWord);

// 93: Find Index of First Even Number //

let numbers = [1, 3, 5, 7, 8];
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); 

// 94: Find Index of Long Word //

let ABC = ["apple", "banana", "cherry", "date"];
let firstLongWordIndex = ABC.findIndex(word => word.length > 5);
console.log(firstLongWordIndex); 

// 95: Simple Promise //

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(2000).then(() => console.log("Hello, world!"));

// 96: Promise Chain //

function fetchData() {
    return Promise.resolve({ data: "Sample data" });
}
fetchData().then(data => console.log(data));

// 97: Error Handling //

function fetchUserData() {
    return new Promise((resolve, reject) => {
        let user = { name: "Zara" };
        user.age ? resolve(user) : reject("Age is missing");
    });
}
fetchUserData()
    .then(user => console.log(user))
    .catch(err => console.log(err));

// 98: Simulate Network Request //

function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            success ? resolve("Sunny") : reject("Network Error");
        }, 1000);
    });
}
getWeather()
    .then(data => console.log(data))
    .catch(err => console.log(err));

// 99: Simple async Function //

async function sayHello() {
    await delay(2000);
    console.log("Hello, world!");
}
sayHello();

// 100: Fetch Data with async/await //

async function getUserData() {
    try {
        let data = await fetchUserData();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
getUserData();

// 102: Fetch and Process Data //

function fetchUser() {
    return Promise.resolve({ name: "Alice", age: 25 });
}
function fetchPosts() {
    return Promise.resolve(["Post1", "Post2"]);
}
async function getUserAndPosts() {
    let user = await fetchUser();
    let posts = await fetchPosts();
    console.log(user, posts);
}
getUserAndPosts();

// 103: Error Handling in async/await //

function fetchUser() {
    return new Promise((resolve, reject) => {
        let user = null;
        if (user) {
            resolve(user);
        } else {
            reject("User not found");
        }
    });
};

async function getUserInfo() {
    try {
        let user = await fetchUser();
        console.log(user);
    } catch (err) {
        console.log(err); 
    }
};

getUserInfo();

// 104: Simulate API Calls //

function apiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            if (success) {
                resolve("Data received");
            } else {
                reject("Error occurred");
            }
        }, Math.random() * 2000);
    });
}

async function getData() {
    try {
        let data1 = await apiCall();
        console.log(data1);
        let data2 = await apiCall();
        console.log(data2);
        let data3 = await apiCall();
        console.log(data3);
    } catch (err) {
        console.log(err); 
    }
}

getData();

// 105: Fetch Multiple Data Simultaneously with async/await //

function fetchData1() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 1"), 1000));
}
function fetchData2() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 2"), 1500));
}
function fetchData3() {
    return new Promise(resolve => setTimeout(() => resolve("Data from API 3"), 500));
}

async function fetchAllData() {
    try {
        let [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
        console.log(data1, data2, data3); 
    } catch (err) {
        console.log("Error:", err);
    }
}

fetchAllData();

// ********************//    //   //   //   //*****************//   //  //  //  //  //****************** //