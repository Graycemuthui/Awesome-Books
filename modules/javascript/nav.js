// Let's get the menu elements
const listElement = document.getElementById("list-menu");
const addElement = document.getElementById("add-menu");
const contactElement = document.getElementById("contact-menu");

// Let's get the sections elements
const listSection = document.getElementById("lists");
const addSection = document.getElementById("add-book");
const contactSection = document.getElementById("contact-section");

// Function to show a section and hide other sections.
function showSection(e, sectionId) {
  e.preventDefault();
  const target = document.getElementById(sectionId);
  const targetClasses = target.classList;
  targetClasses.add("show");

  switch (sectionId) {
    case "lists":
      // Show lists section and hide the others
      listSection.classList.remove("hide");
      addSection.classList.add("hide");
      addSection.classList.remove("show");
      contactSection.classList.add("hide");
      contactSection.classList.remove("show");
      break;
    case "add-book":
      // Show add book section and hide the others
      addSection.classList.remove("hide");
      listSection.classList.add("hide");
      listSection.classList.remove("show");
      contactSection.classList.add("hide");
      contactSection.classList.remove("show");
      break;
    case "contact-section":
      // Show contact section and hide the others
      contactSection.classList.remove("hide");
      listSection.classList.add("hide");
      listSection.classList.remove("show");
      addSection.classList.add("hide");
      addSection.classList.remove("show");
      break;
    default:
  }
}

// Event listener for list menu
listElement.addEventListener("click", (e) => {
  showSection(e, "lists");
});

// Event listener for add new menu
addElement.addEventListener("click", (e) => {
  showSection(e, "add-book");
});

// Event listener for contact menu
contactElement.addEventListener("click", (e) => {
  showSection(e, "contact-section");
});

const formatTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours %= 12;
  hours = hours || 12;
  minutes = minutes.toString().padStart(2, "0");
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};

// Sets date in page
function setDate() {
  // console.log(element.innerHTML);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const date = d.getDate();
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  const time = formatTime(d);

  const dateStr = `${month} ${date} ${year}, ${time}`;
  const element = document.getElementById("current-date");
  element.innerHTML = dateStr;
}

// Loads the date function
setDate();
