let btn = document.querySelector('.submit');

btn.addEventListener('click', active);

function active() {
  btn.classList.toggle('is_active');
}
