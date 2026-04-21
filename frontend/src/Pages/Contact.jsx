import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, Clock, Send } from "lucide-react";
import doodles from "../assets/doodle2.png";
import contactIllustration from "../assets/240.jpeg"; // Replace with a friendly preschool-themed illustration

const Contact = () => {
  // 1. STATE DEFINITION (Place this at the very top of the component)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // 2. THE CHANGE HANDLER (Updates state as the user types)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. THE SUBMIT HANDLER (Talks to the backend Port 5000)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );
      alert("Success! The Rising Stars team will contact you soon.");
      // Clear form after success
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      alert(
        "Backend Connection Error. Check if your server is running on Port 5000!",
      );
    }
  };

  return (
    <section className="relative py-24 bg-[#FFF9F0] overflow-hidden">
      {/* 1. THEME BACKGROUND LAYER */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${doodles})`, backgroundSize: "400px" }}
      />
      {/* Organic Soft Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F2A365]/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3D737F]/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-[#F2A365] font-black uppercase tracking-widest text-sm">
            Reach Out
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#113B45]">
            GET IN <span className="text-[#3D737F]">TOUCH</span>
          </h2>
          <div className="w-20 h-2 bg-[#F2A365] mx-auto rounded-full"></div>
        </div>

        {/* INFO CARDS (Three Column) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Clock />,
              title: "Opening Hours",
              detail: "Mon-Fri: 9am - 2:30pm",
              sub: "Sat: 9:30am - 12pm",
              color: "#F2A365",
              bg: "bg-[#FFF4EB]",
            },
            {
              icon: <Mail />,
              title: "Email Us",
              detail: "risingstarskidsschoolvpm@gmail.com",
              sub: "Online Support 24/7",
              color: "#3D737F",
              bg: "bg-[#EBF5F6]",
            },
            {
              icon: <Phone />,
              title: "Phone Number",
              detail: "+91 9566862918",
              sub: "Call us for Admission",
              color: "#E67E7E",
              bg: "bg-[#FEECEC]",
            },
          ].map((info, i) => (
            <div
              key={i}
              className={`${info.bg} p-8 rounded-[2.5rem] text-center border-2 border-white shadow-sm hover:shadow-xl transition-all group`}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform"
                style={{ backgroundColor: info.color }}
              >
                {React.cloneElement(info.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-black text-[#113B45] mb-2">
                {info.title}
              </h3>
              <p className="text-[#3D737F] font-bold text-sm">{info.detail}</p>
              <p className="text-[#3D737F]/60 text-xs mt-1">{info.sub}</p>
            </div>
          ))}
        </div>

        {/* MAIN FORM & ILLUSTRATION */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-orange-50 grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration Side */}
          <div className="hidden md:block">
            <img
              src={contactIllustration}
              alt="Contact Us"
              className="w-full h-auto drop-shadow-xl animate-pulse"
              style={{ animationDuration: "4s" }}
            />
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name} // Binds state to input
                onChange={handleChange} // Updates state
                className="w-full px-6 py-4 rounded-2xl bg-[#FFF9F0] border-2 border-transparent focus:border-[#F2A365] outline-none transition-all font-medium"
                name="name" // MUST match the key in formData
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-[#FFF9F0] border-2 border-transparent focus:border-[#F2A365] outline-none transition-all font-medium"
                name="email"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-2xl bg-[#FFF9F0] border-2 border-transparent focus:border-[#3D737F] outline-none transition-all font-medium"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-2xl bg-[#FFF9F0] border-2 border-transparent focus:border-[#3D737F] outline-none transition-all font-medium"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-2xl bg-[#FFF9F0] border-2 border-transparent focus:border-[#E67E7E] outline-none transition-all font-medium resize-none"
              placeholder="Your Message"
            ></textarea>

            <button className="w-full bg-[#113B45] text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#3D737F] transition-all shadow-lg shadow-slate-200 group">
              Submit Inquiry
              <Send
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
