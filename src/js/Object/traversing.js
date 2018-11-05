//1.Object.keys(obj)
var obj1 = { name: 'zhang', age: 12};
Object.keys(obj1).forEach(function(key) {
  console.log(key, obj1[key]); //不会深度遍历
});

/*--------------------------------------------------------------------------------------------------------------------------*/
//2.for..in循环 循环遍历对象自身的和继承的可枚举属性(不含Symbol属性)
var obj2 = { name: 'lisi', age: 18};
for(var i in obj2) {
  console.log(i, obj2[i]); //不会深度遍历
}

/*--------------------------------------------------------------------------------------------------------------------------*/
//3.Object.getOwnPropertyNames(obj) 返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性)
var obj3 = { a: 1, b: 2, c: { c1: 11, c2: 12}};
Object.getOwnPropertyNames(obj3).forEach(function(key) {
  console.log(key, obj3[key]); //不会深度遍历
});


/*--------------------------------------------------------------------------------------------------------------------------*/
//4.Reflect.ownKeys(obj) 包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举
var obj4 = { a: 1, b: 2, c: { c1: 11, c2: 12}};
Reflect.ownKeys(obj4).forEach(function(key) {
  console.log(key, obj4[key]); //不会深度遍历
});


/*--------------------------------------------------------------------------------------------------------------------------*/
//5.Object.getOwnPropertySymbols(obj) 返回值是存储自有Symbol属性的数组
var obj5 = { a: 1, b: 2, c: { c1: 11, c2: 12}};
Object.getOwnPropertySymbols(obj5).forEach(function(key) {
  console.log(key, obj5[key]); //undefined
});














