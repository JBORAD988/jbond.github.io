//improved code for dynamic title
let docTitle = document.title;
let alertShow = false;

window.addEventListener("blur", () => {
    document.title = "Hey! See You Soon :(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
    clearInterval(intervalId);
});

let intervalId = setInterval(() => {
    if (document.hasFocus()) {
        document.title = alertShow ? "JBond's Personal Portfolio" : "If you want to hire me, contact me!";
        alertShow = !alertShow;
    }
}, 3600);



// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Freelancer", "Bounty Hunter","Front-end Developer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Web Designer", "Freelancer", "Bounty Hunter","Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

//nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})



// Animated Cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {

    // cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;");
    cursor.setAttribute("style", "top: "+(e.pageY + 9)+"px; left: "+(e.pageX +9)+"px;");
    // cursor.setAttribute("style","top:"+e.pageY+"px; left:"+e.pageX+"px;");

})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

