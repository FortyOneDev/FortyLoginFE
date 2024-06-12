import { TimeStamp } from './TimeStamp';

export interface Project extends TimeStamp {
  projectId: number;
  name: string;
  deleted: boolean;
}
