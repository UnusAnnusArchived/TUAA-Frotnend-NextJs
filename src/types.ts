import type { Source as PlyrSource, Track as PlyrTrack } from "plyr";

export interface IVideo {
  season: number;
  episode: number;
  title: string;
  description: string;
  date: number;
  duration: number;
  sources: PlyrSource[];
  tracks: PlyrTrack[];
  posters?: IVideoPoster[];
  thumbnail?: string;
}

interface IVideoPoster {
  src: string;
  type: string;
}

export type Season = IVideo[];
export type Seasons = Season[];

export interface IEpisodeAround {
  nextEp?: string;
  prevEp?: string;
}

export interface IComment {
  episode: string;
  uid: string;
  comment: CommentBody;
  stats: CommentStats;
  user: CommentUser;
}
export interface CommentBody {
  plaintext: string;
  html: string;
}
export interface CommentStats {
  published: number;
  likes: number;
  dislikes: number;
}
export interface CommentUser {
  id: string;
  username: string;
  pfp: UserPFP;
}

export interface UserPFP {
  originalFilename: string;
  filename: string;
  width: number;
  height: number;
  format: "image/jpeg";
}

export interface LoginResponse {
  isValid?: boolean;
  loginKey?: string;
  user?: LimitedUser;
}

export interface LimitedUser {
  id: string;
  email: string;
  username: string;
  pfp: UserPFP;
}

export interface LogoutResponse {
  status: "success" | "error";
  error?: "Account does not exist!" | string;
}

export interface PostCommentResponse {
  status?: "success";
  comment?: IComment;
  error?: {
    code: 3 | "401" | number | string;
    message: "Invalid message length!" | "Unauthorized!" | string;
  };
}