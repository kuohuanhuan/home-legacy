"use strict";
/*
	作者：郭桓桓 | nekohuan.cyou | (c) 2022
*/

/* DOM 載入完畢 */
$(document).ready(() => {
    // 打字特效
    var i = 0;
    const txtelmnt = $("main > p");
    const cntnt = txtelmnt.text();
    txtelmnt.empty();
    function typWritr() {
        if (i < cntnt.length) {
            txtelmnt.append(cntnt.charAt(i));
            i++; setTimeout(typWritr, 100);
        }
    }
    typWritr();
    // 分頁失焦
    const orginlTitl = document.title;
    $(function() {
        $(window).focus(function() {
            document.title = orginlTitl;
        });
        $(window).blur(function() {
            document.title = "人怎麼不見了╭(°A°`)╮";
        });
    });
    // 頁腳年份
    if (new Date().getYear() !== 121) {
        $("#footerYear").html("-" + new Date().getFullYear().toString() + "&nbsp;");
    }
    // 禁止右鍵
    $("html").on("contextmenu", function() {
        return false;
    });
});
