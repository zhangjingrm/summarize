//1.对象的赋值
var arr = {'a': 1, 'b': 2};
var arr1 = arr;
arr['a'] = 999;
console.log(arr, arr1); //{a: 999, b: 2} {a: 999, b: 2}

var arr = {'a': 1, 'b': 2};
var arr2 = arr;
arr = {};
arr['a'] = 999;
console.log(arr, arr2); //{a: 999} {a: 1, b: 2}

/*---------------------------------------------------------------------------------------------------------*/
//2. shallowClone 简单的浅拷贝
function shallowClone(copyObj) {
  var obj = {}
  for(var i in copyObj) {
  	obj[i] = copyObj[i];
  }
  return obj;
}
var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = shallowClone(x);
x.b.f = {
  test: 'test'
}
console.log(y); //{a: 1, b: {f: {test: 'test'} }, c: [1, 2, 3]}


/*---------------------------------------------------------------------------------------------------------*/
//3.Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = Object.assign({}, x);
console.log(y.b.f === x.b.f);     // true



/*---------------------------------------------------------------------------------------------------------*/
//4.JSON.stringify() 没办法复制function，正则，NaN, Infinity, 精确的浮点数，循环引用
var x = {
  a: 1,
  b: { f: function(){} },
  c: { g: [ 1, 2, 3 ]}
};
var y = JSON.parse(JSON.stringify(x));

console.log(y); //{ a: 1, b: {}, c: { g: [1,2,3] }}



/*---------------------------------------------------------------------------------------------------------*/
//5.deepClone 深拷贝
var deepClone = function (obj) {
  let result = {};
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      const temp = obj[key];
      let arr = [];
      for (let value of temp) {
        if (value && typeof value === 'object') {
          arr.push(deepClone(value));
        } else {
          arr.push(value);
        }
      }
      result[key] = arr;
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
       result[key] = deepClone(obj[key]);
    } else {
       result[key] = obj[key];
    }
  }
  return result;
}

var test = {
  a: 1,
  b: {
  	c: [{ d: 2}, 5]
  },
  e: {
  	f: {
  	  g: [3,4],
  	  h: function(){}
  	}
  }
}
var test1 = deepClone(test);
console.log(test1);



