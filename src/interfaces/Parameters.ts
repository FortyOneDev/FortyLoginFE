import { TimeStamp } from './TimeStamp';

export interface Parameters extends TimeStamp {
  parameterId: number;
  projectId: number;
  accessFailedCount: number;
  lockoutEnd: number;
}
