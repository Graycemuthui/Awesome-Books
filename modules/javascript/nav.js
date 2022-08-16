import selectors from './selectors.js';


export default (e, sectionId) => {
  e.preventDefault();
  const target = document.getElementById(sectionId);
  const targetClasses = target.classList;
  targetClasses.add('show');

  switch (sectionId) {
    case 'lists':
      selectors.listSection.classList.remove('hide');
      selectors.addSection.classList.add('hide');
      selectors.addSection.classList.remove('show');
      selectors.contactSection.classList.add('hide');
      selectors.contactSection.classList.remove('show');
      break;
    case 'add-book':
      selectors.addSection.classList.remove('hide');
      selectors.listSection.classList.add('hide');
      selectors.listSection.classList.remove('show');
      selectors.contactSection.classList.add('hide');
      selectors.contactSection.classList.remove('show');
      break;
    case 'contact-section':
      selectors.contactSection.classList.remove('hide');
      selectors.listSection.classList.add('hide');
      selectors.listSection.classList.remove('show');
      selectors.addSection.classList.add('hide');
      selectors.addSection.classList.remove('show');
      break;
    default:
  }
};
