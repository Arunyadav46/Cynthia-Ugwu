const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// function circleMouseFollower(xscale, yscale){
//     window.addEventListener("mousemove",function(dets){
//       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}), scale(${yscale})`;
//     })
// }

function circleChapta(){
    //define default scale value
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){
       
        //  var xdiff = dets.clientX - xprev;
        //  var ydiff = dets.clientY - yprev;
         xscale =  gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
         yscale =  gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
       

         xprev = dets.clientX; 
         yprev = dets.clientY; 

         circleMouseFollower(xscale, yscale);

    //    xscale =  gsap.utils.clamp(.8,1.2,xdiff);
    //     yscale =  gsap.utils.clamp(.8,1.2,ydiff);

    });
}
circleChapta();


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2
    })
    tl.from("#hero-footer",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
}
circleMouseFollower();
firstPageAnim();

 document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diff1 = 0;

    elem.addEventListener("mousemove",function(dets){
      var diff = dets.clientY - elem.getBoundingClientRect().top;

      diff1 = dets.clientX - rotate;
      rotate = dets.clientX;
      
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate:  gsap.utils.clamp(-20,20,diff1*0.5)
        })
    })
    elem.addEventListener("mouseleave",function(dets){
          gsap.to(elem.querySelector("img"),{
              opacity: 0,
              ease: Power3,
              duration: 0.5
          })
      })

 })

