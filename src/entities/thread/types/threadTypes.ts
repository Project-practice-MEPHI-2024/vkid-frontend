export interface Thread {
  ID: string;
  title: string;
  categories: string[];
}

export interface GetThreadsResponse {
  error?: string;
  threads: Thread[];
}
