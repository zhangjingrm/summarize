//1. ==（会在进行比较之前，将两个操作数转换成相同的类型）
1 == '1' //true
1 == true //true
0 == false //true
var arr1 = [1,2], arr2 = [1,2]; arr1 == arr2 //数组不能直接用==进行比较 false
var obj1 = {a:1, b:2}, obj2 = {a:1, b:2}; obj1 == obj2 //对象不能直接用==进行比较 false


//2. !=（会在进行比较之前，将两个操作数转换成相同的类型）
1 != 2 //true
1 != '1' //false
1 != true //false
0 != false //false
var arr1 = [1,2], arr2 = [1,2]; arr1 != arr2 //数组和对象直接比较不等的返回是true


//3. ===（仅当两个操作数的类型相同且值相等为 true）
1 === 1 //true
1 === '1' //false


//4. !==（两边操作数不相等或类型不同时返回true）
3 !== 3 //false
3 !== '3' //true


//5. >（左边的操作数大于右边的操作数返回true）
4 > 3 //true
'4' > 3 //true
2 < true //false
         //其他引用类型进行比较，会返回false


//6. >=（左边的操作数大于或等于右边的操作数返回true）
4 >= 4 //true


//7. <（左边的操作数小于右边的操作数返回true）
4 < 3 //false
'4' < 3 //false
2 < true //true
         //其他引用类型进行比较，会返回false


//8. <=（左边的操作数小于或等于右边的操作数返回true）
4 <= 4 //true













