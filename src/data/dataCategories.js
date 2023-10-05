import data from '../data/dataPhotos';
const { photos } = data;

export default {
    categories: [
        { id: 'america', name: 'America', photoNumber: photos['america'].length, coverImage: './img/america.jpg' },
        { id: 'europa', name: 'Europa', photoNumber: photos['europa'].length, coverImage: './img/europa.jpg' },
        { id: 'africa', name: 'África', photoNumber: photos['africa'].length, coverImage: './img/africa.jpg' },
        { id: 'asia', name: 'Asia', photoNumber: photos['asia'].length, coverImage: './img/asia.jpg' },
        { id: 'oceania', name: 'Oceania', photoNumber: photos['oceania'].length, coverImage: './img/oceania.jpg' },
        {
            id: 'antartida',
            name: 'Antártida',
            numerophotos: photos['antartida'].length,
            coverImage: './img/antartida.jpg',
        },
    ],
}