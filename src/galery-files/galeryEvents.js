import carrouselImageDirection from "./carrouselImageDirection";
import closeGalery from "./closeGalery";
import { loadImageDirection } from "./loadMainImage";
import slideClick from "./slideClick";

const galery = document.getElementById('galeria');

galery.addEventListener('click', (event) => {

    const button = event.target.closest('button');
    if (button?.dataset?.accion === 'cerrar-galeria') {
        closeGalery();
    }

    if (event.target.dataset.id) {
        slideClick(event);
    }

    if (button?.dataset?.accion === "siguiente-imagen") {
        loadImageDirection('next');
    } else if (button?.dataset?.accion === 'anterior-imagen') {
        loadImageDirection('former');
    }

    if (button?.dataset?.accion === "siguiente-slide") {
        carrouselImageDirection('next');
    } else if (button?.dataset?.accion === 'anterior-slide') {
        carrouselImageDirection('former');
    }
});

