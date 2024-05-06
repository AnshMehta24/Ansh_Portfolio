var tl = gsap.timeline({scrollTrigger:{
    trigger:'.mainDiv',
    // markers:true,
    start:"40% 50%",
    end:'100% 50%',
    scrub:2,
    pin:true
}})

tl.
to('.top',{
    top:'-50%'
},'a')
.to('.bottom',{
    bottom:'-50%'
},'a')
.to("#top_h1",{
    bottom: "10%"
 },'a')
 .to("#bottom_h1",{
    bottom: "-80%"
 },'a')
 .to(".content",{
    delay: -0.2,
    marginTop: "0%"
 })

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
     
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
       
        
        

      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-30, 30, diffrot * 0.8),
      });
    });
  });


  let currenScroll = 0;
  let isScrollDown = true;
  let arrows = document.querySelectorAll('.arrow')
  
  let tween =   gsap
        .to('.marquee_inner',{
           xPercent : -100,
           repeat : -1,
           duration: 20,
           ease:'linear',
          
        }).totalProgress(0.5);
  
  
        
        window.addEventListener('scroll', ()=>{
           if(window.pageYOffset > currenScroll){
              isScrollDown = true;
           }else{
              isScrollDown = false;
           }
  
           gsap.to(tween,{
              timeScale : isScrollDown ? -1 : 1,
           });
  
           let rotation = isScrollDown ? 6 : -6;
  
           gsap.to('.marquee',{
              rotation: rotation,
              duration:0.5
           })
  
           currenScroll = window.pageYOffset;
        })





  var tl2 = gsap.timeline({scrollTrigger:{
    trigger:'.re',
    //  markers:true,
     start:"0% 30%",
     end:'70% 90%',
     scrub:true,
    //  pin:true
 }})

 tl2.to('#imgTwo',{
    rotateX:'0deg',
 })
 .to('#imgThree',{
    rotateX:'0deg',
 })
 .to(".resume",{
          marginTop: "50vh",
          scale: "0.8"
      }, 'sa')
 .to(".img",{
             filter: "grayscale(1)",
         }, 'sa')
 .to(".text",{
             marginTop: "-100vh",
         }, 'sa')
 .to(".overlay",{
             opacity: 1,
         }, 'sa') 
         .to(".h1", { 
          borderBottomWidth: "100%", 
          borderBottomColor: "#fff",
          duration: 0.5 
      });