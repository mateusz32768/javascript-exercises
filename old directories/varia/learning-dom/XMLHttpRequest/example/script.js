function request(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (function (myxhr) {
    return function () {
      if (myxhr.redyState === 4 && myxhr.status === 200) {
        callback(myxhr);
      }
    };
  })(xhr);

  xhr.open('GET', url, true);
  xhr.send('');
}

// var btnStar = document.getElementById('btnStart');

// btnStar.addEventListener('click', function (e) {
//   request('http://programowanie.raubuc.net/examples/content.html', function (o) {
//     document.getElementById('html').innerHTML = o.responseText;
//     console.log('Klik')
//   });
// });

request('http://programowanie.raubuc.net/examples/content.html', function (o) {
  document.getElementById('html').innerHTML = o.responseText;
  console.log('Klik')
});

request('http://programowanie.raubuc.net/examples/content.txt', function (o) {
  document.getElementById('text').innerHTML = o.responseText;
  console.log('Klik')
});


