function foo(){
    let valInt = 1;
    let valString = "2";
    let obj = {first: '1',second:'2'}
    var arr = [1,2,3];
    bar(valInt,valString,obj,arr);
    console.log(valInt);
    console.log(valString);
    console.log(obj);
    console.log(arr);
}

function bar(val1,val2,obj,arr){
    val1 = 11;
    val2 = "22"
    obj.first = 11
    obj.third = 3
    arr[0] = 11
    arr[arr.length-1] = 99
}

foo();


// == ===
// 对于引用类型的变量，==和===只会判断引用的地址是否相同，而不会判断对象具体里属性以及值是否相同。因此，如果两个变量指向相同的对象，则返回true。
var arrRef = ['Hi!'];
var arrRef2 = arrRef;
 
console.log(arrRef === arrRef2); // true

// 如果是不同的对象，及时包含相同的属性和值，也会返回false。
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];

console.log(arr1 === arr2); // false

// 如果想判断两个不同的对象是否真的相同，一个简单的方法就是将它们转换为字符串然后判断。
var arr1str = JSON.stringify(arr1);
var arr2str = JSON.stringify(arr2);
 
console.log(arr1str === arr2str); // true
// 另一个方法就是递归地判断每一个属性的值，直到基本类型位置，然后判断是否相同。

// 函数参数
// 纯函数
// 对于一个函数，给定一个输入，返回一个唯一的输出。除此之外，不会对外部环境产生任何附带影响。我们机会称该函数为纯函数。所有函数内部定义的变量在函数返回之后都被垃圾回收掉。

// 但是，如果函数的输入是对象(Array, Function, Object)，那么传入的是一个引用。对该变量的操作将会影响到原本的对象。这样的编程手法将产生附带影响，是的代码的逻辑复杂和可读性变低。

// 因此，很多数组函数，比如Array.map和Array.filter是以纯函数的形式实现。虽然它们的参数是一个数组变量，但是通过深度拷贝并赋值给一个新的变量，然后在新的数组上操作，来防止原始数组被更改。

// 我们来看一个例子：

function changeAgeImpure(person) {
    person.age = 25;
    return person;
}
var alex = {
    name: 'Alex',
    age: 30
};
var changedAlex = changeAgeImpure(alex);
console.log(alex); // { name: 'Alex', age: 25 }
console.log(changedAlex); // { name: 'Alex', age: 25 }
// 在非纯函数changeAgeImpure中，将对象person的age更新并返回。原始的alex对象也被影响，age更新为25。

// 让我们来看如何实现一个纯函数：
function changeAgeImpure(person) {
    person.age = 25;
    return person;
}
var alex = {
    name: 'Alex',
    age: 30
};
var changedAlex = changeAgeImpure(alex);
console.log(alex); // { name: 'Alex', age: 25 }
console.log(changedAlex); // { name: 'Alex', age: 25 }

// 纯函数 不依赖外部参数,并且只计算作用域内的局部变量，不改变任何作用域外的变量，并且不能产生任何副作用（eg. ajax , window.reload, console.log）
// splice 改变长度 slice  不改变长度 
// 高阶函数 记忆函数 偏函数

// Promise实例 await 返回值， async

// EventLoop
// 耗时任务 异步任务（宏任务/微任务） 非耗时操作 同步任务 程序假死 委托宿主环境执行 通知主线程 回调函数  任务队列等待执行 执行栈清空后-任务队列
// macrotask(异步Ajax请求、setTimeout\setInterval、文件操作、其他)
// microtask(Promise.then\./catch\.finally、process.nextTick、其他)