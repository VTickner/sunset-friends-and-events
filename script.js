"use strict";

const year = document.querySelector(".copyright--year");
const btnNav = document.querySelector(".mobile-nav__btn");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const logoLink = document.querySelector(".logo__link");
const learnMoreLink = document.querySelector(".hero--learn-more");
const localSection = document.querySelector(".local__section");
const heroSection = document.querySelector(".hero__section");

/*************************************************/
/*    SET CURRENT YEAR IN COPYRIGHT STATEMENT    */
/*************************************************/

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

/*************************************************/
/*           CREATE MOBILE NAVIGATION            */
/*************************************************/

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

/*************************************************/
/*       SET SMOOTH SCROLLING FOR # LINKS        */
/*************************************************/

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

/*************************************************/
/*   STICKY NAVIGATION FOR LARGER SCREEN SIZES   */
/*************************************************/

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
