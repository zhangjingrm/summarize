//加法赋值  x += y  =>  x = x + y

var name = 'zhang'
var age = 12
var isTop = true
var hobby = ['a', 'b', 'c']

//两个表达式都为数字或布尔值，添加
//两个表达式都是字符串，连接
//一个是字符串，另一个是数字或者布尔值，连接

/* Number + Number => addition 默认每次赋初值，下同*/
age += 2 //14

/* Number + Boolean => addition */
age += isTop //13

/* Number + String => concatenation */
age += name //12zhang

/* Boolean + Boolean => addition */
isTop += false //1

/* String + String => concatenation */
name += 'lisi' //'zhanglisi'

/* String + Boolean => concatenation */
name += true //'zhangtrue'


/* Array + Boolean => concatenation */
hobby += true //'a,b,ctrue'

/* Array + String => concatenation */
hobby += '12' //'a,b,c12'

/* Array + Number => concatenation */
hobby += 12 //'a,b,c12'

/* Array + Array => concatenation */
hobby += ['d'] //'a,b,cd'

