import { get } from '../client/ApiClient';
type UserId = string;
type FetchUsersResponse = {
  users: Array<{
    id: UserId;
    name: string;
    email: string;
  }>;
};

export const fetchAllUsers = () => {
  return get<FetchUsersResponse>('users.json');
};

type ISO8601Date = string;
type UserEndpointTimeseriesArray = Array<[ISO8601Date, number]>;

export interface UserEndpointInterval {
  id: string; // 1488856380
  ts: ISO8601Date;
  stages: {
    stage: 'awake' | 'light' | 'deep' | 'out';
    duration: number; // minute count example 3840
  }[];
  score: number; // percentage xx example 82
  timeseries: {
    tnt: UserEndpointTimeseriesArray; // count x
    tempRoomC: UserEndpointTimeseriesArray; // celsius xx.xxxxxxxxxxxxxx example: 17.31434782608696
    tempBedC: UserEndpointTimeseriesArray; // celsius xx.xxxxxxxxxxxxxx example: 17.31434782608696
    respiratoryRate: UserEndpointTimeseriesArray; // 13.666666666666666
    heartRate: UserEndpointTimeseriesArray; // 60.673469387755105
    heating: UserEndpointTimeseriesArray; // 4500
  };
}

type FetchSingleUserResponse = {
  intervals: Array<UserEndpointInterval>;
};

export const fetchSingleUser = (userId: UserId) => {
  return get<FetchSingleUserResponse>(`${userId}.json`);
};
