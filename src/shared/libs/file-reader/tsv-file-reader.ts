import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import {Offer} from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([id, title, type, price, previewImage, cityName, cityLatitude, cityLongitude, cityZoom, locationLatitude, locationLongitude, locationZoom, isFavorite, isPremium, rating]) => ({
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
            zoom: Number.parseFloat(cityZoom),
          }
        },
        location: {
          latitude: Number.parseFloat(locationLatitude),
          longitude: Number.parseFloat(locationLongitude),
          zoom: Number.parseFloat(locationZoom),
        },
        isFavorite: isFavorite === 'true',
        isPremium: isPremium === 'true',
        rating: Number.parseFloat(rating),
      }));
  }
}
