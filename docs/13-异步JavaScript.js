// https://blog.csdn.net/ywCSD/article/details/108462164
// https://www.jb51.net/article/225940.htm#_lab2_2_3

//同步队列 ： script start - async1 start - async2 - promise 1 - script end
//异步队列
//微观任务 ： async1 end - promise 2 
//宏观任务 ： setTimeout
async function async1(){
    console.log('async1 start'); //2
    await async2();
    console.log('async1 end'); // 6
}

async function async2(){
    console.log('async2'); // 3
}

console.log('script start'); // 1

setTimeout(function(){
   console.log('setTimeout'); // 8
},0)

async1();

new Promise(function(resolve){
    console.log('promise 1'); // 4
    resolve();
}).then(function(){
    console.log('promise 2'); // 7
});

console.log('script end'); // 5


console.log('-------------------------------------------------------------------');

// 0. 回调是异步的
// 1.当执行 then 方法时，如果前面的 promise 已经是 resolved 状态，则直接将回调放入微任务队列中（但是执行回调还是要等到所有同步任务都结束后）
// 2.当一个 promise 被 resolve 时，会遍历之前通过 then 给这个 promise 注册的所有回调，将它们依次放入微任务队列中
// 3.resolve()它的作用除了将当前的 promise 由 pending 变为 resolved，还会遍历之前通过 then 给这个 promise 注册的所有回调，将它们依次放入微任务队列中，很多人以为是由 then 方法来触发它保存回调，而事实上 then 方法即不会触发回调，也不会将它放到微任务，then 只负责注册回调，由 resolve 将注册的回调放入微任务队列，由事件循环将其取出并执行。

new Promise((resolve,reject) => {
    setTimeout(function(){
        console.log(1);
        resolve(110);
    },1000)
}).then((value)=>{
    //then 方法返回的 promise 它是没有 resolve 函数的
    new Promise((resolve,reject)=>{
        console.log(2);
        resolve(value);
    }).then((value)=>{
        // 取而代之只要 then 中回调的代码执行完毕并获得同步返回值，这个 then 返回的 promise 就算被 resolve
        // 同步返回值的意思换句话说，如果 then 中的回调返回了一个 promise，那么 then 返回的 promise 会等待这个 promise 被 resolve 后再 resolve。执行完3， 
        // 剩下 then 中要到下一个循环才能执行。 
        console.log(3);
        return value;
    }).then((value)=>{
        console.log(4);
        return value;
    }).then((value)=>{
        console.log(6);
        return value;
    })
}).then((value)=>{
    console.log(5);
})
