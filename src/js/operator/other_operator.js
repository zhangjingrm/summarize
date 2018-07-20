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
var myFunc = function() {}
var myObj = {a:1}
var myArr = []
typeof 12 //"number"
typeof true //"boolean"
typeof myFunc //"function"