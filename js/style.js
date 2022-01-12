const nav = $('#nav ul li') // 버튼 지정
const cont = $('#main > section')

// 버튼을 클릭했을 때 ( 화면 이동 효과 )
nav.click(function (event) {
  event.preventDefault() // 기본 기능 차단
  const target = $(this) // 클릭한 타겟을 변수에 할당
  const index = target.index() // 클릭한 타겟에 번호를 매긴다.
  const section = cont.eq(index) // 클릭한 버튼과 cont를 연결
  const offset = section.offset().top // 각 cont의 offset 값을 할당
  $('html,body').animate({ scrollTop: offset }, 600, 'easeInOutExpo')
})

$(window).scroll(function () {
  const wScroll = $(this).scrollTop() // 스크롤 값 구해서 저장

  if (wScroll >= cont.eq(0).offset().top) {
    nav.removeClass('active')
    nav.eq(0).addClass('active')
  }
  if (wScroll >= cont.eq(1).offset().top) {
    nav.removeClass('active')
    nav.eq(1).addClass('active')
  }
  if (wScroll >= cont.eq(2).offset().top) {
    nav.removeClass('active')
    nav.eq(2).addClass('active')
  }
  if (wScroll >= cont.eq(3).offset().top) {
    nav.removeClass('active')
    nav.eq(3).addClass('active')
  }
  if (wScroll >= cont.eq(4).offset().top) {
    nav.removeClass('active')
    nav.eq(4).addClass('active')
  }
  if (wScroll >= cont.eq(5).offset().top) {
    nav.removeClass('active')
    nav.eq(5).addClass('active')
  }

  // text 효과
  if (wScroll >= cont.eq(0).offset().top - $(window).height() / 3) {
    cont.eq(0).addClass('show')
  }
  if (wScroll >= cont.eq(1).offset().top - $(window).height() / 3) {
    cont.eq(1).addClass('show')
  }
  if (wScroll >= cont.eq(2).offset().top - $(window).height() / 3) {
    cont.eq(2).addClass('show')
  }
  if (wScroll >= cont.eq(3).offset().top - $(window).height() / 3) {
    cont.eq(3).addClass('show')
  }
  if (wScroll >= cont.eq(4).offset().top - $(window).height() / 3) {
    cont.eq(4).addClass('show')
  }
  if (wScroll >= cont.eq(5).offset().top - $(window).height() / 3) {
    cont.eq(5).addClass('show')
  }
})

// 반응형 모바일 nav 버튼
$('.mNav').click(function () {
  //$('.menu').css('display', 'block')
  //$('.menu').fadeIn() , fadeOut
  $('.menu').toggle()
  //$('.menu').slideToggle()
})

$(window).resize(function () {
  const wWidth = $(window).window()
  // 화면 크기가 800 이상일 때 style='display:none' 삭제
  if (wWidth > 800) {
    $('.menu').removeAttr('style') // 속성을 지운다
  }
})
