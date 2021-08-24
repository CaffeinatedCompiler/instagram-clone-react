export enum Month {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}
export interface User {
  username: string;
  userimage: string;
  displayName: string;
  biograpfy: string;
  followingCount: number;
  followerCount: number;
  joinYear: number;
  joinMonth: Month;
}

export interface MessageData {
  from: string;
  to: string;
  messages: Message[];
}

export interface Message {
  message: string;
  from: string;
}
