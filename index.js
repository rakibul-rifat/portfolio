const navbarToggler = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('hidden'); // Toggle the visibility of the menu
});

    var options = {
      // delay the animation sequence until '100' pixels have come into view
      animateThreshold: 100,
  // The frequency of which the user scrolling is 'tested'.
 scrollPollInterval: 20
  }
  $('.aniview').AniView(options);
let progress = 0;
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const loadingInterval = setInterval(() => {
  progress += Math.floor(Math.random() * 10) + 5; // Increase faster

  if (progress > 100) progress = 100;

  gsap.to(progressBar, {
    width: `${progress}%`,
    duration: 0.2,
    ease: "power1.out"
  });

  progressText.textContent = `${progress}%`;

  if (progress >= 100) {
    clearInterval(loadingInterval);

    gsap.to("#loader-wrapper", {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        document.getElementById("loader-wrapper").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");

        gsap.from("#main-content h1", {
          y: 50,
          opacity: 0,
          duration: 1
        });
      }
    });
  }
}, 75); // Half delay = double speed
