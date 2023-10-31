`use strict';`
document.addEventListener('DOMContentLoaded', () => {

    const tabheader__parent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        loader = document.querySelector('.loader')

    // LOADER
    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 1000);
    }, 2000);

    //MAIN SECTION
    function hideHeaderItem() {
        tabsContent.forEach((item) => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')

        })

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showHeaderItem(i = 0) {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')

    }

    hideHeaderItem()
    showHeaderItem()

    tabheader__parent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hideHeaderItem()
                    showHeaderItem(idx)
                }
            })
        }
    })

    // TIMER

    let deadline = '2023-12-12'

    function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const timer = Date.parse(endTime) - Date.parse(new Date())
        if (timer <= 0) {
            days = 0,
                hours = 0,
                minutes = 0,
                seconds = 0
        } else {
            days = Math.floor(timer / (1000 * 60 * 60 * 24))
            hours = Math.floor(timer / (1000 * 60 * 60) % 24)
            minutes = Math.floor(timer / (1000 * 60) % 60)
            seconds = Math.floor((timer / 1000) % 60)
        }
        return {timer, days, hours, minutes, seconds }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        }else{
            return num
        }
    }

    function setClock(section, endTime) {
        const timer = document.querySelector(section)
        days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
        clockInterval = setInterval(upDateClock, 1000);
        upDateClock()

        function upDateClock() {
            const t = getTimeRemaining(endTime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.timer <= 0) {
                clearInterval(clockInterval)
            }
        }
    }

    setClock('.timer', deadline)

// M O D A L 

const allModals = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal'),
modalClsBtn = document.querySelector('[data-close]')

function showModal() {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    clearTimeout(modalTimerId)
}

function closeModal() {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

allModals.forEach(item => {
    item.addEventListener('click', showModal)
})

modalClsBtn.addEventListener('click', closeModal )

modal.addEventListener('click', (event)=>{
    if (event.target === modal) {
        closeModal()
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal()
    }
})

// const modalTimerId = setTimeout(showModal, 5000);


function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight 
        >= document.documentElement.scrollHeight) {
        showModal()
        window.removeEventListener('scroll', showModalByScroll)
    }
}

window.addEventListener('scroll', showModalByScroll)

//MENU ----- CLASS 

class MenuCard {
    constructor(scr, alt, title, disc, price, toParent, ...classes) {
        this.scr = scr;
        this.alt = alt;
        this.title = title;
        this.disc = disc;
        this.price = price;
        this.parent = document.querySelector(toParent);
        this.classes = classes;
        this.transfer = 12400;
        this.changeToUZS();
    }

    changeToUZS() {
        this.price = this.price * this.transfer;
    }

    runner() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            this.element = 'menu__item'
            element.classList.add(this.element)
        } else {
           this.classes.forEach((className) => element.classList.add(className));
        }


        element.innerHTML = `
            <img src="${this.scr}" alt="${this.alt}" />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.disc}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Price:</div>
                <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
            </div>
        `

        this.parent.append(element);
    }
}

new MenuCard('img/tabs/1.png', 'vegy', 'Plan "Usual"', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.', 5, '.menu .container').runner();

new MenuCard('img/tabs/2.jpg', 'elite', 'Plan "Premium"', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.', 15, '.menu .container', 'menu__item').runner();

new MenuCard('img/tabs/3.jpg', 'vip', 'Plan "VIP"', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.', 25, '.menu .container', 'menu__item').runner();








})


