import { TimeStamp } from './TimeStamp';
import { User } from './User';

export interface TokenUser extends TimeStamp {
  tokenId: number;
  token: string;
  userId: number;
  user: User;
  expiration: boolean;
  dateExpiration?: Date | null;
  deleted: boolean;
}
