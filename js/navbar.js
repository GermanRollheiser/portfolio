const nav = document.querySelector('.nav');
const header = document.querySelector(".header");

    window.addEventListener('scroll', function() {
        nav.classList.toggle('active', this.window.scrollY > 0)
        header.classList.toggle('active', this.window.scrollY > 0)
    })