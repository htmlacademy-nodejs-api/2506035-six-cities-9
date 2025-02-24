import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { getRandomItem } from '../../helpers/index.js';

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const id = getRandomItem<string>(this.mockData.id);
    const title = getRandomItem<string>(this.mockData.title);
    const type = getRandomItem<string>(this.mockData.type);
    const price = getRandomItem<number>(this.mockData.price);
    const previewImage = getRandomItem<string>(this.mockData.previewImage);
    const cityName = getRandomItem<string>(this.mockData.cityName);
    const cityLatitude = getRandomItem<number>(this.mockData.cityLatitude);
    const cityLongitude = getRandomItem<number>(this.mockData.cityLongitude);
    const cityZoom = getRandomItem<number>(this.mockData.cityZoom);
    const locationLatitude = getRandomItem<number>(this.mockData.locationLatitude);
    const locationLongitude = getRandomItem<number>(this.mockData.locationLongitude);
    const locationZoom = getRandomItem<number>(this.mockData.locationZoom);
    const isFavorite = getRandomItem<boolean>(this.mockData.isFavorite);
    const isPremium = getRandomItem<boolean>(this.mockData.isPremium);
    const rating = getRandomItem<number>(this.mockData.rating);

    return [
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
    ].join('\t');
  }
}
