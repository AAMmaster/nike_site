// let ali = document.getElementById('ali')
// let top_middle = document.getElementById('top_midle')
// ali.addEventListener("change",()=>{
//     top_middle.style.position =("sticky")
//     top_middle.style.top =("0px")

// })



let lastScrollTop = 0;
const topMidle = document.getElementById('top_midle');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        topMidle.style.top = '-200px'; // Adjust this value as needed
    } else {
        // Scrolling up
        topMidle.style.top = '0';
    }
    lastScrollTop = scrollTop;
});