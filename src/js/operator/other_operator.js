//1.条件运算符
//条件 ? 值1 : 值2
var age = 12
var status = (age > 18) ? "adult" : "minor"

//2.逗号操作符
var arr = [1,2,3,4]
for(var x=0,y=9;i<=9;i++,j--) {
 //do something
}

//3.一元操作符-delete 删除一个对象或一个对象的属性或者一个数组中某一个键值
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
if (3 in trees) {
  // 不会被执行
}

//4.typeof
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
typeof Number(1) === 'number'; // 但不要使用这种形式!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
typeof String("abc") === 'string'; // 但不要使用这种形式!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但不要使用这种形式!

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 

// Objects
typeof {a:1} === 'object';

// 使用Array.isArray 或者 Object.prototype.toString.call
// 区分数组,普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof class C{} === 'function'
typeof Math.sin === 'function';
typeof new Function() === 'function';


//5.instanceof (object instanceof constructor)
// 用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
function C(){} 
function D(){} 

var o = new C();

o instanceof C; //true
o instanceof D; //false
o instanceof Object; //true
C.prototype instanceof Object; //true

C.prototype = {};
var o2 = new C();
o2 instanceof C; //true
o instanceof C; //false

D.prototype = new C();
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为C.prototype现在在o3的原型链上













