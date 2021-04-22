var table = document.querySelector('table')

table.addEventListener('dblclick', event => {
    var alvoDoEvento = event.target //TD
    var paiDoAlvo = alvoDoEvento.parentNode //TR
    paiDoAlvo.remove()
})