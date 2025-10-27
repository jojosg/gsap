gsap.registerPlugin(ScrollTrigger);

$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont02 ul', // 스크롤트리거 대상
            start:'top 90%', //애니메이션 시작 지점
            end:'20% 100%', // 트리거 대상의 20%와 브라우저의 100%가 만날때 끝난다
            scrub:2,
            // markers:true,
        }
    })
    .to('.cont02 li:nth-child(1)', {y:'-400px', duration:1, ease:'none'}, 0.2)
    .to('.cont02 li:nth-child(2)', {y:'-400px', duration:1, ease:'none'}, 0.4)
    .to('.cont02 li:nth-child(3)', {y:'-400px', duration:1, ease:'none'}, 0.6)
    .to('.cont02 li:nth-child(4)', {y:'-400px', duration:1, ease:'none'}, 0.8)

    // cont03
    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont03',
            start:'70% 100%',
            end:'100% 100%',
            scrub:2,
            markers:true,
        }
    })
    .fromTo('.cont03 span.a', {y:'400%'}, {y:'0'},1.2)
    .fromTo('.cont03 span.b', {y:'400%'}, {y:'0'},1.4)
    .fromTo('.cont03 span.c', {y:'400%'}, {y:'0'},1.6)
    .fromTo('.cont03 span.d', {y:'400%'}, {y:'0'},1.8)
    .fromTo('.cont03 span.e', {y:'400%'}, {y:'0'},2.0)
});

  console.log("gsap.js 실행 ✅ (ScrollTrigger 등록 완료)");