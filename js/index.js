$(document).ready(function () {

    $("#result div").hide();

    // 스크롤 이동 했다가 1page로 왔을 때도 비디오 자동재생
    //    $(window).scroll(function(){
    //      var scroll = $(this).scrollTop();
    ////        console.log(scroll);
    //        if (scroll < 1100) {$('video').trigger('play');}
    //    });    

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

    // 해상도 판단 후 크기 조정
    width_size = $(window).width();
    height_size = $(window).height();
    //console.log(width_size + '*' + height_size);
    //var result = confirm("이 사이트는 전체화면으로 보시길 권장합니다. 크기를 변경하시겠습니까?");

    if (width_size < 1920) {
        //if (result) {
        //document.body.style.zoom = 80+'%';
        document.getElementById('lnb').style.zoom = 80 + '%';
        document.getElementById('about').style.zoom = 80 + '%';
//        document.getElementById('mail').style.zoom = 80 + '%';
        //doZoom();
        //}
        console.log(width_size);
    }

    // 화면 확대 축소
    // https://m.blog.naver.com/PostView.nhn?blogId=japkey&logNo=110165279780&proxyReferer=https:%2F%2Fwww.google.com%2F
    function doZoom() {
        $('body').css('-webkit-transform', 'scale(' + nowZoom / 100 + ')');
        $('body').css('-webkit-transform-origin', '0 0');
        $('body').css('-moz-transform', 'scale(' + nowZoom / 100 + ')');
        $('body').css('-moz-transform-origin', '0 0');
        $('body').css('-o-transform', 'scale(' + nowZoom / 100 + ')');
        $('body').css('-o-transform-origin', '0 0');
        $('body').css('-ms-transform', 'scale(' + nowZoom / 100 + ')');
        $('body').css('-ms-transform-origin', '0 0');
        //document.body.style.zoom = nowZoom + "%";
    }

    // 전체화면 전환
    function onLoadFunction() {
        var docV = document.documentElement;
        if (docV.requestFullscreen) docV.requestFullscreen();
        else if (docV.webkitRequestFullscreen) // Chrome, Safari (webkit)
            docV.webkitRequestFullscreen();
        else if (docV.mozRequestFullScreen) // Firefox
            docV.mozRequestFullScreen();
        else if (docV.msRequestFullscreen) // IE or Edge
            docV.msRequestFullscreen();
    }


});
