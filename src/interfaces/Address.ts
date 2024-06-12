import { TimeStamp } from './TimeStamp';

export interface Address extends TimeStamp {
  addressId: number;
  fullAddress: string;
  street: string;
  countryRegion: string;
  state: string;
  city: string;
  zip: string;
  latitude: string;
  phone: string;
  deleted: boolean;
}
