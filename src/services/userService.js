import axios from 'axios';

// 유저 목록 가져오기
export const fetchUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data; // 백엔드에서 유저 데이터 반환
};

// 유저 정지
export const suspendUser = async (userId) => {
  await axios.post(`/api/users/${userId}/suspend`);
};

// 유저 삭제
export const deleteUser = async (userId) => {
  await axios.delete(`/api/users/${userId}`);
};
