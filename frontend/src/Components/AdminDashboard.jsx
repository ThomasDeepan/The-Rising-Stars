import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Trash2,
  Mail,
  Phone,
  Calendar,
  User,
  Plus,
  X,
  Image as ImageIcon,
  BookOpen,
  Edit2,
  LogOut,
  Save,
} from "lucide-react";

// ─── BLOG FORM MODAL COMPONENT ──────────────────────────────────────────
const BlogFormModal = ({ blog, onClose, onSave }) => {
  const [form, setForm] = useState(
    blog || {
      title: "",
      category: "General",
      excerpt: "",
      content: "",
      author: "Rising Stars Team",
      coverImage: "",
    },
  );
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    if (!form.title || !form.excerpt || !form.content)
      return alert("Please fill Title, Excerpt, and Content.");
    setSaving(true);
    try {
      if (blog?._id) await axios.put(`/api/blogs/${blog._id}`, form);
      else await axios.post("/api/blogs", form);
      onSave();
      onClose();
    } catch (err) {
      alert("Failed to save blog.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-[#113B45]">
            {blog?._id ? "✏️ Edit Blog" : "✨ New Blog Post"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 rounded-full hover:text-red-500"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <input
            placeholder="Blog Title"
            name="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-4 bg-[#FFF9F0] rounded-2xl outline-none font-bold"
          />
          <input
            placeholder="Cover Image URL"
            name="coverImage"
            value={form.coverImage}
            onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
            className="w-full p-4 bg-[#FFF9F0] rounded-2xl outline-none"
          />
          <textarea
            placeholder="Excerpt (Short summary)"
            name="excerpt"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            rows={2}
            className="w-full p-4 bg-[#FFF9F0] rounded-2xl outline-none resize-none"
          />
          <textarea
            placeholder="Full Blog Content"
            name="content"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={6}
            className="w-full p-4 bg-[#FFF9F0] rounded-2xl outline-none resize-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="w-full mt-6 py-4 bg-[#F2A365] text-white rounded-2xl font-black shadow-lg"
        >
          {saving ? (
            "Publishing..."
          ) : (
            <>
              <Save size={18} className="inline mr-2" /> Publish Post
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// ─── MAIN ADMIN DASHBOARD ───────────────────────────────────────────────
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("inquiries"); // 'inquiries' or 'blogs'
  const [inquiries, setInquiries] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Gallery Modal
  const [showBlogForm, setShowBlogForm] = useState(false); // Blog Modal
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) navigate("/login");
    fetchInquiries();
    fetchBlogs();
  }, [navigate]);

  const fetchInquiries = async () => {
    try {
      const res = await axios.get("/api/inquiries");
      setInquiries(res.data);
    } catch (err) {
      console.error("Inquiry Error:", err);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Blog Error:", err);
    }
  };

  const deleteInquiry = async (id) => {
    if (window.confirm("Delete this inquiry?")) {
      await axios.delete(`/api/inquiries/${id}`);
      fetchInquiries();
    }
  };

  const deleteBlog = async (id) => {
    if (window.confirm("Delete this blog post?")) {
      await axios.delete(`/api/blogs/${id}`);
      fetchBlogs();
    }
  };

  const handleAddGallery = async () => {
    if (!imgUrl) return alert("Please paste an image URL");

    let finalUrl = imgUrl;

    if (imgUrl.includes("drive.google.com")) {
      // This looks for the ID specifically
      const parts = imgUrl.split("/d/");
      if (parts.length > 1) {
        const fileId = parts[1].split("/")[0]; // This gets '19DlvBc5zRWHxSJUYsKyHAvUSyTYcDrZU'

        // CRITICAL: Notice the '$' before the '{'
        finalUrl = `https://lh3.googleusercontent.com/u/0/d/YOUR_ID_HERE0...{fileId}`;
      }
    }

    // LOG THIS to your ThinkBook console (F12) to check it BEFORE sending to Atlas
    console.log("Final URL checking:", finalUrl);

    try {
      await axios.post("/api/gallery", {
        imageUrl: finalUrl,
        caption: caption || "New School Event",
        category: "Education",
      });
      alert("Added successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] mt-16 p-6 md:p-12 relative">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-black text-[#113B45]">
              Admin <span className="text-[#F2A365]">Dashboard</span>
            </h1>
            <p className="text-[#3D737F] font-bold italic">
              Manage "The Rising Stars" Content
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#113B45] text-white px-6 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-[#F2A365] transition-all shadow-lg"
            >
              <Plus size={20} /> Add Image
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("isAdmin");
                navigate("/login");
              }}
              className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
            >
              <LogOut size={20} />
            </button>
          </div>
        </header>

        {/* --- TABS --- */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-black transition-all ${activeTab === "inquiries" ? "bg-[#113B45] text-white shadow-xl" : "bg-white text-[#3D737F] border border-orange-100"}`}
          >
            <Mail size={18} /> Inquiries ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-black transition-all ${activeTab === "blogs" ? "bg-[#113B45] text-white shadow-xl" : "bg-white text-[#3D737F] border border-orange-100"}`}
          >
            <BookOpen size={18} /> Blog Posts ({blogs.length})
          </button>
        </div>

        {/* --- INQUIRIES VIEW --- */}
        {activeTab === "inquiries" && (
          <div className="grid gap-6 mb-20">
            {Array.isArray(inquiries) && inquiries.length > 0 ? (
              inquiries.map((iq) => (
                <div
                  key={iq._id}
                  className="bg-white rounded-[2rem] p-8 shadow-md border border-white flex flex-col md:flex-row justify-between items-center gap-6"
                >
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-black text-[#113B45] flex items-center gap-2">
                      <User size={18} className="text-[#F2A365]" /> {iq.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm font-bold text-[#3D737F]">
                      <span className="flex items-center gap-1">
                        <Mail size={14} /> {iq.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone size={14} /> {iq.phone}
                      </span>
                    </div>
                    <div className="bg-[#FFF9F0] p-4 rounded-2xl text-[#113B45] text-sm border-l-4 border-[#F2A365]">
                      <p className="font-bold mb-1 text-[#D97706]">
                        Subject: {iq.subject}
                      </p>
                      <p className="italic">
                        "{iq.message || "No message content provided."}"
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteInquiry(iq._id)}
                    className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shrink-0"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-orange-100">
                <p className="text-[#3D737F] font-bold text-lg">
                  No inquiries found yet.
                </p>
              </div>
            )}
          </div>
        )}

        {/* --- BLOGS VIEW --- */}
        {activeTab === "blogs" && (
          <div className="mb-20">
            <button
              onClick={() => {
                setEditingBlog(null);
                setShowBlogForm(true);
              }}
              className="mb-8 w-full md:w-auto bg-[#F2A365] text-white px-10 py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-[#113B45] transition-all flex items-center justify-center gap-2"
            >
              <Plus size={24} /> Create New Blog Post
            </button>
            <div className="grid gap-4">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white p-6 rounded-[2rem] shadow-md flex justify-between items-center border border-white"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <BookOpen size={30} className="text-[#F2A365]" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#113B45] text-lg">
                        {blog.title}
                      </h4>
                      <p className="text-xs text-[#3D737F] font-bold uppercase tracking-widest">
                        {blog.category} • By {blog.author}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingBlog(blog);
                        setShowBlogForm(true);
                      }}
                      className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- GALLERY MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#113B45]/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white w-full max-w-lg rounded-[3rem] p-10 shadow-2xl">
            <h2 className="text-2xl font-black text-[#113B45] mb-6 flex items-center gap-2">
              <ImageIcon className="text-[#F2A365]" /> Add to Gallery
            </h2>
            <input
              type="text"
              placeholder="Paste Image URL..."
              className="w-full p-4 bg-[#FFF9F0] rounded-2xl mb-4 outline-none"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <input
              type="text"
              placeholder="Caption"
              className="w-full p-4 bg-[#FFF9F0] rounded-2xl mb-6 outline-none"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <button
              onClick={handleAddGallery}
              className="w-full bg-[#F2A365] text-white py-4 rounded-2xl font-black text-lg"
            >
              Publish to Gallery
            </button>
          </div>
        </div>
      )}

      {/* --- BLOG FORM MODAL --- */}
      {showBlogForm && (
        <BlogFormModal
          blog={editingBlog}
          onClose={() => setShowBlogForm(false)}
          onSave={fetchBlogs}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
