const contents = document.querySelectorAll('.content')
//Esta contante guarda las imagenes con la clase content
const listItems = document.querySelectorAll('nav ul li')
//esta guarda todas las etiquetas nav ul li

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
    //los elementos dentro de lisrtItemes reaccionan al click
        hideAllContents()
        hideAllItems()
        //ejecutas las funciones para remover 

        item.classList.add('active')
        contents[index].classList.add('show')
        //el item de la lista que se la de click se la agrega active
        //y al siguiente ejemento en de la constante contents se le agrega el show
        //lo cual logra un cambio de imagen con opacidad
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
    //con este se remueve la clase show para reasiganar la
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
    //con este se remueve la clase active para reasiganar la
}

