export type Month =
  |'January'
  |'February'
  |'April'
  |'May'
  |'June'
  |'July'
  |'August'
  |'September'
  |'October'
  |'November'
  |'December'
export interface User {
  username: string;
  userimage: string;
  displayName: string;
  biograpfy: string;
  followingCount: number;
  followersCount: number;
  joinYear: number;
  joinMonth: Month;
}

export interface MessageData {
  from: string;
  to: string;
  messages: Message[];
}

export interface Message {
  to: string;
  message: string;
  from: string;
}

export interface Post {
  id: number;
  username: string;
  displayName: string;
  userimage: string;
  image: string;
  description: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  comment: string;
  username: string;
}