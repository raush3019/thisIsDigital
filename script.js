function show(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

show();

// menu of responsive 

var chk = 0;
document.querySelector(".main .one .navBar > i").addEventListener("click",function(){
  if(chk === 0){
    document.querySelector(".main .one .center .menu").style.transform ="translateY(0%)"
    // document.querySelector(".main .one .resIcon").style.display = "none";
    chk =1;
  }
  else{
    document.querySelector(".main .one .center .menu").style.transform ="translateY(-120%)"
    // document.querySelector(".main .one .crossIcon").style.display = "initial";
    chk = 0;
  }
  

})





// one page 

gsap.from(".main .one .imgL",{
  y:100,
  opacity:0,
  duration:1
})
gsap.from(".main .one .imgT",{
  x:  100,
  opacity:0,
  duration:1
})
gsap.from(".main .one .imgR",{
  y:-100,
  opacity:0,
  duration:1
})
gsap.from(".main .one .text",{
  opacity:0,
  duration:.9
})

// two page

// gsap.to(".main>img",{

//   scrollTrigger:{
//         trigger:".main > img",
//         scroller:".main",
//         start:"top 5%",
//         end : "top -380%",
//         pin:true,
//         scrub:1,
//   },

//   rotate:-15,
//   stagger:0.05,
// })


gsap.from(".main .two h5",{
  scrollTrigger:{
    trigger:".two h5",
    scroller:".main",
    start:"top 80%",
    // markers:true
  },
  opacity:0,
  y:200,
  duration:1

})
gsap.from(".main .two p",{
  scrollTrigger:{
    trigger:".two p",
    scroller:".main",
    start:"top 80%",
    // markers:true
  },
  opacity:0,
  y:200,
  duration:1

})
gsap.from(".main .two h4",{
  scrollTrigger:{
    trigger:".two h4",
    scroller:".main",
    start:"top 80%",
    // markers:true
  },
  opacity:0,
  y:200,
  duration:1

})


// third page 

gsap.from(".main .three .imgOne",{
  scrollTrigger:{
    trigger:".three .imgOne",
    scroller:".main",
    start:"top 50%",
    end:"top 0%",
    // markers:true
  },
  opacity:0,
  y:200,
  duration:1.3

})
gsap.from(".main .three .imgTwo",{
  scrollTrigger:{
    trigger:".three .imgTwo",
    scroller:".main",
    start:"top 120%",
    end:"top 30%",
    // markers:true
  },
  opacity:0,
  y:200,
  duration:1.3

})
gsap.from(".main .three .imgThree",{
  scrollTrigger:{
    trigger:".three .imgThree",
    scroller:".main",
    start:"top 70%",
    end:"top 0%",
    // markers:true
  },
  opacity:0,
  y:200,
  duration:1

})
gsap.from(".main .three .imgFour",{
  scrollTrigger:{
    trigger:".three .imgFour",
    scroller:".main",
    start:"top 90%",
    end:"top 0%",
    // markers:true
  },
  opacity:0,
  y:200,
  duration:1
})

gsap.from(".main .three .right .profile",{
  scrollTrigger:{
    trigger:".three .right .profile",
    scroller:".main",
    start:"top 90%",
    end:"top 0%",
    // markers:true
  },
  opacity:0,
  y:100,
  duration:1
})


// page four 

gsap.from(".main .four > h1",{
  scrollTrigger:{
    trigger:".four > h1",
    scroller:".main",
    start:"top 90%",
    end:"top 0%",
    // markers:true
  },
  opacity:0,
  y:80,
  duration:1
})


// page five

gsap.from(".main .five .top",{
  scrollTrigger:{
    trigger:".five .top",
    scroller:".main",
    start:"top 100%",
    end:"top 0%",
    // markers:true
  },
  opacity:0,
  y:100,
  duration:1
})

gsap.from(".main .five .bottom",{
  scrollTrigger:{
    trigger:".five .bottom",
    scroller:".main",
    start:"top 100%",
    end:"top 0%",
    // markers:true
  },
  opacity:0,
  y:100,
  duration:1
})

// page seven

gsap.from(".main .seventh .overflow",{
  scrollTrigger:{
    trigger:".seventh .overflow",
    scroller:".main",
    start:"top 100%",
    end:"top 0%",
    // markers:true
  },
  opacity:-4,
  // y:100,
  duration:.1
})





function swipper(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

swipper();
