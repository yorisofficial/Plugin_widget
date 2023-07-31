const btnNavigation = document.querySelector('#btn-nav');
const itemsNavigation = document.querySelector('.items-nav');
const ctaNavigation = document.querySelector('.cta-nav');

function active() {
    const itemsNavigation = document.querySelector('.items-nav');
    const ctaNavigation = document.querySelector('.cta-nav');

    itemsNavigation.classList.toggle('hidden');
    ctaNavigation.classList.toggle('hidden');
}

// event scroll windows
window.addEventListener('scroll', () => {
    const { scrollTop } = document.documentElement;

    const navbar = document.getElementById('navigations');
    const navbarSticky = document.getElementById('navbarSticky');
    if (scrollTop > 0) {
        navbar.classList.add('bg-slate-800', 'bg-opacity-75', 'fixed', 'backdrop-blur-md');
        navbar.classList.remove('stiky', 'bg-transparent');
        navbarSticky.classList.add('hidden');
    } else {
        navbar.classList.remove('bg-slate-800', 'bg-opacity-75', 'fixed', 'backdrop-blur-md');
        navbarSticky.classList.remove('hidden');
    }
});

