const fullDate = new Date();
const todayYear = fullDate.getFullYear();

document.getElementById("year").innerText = todayYear;

// Select all elements with the class 'animate-on-scroll'
const elements = document.querySelectorAll(".animate-on-scroll");
// Select the element
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Uncomment below if you want the animation to run only once
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

// Observe each element
elements.forEach((element) => {
  observer.observe(element);
});
