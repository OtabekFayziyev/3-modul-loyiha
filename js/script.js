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


    // let deadline = '2023-11-29'

    // function getTimeRemaining(endTime) {
    //     let days, hours, minutes, seconds;
    //     constme) - Date.parse(new Date());   // Date.parse = sananing millisekundlarini chiqarib beradi timer = Date.parse(endTi
    //     if (timer <= 0) {
    //         days = 0,
    //             hours = 0,
    //             minutes = 0,
    //             seconds = 0
    //     } else {
    //         days = Math.floor(timer / (1000 * 60 * 60 * 24)),
    //             hours = Math.floor(timer / (1000 * 60 * 60) % 24),
    //             minutes = Math.floor(timer / (1000 * 60) % 60),
    //             seconds = Math.floor((timer / 1000) % 60)
    //     }


    //     return { timer, days, hours, minutes, seconds }
    // }

    // function getZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`
    //     } else {
    //         return num
    //     }
    // }

    // function setClock(selection, endTime) {
    //     const timer = document.querySelector(selection),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds')

    //     idInterval = setInterval(upDateClock, 1000);
    //     upDateClock()

    //     function upDateClock() {
    //         const t = getTimeRemaining(endTime)
    //         days.innerHTML = getZero(t.days)
    //         hours.innerHTML = getZero(t.hours)
    //         minutes.innerHTML = getZero(t.minutes)
    //         seconds.innerHTML = getZero(t.seconds)

    //         if (t.timer <= 0) {
    //             clearInterval(idInterval)
    //         }
    //     }
    // }

    // setClock('.timer', deadline)


})