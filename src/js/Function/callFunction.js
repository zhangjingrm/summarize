//1.作为一个函数调用 this指向window对象
function add(a, b) {
  return a + b;
}
add(10, 20); //30

function test() {
  return this;
}
test(); //Window对象


/*------------------------------------------------------------------------------------------------------------*/
//2.