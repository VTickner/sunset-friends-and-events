"use strict";

const year = document.querySelector(".copyright--year");
const btnNav = document.querySelector(".mobile-nav__btn");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const logoLink = document.querySelector(".logo__link");
const learnMoreLink = document.querySelector(".hero--learn-more");
const localSection = document.querySelector(".local__section");
const heroSection = document.querySelector(".hero__section");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".carousel__btn--left");
const btnRight = document.querySelector(".carousel__btn--right");
const dotContainer = document.querySelector(".dots");

/****************************************************/
/*      SET CURRENT YEAR IN COPYRIGHT STATEMENT     */
/****************************************************/

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

/****************************************************/
/*             CREATE MOBILE NAVIGATION             */
/****************************************************/

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

/****************************************************/
/*         SET SMOOTH SCROLLING FOR # LINKS         */
/****************************************************/

logoLink.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

learnMoreLink.addEventListener("click", function (e) {
  e.preventDefault();
  const targetPosition =
    localSection.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

/****************************************************/
/* CREATE STICKY NAVIGATION FOR LARGER SCREEN SIZES */
/****************************************************/

const isDesktopView = () => window.innerWidth >= 735;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting && isDesktopView()) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(heroSection);

window.addEventListener("resize", function () {
  if (isDesktopView()) {
    header.classList.add("sticky");
    headerObserver.observe(heroSection);
  } else {
    header.classList.remove("sticky");
    headerObserver.unobserve(heroSection);
  }
});

/****************************************************/
/*     CREATE CAROUSEL FOR TESTIMONIAL SECTION      */
/****************************************************/

const carousel = function () {
  let curSlide = 0;
  const maxSlide = slides.length;

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  goToSlide(0);

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
carousel();
