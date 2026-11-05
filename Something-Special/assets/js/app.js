import { getTodayJalali, getMonthDays, getFirstWeekday, compareDates, formatJalaliDate } from "./calendar.js";
import { faDigits, formatTime, escapeHtml } from "./utils.js";
import { animateTransition, playSuccessAnimation } from "./animations.js";
import { notifyProposalResponse, notifyDateConfirmed } from "./telegram.js";

const $ = selector => document.querySelector(selector);
const MONTHS = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
const DAYS = ["ش","ی","د","س","چ","پ","ج"];
const TIMES = ["10:00","12:00","14:00","16:00","18:00","19:00","20:00","21:00","22:00"];
const today = getTodayJalali();
const state = {
  step: 1, response: null, date: null, year: today.jy, month: today.jm,
  time: null, place: null, pickup: null
};

function progress(label) {
  $("#step-label").textContent = label;
  $("#step-count").textContent = `${String(state.step).padStart(2,"0")} / 07`;
  $("#progress-bar").style.width = `${state.step / 7 * 100}%`;
}
function shell(title, subtitle, body, label) {
  progress(label);
  $("#content").innerHTML = `<span class="eyebrow">${label}</span><h1>${title}</h1>${subtitle ? `<p class="lead">${subtitle}</p>` : ""}${body}`;
}
function render() {
  animateTransition(() => {
    if (state.step === 1) intro();
    else if (state.step === 2) letter();
    else if (state.step === 3) proposal();
    else if (state.step === 4) calendar();
    else if (state.step === 5) time();
    else if (state.step === 6) place();
    else finalTicket();
  });
}
function go(step) { state.step = step; render(); }
function intro() {
  shell("یه چیزی در حال Build شدنه...", "این پروژه نه توی GitHub پیدا می‌شه، نه توی رزومه؛ ولی برای ساختنش یه کم شجاعت لازم بود.", `
    <div class="hero-icon" aria-hidden="true">♥</div>
    <div class="terminal">
      <div class="terminal-line muted">~/something-special $ npm run feelings</div>
      <div class="terminal-line"><span class="prompt">›</span> Loading a little courage...</div>
      <div class="terminal-line"><span class="prompt">›</span> Compiling a special message...</div>
      <div class="terminal-line"><span class="prompt">›</span> Checking for butterflies...</div>
      <div class="terminal-line ok">✓ Build completed successfully</div>
      <div class="terminal-line"><span class="prompt">›</span> Ready when you are <span class="cursor"></span></div>
    </div>
    <button class="primary-btn" id="continue">خب، ببینیم چی می‌شه؟ ✨</button>`, "INITIALIZING");
  $("#continue").onclick = () => go(2);
}
function letter() {
  shell("یه چیزی هست که می‌خوام بگم...", "قول می‌دم این یکی از اون پیام‌های طولانی بدون نقطه‌ویرگول نیست! :)", `
    <div class="message-card">
      <p>می‌دونی، بعضی آدما خیلی بی‌سروصدا وارد روزمرگی آدم می‌شن، ولی کم‌کم حضورشون یه تفاوت قشنگ ایجاد می‌کنه.</p>
      <p>شاید نتونم براش یه الگوریتم دقیق بنویسم، اما می‌دونم دوست دارم بیشتر بشناسمت؛ نه فقط در حد چندتا گفت‌وگوی معمولی.</p>
      <p>برای همین تصمیم گرفتم به‌جای نوشتن یه پیام ساده، یه پروژه کوچیک بسازم. چون ظاهراً وقتی پای احساسات وسطه، بعضی برنامه‌نویسا هم از ساختن دست نمی‌کشن! 😅</p>
    </div>
    <div class="code-note">const intention = "get to know you better";<br>// simple, honest, and no hidden requirements.</div>
    <div class="step-actions"><button class="primary-btn" id="continue">خب، سؤال اصلی... 💌</button></div>`, "A LITTLE CONTEXT");
  $("#continue").onclick = () => go(3);
}
function proposal() {
  shell("حاضری یه احتمال قشنگ رو امتحان کنیم؟", "دوست داری بیشتر همدیگه رو بشناسیم و ببینیم می‌تونیم یه رابطه قشنگ رو با هم شروع کنیم؟", `
    <div class="hero-icon" aria-hidden="true">♡</div>
    <div class="choices">
      <button class="choice-btn" data-response="yes"><span class="choice-icon">💗</span><span><strong>آره، دوست دارم!</strong><small>بریم ببینیم این داستان به کجا می‌رسه.</small></span></button>
      <button class="choice-btn" data-response="think"><span class="choice-icon">🌱</span><span><strong>دوست دارم بیشتر فکر کنم</strong><small>برای جواب دادن عجله‌ای ندارم.</small></span></button>
      <button class="choice-btn danger" data-response="no"><span class="choice-icon">🤍</span><span><strong>ترجیح می‌دم نه</strong><small>صادقانه جواب می‌دم.</small></span></button>
    </div>
    <p class="lead">هر جوابی بدی محترمه؛ اینجا خبری از اجبار و دکمه‌های فراری نیست. :)</p>`, "THE QUESTION");
  $("#content").querySelectorAll("[data-response]").forEach(button => {
    button.onclick = () => {
      state.response = button.dataset.response;
      notifyProposalResponse({response: state.response}).catch(() => {});
      if (state.response === "yes") { go(4); playSuccessAnimation(); }
      else ending(state.response);
    };
  });
}
function ending(kind) {
  const thinking = kind === "think";
  progress("RESPECTING YOUR ANSWER");
  $("#content").innerHTML = `
    <div class="hero-icon">${thinking ? "🌱" : "🤍"}</div>
    <h1>${thinking ? "No rush. Take your time." : "ممنون که صادق بودی 🤍"}</h1>
    <p class="lead">${thinking ? "برای جواب دادن هیچ عجله‌ای نیست. لازم نیست همین حالا تصمیمی بگیری؛ هر وقت خودت خواستی و راحت بودی می‌تونی درباره‌اش حرف بزنی." : "ممنون که دعوت من رو خوندی و نظرت رو صادقانه گفتی. به تصمیمت احترام می‌ذارم و امیدوارم همیشه اتفاق‌های خوبی برات بیفته."}</p>
    <div class="soft-panel">${thinking ? "این پروژه فعلاً روی حالت Pause می‌مونه؛ بدون تایمر و بدون Deadline. :)" : "پایان این دعوت، چیزی از ارزش صداقت و احترام کم نمی‌کنه."}</div>
    <button class="secondary-btn" id="close">بستن دعوت‌نامه</button>`;
  $("#close").onclick = () => {
    $("#content").innerHTML = '<div class="hero-icon">✦</div><h1>روزت قشنگ! 🌷</h1><p class="lead">ممنون که تا اینجا همراه بودی.</p>';
    $("#step-label").textContent = "SESSION CLOSED";
  };
}
function calendar() {
  const first = getFirstWeekday(state.year, state.month);
  const length = getMonthDays(state.year, state.month);
  const cells = Array(first).fill("<span></span>");
  for (let day = 1; day <= length; day++) {
    const date = {jy:state.year,jm:state.month,jd:day};
    const past = compareDates(date,today) < 0;
    const selected = state.date && compareDates(date,state.date) === 0;
    const isToday = compareDates(date,today) === 0;
    cells.push(`<button class="cal-day ${selected ? "selected" : ""} ${isToday ? "today" : ""}" data-day="${day}" ${past ? "disabled" : ""}>${faDigits(day)}</button>`);
  }
  shell("اولین قرارمون کِی باشه؟ 📅", "یه روز خوب انتخاب کن؛ من با تقویم هماهنگ می‌شم، فقط با timezone جنگ نکنیم!", `
    <div class="cal-head">
      <button class="cal-nav" id="prev" ${state.year===today.jy && state.month===today.jm ? "disabled" : ""}>‹</button>
      <div class="cal-title">${MONTHS[state.month-1]} ${faDigits(state.year)}</div>
      <button class="cal-nav" id="next-month">›</button>
    </div>
    <div class="cal-grid">${DAYS.map(d=>`<div class="cal-dow">${d}</div>`).join("")}${cells.join("")}</div>
    <div class="step-actions">
      <button class="primary-btn" id="next" ${state.date ? "" : "disabled"}>بعدی، بریم سراغ ساعت ⏰</button>
      <button class="text-btn" id="back">بازگشت</button>
    </div>`, "DATE CONFIGURATION");
  $("#prev").onclick = () => changeMonth(-1);
  $("#next-month").onclick = () => changeMonth(1);
  $("#content").querySelectorAll("[data-day]").forEach(b => b.onclick = () => {state.date={jy:state.year,jm:state.month,jd:Number(b.dataset.day)};calendar();});
  $("#next").onclick = () => go(5);
  $("#back").onclick = () => go(3);
}
function changeMonth(delta) {
  let m=state.month+delta,y=state.year;
  if(m<1){m=12;y--;} if(m>12){m=1;y++;}
  if(compareDates({jy:y,jm:m,jd:1},{jy:today.jy,jm:today.jm,jd:1})<0)return;
  state.month=m;state.year=y;calendar();
}
function time() {
  shell("چه ساعتی برات بهتره؟ ⏰", "یه زمان راحت انتخاب کن؛ برنامه‌ریزی دقیق، بدون جلسه‌ی Sprint!", `
    <div class="time-grid">${TIMES.map(t=>`<button class="time-chip ${state.time===t?"selected":""}" data-time="${t}">${faDigits(t)}</button>`).join("")}</div>
    <div class="step-actions"><button class="primary-btn" id="next" ${state.time?"":"disabled"}>انتخاب مکان 📍</button><button class="text-btn" id="back">بازگشت</button></div>`, "TIME CONFIGURATION");
  $("#content").querySelectorAll("[data-time]").forEach(b=>b.onclick=()=>{state.time=b.dataset.time;time();});
  $("#next").onclick=()=>go(6); $("#back").onclick=()=>go(4);
}
function place() {
  const places=[{id:"cafe",emoji:"☕",label:"کافه"},{id:"restaurant",emoji:"🍽️",label:"رستوران"},{id:"park",emoji:"🌳",label:"پارک"}];
  shell("یه مکان دنج انتخاب کنیم؟ 📍", "فعلاً نوع مکان رو انتخاب کن؛ جزئیات دقیقش رو با هم هماهنگ می‌کنیم.", `
    <div class="place-grid">${places.map(p=>`<button class="place-card ${state.place===p.id?"selected":""}" data-place="${p.id}"><span class="emoji">${p.emoji}</span><strong>${p.label}</strong></button>`).join("")}</div>
    <div class="soft-panel">اسم و آدرس دقیق مکان رو بعداً با هم انتخاب می‌کنیم؛ فعلاً فقط حال‌وهوای قرار مهمه.</div>
    <div class="step-actions"><button class="primary-btn" id="next" ${state.place?"":"disabled"}>ادامه</button><button class="text-btn" id="back">بازگشت</button></div>`, "LOCATION CONFIGURATION");
  $("#content").querySelectorAll("[data-place]").forEach(b=>b.onclick=()=>{state.place=b.dataset.place;place();});
  $("#next").onclick=()=>pickup(); $("#back").onclick=()=>go(5);
}
function pickup() {
  shell("یه سؤال کوچیک درباره رفت‌وآمد 🚗", "دوست داری بیام دنبالت یا ترجیح می‌دی خودت بیای؟ هرکدوم راحت‌تری.", `
    <div class="pickup-grid">
      <button class="pickup-card ${state.pickup===true?"selected":""}" data-pickup="yes">🚗<br><br>اگه دوست داری بیا دنبالم</button>
      <button class="pickup-card ${state.pickup===false?"selected":""}" data-pickup="no">📍<br><br>خودم میام</button>
    </div>
    <div class="step-actions"><button class="primary-btn" id="finish" ${state.pickup===null?"disabled":""}>ساخت بلیت قرار ✨</button><button class="text-btn" id="back">بازگشت</button></div>`, "FINAL CONFIGURATION");
  $("#content").querySelectorAll("[data-pickup]").forEach(b=>b.onclick=()=>{state.pickup=b.dataset.pickup==="yes";pickup();});
  $("#finish").onclick=()=>{
    notifyDateConfirmed({date:state.date,time:state.time,place:state.place,pickup:state.pickup}).catch(()=>{});
    go(7);playSuccessAnimation();
  };
  $("#back").onclick=()=>go(6);
}
function finalTicket() {
  const labels={cafe:"کافه ☕",restaurant:"رستوران 🍽️",park:"پارک 🌳"};
  shell("Build موفقیت‌آمیز بود! 💌", "خب، تنظیمات اولین خاطره‌مون آماده شد. البته مهم‌تر از همه، حال خوب هر دومونه.", `
    <div class="build-list">
      <div>Compiling first_chapter...</div><div class="success">✓ Date ............ OK</div>
      <div class="success">✓ Time ............ OK</div><div class="success">✓ Location ........ OK</div>
      <div class="success">✓ Preferences ..... OK</div><div class="success">✓ Build completed successfully ♥</div>
    </div>
    <div class="ticket">
      <div class="ticket-head"><small>SOMETHING SPECIAL · INVITATION</small><h2>Our First Chapter</h2></div><div class="ticket-cut"></div>
      <div class="ticket-body">
        <div class="ticket-row"><span>تاریخ</span><strong>${escapeHtml(formatJalaliDate(state.date))}</strong></div>
        <div class="ticket-row"><span>ساعت</span><strong>${formatTime(state.time)}</strong></div>
        <div class="ticket-row"><span>مکان</span><strong>${labels[state.place]||"—"}</strong></div>
        <div class="ticket-row"><span>رفت‌وآمد</span><strong>${state.pickup?"برای رفتن دنبالت هماهنگ می‌کنیم 🚗":"خودت میای 📍"}</strong></div>
      </div>
      <div class="ticket-note">این فقط یه پیشنهاد برای شروعه؛ جزئیاتش رو با هم هماهنگ می‌کنیم.<br>امیدوارم شروع اتفاق‌های قشنگی باشه. ❤️</div>
    </div>
    <button class="secondary-btn" id="restart">مشاهده دوباره از ابتدا</button>`, "FINAL OUTPUT");
  $("#restart").onclick=()=>window.location.reload();
}
render();
