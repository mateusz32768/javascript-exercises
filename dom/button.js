function openAlert() {
  const superBtn = createButton();
  superBtn.addEventListener('click', () => {
    alert('super');
  });
}

function createButton() {
  const superBtn = document.createElement('button');
  document.appendChild(superBtn);
  superBtn.setAttribute('id', 'super-button');
  superBtn.innerText = 'Super';

  return superBtn;
}