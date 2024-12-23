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

// 삭제된 게시물 목록 조회
export const fetchDeletedPosts = async () => {
  const response = await axios.get('/api/posts/deleted');
  return response.data;
};

// 게시물 복구
export const restoreDeletedPost = async (postId) => {
  await axios.post(`/api/posts/${postId}/restore`);
};

// 게시물 영구 삭제
export const permanentlyDeletePost = async (postId) => {
  await axios.delete(`/api/posts/${postId}/permanent`);
};