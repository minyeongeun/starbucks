const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click',function(){
  searchInputEL.focus()
});

searchInputEL.addEventListener('focus', function(){
  searchEL.classList.add('focused')
  searchInputEL.setAttribute('placeholder', '통합검색')
});

searchInputEL.addEventListener('blur', function(){
  searchEL.classList.remove('focused')
  searchInputEL.setAttribute('placeholder', '')
});

const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
    // gsap.to(요소, 지속시간/s, 옵션);
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display:'none'
    });
  }else{
    //배지 보이기
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
//_.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1,{
    delay: (index+1) * .7,
    opacity:1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper',{
  direction: 'vertical',
  autoplay: true, //자동 재생 여부
  loop:true //루프 여부
});
new Swiper('.promotion .swiper',{
  // direction: 'horizontal', // default가 수평이라서 따로 명시할 필요 없음.
  slidesPerView: 3, // 한번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백 
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: {
    delay: 5000 //5s
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation:{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView : 5, // 하나의 화면에 5개의 아이템이 보인다.
  navigation:{
    prevEl:'.awards .swiper-next',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion // ! 반대값으로 반환 
  if (isHidePromotion) { //true라면 숨김 처리
    promotionEL.classList.add('hide');
  }else{ //False라면 보임 처리
    promotionEL.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, // y축
      repeat: -1, // 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
};
floatingObject('.floating1' ,1, 15);
floatingObject('.floating2' ,0.5, 15);
floatingObject('.floating3' ,1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 
      triggerHook: .8 // 감시 옵션
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});