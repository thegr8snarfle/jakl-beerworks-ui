import {BreweryEvent, data} from './model';

class FacebookAPI {

  public fetchEvents(): Promise<BreweryEvent[]> {
    return Promise.resolve(data.SOCIAL_EVENTS);
  }
}

export const facebookAPI: FacebookAPI = new FacebookAPI();