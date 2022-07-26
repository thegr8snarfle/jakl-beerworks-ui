export interface BreweryEvent {
  id: string;
  type: 'social' | 'food';
  name: string;
  description: string;
  dateFrom: string;
  dateTo: string;
  img: any | null;
}