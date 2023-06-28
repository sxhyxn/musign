//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;
    console.log(bar)
    let widNum=$(this).width(); // 마우스 올린 것의 넓이
    //$('.bar').animate({실행문},시간)
    $('.bar').animate({
        'left':bar+"px",
        'width':widNum+"px",
        'opacity':1
    },300)
});

$('.gnb').mouseleave(function(){
    let widNum=$(this).width(); // 마우스 올린 것의 넓이
    $('.bar').animate({
        'left':0,
        'width':0,
        'opacity':0
    },10)
});


//전체화면 애니메이션
$('.animate').scrolla({
    // default
    mobile: true, // 모바일버전에서 활성화
    once: false, // 스크롤시 한 번 실행 또는 여러번 실행
    animateCssVersion: 4 // scrolla animate.css 버전 (3 or 4)
});

//menuOpen
/* 밑이랑 같은 뜻 
$('.menuOpen .open').on('click',function(){})
*/
$('.menuOpen .open').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').addClass('on')
})

$('.menuWrap .close').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
})

$('.menuWrap ul li').click(function(e){
    e.preventDefault();
    $('.menuOpen .menuWrap').removeClass('on')
});


//background-color 변경
$(window).scroll(function(){
    //$(this)는 window
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    let offset = $('.service').offset().top - 400; //400빼줘서 좀 더 일찍 색 변경됨
    // service 영역 위 내 형들의 높이값
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
})
