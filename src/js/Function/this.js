//this的指向在函数定义的时候是确定不了的，只有的函数调用的时候才能调用，this最终的指向是最终调用它的那个对象

//例子1
function a() {
  var user = 'zhang';
  console.log(this.name);
  console.log(this);
}
a();
//undefined
//Window


/*------------------------------------------------------------------------------------------------*/
//例子2
var obj1 = {
  name: 'zhang',
  sayName: function() {
    console.log(this.name);
  }
}
obj1.sayName(); //zhang


/*------------------------------------------------------------------------------------------------*/
//例子3
var obj2 = {
  name: 'zhang',
  sayName: function() {
    console.log(this.name);
  }
}
window.obj2.sayName(); //zhang


/*------------------------------------------------------------------------------------------------*/
//例子4
var obj3 = {
  a: 12,
  b: {
  	a: 34,
  	fn: function() {
  	  console.log(this.a);
  	}
  }
}
obj3.b.fn(); //34

/*------------------------------------------------------------------------------------------------*/
//例子5
var obj4 = {
  a: 12,
  b: {
  	// a: 34,
  	fn: function() {
  	  console.log(this.a);
  	}
  }
}
obj4.b.fn(); //undefined

/*------------------------------------------------------------------------------------------------*/
//例子6
var obj5 = {
  a: 12,
  b: {
  	a: 34,
  	fn: function() {
  	  console.log(this.a); //undefined
  	  console.log(this); //Aindow
  	}
  }
}
var f = obj5.b.fn;
f();


/*------------------------------------------------------------------------------------------------*/
//例子7 new关键字改变this的指向
	//这里之所以对象person1可以点出函数Person里面的name是因为new关键字可以改变this的指向，将这个this指向对象person1，
	//为什么我说person1是对象，因为用了new关键字就是创建一个对象实例，
	//理解这句话可以想想我们的例子3，我们这里用变量person1创建了一个Fn的实例（相当于复制了一份Fn到对象person1里面），此时仅仅只是创建，并没有执行，
	//而调用这个函数Person的是对象person1，那么this指向的自然是对象person1，
	//那么为什么对象person1中会有name，因为你已经复制了一份Person函数到对象person1中，用了new关键字就等同于复制了一份。
function Person() {
  this.name = 'zhang';
}

var person1 = new Person();
person1.name; //zhang


/*------------------------------------------------------------------------------------------------*/
//例子8 apply改变this的指向 apply.js



/*------------------------------------------------------------------------------------------------*/
//例子9 当this碰到return
/**
 *如果返回值是一个对象(不包括null)，那么this指向的就是那个返回的对象，如果返回值不是一个对象(number, undefined，null)那么this还是指向函数的实例。
 *
 */
function Person() {
  this.name = 'zhang';
  return {};
}
var person2 = new Person();
person2.name; //undefined

function Person() {
  this.name = 'zhang';
  return 1;
}
var person2 = new Person();
person2.name; //zhang

function Person() {
  this.name = 'zhang';
  return undefined;
}
var person2 = new Person();
person2.name; //zhang

function Person() {
  this.name = 'zhang';
  return null;
}
var person2 = new Person();
person2.name; //zhang














