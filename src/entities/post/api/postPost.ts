import axios from 'axios';
import {
  CreatePostRequest,
  CreatePostResponse,
} from '@/entities/post/types/postTypes';

export const postThread = async (
  Post: CreatePostRequest,
): Promise<CreatePostResponse> => {
  const response = await axios.post('http://localhost:8888/api/v1/post', Post, {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  });
  return response.data;
};
