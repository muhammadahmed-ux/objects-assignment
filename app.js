console.log("javascript connected");

// // < ------ objects ------>

// // <----- qustion 1 --->

var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}
console.log(car);

// // <------ question 2 ------>

car.color = "red"
delete car.year;
console.log(car);

// // <------- question 3 ----->

var person = {
    name: "Ahmed",
    age: 20
}
console.log(person);

// // < ------ question 4 ------>

var student = {
    name: "Ahmed",
    marks: 50,
    showMarks: function () {
        alert(this.marks)
    }
}
student.showMarks()

// // < ------ question 5 ------>

var user = {
    name: "Ahmed",
    addres: {
        city: "karachi",
        zip: 23400
    }
}
console.log(user);

// // < ------ question 6 ------>

var book = {
    title: "javascript Basics",
    author: "Mark myers",
    pages: 250
}
for (var key in book) {
    console.log(key + ":" + book[key]);
}

// // < ----- question 7 ----->

var phone = {
    brand: "infinix",
    camera: "100mp",
    battery: "4000mah"
}
if ("camera" in phone) {
    alert("propert exists");
} else {
    alert("property not exist");
}

// // < ----- question 8 ----->

var obj = {
    name: "Ahmed",
    age: 20,
    city: "karachi",
}
var count = 0;

for (var key in obj) {
    count++
}
console.log("properties", + count);

// // <------ question 9 ----->

var obj = {
    name: "Ahmed",
    age: 20,
    city: "karachi"
}
var array = []

for (var key in obj) {
    array.push(key)
}
console.log(array);

// // < ------ question 10 ----->

var animal = {
    type: "cat",
    color: "white",
    age: 2
}
var newanimal = {}

for (var key in animal) {
    newanimal[key] = animal[key]
}
console.log(newanimal);

// < ----- objects completed ---->


