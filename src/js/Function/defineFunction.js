//1.函数声名（函数语句）
  //实参 mycar 和形参 theObject 指向同一个对象.
function myFunc(theObject) {
  theObject.name = 'Toyo';
}

var myCar = {
  name: 'test'
}

console.log(myCar.name); //test

myFunc(myCar);
console.log(myCar.name); //Toyo


/*---------------------------------------------------------------------------------------------------------*/
//2.函数表达式
var myFunc1 = function namedFunction() {};
var myFunc2 = function() {}; //匿名函数

/*---------------------------------------------------------------------------------------------------------*/
//3.立即执行函数 -函数声名后立即调用，函数只是用一次
(function() {
  console.log('立即执行函数');
})();


/*---------------------------------------------------------------------------------------------------------*/
//4.function* 生成器函数 (generator function)，它返回一个  Generator  对象
function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); //10

console.log(gen.next().value); //20


/*---------------------------------------------------------------------------------------------------------*/
//5.箭头函数
var arr = [{
  name: 'test1', age: 12
}, {
  name: 'test2', age: 13
}];
arr.forEach(item => {
  console.log(item.name);  //test1 test2
});


/*---------------------------------------------------------------------------------------------------------*/
//6.构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person1 = new Person('zhang', 12);
console.log(person1.name); //zhang









