//数组的解构赋值
var a,b,reset;
[a,b] = [1,2]
console.log(a,b) //1 2

[a,b,...reset] = [1,2,3,4,5]
console.log(a,b, reset) //1 2 [3,4,5]

[a=7, b=5] = [1]
console.log(a,b) //1 5 (默认值) 

var a = 1, b = 2
[a,b] = [b,a]
console.log(a,b) //2 1 (交换两个变量) 

[a, , b] = [1,2,3]
console.log(a,b) //1 3 (忽略某些变量) 


//对象的解构赋值
({a, b} = {a:10, b: 20})
console.log(a,b) //10 20

({a, b, ...reset} = {a: 10, b: 20, c: 30, d: 40})
console.log(a,b) //10 20 {c: 30, d: 40}

var o = {p: 12, q: 34}
({p: foo, q: bar} = o)
console.log(foo, bar) //12 34 (给新的变量名赋值)


