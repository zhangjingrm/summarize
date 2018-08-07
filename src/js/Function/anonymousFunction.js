//1.匿名函数的创建
var double = function(x) {
  return x * 2;
}

(function(x, y) {
  console.log(x + y); //5
})(2, 3);


/*----------------------------------------------------------------------------------------------------------------------------------*/
//2.闭包 闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包的常见的方式，就是在 一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量。
function a() {
  var name = 'zhang';
  return function() {
  	return name;
  }
}
console.log(a()()); //'zhang'

var b = a();
console.log(b()); //'zhang'

/*----------------*/
var num = 0; //全局变量
function test(){
  num++;
}
test();
test();
console.log(num); //2

/*----------------*/
function test2() {
  var num2 = 0;
  num2++;
  return num2;
}
console.log(test2()); //1
console.log(test2()); //1

/*----------------*/
function test3() {
  var num3 = 0;
  return function() {
    num3++;
    return num3;
  }
}
console.log(test3()()); //1
console.log(test3()()); //1

var b = test3();  //由于闭包里作用域返回的局部变量资源不会被立刻销毁回收，所以可能会占用更多的内存。过度使用闭包会导致性能下降，建议在非常有必要的时候才使用闭包
console.log(b()); //1
console.log(b()); //2

/*----------------*/
var name1 = 'The window';
var obj1 = {
  name: 'obj1',
  getName: function() {
  	return function() {
  	  return this.name;
  	}
  }
}
console.log(obj1.getName()()); //'The window'

var name2 = 'The window2';
var obj2 = {
  name: 'obj2',
  getName: function() {
    var that = this;
    return function() {
      return that.name;
    }
  }
}
console.log(obj2.getName()()); //'obj2'


/*------------------------------------------------------------------------------------------------------------------------------*/
//3.立即执行函数














