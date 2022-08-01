import {BreweryEvent, MenuItem} from "@model/index";
import {facebookAPI} from "./facebook.api";
import {untappdAPI} from "./untappd.api";


class JAKLService {

  public getSocialEvents():  Promise<BreweryEvent[]> {
    return facebookAPI.fetchEvents();
  }

  public getMenu(): Promise<MenuItem[]> {
    return untappdAPI.fetchMenuItems()
  }
}

export const jaklService: JAKLService = new JAKLService();