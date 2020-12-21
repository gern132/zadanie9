const getTop = () => window.scrollY;
let strela = document.querySelector('.arrow');
let hide = document.querySelector('.arrow-hidden');
let check = 300;

const updateDashoffset = () => {};
window.addEventListener('scroll', () => {
    updateDashoffset();

if (getTop() > check) {
    hide.classList.remove('arrow-hidden')
}else {
    hide.classList.add('arrow-hidden')
}
});

strela.addEventListener('click' , strelaClick);

function strelaClick() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});    
}