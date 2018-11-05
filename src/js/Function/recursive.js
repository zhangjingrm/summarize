/**
 *递归的步骤(技巧)
 * 1. 假设递归函数已经写好
 * 2. 寻找递推关系
 * 3. 将递推关系的结构转换为递归体
 * 4. 将临界条件加入到递归体中
 */

//1.求1-100的和
function sum(n) {
  if (n <= 1) {
    return 1;
  }
  var result = sum(n-1) + n;
  return result;
}
sum(100); //5051

//2.求 1,3,5,7,9,...第n项的结果和前n项和,序号从0开始
function oddNumber(n) { //第n项的结果
  return 2 * n - 1;
}
function oddNumberSum(n) { //前n项和
  if (n === 0) return -1;
  return oddNumberSum(n-1) + oddNumber(n);
}

//3.Fibonacci数列(斐波那契数列) 1,1,2,3,5,8,13,21,34,55,89...求第 n 项
function fibonacci(n) {
  if (n < 3) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}
fibonacci(6); //8