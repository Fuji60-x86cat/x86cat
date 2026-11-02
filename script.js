// ===== ハンバーガーメニュー =====
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

// ===== スクロール時のフェードイン =====
const revealItems = document.querySelectorAll(".reveal");

function checkReveal() {
  revealItems.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.classList.add("is-visible");
    }
  });
}

checkReveal();
window.addEventListener("scroll", checkReveal);
window.addEventListener("resize", checkReveal);

// ===== ページ内リンクのスムーズスクロール =====
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ===== フッターの年 =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== スクロール時のヘッダー影 =====
window.addEventListener("scroll", () => {
  const h = document.querySelector("header");
  h.style.boxShadow = window.scrollY > 10 ? "0 2px 14px rgba(0,0,0,.07)" : "none";
});
