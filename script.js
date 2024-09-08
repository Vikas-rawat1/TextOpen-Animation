var tl = gsap.timeline({scrollTrigger:{
  trigger:"#main",
  start:"50% 50%",
  end:"100% 50%",
  markers:true,
  scrub:1,
  pin:true,
}});

tl.to("#top",{
  top:"-50%",
},"together")
.to("#bottom",{
  bottom:"-50%",
},"together")