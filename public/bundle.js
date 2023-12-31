'use strict';

var dataPhotos = {
    photos: {
        america: [
            {
                id: 1,
                name: 'America 1',
                description:
                    'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/1.jpg',
            },
            {
                id: 2,
                name: 'America 2',
                description:
                    'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/2.jpg',
            },
            {
                id: 3,
                name: 'America 3',
                description:
                    'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/3.jpg',
            },
            {
                id: 4,
                name: 'America 4',
                description:
                    'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/4.jpg',
            },
            {
                id: 5,
                name: 'America 5',
                description:
                    'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/5.jpg',
            },
            {
                id: 6,
                name: 'America 6',
                description:
                    'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/6.jpg',
            },
            {
                id: 7,
                name: 'America 7',
                description:
                    'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/7.jpg',
            },
            {
                id: 8,
                name: 'America 8',
                description:
                    'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/8.jpg',
            },
            {
                id: 9,
                name: 'America 9',
                description:
                    'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/9.jpg',
            },
            {
                id: 10,
                name: 'America 10',
                description:
                    'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/america/10.jpg',
            },
        ],
        europa: [
            {
                id: 11,
                name: 'Europa 1',
                description:
                    'Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/1.jpg',
            },
            {
                id: 12,
                name: 'Europa 2',
                description:
                    'Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/2.jpg',
            },
            {
                id: 13,
                name: 'Europa 3',
                description:
                    'Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/3.jpg',
            },
            {
                id: 14,
                name: 'Europa 4',
                description:
                    'Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/4.jpg',
            },
            {
                id: 15,
                name: 'Europa 5',
                description:
                    'Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/5.jpg',
            },
            {
                id: 16,
                name: 'Europa 6',
                description:
                    'Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/6.jpg',
            },
            {
                id: 17,
                name: 'Europa 7',
                description:
                    'Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/7.jpg',
            },
            {
                id: 18,
                name: 'Europa 8',
                description:
                    'Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/8.jpg',
            },
            {
                id: 19,
                name: 'Europa 9',
                description:
                    'Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/9.jpg',
            },
            {
                id: 20,
                name: 'Europa 10',
                description:
                    'Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/europa/10.jpg',
            },
        ],

        africa: [
            {
                id: 21,
                name: 'África 1',
                description:
                    'África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/1.jpg',
            },
            {
                id: 22,
                name: 'África 2',
                description:
                    'África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/2.jpg',
            },
            {
                id: 23,
                name: 'África 3',
                description:
                    'África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/3.jpg',
            },
            {
                id: 24,
                name: 'África 4',
                description:
                    'África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/4.jpg',
            },
            {
                id: 25,
                name: 'África 5',
                description:
                    'África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/5.jpg',
            },
            {
                id: 26,
                name: 'África 6',
                description:
                    'África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/6.jpg',
            },
            {
                id: 27,
                name: 'África 7',
                description:
                    'África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/7.jpg',
            },
            {
                id: 28,
                name: 'África 8',
                description:
                    'África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/8.jpg',
            },
            {
                id: 29,
                name: 'África 9',
                description:
                    'África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/9.jpg',
            },
            {
                id: 30,
                name: 'África 10',
                description:
                    'África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/africa/10.jpg',
            },
        ],
        asia: [
            {
                id: 31,
                name: 'Asia 1',
                description:
                    'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/1.jpg',
            },
            {
                id: 32,
                name: 'Asia 2',
                description:
                    'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/2.jpg',
            },
            {
                id: 33,
                name: 'Asia 3',
                description:
                    'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/3.jpg',
            },
            {
                id: 34,
                name: 'Asia 4',
                description:
                    'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/4.jpg',
            },
            {
                id: 35,
                name: 'Asia 5',
                description:
                    'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/5.jpg',
            },
            {
                id: 36,
                name: 'Asia 6',
                description:
                    'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/6.jpg',
            },
            {
                id: 37,
                name: 'Asia 7',
                description:
                    'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/7.jpg',
            },
            {
                id: 38,
                name: 'Asia 8',
                description:
                    'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/8.jpg',
            },
            {
                id: 39,
                name: 'Asia 9',
                description:
                    'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/9.jpg',
            },
            {
                id: 40,
                name: 'Asia 10',
                description:
                    'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/asia/10.jpg',
            },
        ],
        oceania: [
            {
                id: 41,
                name: 'Oceania 1',
                description:
                    'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/1.jpg',
            },
            {
                id: 42,
                name: 'Oceania 2',
                description:
                    'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/2.jpg',
            },
            {
                id: 43,
                name: 'Oceania 3',
                description:
                    'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/3.jpg',
            },
            {
                id: 44,
                name: 'Oceania 4',
                description:
                    'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/4.jpg',
            },
            {
                id: 45,
                name: 'Oceania 5',
                description:
                    'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/5.jpg',
            },
            {
                id: 46,
                name: 'Oceania 6',
                description:
                    'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/6.jpg',
            },
            {
                id: 47,
                name: 'Oceania 7',
                description:
                    'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/7.jpg',
            },
            {
                id: 48,
                name: 'Oceania 8',
                description:
                    'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/8.jpg',
            },
            {
                id: 49,
                name: 'Oceania 9',
                description:
                    'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/9.jpg',
            },
            {
                id: 50,
                name: 'Oceania 10',
                description:
                    'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/oceania/10.jpg',
            },
        ],
        antartida: [
            {
                id: 51,
                name: 'Antártida 1',
                description:
                    'Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/1.jpg',
            },
            {
                id: 52,
                name: 'Antártida 2',
                description:
                    'Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/2.jpg',
            },
            {
                id: 53,
                name: 'Antártida 3',
                description:
                    'Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/3.jpg',
            },
            {
                id: 54,
                name: 'Antártida 4',
                description:
                    'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/4.jpg',
            },
            {
                id: 55,
                name: 'Antártida 5',
                description:
                    'Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/5.jpg',
            },
            {
                id: 56,
                name: 'Antártida 6',
                description:
                    'Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/6.jpg',
            },
            {
                id: 57,
                name: 'Antártida 7',
                description:
                    'Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/7.jpg',
            },
            {
                id: 58,
                name: 'Antártida 8',
                description:
                    'Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/8.jpg',
            },
            {
                id: 59,
                name: 'Antártida 9',
                description:
                    'Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
                source: './img/antartida/9.jpg',
            },
        ],
    },
};

