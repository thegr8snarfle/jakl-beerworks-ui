import {BreweryEvent, MenuItem} from '@model/common.model';
import goatYoga from "@assets/image/goat-yoga.jpg";
import {DateTime} from "luxon";
import {MenuItemResponse} from "./untappd.api";

class FacebookAPI {
  readonly token: string = process.env.TOKEN ?? '';
  readonly baseUrl: string = `https://business.untappd.com/api/v1/`

  public async fetchEvents(): Promise<BreweryEvent[]> {
    const sections =
      await fetch(`${this.baseUrl}sections/624730/items`, {
        method: 'GET',
        headers: {
          'Authorization': `basic ${this.token}`
        }
      });
    // .catch((err) => {
    //   console.error('Error ===>', err);
    // });
    const result: MenuItemResponse = await sections.json();
    return Promise.resolve(SOCIAL_EVENTS);
  }
}

export const facebookAPI: FacebookAPI = new FacebookAPI();

const dateTime: DateTime = DateTime.local();

export const SOCIAL_EVENTS: BreweryEvent[] = [
  {
    id: '0934oljslkghjghjghv',
    type: 'social',
    name: 'Goat Yoga',
    description: `It's goat yoga, broh!`,
    dateFrom: dateTime.toISODate(),
    dateTo: dateTime.plus({'hours': 2}).toISODate(),
    img: goatYoga
  },
  {
    id: '0934oljslkv3451f353',
    type: 'social',
    name: 'Paint with Karen',
    description: `Come paint with Karen, she's awesome!`,
    dateFrom: dateTime.plus({'weeks': 1}).toISODate(),
    dateTo: dateTime.plus({'hours': 2}).toISODate(),
    img: goatYoga
  },
  {
    id: '0934oljslkv345fsd',
    type: 'social',
    name: 'A really, really, long title',
    description: `A really, really long description!A really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long descriptionA really, really long description`,
    dateFrom: dateTime.plus({'weeks': 2}).toISODate(),
    dateTo: dateTime.plus({'hours': 2}).toISODate(),
    img: goatYoga
  },
  {
    id: '0934oljslkv34345fsd',
    type: 'social',
    name: 'Guns and Beer',
    description: `It's guns and beer, broh! We'll also be watching fox news and brainstorming ways to own the libs!`,
    dateFrom: dateTime.plus({'weeks': 3}).toISODate(),
    dateTo: dateTime.plus({'hours': 2}).toISODate(),
    img: goatYoga
  }
];
