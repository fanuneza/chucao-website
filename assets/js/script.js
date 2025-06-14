const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.getElementById('navbar');
const icon = hamburgerBtn.querySelector('i');

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    const expanded = nav.classList.contains('active');
    hamburgerBtn.setAttribute('aria-expanded', expanded);
    if (expanded) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
    });
});