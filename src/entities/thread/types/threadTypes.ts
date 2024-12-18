export interface Thread {
  ID: string;
  title: string;
  categories: string[];
  CreatedAt: string;
}

export interface GetThreadsResponse {
  error?: string;
  threads: Thread[];
}
