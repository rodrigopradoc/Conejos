// ==========================
// 1) CONFIG (AJUSTA ESTO)
// ==========================

// FECHA OBJETIVO (cámbiala)
const WEDDING_DATE_ISO = "2026-02-22T20:00:00-05:00"; // 8:00 PM Lima

// Google Forms (modo "custom form" con estilo)
// Debes poner el FORM_ACTION y los entry IDs reales (te explico debajo).
const GOOGLE_FORM = {
  // Ejemplo:
  // action: "https://docs.google.com/forms/d/e/1FAIpQLSeXXXXXXX/formResponse",
  action: "",

  // entry IDs:
  // asistencia: "entry.1234567890",
  // nombre: "entry.1111111111",
  // cantidad: "entry.2222222222",
  // alergias: "entry.3333333333",
  // cancion: "entry.4444444444",
  // mensaje: "entry.5555555555",
  fields: {
    asistencia: "",
    nombre: "",
    cantidad: "",
    alergias: "",
    cancion: "",
    mensaje: "",
  }
};

// ==========================
// 2) COUNTDOWN
// ==========================
const $ = (sel) => document.querySelector(sel);

function pad2(n){ return String(n).padStart(2, "0"); }

function startCountdown(){
  const target = new Date(WEDDING_DATE_ISO).getTime();

  const tick = () => {
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    $("#cdDays").textContent = days;
    $("#cdHours").textContent = pad2(hours);
    $("#cdMins").textContent = pad2(mins);
    $("#cdSecs").textContent = pad2(secs);
  };

  tick();
  setInterval(tick, 1000);
}

// ==========================
// 3) MODALS
// ==========================
function openModal(id){
  const m = document.getElementById(id);
  if (!m) return;
  m.setAttribute("aria-hidden", "false");
}
function closeModal(id){
  const m = document.getElementById(id);
  if (!m) return;
  m.setAttribute("aria-hidden", "true");
}

function setupModals(){
  document.getElementById("openGifts")?.addEventListener("click", () => openModal("modalGifts"));
  document.getElementById("openVideo")?.addEventListener("click", () => openModal("modalVideo"));

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-close]");
    if (!btn) return;
    closeModal(btn.getAttribute("data-close"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      closeModal("modalGifts");
      closeModal("modalVideo");
    }
  });
}

// ==========================
// 4) COPY BANK
// ==========================
function setupCopy(){
  const btn = document.getElementById("copyBank");
  if(!btn) return;
  btn.addEventListener("click", async () => {
    const bankText = [
      "Banco: Interbank",
      "Titular: Rodrigo Prado",
      "Cuenta: 000-0000000000",
      "CCI: 00000000000000000000"
    ].join("\n");

    try{
      await navigator.clipboard.writeText(bankText);
      const ok = document.getElementById("copyOk");
      ok.hidden = false;
      setTimeout(() => ok.hidden = true, 1800);
    }catch(err){
      alert("No se pudo copiar. Copia manualmente.");
    }
  });
}

// ==========================
// 5) ADD TO CALENDAR (Google Calendar link)
// ==========================
function setupCalendar(){
  const btn = document.getElementById("addToCalendar");
  if(!btn) return;

  btn.addEventListener("click", () => {
    // Evento simple (cámbialo si quieres)
    const title = encodeURIComponent("Boda Brisa & Rodrigo");
    const details = encodeURIComponent("¡Te esperamos! Revisa la invitación para detalles.");
    const location = encodeURIComponent("Cieneguilla, Lima");
    // Google Calendar usa formato UTC: YYYYMMDDTHHMMSSZ
    const start = new Date(WEDDING_DATE_ISO);
    const end = new Date(start.getTime() + (3 * 60 * 60 * 1000)); // +3h
    const toGCal = (d) => {
      const yyyy = d.getUTCFullYear();
      const mm = pad2(d.getUTCMonth() + 1);
      const dd = pad2(d.getUTCDate());
      const hh = pad2(d.getUTCHours());
      const mi = pad2(d.getUTCMinutes());
      const ss = pad2(d.getUTCSeconds());
      return `${yyyy}${mm}${dd}T${hh}${mi}${ss}Z`;
    };

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${title}` +
      `&details=${details}` +
      `&location=${location}` +
      `&dates=${toGCal(start)}/${toGCal(end)}`;

    window.open(url, "_blank", "noopener");
  });
}

// ==========================
// 6) RSVP -> GOOGLE FORMS
// ==========================
function setupRsvpToGoogleForms(){
  const form = document.getElementById("rsvpForm");
  if(!form) return;

  const successEl = document.getElementById("rsvpSuccess");
  const errorEl = document.getElementById("rsvpError");

  // Si no configuras action + entry IDs, no enviamos (para que no te frustre)
  const isReady =
    GOOGLE_FORM.action &&
    GOOGLE_FORM.fields.asistencia &&
    GOOGLE_FORM.fields.nombre &&
    GOOGLE_FORM.fields.cantidad;

  if(!isReady){
    // Deja el form funcional visualmente, pero avisa en consola:
    console.warn("Configura GOOGLE_FORM.action y GOOGLE_FORM.fields (entry IDs) para enviar a Google Forms.");
    return;
  }

  // Set action real del form
  form.action = GOOGLE_FORM.action;

  form.addEventListener("submit", () => {
    successEl.hidden = true;
    errorEl.hidden = true;

    // Construimos inputs hidden con los entry.*
    // 1) limpiamos antiguos
    form.querySelectorAll("input[data-gf], textarea[data-gf]").forEach(el => el.remove());

    const asistencia = form.querySelector('input[name="asistencia"]:checked')?.value ?? "";
    const nombre = form.querySelector('input[name="nombre"]')?.value ?? "";
    const cantidad = form.querySelector('input[name="cantidad"]')?.value ?? "";
    const alergias = form.querySelector('input[name="alergias"]')?.value ?? "";
    const cancion = form.querySelector('input[name="cancion"]')?.value ?? "";
    const mensaje = form.querySelector('textarea[name="mensaje"]')?.value ?? "";

    const map = [
      [GOOGLE_FORM.fields.asistencia, asistencia],
      [GOOGLE_FORM.fields.nombre, nombre],
      [GOOGLE_FORM.fields.cantidad, cantidad],
      [GOOGLE_FORM.fields.alergias, alergias],
      [GOOGLE_FORM.fields.cancion, cancion],
      [GOOGLE_FORM.fields.mensaje, mensaje],
    ];

    for(const [entry, value] of map){
      if(!entry) continue;
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = entry;
      input.value = value;
      input.setAttribute("data-gf", "1");
      form.appendChild(input);
    }

    // Mostramos "enviado" luego de un ratito (Google Forms no da callback)
    setTimeout(() => {
      successEl.hidden = false;
      form.reset();
    }, 1100);
  });
}

// ==========================
// INIT
// ==========================
startCountdown();
setupModals();
setupCopy();
setupCalendar();
setupRsvpToGoogleForms();
