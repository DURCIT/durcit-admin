import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white text-gray-700 flex items-center justify-between px-8 shadow-md z-10">
      <h1 className="text-2xl font-bold text-[#FFB085]">Admin Dashboard</h1>
      <div className="flex items-center space-x-6">
        <input
          type="text"
          placeholder="Search projects"
          className="border border-gray-300 rounded-full py-2 px-4 focus:ring-2 focus:ring-[#FFB085]"
        />
        <div className="flex space-x-4">
          <span className="text-gray-500 hover:text-[#FFB085] cursor-pointer">🔔</span>
          <span className="text-gray-500 hover:text-[#FFB085] cursor-pointer">📧</span>
          <span className="text-gray-500 hover:text-[#FFB085] cursor-pointer">⚙️</span>
        </div>
        <button
          onClick={logout}
          className="bg-[#FFB085] text-white px-4 py-2 rounded-full hover:bg-[#F98472] transition duration-300"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
