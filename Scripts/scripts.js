gsap.registerPlugin(ScrollTrigger);

// Lista de grupos 
let secciones = [
  ".dondevan",
  ".regresan",
  ".remesas",
  ".egresos",
  ".cancilleria",
  ".testimonios"
];

// Timeline controlado por scroll
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-map",
    start: "top top",
    end: "+=5000", //Esto se avanza por medio de pixeles durante el scroll
    scrub: true,   
    pin: true,     
    anticipatePin: 1
  }
});

// Inicialmente, todas las capas ocultas
secciones.forEach(clase => {
  gsap.set(clase, { opacity: 0 });
});

// Mostrar cada grupo de capas uno a uno
secciones.forEach((clase, i) => {
  tl.to(clase, { opacity: 1, duration: 1 })     // Aparece
    .to(clase, { opacity: 0, duration: 1 }, "+=1"); // Desaparece antes del siguiente
});
