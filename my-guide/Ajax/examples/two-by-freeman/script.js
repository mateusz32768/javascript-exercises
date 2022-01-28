const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', (e) => {
    const httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = (e) => {
      if (e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200) {
        document.getElementById('target').innerHTML = e.target.responseText;
      }
    };

    httpRequest.open('GET', e.target.innerHTML + '.html');
    httpRequest.send();

  });
}