const { photos } = dataPhotos;

var dataCategories = {
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
};

const { categories } = dataCategories;

const categoryContainer$1 = document.getElementById('categorias'); //Agregar las categorias dinamicamente.

categories.forEach((category) => {
    const newCategory = document.createElement('a');
    const templateCategory = `<img class="categoria__img" src="${category.coverImage}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${category.name}</p>
        <p class="categoria__numero-fotos">${category.photoNumber} Fotos </p>
    </div>`;

    newCategory.innerHTML = templateCategory; //Dentro del hiperviculo que acabo de crear agrego la informacion de esa categoria.
    newCategory.classList.add('categoria');
    newCategory.href = '#';
    newCategory.dataset.category = category.id;

    categoryContainer$1.append(newCategory);
});

const galery$4 = document.getElementById('galeria');

const loadMainImage = (id, name, source, description) => {
    galery$4.querySelector('.galeria__imagen').src = source;
    galery$4.querySelector('.galeria__imagen').dataset.id = id;
    galery$4.querySelector('.galeria__titulo').innerText = name;
    galery$4.querySelector('.galeria__descripcion-imagen-activa').innerText = description;

    const activeCategory = galery$4.dataset.category;
    const photographys = dataPhotos.photos[activeCategory];

    let indexActiveImage;

    photographys.forEach((photo, index) => {
        if (photo.id === id) {
            indexActiveImage = index;
        }
    });

    if (galery$4.querySelectorAll('.galeria__carousel-slide').length > 0) {
        galery$4.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        galery$4.querySelectorAll('.galeria__carousel-slide')[indexActiveImage].classList.add('galeria__carousel-slide--active');
    }
};

const loadImageDirection = (direction) => {
    const activeCategory = galery$4.dataset.category;
    const photographys = dataPhotos.photos[activeCategory];
    let indexActiveImage;
    const idActiveImage = parseInt(galery$4.querySelector('.galeria__imagen').dataset.id);

    photographys.forEach((photo, index) => {
        if (photo.id === idActiveImage) {
            indexActiveImage = index;
        }
    });

    if (direction === 'next') {
        if (photographys[indexActiveImage + 1]) {
            const { id, name, description, source } = photographys[indexActiveImage + 1];
            loadMainImage(id, name, source, description);
        } else {
            alert('No hay más fotos para mostrar, está es la ultima foto');
        }
    } else if (direction === 'former') {
        if (photographys[indexActiveImage - 1]) {
            const { id, name, description, source } = photographys[indexActiveImage - 1];
            loadMainImage(id, name, source, description);
        } else {
            alert('No hay más fotos para mostrar, está es la primera foto');
        }
    }

};

const galery$3 = document.getElementById('galeria');
const categoryContainer = document.getElementById('categorias');

categoryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.closest('a')) {
        galery$3.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const activeCategory = event.target.closest('a').dataset.category;
        galery$3.dataset.category = activeCategory;

        const photographys = dataPhotos.photos[activeCategory];
        const carrousel = document.querySelector('.galeria__carousel-slides');
        const { id, name, description, source } = photographys[0];
        loadMainImage(id, name, source, description);

        carrousel.innerHTML = '';

        photographys.forEach((photo) => {
            const slide = `
            <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${photo.source}" data-id="${photo.id}" alt="" />
        </a>
    `;

            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});

const galery$2 = document.getElementById('galeria');

const carrouselImageDirection = (direction) => {
    const slides = galery$2.querySelectorAll('.galeria__carousel-slide');

    const options = {
        root: galery$2.querySelector('.galeria__carousel'),
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
                alert('No hay mas slides para mostrar, este es el primer slide del carrusel');
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
    });
};

const galery$1 = document.getElementById('galeria');

const closeGalery = () => {
    galery$1.classList.remove('galeria--active');
    document.body.style.overflow = '';
};

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
};

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
