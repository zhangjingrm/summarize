//1.作为一个函数调用 this指向window对象
function add(a, b) {
  return a + b;
}
add(10, 20); //30

function test() {
  return this;
}
test(); //Window对象


/*------------------------------------------------------------------------------------------------------------*/
//2.函数作为方法调用
var myObject = {
  name: 'zhang',
  age: 12,
  sayName: function() {
  	return this.name;
  }
}
myObject.sayName(); //'zhang'


/*------------------------------------------------------------------------------------------------------------*/
//3.使用构造函数调用函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person1 = new Person('zhang', 13);
person1.name; //'zhang'


/*------------------------------------------------------------------------------------------------------------*/
//4.作为函数方法调用函数
function add(a, b) {
  return a + b;
}
var addResult = 100;
addResult = add.call(addResult, 10, 20); //30


function myFunction(a, b) {
  return a * b;
}
var arr = [10, 2];
var funcResult;
funcResult = myFunction.apply(funcResult, arr); //20
