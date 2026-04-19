import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Trash2, Mail, Phone, Calendar, User } from 'lucide-react';

const AdminDashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      // If not logged in, send them back to login page
      navigate('/login');
    }
  }, []);
  const [inquiries, setInquiries] = useState([]);

  // Fetch all inquiries from Port 5000
  const fetchInquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/inquiries');
      setInquiries(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  // Function to delete an inquiry
  const deleteInquiry = async (id) => {
    if(window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await axios.delete(`http://localhost:5000/api/inquiries/${id}`);
        fetchInquiries(); // Refresh the list
      } catch (err) {
        alert("Delete failed");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] mt-16 p-6 md:p-12 font-['Nunito']">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-[#113B45]">Admin <span className="text-[#F2A365]">Dashboard</span></h1>
            <p className="text-[#3D737F] font-medium">Manage your "Rising Stars" inquiries here.</p>
          </div>
          <div className="bg-white px-6 py-2 rounded-full shadow-sm border border-orange-100">
            <span className="text-[#F2A365] font-bold">{inquiries.length} New Messages</span>
          </div>
        </header>

        <div className="grid gap-6">
          {inquiries.map((iq) => (
            <div key={iq._id} className="bg-white rounded-[2rem] p-8 shadow-md border border-white hover:shadow-xl transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              
              <div className="space-y-3 flex-grow">
                <div className="flex items-center gap-3 text-[#113B45]">
                  <User size={18} className="text-[#F2A365]" />
                  <h3 className="text-xl font-black">{iq.name}</h3>
                  <span className="text-[10px] bg-orange-100 text-[#F2A365] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {iq.subject || "General Inquiry"}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-[#3D737F]">
                  <div className="flex items-center gap-2"><Mail size={16}/> {iq.email}</div>
                  <div className="flex items-center gap-2"><Phone size={16}/> {iq.phone}</div>
                </div>

                <div className="bg-[#FFF9F0] p-4 rounded-2xl text-[#113B45] text-sm border-l-4 border-[#F2A365]">
                  "{iq.message}"
                </div>
              </div>

              <div className="flex flex-col items-end gap-4 min-w-[120px]">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
                  <Calendar size={14}/>
                  {new Date(iq.date).toLocaleDateString()}
                </div>
                <button 
                  onClick={() => deleteInquiry(iq._id)}
                  className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          {inquiries.length === 0 && (
            <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-orange-200">
              <p className="text-[#3D737F] font-bold text-xl">No inquiries yet. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;