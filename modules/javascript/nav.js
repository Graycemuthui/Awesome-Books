import { selectors } from "./selectors.js";

// Function to show a section and hide other sections.
export let showSection = (e, sectionId) => {
  e.preventDefault();
  const target = document.getElementById(sectionId);
  const targetClasses = target.classList;
  targetClasses.add("show");

  switch (sectionId) {
    case "lists":
      // Show lists section and hide the others
      selectors.listSection.classList.remove("hide");
      selectors.addSection.classList.add("hide");
      selectors.addSection.classList.remove("show");
      selectors.contactSection.classList.add("hide");
      selectors.contactSection.classList.remove("show");
      break;
    case "add-book":
      // Show add book section and hide the others
      selectors.addSection.classList.remove("hide");
      selectors.listSection.classList.add("hide");
      selectors.listSection.classList.remove("show");
      selectors.contactSection.classList.add("hide");
      selectors.contactSection.classList.remove("show");
      break;
    case "contact-section":
      // Show contact section and hide the others
      selectors.contactSection.classList.remove("hide");
      selectors.listSection.classList.add("hide");
      selectors.listSection.classList.remove("show");
      selectors.addSection.classList.add("hide");
      selectors.addSection.classList.remove("show");
      break;
    default:
  }
};
