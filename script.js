var tl = gsap.timeline({scrollTrigger:{
  trigger:"#main",
  start:"50% 45%",
  end:"100% 50%",
  markers:true,
  scrub:1,
  pin:true,
}});

tl.to("#top",{
  y:"-50%",
})