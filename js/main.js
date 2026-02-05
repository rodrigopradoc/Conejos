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

const audio = document.getElementById("song");

document.querySelectorAll("#bottom-controls button")
.forEach(btn=>{
  btn.onclick = ()=>{
    if(audio.paused){
      audio.play();
    }else{
      audio.pause();
    }
  };
});


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
