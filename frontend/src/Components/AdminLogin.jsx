import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldCheck } from 'lucide-react';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 1. Call the backend login route we discussed
      const res = await axios.post('http://localhost:5000/api/admin/login', credentials);
      
      if (res.data.success) {
        // 2. Save a "Login Flag" in the browser
        localStorage.setItem('isAdmin', 'true');
        // 3. Redirect to the Dashboard
        navigate('/admin-portal');
      }
    } catch (err) {
      setError('Invalid Username or Password. Please try again!');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center p-6 font-['Nunito']">
      <div className="bg-white w-full max-w-md p-10 rounded-[3rem] shadow-xl border-4 border-white">
        <div className="text-center mb-10">
          <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck size={40} className="text-[#F2A365]" />
          </div>
          <h1 className="text-3xl font-black text-[#113B45]">Admin <span className="text-[#F2A365]">Login</span></h1>
          <p className="text-[#3D737F] font-medium mt-2">Access the Rising Stars Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-400" size={20} />
            <input 
              type="text" 
              name="username"
              placeholder="Username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-[#FFF9F0] border-2 border-transparent focus:border-[#F2A365] outline-none transition-all font-bold text-[#113B45]"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
            <input 
              type="password" 
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-[#FFF9F0] border-2 border-transparent focus:border-[#F2A365] outline-none transition-all font-bold text-[#113B45]"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}

          <button type="submit" className="w-full bg-[#113B45] text-white py-4 rounded-2xl font-black text-lg hover:bg-[#3D737F] transition-all shadow-lg hover:shadow-none translate-y-[-2px] active:translate-y-[0px]">
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;