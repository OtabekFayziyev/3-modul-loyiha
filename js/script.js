document.addEventListener('DOMContentLoaded', () => {

    const tabheader__parent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        loader = document.querySelector('.loader')

// loader
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

})