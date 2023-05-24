//registration
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
})

//Перевірка
let form = document.forms['reg'];
function check (e) {
    let res1 = isemail();
    let res2 = ispass();
    let errors = [res1, res2].filter(e => e);
    document.getElementById('error').innerHTML = errors.join('<br>');
    if (M == true && P == true){
        document.getElementById('error').style.color = 'rgba(0, 204, 0, 0.6)';
        document.getElementById('error').innerHTML = 'Аккаунт створено.';
    } else {
        document.getElementById('error').style.color = 'rgba(255, 0, 0, 0.6)';
    }
}

function isemail () {
    let email = form.mail.value;
    let emailRegular = /[a-zA-Z0-9@.]/;

    if (!emailRegular.test(email)) {
        M = false;
        return 'E-mail адресса не корректна.'
    } else {
        M = true;
    }
}

function ispass () {
    let pas = form.pas.value;
    let pasRegular = /^[A-Za-z\d]*$/;

    if (!pasRegular.test(pas)) {
        P = false;
        return 'В паролі використанно недопустимі символи.';
    } else if (pas.length < 8) {
        P = false;
        return 'Пароль повинен бути не менше 8 символів.';
    } else {
        P = true;
    }
}

//slider
const slider = document.querySelector('.slider');
const sliderImg = document.querySelectorAll('.slider_img');
const sliderLine = document.querySelector('.slider_line');

const sliderNext = document.querySelector('.slider_next')
const sliderPrev = document.querySelector('.slider_prev')

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderNext.addEventListener('click', nextSlider);

sliderPrev.addEventListener('click', prevSlider);

function nextSlider () {
    sliderCount++;

    if (sliderCount >= sliderImg.length) {
        sliderCount = 0;
    }

    rollSlide();
}

function prevSlider () {
    sliderCount--;

    if(sliderCount < 0) {
        sliderCount = sliderImg.length -1;
    }

    rollSlide();
}

function rollSlide () {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

setInterval( () => {
    nextSlider()
}, 5000);

//order
const openOrder = document.getElementById('order');
const closeOrder = document.getElementById('order_close');
const order = document.getElementById('order_w');

openOrder.addEventListener('click', function(e){
    e.preventDefault();
    order.classList.add('active');
})

closeOrder.addEventListener('click', () =>{
    order.classList.remove('active');
})