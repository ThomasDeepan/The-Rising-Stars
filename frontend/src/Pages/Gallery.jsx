import React, { useEffect, useState } from "react";
import axios from "axios";
import { Camera, X, Maximize2 } from "lucide-react";
import doodles from "../assets/doodle1.png";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  // 1. Fetch all images (Legacy + New Admin Uploads)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("/api/gallery");
        console.log("RAW API RESPONSE:", res.data); // <--- Add this!

        // If the data is wrapped in an object like { photos: [] }
        // you need to access that specific property
        if (Array.isArray(res.data)) {
          setImages(res.data);
        } else if (res.data && Array.isArray(res.data.photos)) {
          setImages(res.data.photos);
        } else {
          setImages([]); // Force to empty array if data is weird
        }
      } catch (err) {
        console.error("Failed to load gallery:", err);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFF9F0] pt-28 pb-20 px-4 md:px-10">
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${doodles})`,
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-block p-3 bg-orange-100 rounded-2xl mb-4">
          <Camera className="text-[#F2A365]" size={32} />
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#113B45] mb-4 uppercase">
          Our Star <span className="text-[#F2A365]">Gallery</span>
        </h1>
        <p className="text-[#3D737F] text-lg md:text-xl font-bold italic">
          "Capturing the joy, learning, and growth of our little stars."
        </p>
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#F2A365]"></div>
        </div>
      ) : (
        /* MASONRY GRID LAYOUT */
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-7xl mx-auto">
          {images?.map((img) => (
            <div
              key={img._id}
              className="relative break-inside-avoid group cursor-pointer rounded-[2rem] overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImg(img.imageUrl)}
            >
              <img
                src={img.imageUrl}
                alt={img.caption || "Rising Stars Memory"}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                // Fallback for broken images
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=Rising+Stars+Memory";
                }}
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-bold text-sm mb-2">
                  {img.caption || "School Memory"}
                </p>
                <div className="flex items-center text-[#F2A365] gap-2 text-xs font-black uppercase tracking-tighter">
                  <Maximize2 size={14} /> Click to Enlarge
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LIGHTBOX / FULLSCREEN VIEW */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-[#F2A365] transition-colors">
            <X size={40} />
          </button>
          <img
            src={selectedImg}
            className="max-w-full max-h-full rounded-2xl shadow-2xl border-4 border-white/20"
            alt="Enlarged view"
          />
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && images.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] shadow-inner border-2 border-dashed border-orange-200">
          <p className="text-[#3D737F] font-bold text-xl">
            No memories found yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
