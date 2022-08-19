import {HousingType, OffersType} from '../types/offers';

export const offers: OffersType = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The\n' +
      '                      building is green and from 18th century.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: [
      '/img/room.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
      '/img/studio-01.jpg'
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    maxAdults: 4,
    previewImage: '/img/apartment-01.jpg',
    price: 120,
    rating: 4.2,
    title: 'Beautiful & luxurious studio at great location',
    type: HousingType.Apartment
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ' +
      'The building is green and from 18th century.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen'
    ],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina'
    },
    id: 2,
    images: [
      '/img/room.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      'latitude': 52.369553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    maxAdults: 4,
    previewImage: '/img/room.jpg',
    price: 80,
    rating: 4.5,
    title: 'Wood and stone place',
    type: HousingType.Private_room
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ' +
      'The building is green and from 18th century.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels'
    ],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina'
    },
    id: 3,
    images: [
      '/img/room.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
      '/img/studio-01.jpg'
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8
    },
    maxAdults: 2,
    previewImage: '/img/apartment-02.jpg',
    price: 132,
    rating: 4.0,
    title: 'Canal View Prinsengracht',
    type: HousingType.Apartment
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ' +
      'The building is green and from 18th century.',
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels'
    ],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina'
    },
    id: 4,
    images: [
      '/img/room.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
      '/img/studio-01.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    maxAdults: 3,
    previewImage: '/img/apartment-03.jpg',
    price: 132,
    rating: 4.0,
    title: 'Nice, cozy, warm big bed apartment',
    type: HousingType.Apartment
  },
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    previewImage: 'https://10.react.pages.academy/static/hotel/10.jpg',
    images: [
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/18.jpg',
      'https://10.react.pages.academy/static/hotel/12.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg'
    ],
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: HousingType.Apartment,
    bedrooms: 1,
    maxAdults: 2,
    price: 166,
    goods: [
      'Breakfast',
      'Fridge',
      'Washer',
      'Towels',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    location: {
      latitude: 50.941361,
      longitude: 6.956974,
      zoom: 16
    },
    id: 61
  },
];
