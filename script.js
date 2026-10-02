document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".page-loader");

  window.setTimeout(() => {
    loader?.classList.add("done");
    document.querySelectorAll(".reveal").forEach((el, index) => {
      window.setTimeout(() => el.classList.add("is-visible"), 90 + index * 55);
    });
  }, 650);

  /*
    TRUST SCORE
    Change data-score="82" in index.html.
    The value is clamped automatically to 0–100.
  */
  document.querySelectorAll(".score-ring").forEach((ring) => {
    const score = Math.min(100, Math.max(0, Number(ring.dataset.score) || 0));
    const value = ring.querySelector(".score-value");
    ring.style.background = `conic-gradient(var(--orange) 0 ${score}%, rgba(255,255,255,.08) ${score}% 100%)`;
    if (value) value.textContent = score;
  });
});