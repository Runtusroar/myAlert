// 通过系统时间设置不同弹窗样式
let hours = new Date().getHours()
let bakcor
let textColor
// 白天样式
if (hours > 5 && hours < 19) {
    bakcor = '#fff'
    textColor = '#73777B'

//夜晚样式    
} else {
    bakcor = '#73777B'
    textColor = '#fff'
}

// 封装一个添加style样式的方法
function css(targetObj, cssObj) {
    let str = targetObj.getAttribute("style") ? targetObj.getAttribute('style') : '';
    for (var i in cssObj) {
        str += i + ':' + cssObj[i] + ';';
    }
    targetObj.style.cssText = str;
}

// 封装弹窗方法，添加到window对象中
window.myAlert = myAlert;

// 封装一个弹窗函数
function popFunction(status, text) {
    // 是否传入status参数
    if (status) {
        // 存在status时，创建弹窗节点
        let pop = document.createElement('div')
        pop.setAttribute('class', 'myAlertPop')
        let icon = document.createElement('div')
        pop.appendChild(icon)

        // 设置icon基础样式
        css(icon, {
            'width': '50px',
            'height': '50px',
            'line-height': '50px',
            'text-align': 'center',
            'border-radius': '50%',
            'box-sizing': 'content-box'
        })

        //设置pop基础样式
        css(pop, {
            'display': 'flex',
            'flex-direction': 'column',
            'justify': 'space-evenly',
            'align-items': 'center',
            'position': 'fixed',
            'top': '60px',
            'left': '50%',
            'transform': 'translateX(-50%)',
            'box-shadow': '0 5px 10px rgba(0, 0, 0, .15)',
            'border-radius': '5px',
            'background-color': bakcor,
            'z-index': '2147483647',
            'box-sizing': 'content-box'
        })
        // 若传入text参数
        if (text) {
            let h3 = document.createElement('h3')
            h3.innerHTML = text
            pop.appendChild(h3)
            //设置弹窗有文字初始样式
            css(pop, {
                'padding': '14px 25px',
            })
            css(h3, {
                'text-align': 'center',
                'color': textColor,
                'margin-bottom': '0',
                'margin-top': '7px',
                'font-family': "'pingfang cs' 'source han sans cn' 'microsoft yahei' monospace",
                'user-select': 'none',
                'box-sizing': 'content-box'
            })
        // 若没有传入了text参数
        } else {
            // 设置弹窗无文字初始样式
            css(pop, {
                'padding': '14px',
            })
        }

        // 成功弹窗
        if (status === 'success') {
            let box = document.createElement('div')
            let cover = document.createElement('div')
            icon.appendChild(box)
            icon.appendChild(cover)
            box.innerHTML = '<svg t="1666771775384" class="icon" viewBox="0 0 1249 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1303" width="200" height="200"><path d="M123.877278 460.145486l291.935697 232.573284L1142.743853 23.028984c0 0 48.79669-44.514733 91.361505-9.760596 12.67761 10.485525 27.308282 40.111693-5.665769 86.513444L469.504902 988.873523c0 0-58.225485 79.613251-127.299746-0.872745L14.716485 545.731146c0 0-38.875697-59.84832 9.743298-95.764545C40.865824 437.933722 78.176869 419.179917 123.877278 460.145486L123.877278 460.145486 123.877278 460.145486zM123.877278 460.145486" p-id="1304"></path></svg>'

            //设置初始样式
            css(icon, {
                'border': 'solid 4px #C7F2A4',
                'position': 'relative',
                'box-sizing': 'content-box'
            })
            css(box, {
                'width': '100%',
                'height': '100%',
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'box-sizing': 'content-box'
            })

            css(box.children[0], {
                'width': '30px',
                'height': '30px',
                'fill': '#7FB77E',
                'box-sizing': 'content-box'
            })
            css(cover, {
                'width': '38px',
                'height': '30px',
                'background-color': bakcor,
                'position': 'absolute',
                'top': '50%',
                'right': '50%',
                'margin-top': '-15px',
                'margin-right': '-19px',
                'transition': 'width 0.4s 0.3s linear',
                'box-sizing': 'content-box'
            })
            // 设置最终样式
            setTimeout(() => {
                css(cover, {
                    'width': '0'
                })
            }, 10);

        //错误弹窗
        } else if (status === 'error') {
            // 设置初始样式
            icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'
            css(icon, {
                'border': 'solid 4px #FF6464',
                'transform': 'rotate(45deg)',
                'transition': 'all 0.3s 0.3s',
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'box-sizing': 'content-box'
            })

            css(icon.children[0], {
                'width': '0px',
                'height': '0px',
                'transition': 'all 0.3s 0.3s',
                'fill': '#E0144C',
                'box-sizing': 'content-box'
            })
            // 设置最终样式
            setTimeout(() => {
                css(icon, {
                    'transform': 'rotate(0deg)',
                })
                css(icon.children[0], {
                    'width': '40px',
                    'height': '40px'
                })
            }, 10);
        //警告弹窗
        } else if (status === 'warning') {
            // 设置初始样式
            icon.innerHTML = '<svg t="1666770888686" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="965" width="200" height="200"><path d="M473.8 607.4c6.4 19.1 19.1 31.8 38.2 31.8s31.8-12.7 38.2-31.8l25.4-349.9c0-38.2-31.8-63.6-63.6-63.6-38.2 0-63.6 31.8-63.6 70l25.4 343.5z m38.2 95.5c-38.2 0-63.6 25.4-63.6 63.6s25.4 63.6 63.6 63.6 63.6-25.4 63.6-63.6-25.4-63.6-63.6-63.6z" fill="" p-id="966"></path></svg>'
            css(icon, {
                'border': 'solid 4px #FFAE6D',
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'box-sizing': 'content-box'
            })
            css(icon.children[0], {
                'width': '45px',
                'height': '45px',
                'fill': '#FF6D28',
                'box-sizing': 'content-box'
            })
            // 设置最终样式
            setTimeout(() => {
                let i = 0
                // 设置a,b,c变量是为了让one，two，three定时器都只会执行一次
                let a = 1
                let b = 1
                let c = 1
                let animation = setInterval(() => {
                    if (a == 1) {
                        let one = setInterval(() => {
                            if (i == -20) {
                                clearInterval(one)
                                b = 2
                            } else {
                                css(icon, {
                                    'transform': `rotate(${i -= 2}deg)`
                                })
                            }
                        }, 10);
                        a = 2
                    } else if (b == 2) {
                        let two = setInterval(() => {
                            if (i == 20) {
                                clearInterval(two)
                                c = 2
                            } else {
                                css(icon, {
                                    'transform': `rotate(${i += 4}deg)`
                                })
                            }
                        }, 10);
                        b = 3
                    } else if (c == 2) {
                        let three = setInterval(() => {
                            if (i == 0) {
                                clearInterval(three)
                                clearInterval(animation)
                            } else {
                                css(icon, {
                                    'transform': `rotate(${i -= 2}deg)`
                                })
                            }
                        }, 10);
                        c = 3
                    }
                }, 10)
            }, 300);

        // 若传入参数非法，删除所有节点并结束该函数
        } else {
            pop.remove()
            return null
        }

        // 将弹窗写入body中
        document.body.appendChild(pop)


        //设置开场动画最终样式
        let i = 50
        let a = 1
        let b = 1
        let c = 1
        //该动画330ms左右
        let popAnimation = setInterval(() => {
            if (a == 1) {
                let one = setInterval(() => {
                    if (i == 110) {
                        clearInterval(one)
                        b = 2
                    } else {
                        css(pop, {
                            'transform': `translateX(-50%) scale(${(i += 5) / 100})`
                        })
                    }
                }, 10);
                a = 2
            } else if (b == 2) {
                let two = setInterval(() => {
                    if (i == 90) {
                        clearInterval(two)
                        c = 2
                    } else {
                        css(pop, {
                            'transform': `translateX(-50%) scale(${(i -= 2) / 100})`
                        })
                    }
                }, 10);
                b = 1
            } else if (c == 2) {
                let three = setInterval(() => {
                    if (i == 100) {
                        clearInterval(three)
                        clearInterval(popAnimation)
                    } else {
                        css(pop, {
                            'transform': `translateX(-50%) scale(${(i += 2) / 100})`
                        })
                    }
                }, 10);
                c = 1
            }
        }, 10);

        // 销毁弹窗
        setTimeout(() => {
            //设置pop终场动画(共110ms)
            let i = 100
            let j = 10
            let popEndAnimation = setInterval(() => {
                if(i == 80){
                    clearInterval(popEndAnimation)
                    pop.remove()
                }else{
                    css(pop,{
                        'transform':`translateX(-50%) scale(${(i -= 2) / 100})`,
                        'opacity':`${(j -= 1)/10}`
                    })
                }
            }, 10);
        }, 1400);

    //若没有传入任何参数
    } else {
        return null
    }
}

function myAlert(status, text) {
    //判断是否已存在弹窗,若存在，则先删除弹窗，然后在创建
    let pop = document.querySelector('.myAlertPop')
    if (pop) {
        pop.remove()
        popFunction(status, text)
    } else {
        popFunction(status, text)
    }
}

// 本方法设定存在时间为1510ms
// 代码解析时间在3ms ~ 16ms之间波动

// 导出函数
export {myAlert}