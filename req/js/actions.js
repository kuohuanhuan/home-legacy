"use strict";
/*
	作者：郭桓桓 | nekohuan.cyou | (c) 2022
*/

/* DOM 載入完畢 */
$(document).ready(() => {
    // jQuery 正規化
    const $ = jQuery.noConflict();
    typeWriter();
    // 分頁失焦
    const originalTitle = document.title;
    $(function() {
        $(window).focus(function() {
            document.title = originalTitle;
        });
        $(window).blur(function() {
            document.title = "人怎麼不見了╭(°A°`)╮";
        });
    };
    // 頁腳年份
    if (new Date().getYear() !== 121) {
        $("#footerYear").html("-" + new Date().getFullYear().toString() + "&nbsp;");
    };
    // 禁止右鍵
    $("html").on("contextmenu", function() {
        return false;
    });
    // 打字特效
    let i = 0;
    const intro = $("main > p");
    const introContent = intro.text();
    intro.empty();
    function typeWriter() {
        if (i < introContent.length) {
            intro.append(introContent.charAt(i));
            i++;
	    setTimeout(typeWriter, 100);
        };
    };
});
