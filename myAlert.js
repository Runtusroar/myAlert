// 导入icon图标
function addIcon(url) {
    let script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', url)
    script.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(script)
}
addIcon('https:kit.fontawesome.com/4756e7a561.js')

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

function myAlert(status, text) {
    //判断是否已存在弹窗
    let pop = document.querySelector('.myAlertPop')
    if (pop) {
        pop.remove()
    } else {
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
            })
            // 若传入text参数
            if (text) {
                let h3 = document.createElement('h3')
                h3.innerHTML = text
                pop.appendChild(h3)

                css(pop, {
                    'display': 'flex',
                    'flex-direction': 'column',
                    'justify': 'space-evenly',
                    'position': 'fixed',
                    'top': '60px',
                    'left': '50%',
                    'transform': 'translateX(-50%) scale(0.5)',
                    'transition': 'all 0.3s',
                    'align-items': 'center',
                    'box-shadow': '0 5px 10px rgba(0, 0, 0, .15)',
                    'padding': '14px 25px',
                    'border-radius': '5px',
                    'background-color': '#fff',
                    'z-index': '2147483647'
                })
                css(h3, {
                    'text-align': 'center',
                    'color': '#73777B',
                    'margin-bottom': '0',
                    'margin-top': '7px',
                    'font-family':"'pingfang cs' 'source han sans cn' 'microsoft yahei' monospace",
                    'user-select':'none'
                })
            // 若没有传入了text参数
            } else {
                // 设置弹窗公共初始样式
                css(pop, {
                    'display': 'flex',
                    'flex-direction': 'column',
                    'justify': 'space-between',
                    'align-items': 'center',
                    'position': 'fixed',
                    'top': '60px',
                    'left': '50%',
                    'transform': 'translateX(-50%) scale(0.5)',
                    'transition': 'all 0.3s',
                    'box-shadow': '0 5px 10px rgba(0, 0, 0, .15)',
                    'padding': '14px',
                    'border-radius': '5px',
                    'background-color': '#fff',
                    'z-index': '2147483647'
                })
            }

            // 成功弹窗
            if (status === 'success') {
                let box = document.createElement('div')
                let cover = document.createElement('div')
                icon.appendChild(box)
                icon.appendChild(cover)
                box.innerHTML = '<i class="fa-solid fa-check"></i>'

                //设置初始样式
                css(icon, {
                    'border': 'solid 4px #C7F2A4',
                    'position': 'relative',
                    'font-size': '36px',
                    'color': '#7FB77E',
                })
                css(box, {
                    'width': '100%',
                    'height': '100%',
                })
                css(cover, {
                    'width': '38px',
                    'height': '30px',
                    'background-color': '#fff',
                    'position': 'absolute',
                    'top': '50%',
                    'right': '50%',
                    'margin-top': '-15px',
                    'margin-right': '-19px',
                    'transition': 'width 0.4s 0.3s linear',
                })
                // 设置最终样式
                setTimeout(() => {
                    css(cover, {
                        'width': '0'
                    })
                }, 0);

            //错误弹窗
            } else if (status === 'error') {
                // 设置初始样式
                icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
                css(icon, {
                    'border': 'solid 4px #FF5858',
                    'font-size': '30px',
                    'transform': 'rotate(45deg)',
                    'transition': 'all 0.3s 0.3s',
                    'color': '#E0144C',
                })
                // 设置最终样式
                setTimeout(() => {
                    css(icon, {
                        'font-size': '40px',
                        'transform': 'rotate(0deg)',
                    })
                }, 0);
            //警告弹窗
            } else if (status === 'warning') {
                // 设置初始样式
                icon.innerHTML = '<i class="fa-solid fa-exclamation"></i>'
                css(icon, {
                    'border': 'solid 4px #FFAE6D',
                    'font-size': '35px',
                    'color': '#FF6D28',
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
                                        'transform': `rotate(${--i}deg)`
                                    })
                                }
                            }, 3);
                            a = 2
                        } else if (b == 2) {
                            let two = setInterval(() => {
                                if (i == 20) {
                                    clearInterval(two)
                                    c = 2
                                } else {
                                    css(icon, {
                                        'transform': `rotate(${++i}deg)`
                                    })
                                }
                            }, 1);
                            b = 3
                        } else if (c == 2) {
                            let three = setInterval(() => {
                                if (i == 0) {
                                    clearInterval(three)
                                    clearInterval(animation)
                                } else {
                                    css(icon, {
                                        'transform': `rotate(${--i}deg)`
                                    })
                                }
                            }, 3);
                            c = 3
                        }
                    }, 10)
                }, 300);

            // 若传入参数非法，结束该函数
            } else {
                return null
            }

            // 将弹窗写入body中
            document.body.appendChild(pop)

            // 设置最终样式
            setTimeout(() => {
                css(pop, {
                    'transform': 'translateX(-50%) scale(1)',
                    'opacity': '1',
                })
            }, 0);

            // 销毁弹窗
            setTimeout(() => {
                pop.remove()
            }, 1500);

        //若没有传入任何参数
        } else {
            return null
        }
    }
}
