const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  //   primaryNav.classList.toggle("opened");
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});

let myCarousel = document.querySelector("#carouselExampleAutoplaying");
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Set the interval to 3 seconds
  ride: "carousel", // Enable autoplay
});
