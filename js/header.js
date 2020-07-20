    $(document).ready(function () {

        // menu icon 클릭 시 menu 출력 
        $("#menu_label").click(function () {
            // header.css #menu_h = display : none           
            $('#menu_h').slideToggle();
        });

        var url = parent.document.location.href;
//        console.log('url: ' + url);
        if (url.indexOf('index') != -1) {   
            // index.html 페이지 첫 로딩시 1page 메뉴 안보임                
            $('.aboutLink').css({'display': 'none'});
            $('#menu_h').css({'display': 'none'});                
            $('#menu_button').css({'display': 'none'});                
        }
        // 스크롤 위치에 따른 메뉴 컬러 변경
        $(window.parent.document).scroll(function() {
//            console.log($(window.parent.document).scrollTop());
            if (url.indexOf('index') != -1) {
                // index.html 2page                 
                if($(window.parent.document).scrollTop() > 900){
                    // 메뉴 보임
                    $('.aboutLink').css({'display': 'inline-block'});
                    $('#menu_h').css({'display': 'block'});                              
                    $('#menu_button').css({'display': 'block'});                
                    // 메뉴 남색
                    $('a').css({'color': '#2d306b'});
                    $('a').hover(function() {
                        $(this).css({'color':'#fff'});
                    }, function() {
                        $(this).css({'color':'#2d306b'});
                    });
                }else{
                    // index.html 1page 메뉴 안보임
                    $('.aboutLink').css({'display': 'none'});
                    $('#menu_h').css({'display': 'none'});
                    $('#menu_button').css({'display': 'none'});   
                    $('.logo').css({'color': '#fff'});
                }
            }else if (url.indexOf('result05') != -1) { 
                // result05.html 3,4page 남색                                
                if($(window.parent.document).scrollTop() > 2000 && $(window.parent.document).scrollTop() < 4150){
    //            //application page의 page2
                    $('a').css({'color': '#2d306b'});
                    $('a').hover(function() {
                        $(this).css({'color':'#fff'});
                    }, function() {
                        $(this).css({'color':'#2d306b'});
                    });
                }
                else{
                    $('a').css({'color': '#fff'});
                    $('a').hover(function() {
                        $(this).css({'color':'#2d306b'});
                    }, function() {
                        $(this).css({'color':'#fff'});
                    });                    
                }                
            }
            $('.logo').css({'opacity': '0.5'});            
        });
        
        // 현재 페이지 메뉴 컬러 효과
        if (url.indexOf('result01') != -1) {
            $('#menu_h a:nth-child(1)').css({'color': '#2d306b','font-weight':'900'});
        }else if (url.indexOf('result02') != -1) {
            $('#menu_h a:nth-child(2)').css({'color': '#2d306b','font-weight':'900'});
        }else if (url.indexOf('result03') != -1) {
            $('#menu_h a:nth-child(3)').css({'color': '#2d306b','font-weight':'900'});
        }else if (url.indexOf('result04') != -1) {
            $('#menu_h a:nth-child(4)').css({'color': '#2d306b','font-weight':'900'});
        }else if (url.indexOf('result05') != -1) {
            $('#menu_h a:nth-child(5)').css({'color': '#2d306b','font-weight':'900'});
        }else if (url.indexOf('result06') != -1) {
            $('#menu_h a:nth-child(6)').css({'color': '#2d306b','font-weight':'900'});
        }        
        
        


    });
