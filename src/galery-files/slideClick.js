import { loadMainImage } from "./loadMainImage";
import dataPhotos from "../data/dataPhotos";

const slideClick = (event) => {
    let name, description, src;
    const galery = document.getElementById('galeria');
    const activeCategory = galery.dataset.category;
    const photographys = dataPhotos.photos[activeCategory];
    const identifier = parseInt(event.target.dataset.id);

    photographys.forEach((photo) => {
        if (photo.id === identifier) {
            name = photo.name;
            description = photo.description;
            src = photo.source;
        }
    });

    loadMainImage(identifier, name, src, description);
}

export default slideClick;