//1.回调函数
function fn(arg1, arg2, callback) {
  var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
  callback(num);
}
fn(10, 20, function(num) {
  console.log('Callback called! num:' + num);
}); //输出10-20之间的随机数

function foo() {
  var b = 10;
  return function() { //返回一个内嵌匿名函数（这是创建闭包最常用的手段）
    b *= 2;
    return b;
  }
}
var f = foo();
f(); //20
f(); //40