import React, { useEffect } from "react";
import { CheckCircle, MapPin, Rocket, Users, BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import branch1_1 from "../assets/franchise/49.jpg";
import branch1_2 from "../assets/franchise/48.jpg";
import branch1_3 from "../assets/franchise/50.jpg";

import branch2_1 from "../assets/franchise/44.jpg";
import branch2_2 from "../assets/franchise/45.jpg";
import branch2_3 from "../assets/franchise/46.jpg";

import branch3_1 from "../assets/franchise/51.jpg";
import branch3_2 from "../assets/franchise/52.jpg";
import branch3_3 from "../assets/franchise/53.jpg";

const Franchise = () => {
  useEffect(() => {
    // This force-clears any previous scroll position
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  const branches = [
    {
      name: "Main Franchise",
      location: "KK Road Branch",
      images: [branch1_1, branch1_2, branch1_3],
    },
    {
      name: "Franchise 1",
      location: "Asriyar Nagar Branch",
      images: [branch2_1, branch2_2, branch2_3],
    },
    {
      name: "Franchise 2",
      location: "Collectorate Branch",
      images: [branch3_1, branch3_2, branch3_3],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0]  pt-24">
      {/* 1. HERO SECTION */}
      <section className="py-16 px-6 text-center bg-white rounded-b-[4rem] shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#113B45] mb-6">
            Franchise <span className="text-[#F2A365]">Opportunity</span>
          </h1>
          <p className="text-[#3D737F] text-lg font-medium leading-relaxed">
            Welcome to the Rising Stars Playschool Franchise Opportunity! At
            Rising Stars, we are dedicated to fostering an environment where
            young minds can grow, explore, and discover their potential.
          </p>
        </div>
      </section>

      {/* 2. WHY JOIN US (Grid Section) */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Proven Business Model",
              text: "Refined over years, ensuring operational excellence and high standards of education.",
              icon: <Rocket />,
            },
            {
              title: "Comprehensive Support",
              text: "From site selection to marketing, we are with you every step of the way.",
              icon: <Users />,
            },
            {
              title: "Curriculum Excellence",
              text: "Rooted in our 'Learn through Play' philosophy to nurture critical thinking.",
              icon: <BookOpen />,
            },
            {
              title: "Community Impact",
              text: "Provide high-quality early education that shapes young lives in your community.",
              icon: <CheckCircle />,
            },
            {
              title: "Growth Opportunities",
              text: "Capitalize on the booming early education industry with a trusted brand.",
              icon: <Rocket />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-orange-50"
            >
              <div className="text-[#F2A365] mb-4 bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-[#113B45] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR BRANCHES (Carousels) */}
      <section className="py-20 bg-[#113B45] rounded-[4rem] mx-4 md:mx-10 mb-20 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black">
              Our <span className="text-[#F2A365]">Branches</span>
            </h2>
            <p className="text-orange-100 mt-2">
              Explore our growing family across the region
            </p>
          </div>

          <div className="space-y-24">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Text Side */}
                <div className="md:w-1/3 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-[#F2A365] mb-2 font-black uppercase tracking-widest text-sm">
                    <MapPin size={18} /> {branch.name}
                  </div>
                  <h3 className="text-3xl font-black mb-6">
                    {branch.location}
                  </h3>
                </div>

                {/* Carousel Side */}
                <div className="md:w-2/3 w-full">
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="rounded-[3rem] shadow-2xl overflow-hidden"
                  >
                    {branch.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="h-[300px] md:h-[400px] bg-gray-200">
                          <img
                            src={img}
                            alt={`${branch.location} view ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="pb-24 px-6 text-center">
        <div className="bg-[#F2A365] max-w-4xl mx-auto p-12 rounded-[3rem] shadow-xl text-white">
          <h2 className="text-3xl font-black mb-4">
            Start Your Franchise Journey
          </h2>
          <p className="font-bold mb-8 opacity-90">
            Complete the Application Form to secure your future in early
            education.
          </p>
          <button className="bg-[#113B45] text-white px-12 py-4 rounded-full font-black text-xl hover:scale-105 transition-all">
            Enroll Now !!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
