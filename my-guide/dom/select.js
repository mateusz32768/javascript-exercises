function selectItem() {
  const quantityOfElementsOption = 3;
  const select = document.createElement('select');

  document.body.appendChild('select');
  select.setAttribute('id', 'level');

  let option;

  for (let i = 0; i < quantityOfElementsOption; i++) {
    option = document.createElement('option');
    select.appendChild('option');
    option.setAttribute('value', `${i}`);
  }

  option.addEventListener('change', () => {
    alert(option[value]);
  });
}

selectItem();
