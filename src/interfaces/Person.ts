import { TimeStamp } from './TimeStamp';
import { Address } from './Address';

export interface Person extends TimeStamp {
  personId: number;
  userId: number;
  documentId: number;
  documentType: number;
  dateOfBirth?: Date | null;
  firstName: string;
  lastName: string;
  businessName: string;
  isPerson: boolean;
  deleted: boolean;
  addresses: Address[];
  
  fullName: string;
  age: number;
}