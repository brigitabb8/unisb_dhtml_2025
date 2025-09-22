const originalSources = Array.from(document.querySelectorAll(".grid img"))
    .map(img => img.src);

  const celebrationSources = [
    "img/janica_medalja.jpeg",
    "img/blanka_medalja.jpg",
    "img/snjezanap_medalja.jpg",
    "img/martina_medalja.jpeg",
    "img/sandra_s_medalja.jpeg",
    "img/lucija_medalja.jpeg",
    "img/sandra_e_medalja.jpg",
    "img/sara_k_medalja.jpg",
    "img/matea_medalja.jpeg",
    "img/donna_medalja.jpg",
    "img/barbara_medalja.jpg",
    "img/lena_medalja.jpg",
  
  ];

  const celebrateBtn = document.querySelector(".celebrate");
  const galleryImgs = document.querySelectorAll(".grid img");
  let celebrationOn = false;

  celebrateBtn.addEventListener("click", () => {
    const newSet = celebrationOn ? originalSources : celebrationSources;

    galleryImgs.forEach((img, i) => {
      const newSrc = newSet[i % newSet.length];
      img.style.opacity = 0;
      const preload = new Image();
      preload.onload = () => {
        img.src = newSrc;
        img.style.opacity = 1;
      };
      preload.src = newSrc;
    });

    celebrationOn = !celebrationOn;
  })