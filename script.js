

function locomaotivescroll(){



    gsap.registerPlugin(ScrollTrigger);
    
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#container"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#container", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    }
        
    locomaotivescroll();
    
    
    
    
    
    
    
    
    var tl = gsap.timeline()
    
    tl.to("#loader .image .img1", {
        height: "100%",
        y: -20,
        duration: 1,
        delay:2
    })
    tl.to("#loader .image .img2", {
        height: "35%",
        y: -10,
        duration: 1,
    })
    tl.to("#loader .image .img3", {
        height: "45%",
        y: -10,
        duration: 1,
    })
    tl.to("#loader .image .img4", {
        height: "70%",
        y: -10,
        duration: 1,
    })
    
    tl.to("#main #loader",{
        height:"0 vh",
        y:"-100vh",
    
    }) 
    tl.to("#main #container",{
        height:"100 vh",
        duration:1
    })
     
    tl.to("#navbar .left , #navbar .mid , #navbar .right" ,{
       y:-10,
       duration:1,
       opacity:1,
    })
    
    tl.to(".boxtext",
    {
      x:100,
      opacity:1,
      delay:1,
      duration:.5
    
    })
    tl.to(".boxtext2,.boxtext3" ,{
      x:-50,
      opacity:1,
      delay:1,
      duration:.5
    
    })
    tl.to("#container .fotter",
    {
       y:-10,
       duration:1,
       opacity:1,
       delay:1
    })
    
    
    gsap.to(".page3 .left ,.page3 .right",{
      y:50,
      opacity:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:"#container .page3",
        scroller:"#container",
        start: 'top 90%',
        end:'top 10%',
        scrub:3,
    
      }
    })
    gsap.to(".pera",{
        x:20,
        opacity:1,
        scrollTrigger:{
          duration:1,
          delay:1,
          trigger:".pera",
          scroller:"#container",
          start:'top 90%',
          end: 'top 10%',
          scrub:3,
        }
    
    })
    gsap.to(".down",{
      y:20,
      opacity:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:".down",
        scroller:"#container",
        start:"top 90%",
        end:"top 10%",
        scrub:3,
      }
    })
    gsap.to("#page4 .left .heading h1 , #page4 .right .left .navbar ",{
      y:10,
      opacity:1,
      scrollTrigger:{
       duration:1,
       delay:1,
       trigger:"#container #page4",
       scroller:"#container",
       start:"top 90%",
       end:'top 10%',
       scrub:3,
      //  markers:true,
    }
    })
    gsap.to("#page5 #up .left, #page5 #up .right .fist, #up .right .sec, .pera",
    {
      x:-30,
      opacity:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:"#page5",
        scroller:"#container",
        start:'top 80%',
        end:'top 10%',
        scrub:5,
      }
    })
    gsap.to("#page6 #up .left, #page6 #up .right .text ",{
      x:-30,
      opacity:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:"#page6",
        scroller:"#container",
        start:'top 80%',
        end:'top 10%',
        scrub:3,
       
      }
    })
    gsap.to("#page7 .up .left, #page7 .up .right #text h1",{
      x:-30,
      opacity:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:'#page7',
        scroller:'#container',
        start:'top 80%',
        end:'top 10%',
        scrub:3,
      }
    })
    gsap.to('#page7 .up .right .pera',{
       x:-30,
       opacity:1,
       scrollTrigger:{
        duration:1,
       delay:1,
       trigger:"#page7",
       scroller:'#container',
       start:'top 10%',
       end:'top 40%',
       scrub:4,
       }
    })
    gsap.to("#container #music .text",{
      y:-30,
      opacity:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:"#music .text",
        scroller:"#container",
        start:'top 90%',
        end:'top 10%',
        scrub:3,
      }
    })
    gsap.to("#container #music .sectext h1",
    {
      scale:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:"#music .sectext h1",
        scroller:"#container",
        start:'top 70%',
        end:'top 30%',
        scrub:3,
      }
    })
    gsap.to("#fotterpage .left .touch, #fotterpage .right .text .boxtext h1",{
      x:20,
      opacity:1,
      scrollTrigger:{
        duration:1,
        delay:1,
        trigger:"#fotterpage",
        scroller:"#container",
        start:'top 30%',
        end:'top 10%',
        scrub:3,
        // markers:true,
      }
    })
    gsap.to("#fotterpage .right .nav",{
       x:20,
       opacity:1,
       scrollTrigger:{
        duration:1,
         delay:1,
         trigger:"#fotterpage",
         scroller:'#container',
         start:'top 80%',
         end:'top 10%',
         scrub:3
       } 
        
    })
    gsap.to("#fotterpage .right .text .boxtext2 h1, #fotterpage .right .text .boxtext3 h1",
    {
       x:50,
       opacity:1,
       scrollTrigger:{
        duration:1,
        delay:1,
        trigger:'#fotterpage',
        scroller:"#container",
        start:'top 30%',
        end:'top 10%',
        scrub:3,
       }
    })
    //   gsap.to("#page5 #downcontent .firstcontent", {
    // y:-100,
    //  duration:4,
    
      
    //    scrollTrigger:{
    //    trigger:".firstcontent",
    //    scroller:"#container",
    //    start:'top 70%',
    //    end:'top 70%',
    //    scrub:4,
    //     // markers: true,
    // }
    
    //  })
    //  gsap.to("#page5 #downcontent .seccontent", {
    //     y:-100,  
    //     duration:1,
        
    
    //       scrollTrigger:{
    //       trigger:".seccontent",
    //       scroller:"#container",
    //       start:'top 70%',
    //        end:'top 70%',
    //       scrub:4,
    //      backgroundColor: 'black'
    //      //  markers: true,
    //      }
      
    //    })
    //  gsap.to("#page5 #downcontent .thirdcontent", {
    //     y:-100,
    //     duration:1,
          
    //       scrollTrigger:{
    //       trigger:".thirdcontent",
    //       scroller:"#container",
    //       start:'top 70%',
    //       end:'top 70%',
    //       scrub:4,
    //       // markers: true,/
    // }
        
    // }) 
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent =`${Math.ceil(time / 1000)}s`;
        }
      }
    });
    
    var drag = document.querySelector('.drag')
    var page4 = document.querySelector('#page4');
    var  left= document.querySelector('#page4 .left');
    var leftimg = document.querySelector('#page4 .left .img')
    var right = document.querySelector('#page4 .right .left')
    var rightimg = document.querySelector('#page4 .right .rightimg')
    
    left.addEventListener('mousemove',function(dets)
    {
      drag.style.left = dets.x+"px";
      drag.style.top =  dets.y+"px";
    })
    left.addEventListener("mouseleave",function()
    {
      drag.style.opacity = '0'
    
    })
    
    rightimg.addEventListener('mouseenter',function() {
      drag.style.opacity = '1'
    })
    
    var  fist = document.querySelector("#page7 .mid .left .fist") 
    var  sec = document.querySelector("#page7 .mid .left .sec") 
    var  tird = document.querySelector("#page7 .mid .left .third") 
    var  four = document.querySelector("#page7 .mid .left .four") 
    var  five = document.querySelector("#page7 .mid .left .five")
    var  fistindex = document.querySelector("#page7 .mid .right .firsttext")
    var  secindex = document.querySelector("#page7 .mid .right .sectext")
    var  thirdindex = document.querySelector("#page7 .mid .right .thidtext")
    var  fourindex = document.querySelector("#page7 .mid .right .fourtext")
    var  fiveindex = document.querySelector("#page7 .mid .right .fivetext")
    
    
    fistindex.addEventListener("mousemove",function()
    {
      fist.style.opacity = 1;
      sec.style.opacity = 0
      tird.style.opacity = 0
      four.style.opacity = 0
      five.style.opacity = 0
    
    })
     
    
    secindex.addEventListener("mousemove",function(){
        sec.style.opacity = 1;
        fist.style.opacity = 0;
        tird  .style.opacity = 0;
        four.style.opacity = 0;
        five.style.opacity = 0;
        
    })
    
    thirdindex.addEventListener("mousemove",function()
    {
      tird.style.opacity = 1
      sec.style.opacity = 0
      fist.style.opacity = 0
      four.style.opacity = 0
      five.style.opacity = 0
    
    })
    fourindex.addEventListener("mousemove",function()
    {
      tird.style.opacity = 0
      sec.style.opacity = 0
      fist.style.opacity = 0
      four.style.opacity = 1
      five.style.opacity = 0
    
    })
    fiveindex.addEventListener("mousemove",function()
    {
      tird.style.opacity = 0
      sec.style.opacity = 0
      fist.style.opacity = 0
      four.style.opacity = 0
      five.style.opacity = 1
    
    })