//1.concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e'];
var arr3 = ['f'];
console.log(arr1.concat(arr2, arr3)); //["a", "b", "c", "d", "e", "f"]
console.log(arr1.concat(arr3, 'asd')); //["a", "b", "c", "f", "asd"]


/*------------------------------------------------------------------------------------------------------*/
//2.Array.isArray() 判断某个值是否为数组, 类数组对象
Array.isArray([]); //true
Array.isArray([1]); //true
Array.isArray(new Array()); //true
Array.isArray(1); //false
Array.isArray(false); //false
Array.isArray(undefined); //false
Array.isArray(null); //false
Array.isArray({}); //false
Array.isArray(NaN); //false


/*------------------------------------------------------------------------------------------------------*/
//3.Object.prototype.toString.call()检测类型
var arr4 = [];
Object.prototype.toString.call(arr4); //[object Array]



/*------------------------------------------------------------------------------------------------------*/
//4.Array.from(arrayLike[, mapFn[, thisArg]])
   //arrayLike 想要转换成数组的伪数组对象或可迭代对象。
   //mapFn 如果指定了该参数，新数组中的每个元素会执行该回调函数
   //thisArg 可选参数，执行回调函数 mapFn 时 this 对象。
Array.from('foo'); //['f', 'o', 'o']

let s = new Set(['foo', window]);
Array.from(s); //['foo', window]

let m = new Map([[1,2], [3,4], [5,6]]);
Array.from(m); //[[1,2], [3,4], [5,6]]

function f() {
  return Array.from(arguments);
}
f(1,2,3); //[1,2,3]

function combine() {
  let arr = [].concat.apply([], arguments);
  return Array.from(new Set(arr));
}
var m1 = [1,2,2], n1 = [2,3,4];
combine(m1, n1); //[1,2,3,4]



/*------------------------------------------------------------------------------------------------------*/
//5.Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]












