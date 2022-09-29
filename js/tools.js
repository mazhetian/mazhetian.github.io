/*
    * 1. 获取元素的方法
    * params: 选择器的字符
    * return: 选中的元素
*/
function getDom(s) {
    return document.querySelector(s);
}

function getDoms(s) {
    return document.querySelectorAll(s);
}


/*
    * 2. 封装Tab选项卡切换的功能
    * params1: 选择器1，tabs
    * params2: 选择器2，切换显示的盒子
    * params3: 高亮的类名
*/
function tabs(s1, s2, cls) {
    var tabs = getDoms(s1);
    var divs = getDoms(s2);
    // 1.1 打开页面就会完成
    tabs.forEach(function (item, index) {
        item.addEventListener('click', function () {
            // 排他 - 点击之后会触发
            tabs.forEach(function (el, i) {
                el.removeAttribute('class');
                divs[i].style.display = 'none';
            })
            this.className = cls || 'active';
            // console.log(index);
            divs[index].style.display = 'block';
        })
    })
}


/*
    * 3. 获取元素样式表中的值
    * params: 对应的dom元素，和对应的属性
    * return: 对应的值
*/
function getStyle(obj, k) {
    if (window.getComputedStyle) {
        return parseInt(window.getComputedStyle(obj)[k]);
    } else if (obj.currentStyle) {
        return obj.currentStyle[k]
    } else {
        return obj.style[k]
    }
}

