let open = 0; //메뉴가 닫혀있는 상태


$('.lnb_btn').click(function(){
  if(open == 0){
    $('#lnb').animate({left:0},400);
  $('#wrap').animate({left:'274px'},400);
  $(this).find('img').attr({
    'src':'img/bg_header_lnb_active.png',
    'alt':'메뉴닫기'
  });
  $('.cover').fadeIn(0);
  open = 1004;
} 
  else {
    $('#lnb').animate({left:-274},400);
  $('#wrap').animate({left:0},400);
  $(this).find('img').attr({
    'src':'img/bg_header_lnb.png',
    'alt':'메뉴열기'
  });
  $('.cover').fadeOut(0);
  open = 0;
  }
  
  
});

/*
  A.attr(속성명) - 요소A의 속성값을 가져옴
  A.attr(속성명,속성값) - 요소A의 속성을 수정/추가
*/