document.addEventListener('DOMContentLoaded', function () {
    function clickBtn(event) {
        event.preventDefault()
        event.stopPropagation()
        const { type } = event
        const parentItem = this.parentElement

        const isSubContent = parentItem.querySelector('.dropdown-navbar-content')?.classList ? false : true
        if (isSubContent && type !== 'mouseover') {
            parentItem.querySelector('.dropdown-navbar-subcontent').classList.toggle('show')
            document.querySelectorAll('.dropdown-navbar-subcontent.show').forEach(function (menu) {
                if (menu !== parentItem.querySelector('.dropdown-navbar-subcontent')) {
                    menu.classList.remove('show')
                }
            })
        } else if (!isSubContent) {
            parentItem.querySelector('.dropdown-navbar-content').classList.toggle('show')
            parentItem.querySelector('.dropdown-navbar-icon').classList.toggle('turntop')
            document.querySelectorAll('.dropdown-navbar-content.show').forEach(function (menu) {
                if (menu !== parentItem.querySelector('.dropdown-navbar-content')) {
                    menu.classList.remove('show')
                }
            })
        }
    }

    document.querySelectorAll('.dropdown-navbar-btn').forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener('click', clickBtn)
        dropdownToggle.addEventListener('mouseover', clickBtn)
    })

    window.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown-navbar')) {
            document.querySelectorAll('.dropdown-navbar-content.show').forEach(function (menu) {
                menu.classList.toggle('show')
            })
            document.querySelectorAll('.dropdown-navbar-icon.turntop').forEach(function (menu) {
                menu.classList.toggle('turntop')
            })
            document.querySelectorAll('.dropdown-navbar-subcontent.show').forEach(function (menu) {
                menu.classList.toggle('show')
            })
        }
    })
})