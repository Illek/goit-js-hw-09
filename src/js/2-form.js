const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form > label > input');
const message = document.querySelector('.feedback-form > label > textarea');

form.addEventListener('input', () => {
  formData.email = email.value.trim();
  formData.message = message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert("Don't forget to fill in all required fields!");
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});

const formContent = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData !== null) {
    const data = JSON.parse(savedData);
    email.value = data.email;
    message.value = data.message;
    formData.email = data.email;
    formData.message = data.message;
  }
};

window.addEventListener('load', formContent);
