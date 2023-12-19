const button = document.getElementById('magic-button');

button.addEventListener('click', () => {
  button.classList.add('active');
  alert('The magic happened!');
});
