const galery = document.getElementById('galeria');

const carrouselImageDirection = (direction) => {
    const slides = galery.querySelectorAll('.galeria__carousel-slide');

    const options = {
        root: galery.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
        //return slide visibles.
        const slidesVisible = entries.filter((entry) => {
            if (entry.isIntersecting === true) {
                return entry
            }
        });

        if (direction === 'former') {
            const firstSlideVisible = slidesVisible[0];
            const indexFirstSlideVisible = entries.indexOf(firstSlideVisible);// I get the index of the first slide visible.        

            if (indexFirstSlideVisible >= 1) {
                entries[indexFirstSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            } else {
                alert('No hay mas slides para mostrar, este es el primer slide del carrusel')
            }

        } else if (direction === 'next') {
            const lastSlideVisible = slidesVisible[slidesVisible.length - 1];
            const indexLastSlideVisible = entries.indexOf(lastSlideVisible);

            if (entries.length - 1 > indexLastSlideVisible) {
                entries[indexLastSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            } else {
                alert('Lo sentimos, ya no hay mas imagenes disponibles para avanzar en el recorrido del carrusel');
            }
        }

        slides.forEach((slide) => {
            observer.unobserve(slide);
        });
    }, options);

    slides.forEach((slide) => {
        observer.observe(slide);
    })
};

export default carrouselImageDirection;