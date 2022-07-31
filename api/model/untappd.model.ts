export interface Menu {
  id: number;
  location_id: number;
  uuid: string;
  name: string;
  description: string;
  footer: string;
  draft: boolean;
  unpublished: boolean;
  position: number;
  show_price_on_untappd: boolean;
  push_notification_frequency: string;
  created_at: string;
  updated_at: string;

  sections: Section[];
}

export interface Section {
  id: number;
  menu_id: number;
  position: number;
  name: string;
  description: string;
  type: string;
  public: boolean;
  created_at: string;
  updated_at: string;

  items: BreweryItem[];
}

export interface BreweryItem {
  id: number;
  section_id: number;
  position: number;
  untappd_id: number;
  label_image: string;
  label_image_hd: string;
  label_image_thumb: string;
  original_label_image: string;
  original_label_image_hd: string;
  custom_label_image: string | null;
  custom_label_image_thumb: string | null;
  custom_label_image_filename: string | null;
  brewery_location: string;
  cask: boolean;
  nitro: boolean;
  local: boolean;
  tap_number: string;
  rating: string | null;
  in_production: boolean;
  untappd_beer_slug: string;
  untappd_brewery_id: number;
  name: string;
  original_name: string;
  custom_name: string | null;
  description: string | null;
  custom_description: string | null;
  original_description: string | null;
  style: string;
  custom_style: string | null;
  original_style: string;
  brewery: string;
  custom_brewery: string | null;
  original_brewery: string | null;
  calories: string | null;
  custom_calories: string | null;
  original_calories: string | null;
  abv: string;
  custom_abv: string | null;
  original_abv: string | null;
  ibu: string;
  custom_ibu: number | string | null;
  original_ibu: string | null;
  created_at: string;
  updated_at: string;
  type: string;
  default_image: string;
}