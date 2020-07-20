$(document).ready(function () {
    //menu icon
    $('.icon').click(function () {
        $(this)
            .toggleClass('menu')
            .toggleClass('remove');
    });

    //app slide : slick
    // 참고 https://blog.naver.com/sungjungh/221026924078
    //      https://blog.naver.com/yhl8224/221572061571
    // document http://kenwheeler.github.io/slick/
    $('.still_cut').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5, // 보여줄 내용 갯수 -1
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900, // 1000 = 1초
        dots: true,
        swipeToSlide: true,
        pauseOnHover: false,
        initialSlide: 0,
        arrows: true
    });

    // scroll 위치에 따른 액션
    $(window).scroll(function () {
        // scroll bar 위치
        var height = $(document).scrollTop();
        // url
        var hash = $(location).attr('hash');
        var pathname = $(location).attr('pathname');
        //        console.log(height+' / '+pathname);
        // application page의 page2
        if (height >= 400) {
            // capture image fx
            // document https://github.com/zavoloklom/material-design-hierarchical-display
            $('.captureImg').hierarchicalDisplay();
        }
    });

    // image modal : http://ashleydw.github.io/lightbox/
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
