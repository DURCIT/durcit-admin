import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginAdmin } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await loginAdmin({ username, password });
      login(token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#FFF7ED] to-[#FDF2F8]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        {/* 로고 및 타이틀 */}
        <div className="flex justify-center mb-4">
        </div>
        <h1 className="text-3xl font-extrabold text-[#FF9A8B] text-center mb-6">
          Admin Login
        </h1>

        {/* 에러 메시지 */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* 입력 필드 */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Admin ID"
            className="w-full p-3 border border-[#FADADD] rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF9A8B] placeholder-gray-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-[#FADADD] rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF9A8B] placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="w-full bg-[#FF9A8B] text-white font-semibold p-3 rounded-full mt-6 hover:bg-[#F98472] transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
