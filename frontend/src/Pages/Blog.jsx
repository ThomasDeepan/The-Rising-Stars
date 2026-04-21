import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, User, Tag, ArrowRight, X, BookOpen } from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];
  const filtered =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const categoryColors = {
    All: "bg-[#113B45] text-white",
    Education: "bg-purple-100 text-purple-700",
    Activities: "bg-green-100 text-green-700",
    General: "bg-orange-100 text-orange-700",
    Parenting: "bg-pink-100 text-pink-700",
    Events: "bg-blue-100 text-blue-700",
  };

  const getCatColor = (cat) =>
    categoryColors[cat] || "bg-gray-100 text-gray-700";

  return (
    <div className="min-h-screen bg-[#FFF9F0] font-['Nunito']">
      {/* HERO */}
      <div className="relative overflow-hidden bg-[#113B45] pt-32 pb-20 px-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2A365]/10 rounded-full translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-20 translate-y-20" />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block bg-[#F2A365]/20 text-[#F2A365] px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
            Our Blog
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Stories, Tips & <span className="text-[#F2A365]">Insights</span>
          </h1>
          <p className="text-[#8BB8BF] text-lg font-medium max-w-xl mx-auto">
            Explore our latest articles on child development, activities, and
            everything Rising Stars.
          </p>
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="sticky top-16 z-40 bg-[#FFF9F0]/90 backdrop-blur-sm border-b border-orange-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#F2A365] text-white shadow-md shadow-orange-200 scale-105"
                  : "bg-white text-[#3D737F] border border-orange-100 hover:border-[#F2A365]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-[#F2A365] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-32">
            <BookOpen size={64} className="mx-auto text-orange-200 mb-4" />
            <h3 className="text-2xl font-black text-[#113B45] mb-2">
              No blogs yet
            </h3>
            <p className="text-[#3D737F] font-medium">
              Check back soon for new articles!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog, i) => (
              <article
                key={blog._id}
                onClick={() => setSelectedBlog(blog)}
                className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-white"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Cover Image or Gradient Placeholder */}
                <div className="h-48 overflow-hidden relative">
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#113B45] to-[#3D737F] flex items-center justify-center">
                      <BookOpen size={48} className="text-white/30" />
                    </div>
                  )}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${getCatColor(blog.category)}`}
                  >
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-black text-[#113B45] mb-3 leading-snug group-hover:text-[#F2A365] transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-[#3D737F] text-sm font-medium leading-relaxed mb-5 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-400 font-bold">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User size={12} className="text-[#F2A365]" />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#F2A365]" />
                        {new Date(blog.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-[#F2A365] group-hover:gap-2 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white rounded-[2rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedBlog.coverImage && (
              <div className="h-64 overflow-hidden rounded-t-[2rem]">
                <img
                  src={selectedBlog.coverImage}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-bold ${getCatColor(selectedBlog.category)}`}
                >
                  {selectedBlog.category}
                </span>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-500 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-[#113B45] mb-4 leading-tight">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-gray-400 font-bold mb-8 pb-8 border-b border-gray-100">
                <span className="flex items-center gap-2">
                  <User size={14} className="text-[#F2A365]" />
                  {selectedBlog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#F2A365]" />
                  {new Date(selectedBlog.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="prose prose-lg max-w-none text-[#3D737F] leading-relaxed whitespace-pre-wrap font-medium">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
