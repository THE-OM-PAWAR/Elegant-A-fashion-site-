const iso = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          console.log(entries)
          gsap.to(".nav_mid", {
            y: -15,
            opacity: 0,
            duration: 0.2,
            scale: 1,
          });
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
      gsap.to(".nav_mid", {
        y: 0,
        opacity: 1,
        duration: 0.2,
        scale: 1,
      });
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
  function section2Gsap(){
    console.log(entries)
    console.log("ompawar section2 ")

  }

  iso.observe(document.getElementById("observer"));
  const iso2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        gsap.from(".main_heading_box", {
          y: 0,
          opacity: 0,
          duration: .4,
          scale: .7,
          delay: 1,
        });
        gsap.from(".main_content_box", {
          y: 0,
        opacity: 0,
        duration: .4,
        scale: .7,
        delay: 1,
      });
      gsap.from(".main_image_box", {
        y: 0,
        x: 0,
        opacity: 0,
        duration: .2,
        scale: .7,
        delay: 1,
      });
        return;
      }

    });
  }, {})

iso2.observe(document.getElementById("Section2Observer"));

