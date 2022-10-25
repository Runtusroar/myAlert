### 自己创建的一些小组件，封装了一些小功能

#### 1 myAlert()
封装了一个弹窗方法

```js
//该函数接收两个参数: 弹窗类型, 显示文字
myAlert(status[, text])

//1 成功弹窗
myAlert('success'[,'text'])

//2 失败弹窗
myAlert('error'[,'text'])

//3 警告弹窗
myAlert('warning'[,'text'])
```

> 注意：使用该方法需联网




#### 2 css()
封装了一个使用js为元素添加样式的方法  
```js
//该函数接受两个参数: 目标对象, 样式对象
css(targetObj, cssObj)

//实例
let body = document.body
css(body,{
    'width':'100vw',
    'height':'100vh'
})
```

