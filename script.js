AOS.init()
/// Animate on Scroll




const hamburger = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const close__sidebar = document.querySelector('.close ')
const sidebar__wrapper = document.querySelector('.sidebar-wrapper');
const nav = document.querySelector('.nav-bar');


hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active-sidebar');
    sidebar__wrapper.classList.toggle('sidebar-wrapper-style');

})

close__sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active-sidebar')
    sidebar__wrapper.classList.toggle('sidebar-wrapper-style');

})

const ul = document.querySelectorAll('.sidebar .menu-sidebar li');

ul.forEach(list => {
    list.addEventListener('click', e => {
        if(e.target) {
            sidebar.classList.toggle('active-sidebar')
            sidebar__wrapper.classList.toggle('sidebar-wrapper-style');
        }
    })
})



const nav__name = document.querySelector('.nav-bar .logo a') 

nav__name.addEventListener('click', () => {
    sidebar.classList.remove('active-sidebar')
    sidebar__wrapper.classList.remove('sidebar-wrapper-style');
})



const mq = window.matchMedia("(max-width: 761px)");
mq.addEventListener("change", (e) => {
  if (e.matches) {
    sidebar.classList.remove('active-sidebar')
    sidebar__wrapper.classList.remove('sidebar-wrapper-style');
  } 
});
