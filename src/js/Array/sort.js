//1.sort(sortby)
   //如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，
   //说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。
var arr = [4,6,3,5,2,67,8,4];
arr.sort(function(a,b) {
  return a > b;
});
console.log(arr); //[2, 3, 4, 4, 5, 6, 8, 67]

var arr2 = ['test', 3, 'zhang', '测试'];
arr2.sort();
console.log(arr2); //[3, "test", "zhang", "测试"]

var arr3 = [{
  name: 'zhang', age: 18
}, {
  name: 'li', age: 12
}, {
  name: 'wang', age: 20
}];
function arrSort(property, desc) {
  if (desc) {
    return function (a, b) {
      return b[property] - a[property];
    }
  } else {
    return function (a, b) {
      return a[property] - b[property];
    }
  }
}
console.log(arr3.sort(arrSort('age', true)));


//2.reverse() 颠倒数组的排列顺序，改变了原数组
var arr4 = ['test', 'index.js', 'modifier.js'];
var arr5 = arr4.reverse();
console.log(arr4, arr5); //["modifier.js", "index.js", "test"] ["modifier.js", "index.js", "test"]