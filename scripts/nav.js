const iso = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          console.log(entries)
          gsap.to("._links", {
            y: -15,
            opacity: 0,
            duration: 0.2,
            scale: 1,
          });
          gsap.to("#nav_part1>svg", {
            y: -15,
            opacity: 1,
            duration: 0.2,
            scale: 1,
          });
          gsap.to(".developer", {
            y: -5,
            opacity: 0,
            duration: 0.2,
            scale: 1,
          });
        return;
      }
      gsap.to("._links", {
        y: 0,
        opacity: 1,
        duration: 0.2,
        scale: 1,
      });
      gsap.to("#nav_part1>svg", {
        y: 0,
        opacity: 1,
        duration: 0.2,
        scale: 1,
      });
      gsap.to(".developer", {
        y: 0,
        opacity: 1,
        duration: 0.2,
        scale: 1,
      });
    });
  }, {});
  iso.observe(document.getElementById("observer"));
  




