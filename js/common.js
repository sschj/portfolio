$(document).ready(function () {

    // 1 scroll = 1 page
    // 참고 https://blog.naver.com/rjsahgudwkd2/222009505229
    //      https://blog.naver.com/coding-/221432074882
    // document https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean
    new fullpage('#fullpage', {
        //licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        //menu: '#myMenu',
        autoScrolling: true,
        scrollBar: true,
        scrollHorizontally: true,
        navigation: true, // fullpage button : true/false
        //navigationTooltips: ['MENU','ABOUT'], 
        //showActiveTooltip: true, // true/false
        slidesNavigation: true,
        //sectionsColor: ['#f2f2f2', '#000'],
        controlArrows: true,
        responsiveWidth: 700,
        responsiveHeight: 640,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        //sectionsColor: ['', '#4BBFC3'],
        parallax: true,
        onLeave: function (origin, destination, direction) {
            //console.log("Leaving section" + origin.index);
        },
    });

});
