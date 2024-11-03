const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let userInteracted = false;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = [
    {
        image: './assets/just relax classic.jpg',
        title: 'Basic Tee (White)',
        description: 'Description of product 1.'
    },
    {
        image: './assets/Just relax classic lightgreen.jpg',
        title: 'Basic Tee (Green)',
        description: 'Description of product 2.'
    },
    {
        image: './assets/omg JR classsic one.jpg',
        title: 'JR Tee (Black)',
        description: 'Description of product 3.'
    },
    {
        image: './assets/vertical wine not  verderosa.jpg',
        title: 'Wine Not (White/Green)',
        description: 'Description of product 4.'
    },
    {
        image: './assets/vertical wine not azulrosa.jpg',
        title: 'Wine Not (White/Blue)',
        description: 'Description of product 5.'
    },
    {
        image: './assets/basic-black.jpg',
        title: 'Basic Tee (Black)',
        description: 'Description of product 6.'
    }
    ,
    {
        image: './assets/tennis-cap.jpg',
        title: 'Tennis Cap (Denim)',
        description: 'Description of product 7.'
    }
    // Agregar mas productos aqui
];

let currentPosition = 0;

// Funcion para crear la Galeria de Productos
function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.style.left = '100%'; // posiciona el elemento inicialmente FUERA del container
    galleryItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="gallery-item-img">
        <div class="gallery-item-info">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="view-details">Ver Detalles</button>
        </div>
    `;
    return galleryItem;
}

function updateGallery() {
    galleryContainer.innerHTML = ''; // Limpiar elementos viejos

    // Crear y mostrar elementos segun posicion en el array
    for (let i = currentPosition; i < currentPosition + 3; i++) {
        const itemIndex = i % galleryItems.length; // loop infinito
        const galleryItem = createGalleryItem(galleryItems[itemIndex]);
        galleryContainer.appendChild(galleryItem);

        // Animacion de entrada
        setTimeout(() => {
            galleryItem.style.left = '0'; // Slide
        }, 100 * (i - currentPosition));
    }
    
    // Crear y mostrar flechas de navegacion para galeria
    const prevArrow = document.createElement('div');
    prevArrow.classList.add('gallery-nav', 'prev');
    prevArrow.innerHTML = '<i class="ri-arrow-left-s-line"></i>';
    prevArrow.addEventListener('click', previousSlide);
    galleryContainer.appendChild(prevArrow);

    const nextArrow = document.createElement('div');
    nextArrow.classList.add('gallery-nav', 'next');
    nextArrow.innerHTML = '<i class="ri-arrow-right-s-line"></i>';
    nextArrow.addEventListener('click', nextSlide);
    galleryContainer.appendChild(nextArrow);

    // Transicion automatica (opcional)
   // if (!userInteracted){
   //      setInterval(nextSlide, 4000); // cambio cada 4 segundos
   // };

    nextArrow.addEventListener("click", () => {
        !userInteracted 
        console.log("automatic slide is turned off")
    });
  
    
    prevArrow.addEventListener("click", () => {
        !userInteracted 
        console.log("automatic slide is turned off")
    });
}

// Setup inicial de galeria
updateGallery();

// Funcion para navegar hacia el siguiente slide
function nextSlide() {
    currentPosition++;
    updateGallery();
    if (currentPosition >= galleryItems.length) {
        currentPosition = 0;
    }
}

// Funcion para volver al anterior slide
function previousSlide() {
    currentPosition--;
    updateGallery();
    if (currentPosition < 0) {
        currentPosition = galleryItems.length - 1;
    }
}






