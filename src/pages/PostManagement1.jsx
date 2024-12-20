import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost, hidePost } from '../services/postService'; // API 호출 서비스

const PostManagement = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  // 게시물 목록 로드
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts(); // 게시물 목록 가져오기
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError('게시물을 가져오는 데 실패했습니다.');
        console.error('Failed to fetch posts:', err);
      }
    };
    loadPosts();
  }, []);

  // 게시물 삭제
  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (err) {
      setError('게시물을 삭제하는 데 실패했습니다.');
      console.error('Failed to delete post:', err);
    }
  };

  // 게시물 숨기기
  const handleHide = async (postId) => {
    try {
      await hidePost(postId);
      setPosts(posts.map(post => (post.id === postId ? { ...post, status: 'hidden' } : post)));
    } catch (err) {
      setError('게시물을 숨기는 데 실패했습니다.');
      console.error('Failed to hide post:', err);
    }
  };

  // 검색어를 기준으로 게시물 필터링
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#FFF7ED]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FF9A8B] mx-auto"></div>
          <p className="text-[#D9779B] font-semibold mt-4">게시물을 로드 중...</p>
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
    <div className="p-8 bg-[#FFF7ED] min-h-screen">
      <h1 className="text-2xl font-bold text-[#FF9A8B] mb-4">Post Management</h1>

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
            <th className="px-4 py-3 text-left font-semibold">Status</th>
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
              <td className="px-4 py-3 text-gray-700">{post.status}</td>
              <td className="px-4 py-3">
                {post.status !== 'hidden' && (
                  <button
                    className="bg-[#FFE8D6] text-[#F98472] px-4 py-2 rounded-full mr-2 hover:bg-[#FFD3BA] hover:text-[#F55C47] transition duration-300"
                    onClick={() => handleHide(post.id)}
                  >
                    Hide
                  </button>
                )}
                <button
                  className="bg-[#FADADD] text-[#D9779B] px-4 py-2 rounded-full hover:bg-[#F9A8D4] hover:text-[#C05691] transition duration-300"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">게시물이 없습니다</p>
      )}
    </div>
  );
};

export default PostManagement;
