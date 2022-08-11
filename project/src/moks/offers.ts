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
  }
];
