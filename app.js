console.log("javascript connected");

//  < ------ objects ------>

//  qustion 1 

// var car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// }
// console.log(car);

//  question 2

// car.color = "red"
// delete car.year;
// console.log(car);

//  question 3 

// var person = {
//     name: "Ahmed",
//     age: 20
// }
// console.log(person);

// question 4 

// var student = {
//     name: "Ahmed",
//     marks: 50,
//     showMarks: function () {
//         alert(this.marks)
//     }
// }
// student.showMarks()

// question 5

// var user = {
//     name: "Ahmed",
//     addres: {
//         city: "karachi",
//         zip: 23400
//     }
// }
// console.log(user);

//  question 6 

// var book = {
//     title: "javascript Basics",
//     author: "Mark myers",
//     pages: 250
// }
// for (var key in book) {
//     console.log(key + ":" + book[key]);
// }

//  question 7 

// var phone = {
//     brand: "infinix",
//     camera: "100mp",
//     battery: "4000mah"
// }
// if ("camera" in phone) {
//     alert("propert exists");
// } else {
//     alert("property not exist");
// }

//question 8 

// var obj = {
//     name: "Ahmed",
//     age: 20,
//     city: "karachi",
// }
// var count = 0;

// for (var key in obj) {
//     count++
// }
// console.log("properties", + count);

// question 9 

// var obj = {
//     name: "Ahmed",
//     age: 20,
//     city: "karachi"
// }
// var array = []

// for (var key in obj) {
//     array.push(key)
// }
// console.log(array);

// question 10

// var animal = {
//     type: "cat",
//     color: "white",
//     age: 2
// }
// var newanimal = {}

// for (var key in animal) {
//     newanimal[key] = animal[key]
// }
// console.log(newanimal);

// // < ----- objects completed ---->

// < ---- constructors ---->

// question 1

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // question 2

// var p1 = new Person('hassan', 20);
// var p2 = new Person('bilal', 25);
// var p3 = new Person('Ahmed', 30);

// // question 3

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function() {
//     alert('Hi, ' + this.name);
//   };
// }

// //question 4

// var p1 = new Person('Ahmed', 20);
// p1.sayHi(); 

// //question 5

// function Person(name, age) {
//   this.name = name;
//   this.age = age || 18; 
// }

// // question 6

// var p1 = new Person('Ahmed', 20);
// p1.city = 'Karachi';

// //question 7

// function Engine(type) {
//   this.type = type;
// }
// function Car(model, type) {
//   this.model = model;
//   this.engine = new Engine(type);
// }

// // question 8

// var p1 = new Person('Ahmed', 20);
// console.log(p1 instanceof Person); 

// //question 9

// function Student(name, marks) {
//   this.name = name;
//   this.marks = marks;
// }
// // question 10

// var students = [
//   new Student('hassan', 90),
//   new Student('bilal', 85),
//   new Student('Ahmed', 92)
// ];

// < ----- constructors completed ------->

// < ------ prototypes ------->

// question 1

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function() {
//   alert('Hello!');
// };

// // question 2

// var p1 = new Person('Ahmed');
// var p2 = new Person('hassan');
// console.log(p1.greet === p2.greet); 

// // question 3

// Person.prototype.species = 'Human';
// console.log(p1.species);

// // question 4

// p1.greet = function() {
//   alert('Hi');
// };
// p1.greet();

// // question 5

// console.log('greet' in p1);

// // question 6

// Person.prototype.eat = function() {};
// Person.prototype.sleep = function() {};

// // question 7

// function Car(brand, year) {
//   this.brand = brand;
//   this.year = year;
// }
// Car.prototype.getInfo = function() {
//   return this.brand + ' ' + this.year;
// };

// // question 8

// var c1 = new Car('Toyota', 2020);
// var c2 = new Car('Honda', 2021);
// console.log(c1.getInfo === c2.getInfo);

// // question 9

// console.log(p1.constructor === Person);

// // question 10

// function Animal() {}
// Animal.prototype.speak = function() {
//   console.log('Animal sound');
// };

// function Dog() {}
// for (var key in Animal.prototype) {
//   Dog.prototype[key] = Animal.prototype[key];
// }

