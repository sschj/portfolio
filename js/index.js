$(document).ready(function () {


    $("#result div").hide();

    // 스크롤 이동 했다가 1page로 왔을 때도 비디오 자동재생
    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
        console.log(scroll);
      if (scroll < 1100) {$('video').trigger('play');}
    });    
    
    //    menu 링크에 마우스 올렸을 때 액션
    $("#lnb a").each(function (index, item) {
        $(this).mouseover(function () {
            $("#result div").hide();
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
