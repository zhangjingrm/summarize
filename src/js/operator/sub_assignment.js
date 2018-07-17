//加法赋值  x -= y  =>  x = x - y

//Number - Number => Number
var number1 = 1  
number1 -= 2  //-1

//Number - String(能转为数字的字符串) => Number
var number2 = 1  
number2 -= '2'  //-1

//Number - String(不能转为数字的字符串) => NaN
var number3 = 1  
number3 -= 'abc'  //NaN

//Number - Boolean(true 1, false 0) => Number
var number4 = 1  
number4 -= true  //0

//Number - Array(Object) => NaN
var number5 = 1  
number5 -= [1,2]  //NaN

/*-------------------------------------------------------------------------------------------*/

//String(能转为数字的字符串) - Number => Number
var string1 = '1'  
string1 -= 2  //-1

//String(能转为数字的字符串)- String(能转为数字的字符串)||Boolean => Number
var string2 = '1'  
string2 -= '2'  //-1

//String(能转为数字的字符串)- String(不能转为数字的字符串)||Obejct||Array => NaN
var string3 = '1'  
string3 -= 'abc'  //NaN

//String(不能转为数字的字符串) - 任意类型 => NaN
var string4 = 'abc'  
string4 -= true  //NaN


/*-------------------------------------------------------------------------------------------*/

