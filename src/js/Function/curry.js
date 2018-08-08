//柯里化通常也称部分求值，其含义是给函数分步传递参数，每次传递参数后,部分应用参数，并返回一个更具体的函数接受剩下的参数，
//中间可嵌套多层这样的接受部分参数函数，逐步缩小函数的适用范围，逐步求解,直至返回最后结果。

var _curry = function(fn) {
  var _args = [];
  return function cb() {
    if (arguments.length === 0) {
      return fn.apply(this, _args);
    }
    Array.prototype.push.apply(_args, [].slice.call(arguments));
    return cb;
  }
} 

var multi = function() {
  var total = 0;
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(item) {
    total += item;
  });
  return total;
}

var calc = _curry(multi);

calc(2)(1,4)(6);
console.log(calc()); //13