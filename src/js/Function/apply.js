//1.apply和call的语法
 //--func.apply(obj, []);
 //--apply 方法传入两个参数：一个是作为函数上下文的对象，另外一个是作为函数参数所组成的数组

var obj = {
  name: 'lianxi'
}

function func(firstName, lastName) {
  console.log(firstName + ' ' + this.name + ' ' + lastName); //A lianxi B
}

func.apply(obj, ['A', 'B']);
//obj 是作为函数上下文的对象，函数 func 中 this 指向了 obj 这个对象。参数 A 和 B 是放在数组中传入 func 函数，分别对应 func 参数的列表元素。

var obj2 = {
  name: 'xilie'
}

function func2(firstName, lastName) {
  console.log(firstName + ' ' + this.name + ' ' + lastName); //A xilie B
}

func2.call(obj2, 'A', 'B');


/*------------------------------------------------------------------------------------------------------------------------------*/
//2.apply和call的作用

//--改变this的指向
var obj = {
  name: 'zhang'
}

function person() {
  console.log(this.name);
}

person.apply(obj); //'zhang'
/*-------------------------------------*/
//--借用别的对象的方法
var Person1 = function() {
  this.name = 'zhang'
}
var Person2 = function() {
  this.getName = function() {
  	console.log(this.name);
  }
  Person1.call(this); //使用 Person1 对象代替 this 对象
  // Person1 的 this 变成 Person2的this，并执行一遍Person1函数,Person2就多了一个name属性
}
var person2 = new Person2();
person2.getName(); //'zhang'

/*-------------------------------------*/
//--调用函数 apply、call 方法都会使函数立即执行，因此它们也可以用来调用函数
function func() {
  console.log('lisi');
}
func.call(); //'lisi'


/*------------------------------------------------------------------------------------------------------------------------------*/
//2.bind方法和call方法很类似，

//--bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数。而原函数 func 中的 this 并没有被改变，依旧指向全局对象 window。
var age = 12;
var obj = {
  age: 18
}
function func() {
  console.log(this.age)
}
var func1 = func.bind(obj);
func1(); //18
func(); //12

/*-------------------------------------*/
//--call 是把第二个及以后的参数作为 func 方法的实参传进去，而 func1 方法的实参实则是在 bind 中参数的基础上再往后排。
function test(a, b, c) {
  console.log(a, b, c);
}
var test1 = test.bind(null, 'aaa');
test('A', 'B', 'C'); //A B C
test1('A', 'B', 'C'); //aaa A B 
test1('B', 'C'); //aaa B C
test.call(null, 'zhang'); //zhang undefined undefined


//猫吃鱼，狗吃肉，奥特曼打小怪兽。

//有天狗想吃鱼了

//猫.吃鱼.call(狗，鱼)

//狗就吃到鱼了

//猫成精了，想打怪兽

//奥特曼.打小怪兽.call(猫，小怪兽)



















