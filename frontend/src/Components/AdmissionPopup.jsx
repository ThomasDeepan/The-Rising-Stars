import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdmissionPopup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Popup will now trigger every time the component mounts
    const timer = setTimeout(() => setShow(true), 500);

    // Cleanup the timer if the user leaves the page before it pops up
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleEnroll = () => {
    setShow(false);
    navigate("/contact");
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 animate-fadeIn"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center border-b-8 border-[#ff6b6b]">
        {/* The 'X' Close Symbol */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 transition-colors"
        >
          &times;
        </button>

        {/* Theme Icon/Graphic */}
        <div className="text-5xl mb-4">🏫</div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          For Admissions
        </h2>
        <p className="text-gray-600 mb-6">Enrollment is now open.</p>

        {/* Action Button */}
        <button
          onClick={handleEnroll}
          className="w-full py-3 px-6 bg-[#ff6b6b] text-white font-bold rounded-full shadow-lg hover:bg-[#ee5a5a] transition-all transform hover:scale-105"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default AdmissionPopup;
