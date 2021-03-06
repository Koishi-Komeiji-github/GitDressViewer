var debug = false;
var loaded = 0;
var total = 0;
var imgformat = "jpg";
function loadfail(errinfo) {
    $("body").append('<div class="error">'+errinfo+'<div>网页已停止运行，请后退或刷新后再试。</div></div>');
}
function setprogress() {
    loaded++;
    var percentage = loaded / total * 100;
    // console.log(loaded,total,percentage);
    if (percentage >= 100) {
        percentage = 100;
        $("#progressf").hide();
    } else {
        $("#progressf").css("width",percentage+"%");
    }
}
function resizetitle() {
    const title = $("#title");
    const windowheight = $(window).height();
    const top = (windowheight*0.5-title.height()*0.5)+"px";
    title.stop();
    title.animate({"top":top},500);
}
function formatjson(json) {
    json = replaceall("\n","",json);
    json = replaceall(",]","]",json);
    return $.parseJSON(json);
}
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null) return unescape(r[2]); return null;
}
function replaceall(replaceThis, withThis, inThis) {
    withThis = withThis.replace(/\$/g,"$$$$");
    return inThis.replace(new RegExp(replaceThis.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g,"\\$&"),"g"), withThis);
}
function checkWebp() {
    try {
        return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
    } catch(err) {
        return  false;
    }
}
if (checkWebp()) imgformat = "webp";