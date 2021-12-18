fetch('https://api.github.com/users/marcocollander/repos')
.then(res => res.json())
.then(payload => console.log(payload));