/**
 * Created by lt on 2016/8/15.
 */
!(function(doc, win) {
    var docEle = doc.documentElement, //获取html元素
    //      event = "onorientationchange" in window ? "orientationchange" : "resize", //判断是屏幕旋转还是resize;
        fnLoaded = function() {
            var width = docEle.clientWidth;
            if(width>540){
                width && (docEle.style.fontSize = 50 * (540 / 375) + "px");
            }else{
                width && (docEle.style.fontSize = 50 * (width / 375) + "px");
            }
            //设置html的fontSize，随着event的改变而改变。
        };
    fnChange = function() {
        var width = docEle.clientWidth;
        var height = docEle.clientHeight;
        var u = navigator.userAgent;
        if (width > 540) {
            width = 540;
        }
        //          if (ua.indexOf("iPad") > -1 || !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || ua.indexOf('iPhone') > -1) {
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            if (window.orientation === 180 || window.orientation === 0) {
                height && (docEle.style.fontSize = 50 * (height / 375) + "px");
            }
            if (window.orientation === 90 || window.orientation === -90) {
                width && (docEle.style.fontSize = 50 * (width / 375) + "px");
            }
            //          } else if (ua.indexOf("Android") > -1) {
        } else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            width && (docEle.style.fontSize = 50 * (width / 375) + "px");
        } else {
            width && (docEle.style.fontSize = 50 * (width / 375) + "px");
        }
        //设置html的fontSize，随着event的改变而改变。
    };
    fnResize = function() {
        var width = docEle.clientWidth;
        if (width > 540) {
            width && (docEle.style.fontSize = 50 * (540 / 375) + "px");
        } else {
            width && (docEle.style.fontSize = 50 * (width / 375) + "px");
        }
    }
    win.addEventListener("orientationchange", fnChange, false);
    win.addEventListener("resize", fnResize, false);
    doc.addEventListener("DOMContentLoaded", fnLoaded, false);
}(document, window));


// 1rem = 50px  375屏幕  375/7.5  50*7.5=375px  
// 414ihone huawei oppo xiaomi 1rem=55.2px