/* ===============================
   SCROLL ANIMATIONS
================================*/

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal-visible");
    }
  });
},{
  threshold:0.15
});

document.querySelectorAll("section, h2, p, img, button, span")
.forEach(el=>{
  el.classList.add("reveal-hidden");
  observer.observe(el);
});


/* ===============================
   COUNTDOWN TIMER
================================*/

const targetDate = new Date("Feb 22, 2026 00:00:00").getTime();

function updateCountdown(){

  const now = new Date().getTime();
  const diff = targetDate - now;

  if(diff <= 0) return;

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff%(1000*60*60))/(1000*60));
  const s = Math.floor((diff%(1000*60))/1000);

  const nums = document.querySelectorAll(
    ".flex.justify-center.gap-4.pb-8 span.text-4xl"
  );

  if(nums.length === 4){
    nums[0].textContent = d;
    nums[1].textContent = h;
    nums[2].textContent = m;
    nums[3].textContent = s;
  }
}

setInterval(updateCountdown,1000);


/* ===============================
   CAROUSEL
================================*/

const container =
document.querySelector(".carousel-album_emblaContainer__nBGH0");

if(container){

  const slides =
  document.querySelectorAll(".carousel-album_emblaSlide__GppdZ");

  let index = 0;

  function showSlide(i){
    index = (i + slides.length) % slides.length;
    container.style.transform =
      `translateX(-${index*100}%)`;
  }

  document
  .querySelectorAll("button")
  .forEach(btn=>{
    if(btn.innerHTML.includes("arrow-right")){
      btn.onclick = ()=>showSlide(index+1);
    }
    if(btn.innerHTML.includes("arrow-left")){
      btn.onclick = ()=>showSlide(index-1);
    }
  });

}


/* ===============================
   MUSIC TOGGLE
================================*/

/* ===============================
   MUSIC TOGGLE (play / pause)
================================*/

const audio = document.getElementById("song");
const musicBtn = document.getElementById("btn-music");
const musicIcon = document.getElementById("music-icon");

function setMusicUI(isPlaying) {
  if (!musicBtn || !musicIcon) return;

  if (isPlaying) {
    musicIcon.src = "./img/pause-white.svg";
    musicIcon.alt = "pause";
    musicBtn.setAttribute("aria-label", "Pausar música");
  } else {
    musicIcon.src = "./img/play-white.svg";
    musicIcon.alt = "play";
    musicBtn.setAttribute("aria-label", "Reproducir música");
  }
}

// estado inicial
setMusicUI(false);

if (musicBtn && audio) {
  // click => toggle
  musicBtn.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();  // requiere interacción del usuario (clic), OK
      } else {
        audio.pause();
      }
    } catch (err) {
      // si el navegador bloquea, deja el icono en play
      setMusicUI(false);
    }
  });

  // mantener icono sincronizado con el estado real
  audio.addEventListener("play", () => setMusicUI(true));
  audio.addEventListener("pause", () => setMusicUI(false));
  audio.addEventListener("ended", () => setMusicUI(false));
}



/* ===============================
   COPY TO CLIPBOARD
================================*/

const modal = document.getElementById("gift-modal");
const openBtn = document.getElementById("open-gift-modal");
const closeBtn = document.getElementById("close-gift-modal");

const bcpText = `BCP
Cuenta: 19177944158070
CCI: 00219117794415807059`;

const interbankText = `Interbank
Cuenta: 250 3101969360
CCI: 00325001310196936088`;

const yapeText = `Yape: 980701556`;

if (modal && openBtn && closeBtn) {

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});

}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copiado al portapapeles 💖");
  });
}
