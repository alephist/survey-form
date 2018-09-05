// Variables
let surveyForm = document.querySelector('.form__inner');
let inputs = document.querySelectorAll('.form__input');
let ratings = document.getElementsByName('rating');
let preferences = document.getElementsByName('preference');

// Reset all form data
const formReset = () => {
  inputs.forEach((input) => {
    input.value = '';
  });

  ratings.forEach((rating) => {
    rating.checked = false;
  });

  preferences.forEach((preference) => {
    preference.checked = false;
  });
};

// Add events
surveyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formReset();
  alert('Thank you for your feedback!');
});

window.addEventListener('beforeunload', formReset);
