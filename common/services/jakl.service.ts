import {BreweryEvent, Environment, MenuItem} from "@model/index";
import {facebookAPI} from "./facebook.api";
import {untappdAPI} from "./untappd.api";
import {ITEMS, SOCIAL_EVENTS} from "@model/data";

class JAKLService {
  private readonly isDevMode = process.env.environment === Environment.dev;

  public getSocialEvents():  Promise<BreweryEvent[]> {
    return (this.isDevMode ? Promise.resolve(SOCIAL_EVENTS) : facebookAPI.fetchEvents());
  }

  public getMenu(): Promise<MenuItem[]> {
    return (this.isDevMode ? Promise.resolve(ITEMS) : untappdAPI.fetchMenuItems())
  }
}

export const jaklService: JAKLService = new JAKLService();