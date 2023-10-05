import dataCategories from '../data/dataCategories';
const { categories } = dataCategories;

const categoryContainer = document.getElementById('categorias'); //Agregar las categorias dinamicamente.

categories.forEach((category) => {
    const newCategory = document.createElement('a');
    const templateCategory = `<img class="categoria__img" src="${category.coverImage}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${category.name}</p>
        <p class="categoria__numero-fotos">${category.photoNumber} Fotos </p>
    </div>`

    newCategory.innerHTML = templateCategory; //Dentro del hiperviculo que acabo de crear agrego la informacion de esa categoria.
    newCategory.classList.add('categoria');
    newCategory.href = '#';
    newCategory.dataset.category = category.id;

    categoryContainer.append(newCategory);
});

