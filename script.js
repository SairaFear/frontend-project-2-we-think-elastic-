let tl=gsap.timeline();
tl.from("#hello h1",{
    y:30,
    opacity:0,
    duration:1.5,
   delay:.2,
    stagger:0.3
})
gsap.to("#vediodiv #vedio", {
  width: "120%",
  height: "120%",
  scrollTrigger: {
    trigger: "#vediodiv #vedio",
    scroller: "body",
scrub:2
  }
})
let t = gsap.timeline();
t.from("#para h1", {
    opacity: 0,
    y: 50,
    duration: .5,

    stagger:0.5, 
    scrollTrigger: {
      trigger: "#para h1",
      scroller: "body",
      start: "top bottom", 
      end: "top top", 
      scrub: true 
    }
});
gsap.to("#text h1",{
  transform:"translateX(-100%)",
  
  scrollTrigger:{
      trigger:"#text",
      scroller:"body",
      start:"top 0%",
     scrub:.5,
      
      pin:true
  }
})
let a = gsap.timeline();
a.from("#para2 p", {
    opacity: 0,
    y: 50,
    duration: .5,

    stagger:0.5, 
    scrollTrigger: {
      trigger: "#para2 p",
      scroller: "body",
      
      scrub: true 
    }
});
let main=document.querySelector('html')
let cursor=document.querySelector("#cursor")
main.addEventListener("mousemove",function(delt){
  cursor.style.opacity=1
gsap.to(cursor,{
  x:delt.x,
  duration:0.3,
  y:delt.y
})
})
const imgTags = document.querySelectorAll("#overlay");
imgTags.forEach(img => {
  img.addEventListener("mouseenter", function() {
    cursor.innerHTML='<i class="ri-arrow-right-line"></i>'
    cursor.style.backgroundColor="pink"
    gsap.to(cursor,{
      scale:2,
    })
  });
});
imgTags.forEach(img => {
  img.addEventListener("mouseleave", function() {
        cursor.innerHTML=""
        cursor.style.backgroundColor="white"

    gsap.to(cursor,{
      scale:1
    })
  });
});