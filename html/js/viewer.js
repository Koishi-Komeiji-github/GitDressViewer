var name = null;
var imgcount = 0;
$(document).ready(function() {
    loaddata();
    resize();
});
$(window).resize(function() {
});
$(document).keydown(function(e) {
});
$(document).on("mousewheel DOMMouseScroll", function (e) {
});
function loaddata() {
    name = GetQueryString("name");
    if (name == null || name == "null") {
        window.location.replace("album.html");
    } else {
        $("#subtitle").text(name);
        $.ajax({
            type: "get",
            dataType: "text",
            url: 'album/'+name+'/info.json',
            success: function (data) {
                loadpictures(formatjson(data));
                // $("#albumlistsub1").html(createlist());
                // albumbox();
                // resize();
            },
            error:function (err) {
                console.log("取得数据失败：",err);
            }
        });
    }
}
function loadpictures(imgjson) {
    imgcount = imgjson.length;
    $("#albumboxlayerbox").animate({"left":0},1000);
}
function resize() {
    resizetitle();
}