import {Offer} from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    id,
    title,
    type,
    price,
    previewImage,
    cityName,
    cityLatitude,
    cityLongitude,
    cityZoom,
    locationLatitude,
    locationLongitude,
    locationZoom,
    isFavorite,
    isPremium,
    rating,
  ] = offerData.replace('\n', '').split('\t');

  return {
    id,
    title,
    type,
    price: Number.parseInt(price, 10),
    previewImage,
    city: {
      name: cityName,
      location: {
        latitude: Number.parseFloat(cityLatitude),
        longitude: Number.parseFloat(cityLongitude),
        zoom: Number.parseInt(cityZoom, 10),
      },
    },
    location: {
      latitude: Number.parseFloat(locationLatitude),
      longitude: Number.parseFloat(locationLongitude),
      zoom: Number.parseInt(locationZoom, 10),
    },
    isFavorite: isFavorite === 'true',
    isPremium: isPremium === 'true',
    rating: Number.parseFloat(rating),
  };
}
