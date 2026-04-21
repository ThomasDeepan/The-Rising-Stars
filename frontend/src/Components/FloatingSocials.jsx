import React from "react";

const FloatingSocials = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-9999">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9566862918"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
        {/* Optional Tooltip */}
        <span className="absolute right-16 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          Chat with us
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/risingstarskidsschoolvpm"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
          alt="Instagram"
          className="w-8 h-8"
        />
        <span className="absolute right-16 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          Follow us
        </span>
      </a>
    </div>
  );
};
export default FloatingSocials;
