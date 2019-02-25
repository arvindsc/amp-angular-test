import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as products from '../assets/data/products.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {products};
  }
}
