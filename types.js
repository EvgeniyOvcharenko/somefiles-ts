var isFetching = true;
var someNumber = 10;
var message = "Hello typescript";
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ["Hello", "Typescript"];
//Tuple
var contact = ["Evgeniy", 1234567];
var variable = 42;
variable = "New string";
variable = [];
function sayMyName(name) {
    console.log(name);
}
sayMyName("Kharkov");
//Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = "admin";
var id = 1234;
var id2 = "Evgeniy";
