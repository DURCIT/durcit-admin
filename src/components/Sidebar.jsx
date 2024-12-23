const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#FFF7ED] text-gray-700 fixed top-0 left-0 shadow-lg">
      <div className="p-6 text-[#FFB085] font-bold text-2xl border-b border-[#FAD6B6]">
        Admin Panel
      </div>
      <ul className="mt-4">
        <li className="p-4 hover:bg-[#FFE8D6] transition duration-300">
          <a href="/dashboard" className="font-semibold text-gray-700">
            대시보드
          </a>
        </li>
        <li className="p-4 hover:bg-[#FFE8D6] transition duration-300">
          <a href="/users" className="font-semibold text-gray-700">
            유저관리
          </a>
        </li>
        <li className="p-4 hover:bg-[#FFE8D6] transition duration-300">
          <a href="/posts" className="font-semibold text-gray-700">
            게시물관리
          </a>
        </li>
        <li className="p-4 hover:bg-[#FFE8D6] transition duration-300">
          <a href="/delete_posts" className="font-semibold text-gray-700">
            게시물복원
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
