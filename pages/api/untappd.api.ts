import {BreweryItem, data } from "@model/index";


class UntappdAPI {

  public fetchMenuItems(): Promise<BreweryItem[]> {
    return Promise.resolve(data.ITEMS);
  }

}

export const untappdAPI: UntappdAPI = new UntappdAPI();