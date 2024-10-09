let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinkAnchors = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinkAnchors.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

document.addEventListener('scroll', function () {
    const items = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line');
    const windowHeight = window.innerHeight;
    let activeItemCount = 0;

    items.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < windowHeight / 1.3) {
            item.classList.add('active');
            activeItemCount = index + 1;
        } else {
            item.classList.remove('active');
        }
    });

    const totalItems = items.length;
    const percentage = (activeItemCount / totalItems) * 100;
    timelineLine.style.height = `${percentage}%`;
});

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('header nav ul li a');

document.addEventListener('mousemove', (e) => {
    mouseCursor.style.left = `${e.pageX}px`;
    mouseCursor.style.top = `${e.pageY}px`;
});

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add("hovered-link");
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove("hovered-link");
    });
});
