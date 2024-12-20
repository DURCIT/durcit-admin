import axios from 'axios';

// 게시물 목록 조회
export const fetchPosts = async () => {
  const response = await axios.get('/api/posts');
  return response.data;
};

// 게시물 삭제
export const deletePost = async (postId) => {
  await axios.delete(`/api/posts/${postId}`);
};

// 게시물 숨기기
export const hidePost = async (postId) => {
  await axios.post(`/api/posts/${postId}/hide`);
};
