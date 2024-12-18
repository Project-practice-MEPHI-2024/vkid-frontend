export interface Post {
  ID: string;
  content: string;
  CreatedAt: string;
}

export interface GetPostsResponse {
  error?: string;
  posts: Post[];
}
