gsap.registerPlugin(ScrollTrigger);

//Animaciones para mostrar la información por medio del puglin gsap.
gsap.utils.toArray(".dondevan").forEach((dondevan, i) => {
  gsap.fromTo(
    dondevan,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: i * 0.3,
      scrollTrigger: {
        trigger: dondevan,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    }
  );
});

//Animaciones de Donde Regresan

gsap.utils.toArray(".regresan").forEach((linea, i) => {
  gsap.fromTo(
    linea,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 2 + i * 0.3,
      scrollTrigger: {
        trigger: ".scroll-map",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    }
  );
});


//Animaciones de Remesas

gsap.utils.toArray(".remesas").forEach((linea, i) => {
  gsap.fromTo(
    linea,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 2 + i * 0.3,
      scrollTrigger: {
        trigger: ".scroll-map",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    }
  );
});

// Animaciones de Egresos

gsap.utils.toArray(".egresos").forEach((linea, i) => {
  gsap.fromTo(
    linea,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 2 + i * 0.3,
      scrollTrigger: {
        trigger: ".scroll-map",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    }
  );
});


//Animaciones de Cancilleria 

gsap.utils.toArray(".cancilleria").forEach((linea, i) => {
  gsap.fromTo(
    linea,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 2 + i * 0.3,
      scrollTrigger: {
        trigger: ".scroll-map",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    }
  );
});

//Animaciones de Testimonios 

gsap.utils.toArray(".testimonios").forEach((linea, i) => {
  gsap.fromTo(
    linea,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 2 + i * 0.3,
      scrollTrigger: {
        trigger: ".scroll-map",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    }
  );
});
