import React from "react";
import { Target, Eye, Sun, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import founder from "../assets/founder.jpeg";
import cofounder from "../assets/cofounder.jpeg";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFF9F0] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto pt-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#113B45] mb-6 leading-tight">
            Welcome To <span className="text-[#F2A365]">Rising Stars!</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#3D737F] font-bold italic mb-8">
            "A Pre-School Which Enlightens Your Kids To Rise Like A Sun And
            Shine Like A Star."
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#F2A365] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#113B45] transition-all shadow-lg hover:shadow-none"
          >
            Enquire Us
          </button>
        </div>

        {/* Decorative Elements */}
        <Sun
          className="absolute top-10 right-10 text-orange-200 opacity-50 animate-pulse"
          size={120}
        />
        <Star
          className="absolute bottom-10 left-10 text-yellow-300 opacity-40"
          size={80}
        />
      </section>

      {/* 2. OUR PHILOSOPHY SECTION */}
      <section className="py-20 bg-white rounded-[4rem] mx-4 md:mx-10 shadow-sm border border-orange-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#113B45] mb-6 uppercase">
              Pre-School In <span className="text-[#F2A365]">Villupuram!</span>
            </h2>
            <p className="text-[#3D737F] leading-relaxed text-lg font-medium mb-6">
              RISING STARS KIDS SCHOOL IS THE BEST PLACE TO KICK START YOUR
              KIDS’ ACADEMIC JOURNEY. WE BELIEVE THAT LEARNING SHOULD TAKE PLACE
              IN A HAPPY, CARING AND STIMULATING ENVIRONMENT IN WHICH FACULTIES,
              CHILDREN AND PARENTS HAVE AN IMPORTANT ROLE TO PLAY.
            </p>
            <div className="bg-[#FFF9F0] p-6 rounded-3xl border-l-8 border-[#F2A365]">
              <p className="text-[#113B45] font-bold">
                Our Foundational Nursery Program for children aged 1.8 to 4
                years focuses on laying the groundwork for lifelong learning
                through interactive storytelling, basic numeracy, and language
                skills.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder for School Images */}
            <div className="h-64 bg-orange-100 rounded-[2rem] flex items-center justify-center">
              <Heart className="text-[#F2A365]" size={40} />
            </div>
            <div className="h-64 bg-[#3D737F] rounded-[2rem] mt-8 flex items-center justify-center text-white font-black">
              PLAY
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (The "Chanakya" Strategy) */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#113B45] text-white p-12 rounded-[3rem] transform hover:scale-105 transition-all">
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-[#F2A365]" />
            </div>
            <h3 className="text-3xl font-black mb-4">Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed font-medium">
              To Provide A Dynamic Educational Environment Where Children Can
              Learn And Apply The Principles Of Chanakya's Teachings.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-orange-50 transform hover:scale-105 transition-all">
            <div className="bg-[#FFF9F0] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} className="text-[#F2A365]" />
            </div>
            <h3 className="text-3xl font-black text-[#113B45] mb-4">Vision</h3>
            <p className="text-lg text-[#3D737F] leading-relaxed font-medium">
              To Nurture Future Leaders Equipped With The Knowledge And Skills
              To Shape Their Communities And The World.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#113B45] mb-4 uppercase">
              The Hearts Behind{" "}
              <span className="text-[#F2A365]">Rising Stars</span>
            </h2>
            <p className="text-[#3D737F] font-bold italic text-lg">
              "Inspiring Little Hearts For Big Dreams"
            </p>
          </div>

          <div className="space-y-20">
            {/* FOUNDER CARD */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-[#FFF9F0] p-8 md:p-12 rounded-[4rem] border border-orange-100 shadow-sm">
              <div className="w-full md:w-1/3">
                <img
                  src={founder}
                  alt="Mr. Anandharaj"
                  className="w-full aspect-square object-cover object-top rounded-[3rem] shadow-2xl border-8 border-white"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-black text-[#113B45] mb-2">
                  Founder — Mr. Anandharaj
                </h3>
                <p className="text-[#F2A365] font-black uppercase tracking-widest text-sm mb-6">
                  Visionary & Leader
                </p>
                <p className="text-[#3D737F] leading-relaxed font-medium mb-6">
                  Mr. Anandharaj, the founder, with around 15 years of vast
                  experience in marketing, advertising, branding, and promoting
                  the growth and significance of educational products. His
                  vision of reforming early childhood education was firmly
                  established by his proficiency in identifying the needs of his
                  audience, delivering strong messages, as well as creative
                  solutions. Through Rising Stars, his team was able to achieve
                  his aim of establishing an educational environment that
                  combines innovative thinking, curiosity, and essential
                  abilities since he had a strong enthusiasm for developing
                  young minds and a dedication to holistic development. Rising
                  Stars, which offers a caring environment where kids can go on
                  a happy journey of exploration and development, is a tribute
                  to his commitment today.
                </p>
                <div className="bg-white p-6 rounded-3xl border-l-4 border-[#F2A365] italic text-[#113B45] font-bold shadow-sm">
                  "Every Child Is A Seed Of Infinite Potential, And Our Mission
                  Is To Nurture Curiosity And Confidence."
                </div>
              </div>
            </div>

            {/* CO-FOUNDER CARD */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white p-8 md:p-12 rounded-[4rem] border-4 border-[#FFF9F0] shadow-xl">
              <div className="w-full md:w-1/3">
                <img
                  src={cofounder}
                  alt="Mrs. Sowmya Anandharaj"
                  className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl border-8 border-[#FFF9F0]"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-black text-[#113B45] mb-2">
                  Co-Founder — Mrs. Sowmya Anandharaj
                </h3>
                <p className="text-[#F2A365] font-black uppercase tracking-widest text-sm mb-6">
                  Educator & Strategist
                </p>
                <p className="text-[#3D737F] leading-relaxed font-medium mb-6">
                  Mrs. Sowmya Anandharaj, a well-paid corporate worker at the
                  time, bravely quit her job in 2018 to pursue her passion for
                  early childhood education. She devoted the following five
                  years to understand every aspect of preschool teaching and
                  gained practical expertise in the sector. With a clear vision
                  and a profound understanding, Sowmya Anandharaj started to
                  work for Rising Stars in Villupuram in 2023. This preschool
                  was notable for its special fusion of caring educators and
                  top-notch teaching. By emphasizing holistic development, the
                  school made sure that every kid had a happy and fulfilling
                  educational experience. Rising Stars started growing by
                  opening a new branch in Villupuram. As a part of the success,
                  Rising Stars Started providing the quality education in two
                  more places in 2025 in Villupuram.
                </p>
                <div className="bg-[#FFF9F0] p-6 rounded-3xl border-l-4 border-[#113B45] italic text-[#113B45] font-bold shadow-sm">
                  "Every Child Holds Limitless Potential, And Our Mission Is To
                  Cultivate Curiosity And Confidence."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
