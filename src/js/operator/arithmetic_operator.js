//1.求余运算符 二元运算符. 返回相除之后的余数
//只适用于Number(或者是可以转化为数字的字符串, 或者是Boolean)，其他类型的值会返回NaN，和减法的规则类似
//其中1%false => NaN  false%1 => 0


//2.自增++
//一元运算符. 将操作数的值加一. 如果放在操作数前面 (++x), 则返回加一后的值; 如果放在操作数后面 (x++), 则返回操作数原值,然后再将操作数加一.
//只适用于Number(或者是可以转化为数字的字符串, 或者是Boolean)，其他类型的值会返回NaN，和减法的规则类似
//不能直接写false++，而是要var x = false;x++;


//3.自减++
//一元运算符. 将操作数的值减一. 前后缀两种用法的返回值类似自增运算符


//4.一元负值符(-)
//一元运算符,返回操作数的负值
//只适用于Number(或者是可以转化为数字的字符串, 或者是Boolean)，其他类型的值会返回NaN
//=false => -0


//5.一元正值符(+)
//一元运算符, 如果操作数在之前不是number，试图将其转换为number(可以转化为数字的字符串, 或者是Boolean)


//6.指数运算符(**)  x **= y  =>  x = x ** y
//x，y是number或者是可以转为数字的字符串,
//x,y有一个为其他类型的时候都会返回NaN