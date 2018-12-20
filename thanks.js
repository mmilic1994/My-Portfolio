let name = document.getElementById('name').value;
  window.addEventListener('load', () => {
    let message = document.querySelector('.thanks1');
    message.innerHTML = `<h2>Thank you ${name} for getting in touch!</h2>`;
  });