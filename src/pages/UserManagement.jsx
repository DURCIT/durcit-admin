import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', status: 'suspended' },
  ]);

  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  // 검색 결과 필터링
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSuspend = (userId) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: 'suspended' } : user
    ));
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="flex bg-[#FFF7ED] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />

        {/* Search Input */}
        <div className="p-8 mt-16">
          <h1 className="text-2xl font-bold text-[#FF9A8B] mb-4">유저 관리</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by name or email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9A8B]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // 검색어 상태 업데이트
            />
          </div>

          {/* User Table */}
          <table className="table-auto w-full bg-[#FDF2F8] rounded-lg shadow-lg">
            <thead>
            <tr className="bg-[#FADADD] text-[#D9779B]">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.status}</td>
                  <td className="border px-4 py-2">
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

          {/* No Results Message */}
          {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
