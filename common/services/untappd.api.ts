import { BreweryItem } from "@model/untappd.model";
import {MenuItem} from "@test";

export interface MenuItemResponse {
  items: MenuItem[];
}

class UntappdAPI {

  readonly token: string = process.env.TOKEN ?? '';
  readonly baseUrl: string = `https://business.untappd.com/api/v1/`

  public async fetchMenuItems(): Promise<MenuItem[]> {
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
    return Promise.resolve(result.items);
  }

}

export const untappdAPI: UntappdAPI = new UntappdAPI();


export const ITEMS: MenuItem[] = [
  {
    "id": 35968500,
    "section_id": 624730,
    "position": 0,
    "untappd_id": 4322051,
    "label_image": "https://beer.untappd.com/labels/4322051",
    "label_image_hd": "https://beer.untappd.com/labels/4322051?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4322051",
    "original_label_image": "https://beer.untappd.com/labels/4322051",
    "original_label_image_hd": "https://beer.untappd.com/labels/4322051?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "1",
    "rating": "3.80952",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-magnus-lignant",
    "untappd_brewery_id": 497691,
    "name": "Magnus Lignant",
    "original_name": "Magnus Lignant",
    "custom_name": null,
    "description": "Latin for Big Lick, the name of this beer is a nod to the Big Lick Brewing Company in Roanoke, Virginia. Much of the knowledge and skill used to brew this beer and most other beers at JAKL Beer Works was honed and learned there. Many additions of Citra, El Dorado, and Mosaic hops on top of a backbone of malt, wheat and oats yield a velvety and juicy beer with notes of orange, grapefruit, pineapple, mango and peach in the aroma and flavor.",
    "custom_description": null,
    "original_description": "Latin for Big Lick, the name of this beer is a nod to the Big Lick Brewing Company in Roanoke, Virginia. Much of the knowledge and skill used to brew this beer and most other beers at JAKL Beer Works was honed and learned there. Many additions of Citra, El Dorado, and Mosaic hops on top of a backbone of malt, wheat and oats yield a velvety and juicy beer with notes of orange, grapefruit, pineapple, mango and peach in the aroma and flavor.",
    "style": "IPA - New England / Hazy",
    "custom_style": null,
    "original_style": "IPA - New England / Hazy",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "204",
    "custom_calories": null,
    "original_calories": "204",
    "abv": "6.8",
    "custom_abv": null,
    "original_abv": "6.8",
    "ibu": "67.0",
    "custom_ibu": null,
    "original_ibu": "67.0",
    "created_at": "2022-05-21T05:32:03.344725Z",
    "updated_at": "2022-06-11T02:35:34.359135Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 36480445,
    "section_id": 624730,
    "position": 1,
    "untappd_id": 4882377,
    "label_image": "https://beer.untappd.com/labels/4882377",
    "label_image_hd": "https://beer.untappd.com/labels/4882377?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4882377",
    "original_label_image": "https://beer.untappd.com/labels/4882377",
    "original_label_image_hd": "https://beer.untappd.com/labels/4882377?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "2",
    "rating": "0.0",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-crazy-calm",
    "untappd_brewery_id": 497691,
    "name": "Crazy Calm",
    "original_name": "Crazy Calm",
    "custom_name": null,
    "description": "This delicious beer serves as two types of beer in one. It's simple, crisp, and easy drinking if you just want to throw of a few back. However, with some patience, this beer reveals complex, aromatic, and flavorful layers of crackery malt, zesty herbal hops, and mild notes of pear. Prost! ",
    "custom_description": null,
    "original_description": "This delicious beer serves as two types of beer in one. It's simple, crisp, and easy drinking if you just want to throw of a few back. However, with some patience, this beer reveals complex, aromatic, and flavorful layers of crackery malt, zesty herbal hops, and mild notes of pear. Prost! ",
    "style": "Pilsner - German",
    "custom_style": null,
    "original_style": "Pilsner - German",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "153",
    "custom_calories": null,
    "original_calories": "153",
    "abv": "5.1",
    "custom_abv": null,
    "original_abv": "5.1",
    "ibu": "25.0",
    "custom_ibu": null,
    "original_ibu": "25.0",
    "created_at": "2022-06-11T02:35:31.027737Z",
    "updated_at": "2022-06-11T02:47:26.234453Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 34365948,
    "section_id": 624730,
    "position": 2,
    "untappd_id": 4754424,
    "label_image": "https://beer.untappd.com/labels/4754424",
    "label_image_hd": "https://beer.untappd.com/labels/4754424?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4754424",
    "original_label_image": "https://beer.untappd.com/labels/4754424",
    "original_label_image_hd": "https://beer.untappd.com/labels/4754424?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "3",
    "rating": "3.7475",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-help",
    "untappd_brewery_id": 497691,
    "name": "Help!",
    "original_name": "Help!",
    "custom_name": null,
    "description": "Help! is our tribute to all the friends, family, and patrons who have given their blood, sweat, and tears in helping us build JAKL Beer Works. This American Pale Ale is almost as old school as they get. A strong malt backbone with a touch of caramel balances flavors and aromas of citrus, melon, stone fruit and a hint of pine. Cheers, and thank you!",
    "custom_description": null,
    "original_description": "Help! is our tribute to all the friends, family, and patrons who have given their blood, sweat, and tears in helping us build JAKL Beer Works. This American Pale Ale is almost as old school as they get. A strong malt backbone with a touch of caramel balances flavors and aromas of citrus, melon, stone fruit and a hint of pine. Cheers, and thank you!",
    "style": "Pale Ale - American",
    "custom_style": null,
    "original_style": "Pale Ale - American",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "171",
    "custom_calories": null,
    "original_calories": "171",
    "abv": "5.7",
    "custom_abv": null,
    "original_abv": "5.7",
    "ibu": "36.0",
    "custom_ibu": null,
    "original_ibu": "36.0",
    "created_at": "2022-03-15T22:53:03.233328Z",
    "updated_at": "2022-05-21T05:45:41.034581Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 34579088,
    "section_id": 624730,
    "position": 3,
    "untappd_id": 4766934,
    "label_image": "https://beer.untappd.com/labels/4766934",
    "label_image_hd": "https://beer.untappd.com/labels/4766934?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4766934",
    "original_label_image": "https://beer.untappd.com/labels/4766934",
    "original_label_image_hd": "https://beer.untappd.com/labels/4766934?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "4",
    "rating": "3.83088",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-hard-day-s-night",
    "untappd_brewery_id": 497691,
    "name": "Hard Day's Night",
    "original_name": "Hard Day's Night",
    "custom_name": null,
    "description": "After a hard day, you deserve a Hard Day's Night, our German leichtbier (light beer). Brewed with all German ingredients, except for a sizeable, (and non-traditional) addition of local honey. Hard Day's Night is very crisp, very light, very drinkable, but with a subtle character that makes it ours. Cheers!",
    "custom_description": null,
    "original_description": "After a hard day, you deserve a Hard Day's Night, our German leichtbier (light beer). Brewed with all German ingredients, except for a sizeable, (and non-traditional) addition of local honey. Hard Day's Night is very crisp, very light, very drinkable, but with a subtle character that makes it ours. Cheers!",
    "style": "Lager - Pale",
    "custom_style": null,
    "original_style": "Lager - Pale",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "105",
    "custom_calories": null,
    "original_calories": "105",
    "abv": "3.5",
    "custom_abv": null,
    "original_abv": "3.5",
    "ibu": "20.0",
    "custom_ibu": null,
    "original_ibu": "20.0",
    "created_at": "2022-03-24T15:12:40.442750Z",
    "updated_at": "2022-05-21T05:45:41.034581Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 36233135,
    "section_id": 624730,
    "position": 4,
    "untappd_id": 4866915,
    "label_image": "https://beer.untappd.com/labels/4866915",
    "label_image_hd": "https://beer.untappd.com/labels/4866915?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4866915",
    "original_label_image": "https://beer.untappd.com/labels/4866915",
    "original_label_image_hd": "https://beer.untappd.com/labels/4866915?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "5",
    "rating": "3.61364",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-get-smurfed",
    "untappd_brewery_id": 497691,
    "name": "Get Smurfed",
    "original_name": "Get Smurfed",
    "custom_name": null,
    "description": "Brewed with over 25 lbs per barrel of blueberries, this slightly tart and crisp wheat ale will not leave you searching for the fruit! Juicy blueberries dominate throughout with a supportive wheat backbone and medium dry finish. This one could easily Smurf you up! Cheers!",
    "custom_description": null,
    "original_description": "Brewed with over 25 lbs per barrel of blueberries, this slightly tart and crisp wheat ale will not leave you searching for the fruit! Juicy blueberries dominate throughout with a supportive wheat backbone and medium dry finish. This one could easily Smurf you up! Cheers!",
    "style": "Wheat Beer - American Pale Wheat",
    "custom_style": null,
    "original_style": "Wheat Beer - American Pale Wheat",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "153",
    "custom_calories": null,
    "original_calories": "153",
    "abv": "5.1",
    "custom_abv": null,
    "original_abv": "5.1",
    "ibu": "27.0",
    "custom_ibu": null,
    "original_ibu": "27.0",
    "created_at": "2022-05-31T23:49:56.120483Z",
    "updated_at": "2022-06-01T18:54:57.749858Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 35543667,
    "section_id": 624730,
    "position": 5,
    "untappd_id": 4826288,
    "label_image": "https://beer.untappd.com/labels/4826288",
    "label_image_hd": "https://beer.untappd.com/labels/4826288?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4826288",
    "original_label_image": "https://beer.untappd.com/labels/4826288",
    "original_label_image_hd": "https://beer.untappd.com/labels/4826288?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "6",
    "rating": "3.74038",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-berry-me-on-the-beach",
    "untappd_brewery_id": 497691,
    "name": "Berry Me on the Beach",
    "original_name": "Berry Me on the Beach",
    "custom_name": null,
    "description": "We took our base Gose (Petrichor) and married it with over 8 lbs per bbl of cherry, raspberry, and blackberry purees. The result is a summery delight that's perfect for hanging with friends in our yard or soaking up the sun at the beach. Prost!",
    "custom_description": null,
    "original_description": "We took our base Gose (Petrichor) and married it with over 8 lbs per bbl of cherry, raspberry, and blackberry purees. The result is a summery delight that's perfect for hanging with friends in our yard or soaking up the sun at the beach. Prost!",
    "style": "Sour - Fruited Gose",
    "custom_style": null,
    "original_style": "Sour - Fruited Gose",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "105",
    "custom_calories": null,
    "original_calories": "105",
    "abv": "3.5",
    "custom_abv": null,
    "original_abv": "3.5",
    "ibu": "9.0",
    "custom_ibu": null,
    "original_ibu": "9.0",
    "created_at": "2022-05-04T18:16:06.599454Z",
    "updated_at": "2022-06-01T18:54:57.940580Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 35030506,
    "section_id": 624730,
    "position": 6,
    "untappd_id": 4322063,
    "label_image": "https://beer.untappd.com/labels/4322063",
    "label_image_hd": "https://beer.untappd.com/labels/4322063?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4322063",
    "original_label_image": "https://beer.untappd.com/labels/4322063",
    "original_label_image_hd": "https://beer.untappd.com/labels/4322063?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "7",
    "rating": "3.69512",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-playing-with-madness",
    "untappd_brewery_id": 497691,
    "name": "Playing With Madness",
    "original_name": "Playing With Madness",
    "custom_name": null,
    "description": "Saison is a style that, when done right, can possess a surprising complexity of flavor, and often “done right”, means playing with madness during the brewing process. We did our best to treat this beer as harshly as possible, and for our efforts we got a maddeningly delicious beer which delights the pallet with earthy spiciness, bubblegum, stone fruits, and a hint of black pepper. ",
    "custom_description": "Saison is a style that, when done right, can possess a surprising complexity of flavor, and often “done right”, means playing with madness during the brewing process. We did our best to treat this beer as harshly as possible, and for our efforts we got a maddeningly delicious beer which delights the pallet with earthy spiciness, bubblegum, stone fruits, and a hint of black pepper. ",
    "original_description": "Saison is a style that, when done right, can possess a surprising range and complexity of flavor, and often “done right”, means treating the beer in such a way that would be considered madness with any other beer. We did our best to treat this beer as harshly as possible, and for our efforts we got a maddingly delicious beer which delights the pallet with earthy spiciness, bubblegum, stone fruits, and a hint of black pepper. ",
    "style": "Farmhouse Ale - Saison",
    "custom_style": null,
    "original_style": "Farmhouse Ale - Saison",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "183",
    "custom_calories": null,
    "original_calories": "183",
    "abv": "6.1",
    "custom_abv": null,
    "original_abv": "6.1",
    "ibu": "20.0",
    "custom_ibu": null,
    "original_ibu": "20.0",
    "created_at": "2022-04-20T02:59:34.838830Z",
    "updated_at": "2022-06-01T12:49:41.878945Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 35705803,
    "section_id": 624730,
    "position": 7,
    "untappd_id": 4786033,
    "label_image": "https://beer.untappd.com/labels/4786033",
    "label_image_hd": "https://beer.untappd.com/labels/4786033?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4786033",
    "original_label_image": "https://beer.untappd.com/labels/4786033",
    "original_label_image_hd": "https://beer.untappd.com/labels/4786033?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "8",
    "rating": "3.79762",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-jakl-maibock",
    "untappd_brewery_id": 497691,
    "name": "JAKL Maibock",
    "original_name": "JAKL Maibock",
    "custom_name": null,
    "description": "Our traditional spring Bock bier has an assertive flavor just like our Dunkels Bock, but focuses more on delicate herbal and lemongrass hop flavors and aromas. Malt flavors of cracker, toast, and hints of honey and caramel provide complexity and balance the hops. Our Maibock is a great companion to cool spring evenings next to a bonfire. Prost! ",
    "custom_description": null,
    "original_description": "Our traditional spring Bock bier has an assertive flavor just like our Dunkels Bock, but focuses more on delicate herbal and lemongrass hop flavors and aromas. Malt flavors of cracker, toast, and hints of honey and caramel provide complexity and balance the hops. Our Maibock is a great companion to cool spring evenings next to a bonfire. Prost! ",
    "style": "Bock - Hell / Maibock / Lentebock",
    "custom_style": null,
    "original_style": "Bock - Hell / Maibock / Lentebock",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "192",
    "custom_calories": null,
    "original_calories": "192",
    "abv": "6.4",
    "custom_abv": null,
    "original_abv": "6.4",
    "ibu": "28.0",
    "custom_ibu": null,
    "original_ibu": "28.0",
    "created_at": "2022-05-11T19:11:13.784668Z",
    "updated_at": "2022-06-01T12:49:44.285122Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }, {
    "id": 35871102,
    "section_id": 624730,
    "position": 8,
    "untappd_id": 4322071,
    "label_image": "https://beer.untappd.com/labels/4322071",
    "label_image_hd": "https://beer.untappd.com/labels/4322071?size=hd",
    "label_image_thumb": "https://beer.untappd.com/labels/4322071",
    "original_label_image": "https://beer.untappd.com/labels/4322071",
    "original_label_image_hd": "https://beer.untappd.com/labels/4322071?size=hd",
    "custom_label_image": null,
    "custom_label_image_thumb": null,
    "custom_label_image_filename": null,
    "brewery_location": "Middletown, DE",
    "cask": false,
    "nitro": false,
    "local": false,
    "tap_number": "9",
    "rating": "3.73404",
    "in_production": true,
    "untappd_beer_slug": "jakl-beer-works-bonnie-blootered-eejit",
    "untappd_brewery_id": 497691,
    "name": "Bonnie Blootered Eejit",
    "original_name": "Bonnie Blootered Eejit",
    "custom_name": null,
    "description": "The name of this beer is a Scottish slang phrase for what might result if a person were to give into the simple deliciousness of it, a beautiful drunken idiot! Assertive malt character (think toasted bread crust, sugar cookie, and a hint of toffee), hints of plum and apricot, and a dry, slightly crisp finish yield a high characterful yet drinkable beer.",
    "custom_description": null,
    "original_description": "The name of this beer is a Scottish slang phrase for what might result if a person were to give into the simple deliciousness of it, a beautiful drunken idiot! Assertive malt character (think toasted bread crust, sugar cookie, and a hint of toffee), hints of plum and apricot, and a dry, slightly crisp finish yield a high characterful yet drinkable beer.",
    "style": "Scottish Export Ale",
    "custom_style": null,
    "original_style": "Scottish Export Ale",
    "brewery": "JAKL Beer Works",
    "custom_brewery": null,
    "original_brewery": "JAKL Beer Works",
    "calories": "171",
    "custom_calories": null,
    "original_calories": "171",
    "abv": "5.7",
    "custom_abv": null,
    "original_abv": "5.7",
    "ibu": "23.0",
    "custom_ibu": null,
    "original_ibu": "23.0",
    "created_at": "2022-05-18T05:02:19.773420Z",
    "updated_at": "2022-06-01T12:49:46.210672Z",
    "type": "beer",
    "default_image": "https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png"
  }]