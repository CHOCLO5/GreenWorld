function scrollToElement(elementSelector, instance = 0){
    // Selecciona todos los elementos que coincidan con el selector dado
    const elements = document.querySelectorAll(elementSelector);
    //Comprueba si hay elementos que coinciden con el selector y si existe la instancia solicitada
    if(elements.length >  instance){
        //Desplazarse hasta la instancia especificada del elemento
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    //Scrollea hasta el segundo elemento con la clase "header"
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('footer');
});