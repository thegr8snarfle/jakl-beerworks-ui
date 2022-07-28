import {Item} from './untappd.model';
import {ITEMS} from './data';

export class UntappdAPI {

  public fetchMenuItems(): Promise<Item[]> {
    return Promise.resolve(ITEMS);
  }

}

export const untappdAPI: UntappdAPI = new UntappdAPI();