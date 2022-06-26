// *******JavaScript for Mobile Menu******
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const menuX = document.querySelector('#menu-x');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  menuX.classList.toggle('active');
});

navLink.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// *******JavaScript for DOM Elements******
const worksDetails = [
  {
    tonic: 'Tonic',
    experience: { canopy: 'CANOPY', backEnd: 'Back End Dev', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio1.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    tonic: 'Multi-Post Stories',
    experience: { canopy: 'Facebook', backEnd: 'Full Stack Dev', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio2.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    tonic: 'Facebook 360',
    experience: { canopy: 'Facebook', backEnd: 'Full Stack Dev', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio3.png',
    description: 'Exploring the future of media in Facebook first Virtual Reality app. A place to discover and enjoy 360 photos and videos on Gear.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
  {
    tonic: 'Uber Navigations',
    experience: { canopy: 'Uber', backEnd: 'Lead Developer', year: 2015 },
    snapshot: 'images/Snapshoot-Portfolio4.png',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: { css: 'css', html: 'html', js: 'JavaScript' },
    button: 'See Project',
  },
];

const detailsContainer = document.querySelector('#details-container');
worksDetails.forEach((detail) => {
  const cardDetails = document.createElement('div');
  cardDetails.classList.add('cardDetails');
  cardDetails.innerHTML = `
  <div class="details">
    <img class="snapshot" src=${detail.snapshot} alt="${detail.tonic}">
    
    <div class="works-skills">
        <h3 class="tonic">${detail.tonic}</h3>
        <ul class="experience-bx">
            <li class="canopy">${detail.experience.canopy}</li>
            <li class="back-end">${detail.experience.backEnd}</li>
            <li class="year">${detail.experience.year}</li>
        </ul>
        <p class="descriptive-paragraph">${detail.description}</p>
        <ul class="languages">
            <li class="html-language">${detail.languages.html}</li>
            <li class="css-language">${detail.languages.css}</li>
            <li class="JavaScript-language">${detail.languages.js}</li>
        </ul>
        <div class="project-btn">
            <button class="details-button" type="button">${detail.button}</button>
        </div>  
    </div>
  </div>
  `;

  detailsContainer.appendChild(cardDetails);
});

// *******JavaScript for Popup Window******

const detailsBtn = document.querySelectorAll('.details-button');
const popupDetails = document.querySelector('.popup-details');
const cancelX = document.querySelector('#cancel-X');

detailsBtn.forEach((n) => n.addEventListener('click', () => {
  n.classList.toggle('active');
  popupDetails.classList.toggle('active');
}));

cancelX.addEventListener('click', () => {
  popupDetails.classList.remove('active');
});

// *******************JavaScript for form validation******************

const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const isLowerCase = (string) => string === string.toLowerCase();

form.addEventListener('submit', (event) => {
  const messages = [];
  if (!isLowerCase(email.value)) {
    e.preventDefault();
    messages.push('Please use the lowercase letters and proper pattern for your email');
    errorElement.innerText = messages.join(', ');
  }
});

// *******************JavaScript for form Local Storage******************

let nameFieldInput = document.getElementById('name');
let emailFieldInput = document.getElementById('email');
let textAreaFieldInput = document.getElementById('text-area');

let formInfo = JSON.parse(localStorage.getItem('formInfo'));

nameFieldInput.value = formInfo.nameField;
emailFieldInput.value = formInfo.emailField;
textAreaFieldInput.value = formInfo.textAreaField;

document.getElementById('form').addEventListener('submit', () => {
// e.preventDefault();

let nameField = nameFieldInput.value.trim();
let emailField = emailFieldInput.value.trim();
let textAreaField = textAreaFieldInput.value.trim();

// check the validity of the form values

if(!emailField || emailField || textAreaField) {
  return;
}

// store data in the local storage
formInfo = {
  nameField: nameField,
  emailField: emailField,
  textAreaField: textAreaField
};
localStorage.setItem('formInfo', JSON.stringify(formInfo));


});