import typewriter from "/src/scripts/functions/typewriter.js"; //Importar la funcion de typewriter

document.addEventListener("DOMContentLoaded", () => { // Esperar que todo el documento html este cargado
    typewriter(); //Llamar a la funcion

    /* 
    Obtener los contenedores de las secciones, botones del 
    navbar flotante y el icono de terminal
    */
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".navItem");
    const icons = document.querySelectorAll(".ti-terminal");

    /*
    Crear funcion de flecha para pasar por cada uno de los iconos
    y ponerlos ocultos y mostrar el solo el pasamado como 
    parametro
    */
    const setActiveIcon = (index) => {
        icons.forEach((icon) => icon.classList.add("invisible"));
        icons[index].classList.remove("invisible");
    };

    /*
    Agregar un evento 'scroll' a la pantalla
    - Obtener la mitad de la pantalla
    - Por cada seccion verificar si esta ocupando la mitad o mas 
    de la mitad de la pantalla
    - Si se cumple la condicion anterior se llamara la funcion 
    de flecha para mostrar el icono de terminal
    */
    window.addEventListener("scroll", () => {
        const midScreen = window.innerHeight / 2;

        sections.forEach((section, index) => {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= midScreen && bottom >= midScreen) {
                setActiveIcon(index);
            }
        });
    });

    /*
    Por cada boton/item del navbar agregarle el evento de click 
    que llamara la funcion de flecha para mostrar el icono de 
    terminal
    */
    navItems.forEach((item, index) => {
        item.addEventListener("click", () => setActiveIcon(index));
    });


    const skillsCategories = document.querySelectorAll(".skillCategory");
    const categoryContainer = document.querySelectorAll(
        ".skillCategoryContent"
    );

    skillsCategories.forEach((category, index) => {
        category.addEventListener('click', () => {
            skillsCategories.forEach(category => {
                category.classList.remove('selected');
            })
            category.classList.add("selected");
            categoryContainer.forEach((container) => {
                container.classList.add('hidden');
            })
            categoryContainer[index].classList.remove("hidden");
        })
    })
});
