# Sunset Friends & Events Website

## Table of contents

- [Project Overview](#project-overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Project Overview

TODO: edit/update text

This is the website I had envisaged when I came up with the name Sunset Friends for the group project on the Code First Girls JavaScript JavaScript course I did earlier this year. Ultimately, that group project went in a somewhat different direction, but I still wanted to create the idea that I had come up with.

### Screenshots

TODO:

Desktop:  
![Desktop screenshot](./img/desktop-screenshot.jpg)

Mobile:
<img src="./img/mobile-screenshot.jpg" height="350px" />

### Links

- Solution URL: [https://github.com/VTickner/sunset-friends-and-events](https://github.com/VTickner/sunset-friends-and-events)
  TODO: Netlify for live site
- Live Site URL: []()

## Process

- Created the basic structure of the HTML index page along with text, logo, and image content.
- Created the CSS for the colour scheme and font/space sizing (used custom properties to contain them).
- Created the CSS layout using flexbox and grid.
- Rather than setting `max-width` to the container as I wanted the background colour to go across the whole width I added padding to give the content a maximum-width of 96vw by using the variable `--padding--container: calc(4vw / 2);`.
- Gave the `main-nav--cta`, `hero--cta` and `cta` (events page links) a different look to make the links stand out.
- Added an animation on the logo using CSS `@keyframes` with `transform: scale` to produce a zoom-in-out effect on mouse hover.
- Added an animation on the hero image using CSS `@keyframes` with `transform: translateX` to make the hero image move in from the right on page load.
- Edited `:focus` to match styling of links for keyboard only users (for logo made `:focus` to be a circle shape)
- Added JavaScript to enable the following functionality:
  - Set current year in copyright statement.
  - Added smooth scrolling for "Learn more ↓" page link.
  - Added sticky navigation for larger screens. TODO: might need to change `window.innderWidth` setting
  - Added mobile navigation menu. TODO: adjust look of menu
  - Added carousel for testimonials.
- Added accessibility aria labels for the carousel section: `role`, `aria-roledescription`, `arial-label`, `aria-labelledby`.

TODO

- add media queries to make site fully responsive
- refactor CSS

### Built with

- HTML
- CSS
  - Flexbox
  - Grid
  - Custom properties
  - Animations
- JavaScript
  - Carousel (testimonials)
  - Mobile navigation
  - Smooth scrolling
  - Sticky navigation
- Icons

### What I learned

When using `:focus` styling I noticed that clicking the logo link with the mouse showed the focus styling, which was unnecessary as I only wanted that styling showed when not using a mouse to click on it. I learnt how to remove the styling for the functionality I wanted by using `:focus:not(:focus-visible)`.

TODO: edit/update text

As part of [The Complete JavaScript Course 2023: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/) course on Udemy, I have learnt in more detail how to work with the DOM and have a better understanding of how to implement rotating carousels and mobile navigation functionality. I decided to implement these functionalities in one of my own personal projects and felt this was a suitable project to do so.

### Continued development

To improve my JavaScript knowledge and capabilities by completing [The Complete JavaScript Course 2023: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/) course.

### Useful resources

- [Tint & Shade Generator](https://maketintsandshades.com/) - Free tool that calculates tints and shades for your default colour, to enable you to create a cohesive colour scheme.
- [Coolers Colour Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5) - Free tool that allows you to check the colour contrast of the text to background colour for accessibility / readability purposes.
- [Phosphor Icons](https://phosphoricons.com/) - Free, open source icon library.
- [Pexels Photos](https://www.pexels.com/) - Free stock royalty free photos and images.
- [Unsplash Photos](https://unsplash.com/) - Free stock royalty free photos and images.
- [Squoosh App](https://squoosh.app/) - Free tool that reduces image sizes.
- [A Step-By-Step Guide To Building Accessible Carousels](https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/) - Article by Sonja Weckenmann - a step-by-step guide looking at how to add accessibility into carousel component.
- [The Complete JavaScript Course 2023: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/) - A paid for JavaScript course on Udemy.

## Author

- V. Tickner
