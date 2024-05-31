let tl4;
function firstPageAnim() {
    tl4 = gsap.timeline();

    tl4.to('.navbar', {
        y: '10',
        opacity: 1,
        delay: 0,
        duration: 0.5,
        ease: Expo.easeInOut
    }).to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: 0,
        stagger: .2,
        opacity: 1
    }, 'same').to('.buttons', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        delay: 0,
        stagger: .2,
        opacity: 1
    }).to('.myImage', {
        x: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: 0,
        stagger: .2,
        opacity: 1
    }, 'same')
}


const tl3 = gsap.timeline({
    paused: "true",
    onComplete: function () {
        firstPageAnim();
    }
});
tl3.to("#percent, #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
});
tl3.to(".text-wrapper", {
    duration: .8,
    x: "-100%"
});
tl3.to("#preloader", {
    duration: .8,
    width: "0%",
    x: "-100%",
}, "-=0.8");
let width = 1;
let bar = document.getElementById("barconfrm");
let id;
function move() {
    document.body.style.overflow = "hidden";
    id = setInterval(frame, 40);

}
function frame() {
    if (width >= 100) {
        clearInterval(id);
        document.body.style.overflow = "auto";
        tl3.play();
    }
    else {
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('.heroSpan', {
        strings: ['Student', 'Programmer', 'Website Designer', 'Front-end Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });




    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.mainDiv',
            // markers:true,
            start: "40% 50%",
            end: '100% 50%',
            scrub: 2,
            pin: true
        }
    })

    tl.
        to('.top', {
            top: '-50%'
        }, 'a')
        .to('.bottom', {
            bottom: '-50%'
        }, 'a')
        .to("#top_h1", {
            bottom: "10%"
        }, 'a')
        .to("#bottom_h1", {
            bottom: "-80%"
        }, 'a')
        .to(".content", {
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

    let tween = gsap
        .to('.marquee_inner', {
            xPercent: -100,
            repeat: -1,
            duration: 20,
            ease: 'linear',

        }).totalProgress(0.5);



    window.addEventListener('scroll', () => {
        if (window.pageYOffset > currenScroll) {
            isScrollDown = true;
        } else {
            isScrollDown = false;
        }

        gsap.to(tween, {
            timeScale: isScrollDown ? -1 : 1,
        });

        let rotation = isScrollDown ? 6 : -6;

        gsap.to('.marquee', {
            rotation: rotation,
            duration: 0.5
        })

        currenScroll = window.pageYOffset;
    })





    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.re',
            //   markers:true,
            start: "0% 30%",
            end: '70% 90%',
            scrub: true,
            //  pin:true
        }
    })

    tl2.to('#imgTwo', {
        rotateX: '0deg',
    })
        .to('#imgThree', {
            rotateX: '0deg',
        })
        .to(".resume", {
            marginTop: "50vh",
            scale: "0.8"
        }, 'sa')
        .to(".img", {
            filter: "grayscale(1)",
        }, 'sa')
        .to(".text", {
            marginTop: "-100vh",
        }, 'sa')
        .to(".overlay", {
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

    let flag = 0;
    menuIcon.addEventListener('click', () => {
        if (flag === 0) {
            flag = 1;
            // menuIcon.classList.add('hidden');
            // cancelIcon.classList.remove('hidden');
            // fullScr.style.top = "3%";
            fullScr.style.display = 'block';
            menuIcon.style.display = 'none';
            cancelIcon.style.display = 'block';
            fullScr.style.top = 0;

        }
    })

    cancelIcon.addEventListener('click', () => {
        if (flag === 1) {
            flag = 0;
            // cancelIcon.classList.add('hidden');
            // menuIcon.classList.remove('hidden');
            menuIcon.style.display = 'block';
            cancelIcon.style.display = 'none';
            fullScr.style.top = "-100%"
            fullScr.style.display = 'block';
        }


    });


    fetch('/.netlify/functions/get-access-key')
        .then(response => response.json())
        .then(data => {
            const accessKeyInput = document.getElementById('accessKey');
            accessKeyInput.value = data.accessKey;
        })
        .catch(error => console.error('Error fetching access key:', error));



    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
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

    const options = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('show');
            } else {
                e.target.classList.remove('show')
            }
        });
    }, options);

    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        observer.observe(section);
    });
});




