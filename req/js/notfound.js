/*
	作者：郭桓桓 | nekohuan.cyou | (c) 2022
*/
"use strict";
// 總共等 5 秒

var seconds = 5 + 1;
function countdown() {
    // 秒數 -1
    seconds -= 1;
    // 如果倒數結束
    if (seconds <= 0) {
        // HTTP 重定向
        window.location.replace("https://nekohuan.cyou");
        // 0 秒時顯示
        document.getElementById("second").innerHTML = "準備跳轉！";
    // 如果沒結束
    } else {
        // 更新秒數
        document.getElementById("second").innerHTML = seconds.toString() + "秒";
        // 倒數 1 秒（1000ms
        window.setTimeout(countdown, 1000);
    }
}
// 開始！
countdown();
