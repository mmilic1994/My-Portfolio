document.addEventListener('DOMContentLoaded', () => {
  const current = document.getElementById('current-item'); current.addEventListener('click', function () {
    current.parentNode.classList.toggle('exp');
  });

  const menu = document.getElementById('menu');
  menu.addEventListener('mouseleave', function () {
    menu.classList.remove('exp');
  });

  let name = document.getElementById('name').value;
  window.addEventListener('load', () => {
    let message = document.querySelector('.thanks1');
    message.innerHTML = `<h2>Thank you ${name} for getting in touch!</h2>`;
  });
});

