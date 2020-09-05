const toggle = document.getElementById('toggle');

const nav = document.getElementById('main-nav');


toggle.addEventListener('click', () =>
document.body.classList.toggle('show-nav')
);

nav.addEventListener('click', () => document.body.classList.remove('show-nav')
);