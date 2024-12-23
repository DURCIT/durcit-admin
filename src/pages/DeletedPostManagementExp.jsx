import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DeletedPostManagement = () => {
  // 목업 데이터
  const [deletedPosts, setDeletedPosts] = useState([
    {
      id: 1,
      title: 'Deleted Post 1',
      content: 'This is the content of the first deleted post.',
      author: 'Author1',
      date: '2024-01-01',
    },
    {
      id: 2,
      title: 'Deleted Post 2',
      content: 'Content of the second deleted post is here.',
      author: 'Author2',
      date: '2024-01-02',
    },
    {
      id: 3,
      title: 'Another Deleted Post',
      content: 'This post was removed by the admin.',
      author: 'Author3',
      date: '2024-01-03',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태

  // 게시물 복구
  const handleRestore = (postId) => {
    setDeletedPosts(deletedPosts.filter(post => post.id !== postId));
    alert(`Post with ID ${postId} has been restored.`);
  };

  // 게시물 영구 삭제
  const handlePermanentDelete = (postId) => {
    setDeletedPosts(deletedPosts.filter(post => post.id !== postId));
    alert(`Post with ID ${postId} has been permanently deleted.`);
  };

  // 검색어를 기준으로 게시물 필터링
  const filteredPosts = deletedPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-[#FFF7ED] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />
        <div className="p-8 mt-16">
        <h1 className="text-2xl font-bold text-[#FF9A8B] mb-4">게시물 복원</h1>

      {/* 검색 입력 필드 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or author"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9A8D4]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 검색어 상태 업데이트
        />
      </div>

      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-[#FADADD] text-[#D9779B]">
            <th className="px-4 py-3 text-left font-semibold">ID</th>
            <th className="px-4 py-3 text-left font-semibold">Title</th>
            <th className="px-4 py-3 text-left font-semibold">Content</th>
            <th className="px-4 py-3 text-left font-semibold">Author</th>
            <th className="px-4 py-3 text-left font-semibold">Date</th>
            <th className="px-4 py-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post, index) => (
            <tr
              key={post.id}
              className={`border-b ${
                index % 2 === 0 ? 'bg-[#FFF7ED]' : 'bg-[#FFE8D6]'
              } hover:bg-[#FFD3BA] transition duration-200`}
            >
              <td className="px-4 py-3 text-gray-700">{post.id}</td>
              <td className="px-4 py-3 text-gray-700">{post.title}</td>
              <td className="px-4 py-3 text-gray-700 truncate max-w-sm">{post.content}</td>
              <td className="px-4 py-3 text-gray-700">{post.author}</td>
              <td className="px-4 py-3 text-gray-700">{post.date}</td>
              <td className="px-4 py-3">
                <button
                  className="bg-[#FFE8D6] text-[#F98472] px-4 py-2 rounded-full mr-2 hover:bg-[#FFD3BA] hover:text-[#F55C47] transition duration-300"
                  onClick={() => handleRestore(post.id)}
                >
                  복구
                </button>
                <button
                  className="bg-[#FADADD] text-[#D9779B] px-4 py-2 rounded-full hover:bg-[#F9A8D4] hover:text-[#C05691] transition duration-300"
                  onClick={() => handlePermanentDelete(post.id)}
                >
                  영구 삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">삭제된 게시물이 없습니다</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default DeletedPostManagement;
