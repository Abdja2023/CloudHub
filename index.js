//---------------Main part Selector---------------------
const body = document.querySelector("body");
const aside = document.querySelector("aside");
const share = document.querySelector(".share");
const feedback = document.querySelector(".feedback");
//-------------Other Parts Selector-------------------
const responsiveBtn = document.querySelector(".responsive-btn");
const closeBtn = document.querySelector(".close-aside");
const navSubMenu = document.querySelector("nav .products-submenu");
const asideSubMenu = document.querySelector("aside .products-submenu");
const navProductsBtn = document.getElementById("nav-products");
const asideProductsBtn = document.getElementById("aside-products");
//-------------- Aside Section----------------------

// Responsive
responsiveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aside.classList.toggle("aside-hidden");
  body.style.overflowY = [...aside.classList].join(" ").includes("aside-hidden")
    ? "visible"
    : "hidden";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aside.classList.add("aside-hidden");
  body.style.overflowY = [...aside.classList].join(" ").includes("aside-hidden")
    ? "visible"
    : "hidden";
});

// Submenu

asideProductsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const computedDisplay = window.getComputedStyle(asideSubMenu).display;
  asideSubMenu.style.display = computedDisplay != "flex" ? "flex" : "none";
});

//-------------- Aside Section----------------------

//-------------- Nav Section----------------------

navProductsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const computedDisplay = window.getComputedStyle(navSubMenu).display;
  navSubMenu.style.display = computedDisplay != "flex" ? "flex" : "none";
});

//-------------- Nav Section----------------------

//Observers Section ---------------------------------------------------------

//---------------------------------------------------------------------------------------
const shareFeedbackSection = document.querySelector(".share-feedback");
const shareContainer = document.querySelector(".share-container");
const feedbackContainer = document.querySelector(".feedback-container");
//---------------------------------------------------------------------------------------
const featuresSection = document.querySelector(".features");
const featuresH2 = document.querySelector(".features-title h2");
const featuresH5 = document.querySelector(".features-title h5");
const cloudmainContent = document.querySelector(".cloudhub-main .content");
const featureCards = [
  ...document.querySelectorAll(".features-container .feature-card"),
];
//---------------------------------------------------------------------------------------

const progress = document.querySelector(".progress");
const progressH2 = document.querySelector(".progress > h2");
const projectsCard = document.querySelector(".progress .projects");
const memberCard = document.querySelector(".progress .member");

//---------------------------------------------------------------------------------------

const lovedBy = document.querySelector(".loved-by");
const lovedByH2 = document.querySelector(".loved-by > h2");
const lovedByCollection = document.querySelector(".loved-by .collection");

//---------------------------------------------------------------------------------------
const testimonialsCards = [
  ...document.querySelectorAll(".testimonials .test-card"),
];
//---------------------------------------------------------------------------------------
const keep = document.querySelector(".keep");
const keepH3 = document.querySelector(".keep h3");
const keepIllustration = document.querySelector(".keep img:last-child");
const keepBtn = document.querySelector(".keep a");
//---------------------------------------------------------------------------------------
const requestDemo = document.querySelector(".request-demo");
//---------------------------------------------------------------------------------------
console.log(featureCards);
function observerFunction(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const classname = [...entry.target.classList].at(0);
      if (entry.intersectionRatio >= 0.6) {
        classname?.includes("share")
          ? shareContainer.classList.add("share-feedback-container-active")
          : feedbackContainer.classList.add("share-feedback-container-active");
        switch (classname) {
          case "features":
            cloudmainContent.classList.add("cloudhub-content-active");
            break;
          case "feature-card":
            featureCards.at(0).classList.add("feature-card-active");
            featureCards.at(1).classList.add("feature-card-active");
            featureCards.at(2).classList.add("feature-card-active");
            break;
          case "test-card":
            testimonialsCards.at(1).classList.add("test-card-active");
            break;
          case "loved-by":
            lovedByCollection.classList.add("collection-active");
            break;
          case "keep":
            keepIllustration.classList.add("illustration-active");
            break;
          case "request-demo":
            requestDemo.classList.add("request-demo-active");
            break;
        }
      } else if (entry.intersectionRatio >= 0.3) {
        classname?.includes("share")
          ? share.classList.add("share-feedback-active")
          : feedback.classList.add("share-feedback-active");
        switch (classname) {
          case "features":
            featuresH5.classList.add("features-title-h2-h5-active");
            featuresH2.classList.add("features-title-h2-h5-active");
            break;
          case "progress":
            progressH2.classList.add("progress-h2-active");
            break;
          case "projects":
            projectsCard.classList.add("divs-active");
            break;
          case "member":
            memberCard.classList.add("divs-active");
            break;
          case "test-card":
            testimonialsCards.at(0).classList.add("test-card-active");
            break;
          case "loved-by":
            lovedByH2.classList.add("lovedBy-h2-active");
            break;
          case "keep":
            keepH3.classList.add("h3-active");
            keepBtn.style.transform = "scale(1)";
            break;
        }
      }
    }
  });
}

const observer = new IntersectionObserver(observerFunction, {
  root: null,
  threshold: [0.3, 0.6],
});

observer.observe(share);
observer.observe(feedback);
observer.observe(featuresSection);
observer.observe(cloudmainContent);
featureCards.forEach((card) => observer.observe(card));
observer.observe(progress);
observer.observe(projectsCard);
observer.observe(memberCard);
observer.observe(lovedBy);
observer.observe(lovedByCollection);
testimonialsCards.forEach((card) => observer.observe(card));
observer.observe(keep);
observer.observe(requestDemo);
//Observers Section ---------------------------------------------------------

//darkMode

function isDarkModeEnabled() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

if (isDarkModeEnabled()) {
  // Dark mode is enabled
  console.log("Dark mode is active");
} else {
  // Dark mode is not enabled
  console.log("Dark mode is not active");
}
