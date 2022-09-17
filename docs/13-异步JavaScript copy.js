

function myFun01() {
	console.log('以下内容是在myFun01中输出的')
	return new Promise((resolve, reject) => {
		// 模拟接口1异步请求数据
		setTimeout(() => {
			console.log('接口1请求数据完毕')
			resolve('接口1获取的数据传递给下一个方法，在myFun02中输出')
		}, 3000)
	})
}

function myFun02(data) {
	console.log('\n以下内容是在myFun02中输出的')
	return new Promise((resolve, reject) => {
		// 打印从接口1处接收到的数据
		console.log(data)
		// 模拟接口2异步请求数据
		setTimeout(() => {
			console.log('接口2请求数据完毕')
			resolve('接口2获取的数据传递给下一个方法，在myFun03中输出')
		}, 3000)
	})
}

function myFun03(data) {
	console.log('\n以下内容是在myFun03中输出的')
	return new Promise((resolve, reject) => {
		// 打印从接口2处接收到的数据
		console.log(data)
		// 模拟接口3异步请求数据
		setTimeout(() => {
			console.log('接口3请求数据完毕')
			resolve('接口3获取的数据传递给下一个方法')
		}, 3000)
	})
}

// 执行测试
myFun01().then(res => {
	return myFun02(res)
}).then(res => {
	return myFun03(res)
}).catch(err => {
	console.log(err)
})
