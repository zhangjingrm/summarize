//1.字面量（利用json对象）
var obj1 = {
  name: 'zhang',
  age: 12,
  produce: function(message) {
    console.log(message);
  }
}

/*-------------------------------------------------------------------------------------------------------------------------*/
//2.new Object()
var obj2 = new Object();
obj2.name = 'li';
obj2.age = 18;
obj2.produce = function(message) {
  console.log(message);
}


/*-------------------------------------------------------------------------------------------------------------------------*/
//3.工厂模式 --不能解决对象识别的问题
function createPerson(name, age) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function() {
  	console.log(this.name);
  }
  return o;
}
var person1 = createPerson('zhang, 12');
var person2 = createPerson('li, 18');


/*-------------------------------------------------------------------------------------------------------------------------*/
//4.构造函数模式
   //没有显示的创建对象，但实际上执行了一下步骤
   //
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
  	console.log(this.name)
  }
}
var person1 = new Person('zhang', 12);
var person2 = new Person('li', 18);
person1 instanceof Object //true
person1 instanceof Person //true


/*-------------------------------------------------------------------------------------------------------------------------*/
//5.原型模式
function Person() {}
Person.prototype.name = 'jing';
Person.prototype.age = 12;
Person.prototype.sayName = function() {
  console.log(this.name);
}
var person1 = new Person();
  //或者可以这样写
function Person() {}
Person.prototype = {
  name: '',
  age: 12,
  sayName: function() {
  	console.log(this.name);
  }
}
var person1 = new Person();

/*-------------------------------------------------------------------------------------------------------------------------*/
//6.组合使用构造函数模式和原型模式
   //--这是使用最为广泛、认同度最高的一种创建自定义类型的方法。它可以解决上面那些模式的缺点
   //--使用此模式可以让每个实例都会有自己的一份实例属性副本，但同时又共享着对方法的引用
   //--这样的话，即使实例属性修改引用类型的值，也不会影响其他实例的属性值了
function Person(name) {
  this.name = name;
  this.friends = ['chang', 'yue'];
}
Person.prototype.sayName = function() {
  console.log(this.name);
}
var person1 = new Person();
var person2 = new Person();
person1.friends.push('Vae');
console.log(person1.friends); //['chang', 'yue', 'Vae']
console.log(person2.friends); //['chang', 'yue']

/*-------------------------------------------------------------------------------------------------------------------------*/
//7.动态原型模式
   //--动态原型模式将所有信息都封装在了构造函数中，初始化的时候，通过检测某个应该存在的方法时候有效，来决定是否需要初始化原型
function Person(name, age) {
  this.name = name;
  this.age = age;
  if (typeof this.sayName !== 'function') {
  	Person.prototype.sayName = function() {
  	  console.log(this.name);
  	}
  }
}
var person1 = new Person('zhang', 12);
person1.sayName(); //'zhang'


/*-------------------------------------------------------------------------------------------------------------------------*/
//8.寄生构造函数模式
   //--这种模式的基本思想就是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新建的对象
function Person(name, age) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function() {
  	console.log(this.name)
  }
  return o
}
var person1 = new Person('zhang', 15);
person1.sayName(); //'zhang'


/*-------------------------------------------------------------------------------------------------------------------------*/
//9.稳妥构造函数模式 
   //--稳妥构造函数模式和寄生模式类似，有两点不同:一是创建对象的实例方法不引用this，而是不使用new操作符调用构造函数
   //--和寄生构造函数模式一样，这样创建出来的对象与构造函数之间没有什么关系，instanceof操作符对他们没有意义
function Person(name, age) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function() {
  	console.log(name);
  }
}
var person1 = Person('zhang', 14);
person1.sayName(); //'zhang'














