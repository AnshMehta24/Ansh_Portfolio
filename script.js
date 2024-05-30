document.addEventListener('DOMContentLoaded',()=>{


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
     //   markers:true,
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
  
  
        const menuIcon = document.getElementById('menuIcon');
        const cancelIcon = document.getElementById('cancelIcon');
        let fullScr = document.querySelector('.fullScr');
        
        let flag=0;
        menuIcon.addEventListener('click', ()=>{
           if(flag===0){
              flag=1;
              // menuIcon.classList.add('hidden');
              // cancelIcon.classList.remove('hidden');
              // fullScr.style.top = "3%";
              fullScr.style.display='block';
              menuIcon.style.display='none';
              cancelIcon.style.display='block';
              fullScr.style.top = 0;
        
           }
        })
        
        cancelIcon.addEventListener('click', () => {
           if(flag===1){
              flag=0;
              // cancelIcon.classList.add('hidden');
              // menuIcon.classList.remove('hidden');
              menuIcon.style.display='block';
              cancelIcon.style.display='none';
              fullScr.style.top = "-100%"
              fullScr.style.display='block';
           }
              
              
           });

         //   const accessKeyInput = document.getElementById('accessKey');
         //   accessKeyInput.value = process.env.ACCESS_KEY;

         fetch('/.netlify/functions/get-access-key')
        .then(response => response.json())
        .then(data => {
            const accessKeyInput = document.getElementById('accessKey');
            accessKeyInput.value = data.accessKey;
        })
        .catch(error => console.error('Error fetching access key:', error));
           

   //         const form = document.querySelector('.hire form');
   //         const name = document.getElementById('Name');
   //         const email = document.getElementById('Email');
   //         const subject = document.getElementById('Subject');
   //         const message = document.getElementById('Message');
    
   //  form.addEventListener('submit', function(e) {
   //      e.preventDefault();

   //      if (!validateEmail(email.value)) {
   //          alert('Please enter a valid email address.');
   //          return;
   //      }
   //      form.reset();
   //  });

   //  function validateEmail(email) {
   //    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   //    return re.test(String(email).toLowerCase());
   // }

   const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = Object.fromEntries(formData.entries());

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
                form.reset();  // Reset the form after successful submission
            } else {
                alert('Failed to send message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        });
    });
   
})

      


