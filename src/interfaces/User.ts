import { TimeStamp } from './TimeStamp';
  
export interface User extends TimeStamp {
  userId: number;
  projectId: number;
  accessFailedCount: number;
  email: string;
  mailConfirmed?: Date | null;
  lockoutEnabled: boolean;
  lockoutEnd?: Date | null;
  phoneNumber: string;
  phoneNumberConfirmed?: Date | null;
  userName: string;
  passwordHash: string;
  picture: string;
  deleted: boolean;
}
