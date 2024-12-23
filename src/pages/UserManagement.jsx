import React, { useEffect, useState } from 'react';
import { fetchUsers, suspendUser, deleteUser } from '../services/userService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  // 유저 목록 로드
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        console.error('Failed to fetch users:', err);
      }
    };
    loadUsers();
  }, []);

  // 유저 정지 함수
  const handleSuspend = async (userId) => {
    try {
      await suspendUser(userId);
      setUsers(users.map(user => (user.id === userId ? { ...user, status: 'suspended' } : user)));
    } catch (err) {
      setError('Failed to suspend user');
      console.error('Failed to suspend user:', err);
    }
  };

  // 유저 삭제 함수
  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      setError('Failed to delete user');
      console.error('Failed to delete user:', err);
    }
  };

  // 검색어를 기반으로 유저 목록 필터링
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#FFF7ED]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FF9A8B] mx-auto"></div>
          <p className="text-[#D9779B] font-semibold mt-4">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#FFF7ED]">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex bg-[#FFF7ED] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />
    <div className="p-8 bg-[#FFF7ED] min-h-screen">
      <h1 className="text-2xl font-bold text-[#FF9A8B] mb-4">User Management</h1>
      {/* 검색 입력 필드 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9A8B]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 상태 업데이트
        />
      </div>

      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-[#FADADD] text-[#D9779B]">
            <th className="px-4 py-3 text-left font-semibold">ID</th>
            <th className="px-4 py-3 text-left font-semibold">Name</th>
            <th className="px-4 py-3 text-left font-semibold">Email</th>
            <th className="px-4 py-3 text-left font-semibold">Status</th>
            <th className="px-4 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr
              key={user.id}
              className={`border-b ${
                index % 2 === 0 ? 'bg-[#FFF7ED]' : 'bg-[#FFE8D6]'
              } hover:bg-[#FFD3BA] transition duration-200`}
            >
              <td className="px-4 py-3 text-gray-700">{user.id}</td>
              <td className="px-4 py-3 text-gray-700">{user.name}</td>
              <td className="px-4 py-3 text-gray-700">{user.email}</td>
              <td className="px-4 py-3 text-gray-700">{user.status}</td>
              <td className="px-4 py-3">
                {user.status === 'active' && (
                  <button
                    className="bg-[#FFE8D6] text-[#F98472] px-4 py-2 rounded-full mr-2 hover:bg-[#FFD3BA] hover:text-[#F55C47] transition duration-300"
                    onClick={() => handleSuspend(user.id)}
                  >
                    계정정지
                  </button>
                )}
                <button
                  className="bg-[#FADADD] text-[#D9779B] px-4 py-2 rounded-full hover:bg-[#F9A8D4] hover:text-[#C05691] transition duration-300"
                  onClick={() => handleDelete(user.id)}
                >
                  계정삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 검색 결과 없음 메시지 */}
      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-4">사용자를 찾을 수 없습니다.</p>
      )}
    </div>
  </div>
</div>
  );
};

export default UserManagement;
