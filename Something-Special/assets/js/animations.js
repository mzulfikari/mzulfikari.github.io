export function animateTransition(callback) {
  const content = document.querySelector("#content");
  if (!content) return callback();
  content.classList.remove("pop-in");
  callback();
  void content.offsetWidth;
  content.classList.add("pop-in");
}

export function showTypingEffect(element, text, speed = 24) {
  if (!element) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { element.textContent = text; return; }
  element.textContent = "";
  let index = 0;
  const tick = () => {
    element.textContent = text.slice(0, index++);
    if (index <= text.length) window.setTimeout(tick, speed);
  };
  tick();
}

export function createFloatingHearts(count = 14) {
  const layer = document.querySelector("#hearts");
  if (!layer) return;
  layer.innerHTML = "";
  const symbols = ["💗", "♡", "✦", "💌"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = symbols[i % symbols.length];
    heart.style.left = `${Math.random() * 94 + 2}%`;
    heart.style.animationDelay = `${Math.random() * 1.8}s`;
    heart.style.fontSize = `${15 + Math.random() * 12}px`;
    layer.append(heart);
  }
  window.setTimeout(() => { layer.innerHTML = ""; }, 5800);
}

export function playSuccessAnimation() {
  createFloatingHearts(18);
}