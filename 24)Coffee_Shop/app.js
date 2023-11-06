let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toogle('shadow',window.scrollY > 0);
});

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}



// header.classList.toogle('shadow', window.scrollY > 0);: This line toggles the "shadow" class on the header element based on the condition window.scrollY > 0. If the user has scrolled down (i.e., the window.scrollY value is greater than 0), it adds the "shadow" class to the header. If the user scrolls back to the top (i.e., window.scrollY becomes 0), it removes the "shadow" class.

// In summary, this JavaScript code adds interactivity to a web page:
// It toggles the "active" class on a search box element when a search icon is clicked.
// It adds a "shadow" class to the header element when the user scrolls down the webpage and removes it when they scroll back to the top. This is often used to create visual effects, such as a shadow appearing on the header when the user scrolls down.



