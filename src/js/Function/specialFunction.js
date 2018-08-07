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


/*--------------------------------------------------------------------------------------------------------------*/
//2.函数防抖 指定时间间隔内只会执行一次任务
function _debounce(fn, wait) {
  var timer = null;
  return function() {
  	clearTimeout(timer);
  	timer = setTimeout(() => {
  	  fn();
  	}, wait);
  }
}

function _log() {
  console.log('click');
}

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
  // _log(); //每次点击都会打印出一条信息
});

var btn2 = document.getElementById('btn2');
btn2.addEventListener('click', _debounce(_log, 500)); //连续点击后间隔500ms才会触发_log


  //应用场景
  //-每次 resize/scroll 触发统计事件
  //-文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）



/*--------------------------------------------------------------------------------------------------------------*/
//3.函数节流 任务频繁出发的情况下，只有任务触发的间隔超过指定的间隔的时候，任务才会执行
function _throttle(fn, wait, time) {
  var previous = null; //记录上一次运行的时间
  var timer = null;
  return function() {
    var now = +new Date();
    if (!previous) previous = now;
    if (now - previous > time) {
      clearTimeout(timer);
      fn();
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
      	fn();
      }, wait);
    }
  }
}

var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', _throttle(_log, 500, 500));


  //应用场景
  //-DOM 元素的拖拽功能实现（mousemove
  //-射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
  //-计算鼠标移动的距离（mousemove）
  //-Canvas 模拟画板功能（mousemove）
  //-搜索联想（keyup）
  //-监听滚动事件判断是否到页面底部自动加载更多：
   //给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次





