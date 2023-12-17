document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', function (event) {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const parsedData = JSON.parse(savedFormData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    if (formData.email && formData.message) {
      console.log(formData);
    }

    localStorage.removeItem('feedback-form-state');
    form.reset();
  });
});
