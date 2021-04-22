var table = document.querySelector('table')

table.addEventListener('dblclick', event => {
    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
})