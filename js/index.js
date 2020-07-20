$(document).ready(function () {


    $("#result div").hide();

    //    menu 링크에 마우스 올렸을 때 액션
    $("#lnb a").each(function (index, item) {
        $(this).mouseover(function () {
            //console.log("index:" + index);
            //console.log(index + ": " + $(this).position().top);
            $("#result div").hide();
            //            $("#result").children("div").eq(index).css({
            //                top: $(this).position().top - 20
            //            });
            //            $("#result").children("div").last(index).css({
            //                top: $(this).position().top - 450
            //                ,left: $(this).position().left + 200
            //            });
            $("#result").children("div").eq(index).show();
        });
        $(this).mouseout(function () {
            $("#result div").hide();
            $("#result").children("div").eq(index).hide();
        });

    });

    //자기소개 부분 유동형 그리드
    //http://brunjo.github.io/rowGrid.js/
    var options = {
        minMargin: 1,
        maxMargin: 2,
        itemSelector: ".item",
        firstItemClass: "first-item",
        lastItemClass: "none"
    };
    $("#about").rowGrid(options);





});
