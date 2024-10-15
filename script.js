var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "bottom 50%",
    // markers: true,
    scrub: 1,
    pin: true,
  }, 
});

tl.to(
  "#top",
  {
    top: "-50%",
  },
  "together"
) //to run both at the same time
  .to(
    "#center",
    {
      height: "50vh",
    },
    "together"
  )
  .to(
    "#bottom",
    {
      bottom: "-60%",
    },
    "together"
  ) //to run both at the same time
  .to(
    "#top-h1",
    {
      top: "80%",
    },
    "together"
  ) //to run both at the same time
  .to(
    "#bottom-h1",
    {
      bottom: "-60%",
    },
    "together"
  ) //to run both at the same time
  .from(".content", {
    y: 600,
    delay: 0.1,
  });
