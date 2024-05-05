const body = document.querySelector('body'),
    shell = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

var mainbody = document.getElementById("mainbody");
// 点击toggle元素时触发事件
toggle.addEventListener("click", () => {
    // 切换shell元素的close类
    shell.classList.toggle("close");
    mainbody.style.left = 98 + "px";
})
// 点击searchBtn元素时触发事件
searchBtn.addEventListener("click", () => {
    // 移除shell元素的close类
    shell.classList.remove("close");
    mainbody.style.left = 260 + "px";
})
// 点击modeSwitch元素时触发事件
modeSwitch.addEventListener("click", () => {
    // 切换body元素的dark类
    body.classList.toggle("dark");
    // 如果body元素包含dark类
    if (body.classList.contains("dark")) {
        modeText.innerText = "白日模式";
    } else {
        modeText.innerText = "夜间模式";
    }
});

