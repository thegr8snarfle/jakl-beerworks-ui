import {BreweryEvent, MenuItem} from "@model/index";
import {facebookAPI} from "./facebook.api";
import {untappdAPI} from "./untappd.api";
import {ITEMS, SOCIAL_EVENTS} from "@model/data";
import {configService} from "./config.service";

class JAKLService {

  public getSocialEvents():  Promise<BreweryEvent[]> {
    return (configService.isDevMode ? Promise.resolve(SOCIAL_EVENTS) : facebookAPI.fetchEvents());
  }

  public getMenu(): Promise<MenuItem[]> {
    return (configService.isDevMode ? Promise.resolve(ITEMS) : untappdAPI.fetchMenuItems())
  }
}

export const jaklService: JAKLService = new JAKLService();