let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let cheese = document.getElementById('cheese');
let cheese2 = document.getElementById('cheese2');
let cheese3 = document.getElementById('cheese3');
let cheese4 = document.getElementById('cheese4');
let cheese5 = document.getElementById('cheese5');
let x = document.getElementById('x');
let b = document.getElementById('b');
let namea = document.getElementById('name');
let pass = document.getElementById('pass');
let email = document.getElementById('email');
let s = document.getElementById('s');
let scrolls = document.getElementById('scroll');
let f = document.getElementById('1');
let f1 = document.getElementById('f2');
let f2 = document.getElementById('3');
let f3 = document.getElementById('4');

const body = document.querySelector('body')
let bodyheight = body.getBoundingClientRect().height
const footer = document.querySelector('footer')
let wh = window.innerHeight/1
let wh2 = window.innerHeight/2
let wh3 = window.innerHeight/3
let wh4 = window.innerHeight/4

menu.onclick = function () {
    burger.className = 'burgermeiser'
    cheese.className = 'shishka'
    cheese2.className = 'shishka'
    cheese3.className = 'shishka'
    cheese4.className = 'shishka'
    cheese5.className = 'shishka'
    x.className = 'x'
    burger.classList.add('active')
}
x.onclick = function () {
    burger.className = 'burgermeiser2'
    cheese.className = 'shishka2'
    cheese2.className = 'shishka2'
    cheese3.className = 'shishka2'
    cheese4.className = 'shishka2'
    cheese5.className = 'shishka2'
    x.className = 'x2'
    burger.classList.remove('active')
}

// форма



window.onscroll = function () {
    if (window.pageYOffset>wh) {
        footer.classList.add('s2')
        document.querySelector('section').style.opacity='1'
        console.log('asd')
    }
    else if (window.pageYOffset<wh) {
        footer.classList.remove('s2')
        document.querySelector('section').style.opacity='0'
    }

    else if (window.pageYOffset>wh2) {
        f1.classList.add('s2')
        document.querySelector('div').style.opacity='1'
        console.log('asd2')
    }
    else if (window.pageYOffset<wh) {
        f1.classList.remove('s2')
        document.querySelector('div').style.opacity='0'
    }
    
}

//cкролл

scrolls.onclick = function () {
    window.scrollTo({
        top: 0,behavior:"smooth"
    })
}






b.addEventListener('click', () => {
    console.log('click')
    console.log(pass.value)
    console.log(namea.value)
    console.log(email.value)
    if ( namea.value == 'vasya1'&& pass.value == '123'&& email.value == 'asd@gmail.com' ) {
        alert('вы прошли')
        s.className = ('s2')
    }
    else {
        alert('иди в пень')
    } 
})





