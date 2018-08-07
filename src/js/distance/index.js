
//1.屏幕的宽度和高度(电脑设置的分辨率)
console.log('screen.width: ' + screen.width);
console.log('screen.height: ' + screen.height);


/*------------------------------------------------------------------------------------------------*/
//2.offset
var test1 = document.getElementById('test1');
console.dir(test1);
console.log('当前对象的上级对象', test1.offsetParent); //指向一个最近的包含该元素的定位元素
console.log('当前对象的宽度', test1.offsetWidth); //width+padding+border(50+10*2+3*2)
console.log('当前对象的高度', test1.offsetHeight); //height+padding+border(50+10*2+3*2)
console.log('当前对象到其上级层上边的距离', test1.offsetTop); //一般来讲是上层元素的padding-top + 当前元素的 margin-top,但是要考虑margin-top溢出父节点的情况
console.log('当前对象到其上级层左边的距离', test1.offsetLeft); //一般来讲是上层元素的padding-top + 当前元素的 margin-top,但是要考虑到定位的影响


/*------------------------------------------------------------------------------------------------*/
//3.client
console.log('当前对象可见内容的宽度', test1.clientWidth); //获取对象可见内容的宽度，不包括滚动条，不包括边框 width+padding
console.log('当前对象可见内容的高度', test1.clientHeight); //
console.log('当前对象的border高度', test1.clientTop); //
console.log('当前对象的border宽度', test1.clientLeft); //


/*------------------------------------------------------------------------------------------------*/
//4.scroll
console.log('当前对象的滚动宽度', test1.scrollWidth); //
console.log('当前对象的滚动高度', test1.scrollHeight); //
console.log('', test1.scrollTop); //设置或获取位于对象最顶端和对象中可见内容的最顶端之间的距离；(height+padding为一体)
console.log('', test1.scrollLeft); //设置或获取位于对象左边界和对象中目前可见内容的最左端之间的距离(width+padding为一体)

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
  test1.offsetParent.scrollTo(0, test1.scrollHeight);
  console.log('', test1.scrollTop);
});


/*------------------------------------------------------------------------------------------------*/
//5.js获取页面坐标


/*------------------------------------------------------------------------------------------------*/
//

/*------------------------------------------------------------------------------------------------*/
//