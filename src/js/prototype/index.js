//Object.create()
//prototype
//constructor
//__proto__
//hasOwnPrototype
//Object.getPrototypeOf()
//Object.setPrototypeOf()
//

/*----------------------------------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------------------------------*/

//Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
let person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
}

let me = Object.create(person)

me //{ __proto__: {isHuman...} }

/*----------------------------------------------------------------------------------------------------*/

//prototype（构造函数 ---> 原型对象）
//不像每个对象都有__proto__属性来标识自己所继承的原型，只有函数才有prototype属性。
//当创建函数的时候，JS会自动为这个函数添加prototypt属性，值是一个有constructor属性的对象，不是空对象；
//通过new调用时，实例继承构造函数prototype的所有属性和方法
function Test() {
  this.name = 'zhang';
  this.age = 18;
}
Test.prototype.sayHello = function() {
  console.log('Hello')
}
var test1 = new Test();
test1 //Test {name: 'zhang', age: 18, __proto__: {sayHello: func, constructor: f Test()}}


/*----------------------------------------------------------------------------------------------------*/

//constructor（原型对象 ---> 构造函数）

/*----------------------------------------------------------------------------------------------------*/

//__proto__（实例对象 ---> 原型对象）
function Foo() {}
function Object() {}
function Function() {}
Foo.prototype

//prototype&__proto__&constructor

/*----------------------------------------------------------------------------------------------------*/

//hasOwnPrototype(propertyName)
//hasOwnProperty方法接收一个字符串参数，该参数表示属性名称，用来判断该属性是否在当前对象实例中, 不遍历原型链

/*----------------------------------------------------------------------------------------------------*/

//Object.getPrototypeOf(object)
//给定对象的原型。如果没有继承属性，则返回 null 。
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true

var reg = /a/;
Object.getPrototypeOf(reg) === RegExp.prototype; // true


/*----------------------------------------------------------------------------------------------------*/

//Object.setPrototypeOf(obj, prototype) 慎用！
//方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。

/*----------------------------------------------------------------------------------------------------*/


//prototypeObj.isPrototypeOf(object)
// 方法用于测试一个对象是否存在于另一个对象的原型链上
if (Foo.prototype.isPrototypeOf(baz)) {
  // 检查 baz 对象是否继承自 Foo.prototype
}

/*----------------------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------*/















