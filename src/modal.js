function openForm() {
  const openButton = document.getElementById('openButton');
  const form = document.getElementById('01');
  openButton.addEventListener('click', () => {
    form.style.display = 'block';
  });
}

function closeForm() {
  const closeButton = document.getElementById('closeButton');
  const form = document.getElementById('01');
  closeButton.addEventListener('click', () => {
    form.style.display = 'none';
  });
}

function outsideClick() {
  const form = document.getElementById('01');
  window.onclick = function (event) {
    if (event.target == form) {
      form.style.display = 'none';
    }
  };
}
function formControl() {
  openForm();
  closeForm();
  outsideClick();
}

export default formControl;
