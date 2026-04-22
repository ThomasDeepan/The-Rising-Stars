import React from "react";

import heroImage from "../assets/main.jpg";
import heroBg from "../assets/gallery-bg.png";
import actbg from "../assets/teacher-bg.png";
import about from "../assets/about.jpeg";
import doodles from "../assets/doodle1.png";
import doodles2 from "../assets/doodle2.png";
import doodles3 from "../assets/doodle3.png";

import physicalImg from "../assets/card/1.jpg";
import toysImg from "../assets/card/34.jpg";
import writingImg from "../assets/card/35.jpg";

import ContactUs from "./Contact";

// Import your activity icons/images
import imgVisually from "../assets/activities/activities1.png";
import imgToys from "../assets/activities/activities2.png";
import imgWriting from "../assets/activities/activities3.png";
import imgPhysical from "../assets/activities/activities4.png";
import imgAbacus from "../assets/activities/activities5.png";
import imgGames from "../assets/activities/activities6.png";
import imgDrawing from "../assets/activities/activities7.png";
import imgMusic from "../assets/activities/activities8.png";

// Importing gallery section
import img2 from "../assets/gallery/1.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/12.jpg";
import img1 from "../assets/gallery/13.jpg";
import img5 from "../assets/gallery/17.jpg";
import img6 from "../assets/gallery/35.jpg";
import img7 from "../assets/gallery/41.jpg";
import img8 from "../assets/gallery/42.jpg";

import Hero from "../Components/Hero";
import { Lightbulb, Heart, Users, ShieldCheck } from "lucide-react";
import {
  Eye,
  ToyBrick,
  PenTool,
  Dumbbell,
  Calculator,
  PartyPopper,
  Palette,
  Music,
} from "lucide-react";
import discoveryImg from "../assets/dicovery.avif";

const TestimonialItem = ({ name, date, text }) => (
  <div className="border-b border-gray-200 pb-6 last:border-0">
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-gray-900">
        {name} -{" "}
        <span className="text-sm font-normal text-gray-500 italic">{date}</span>
      </span>
    </div>
    <div className="flex text-yellow-400 text-sm mb-3">
      {/* 5 Star Rating */}
      {"★★★★★"}
    </div>
    <p className="text-gray-600 text-sm leading-relaxed italic">"{text}"</p>
  </div>
);

const benefits = [
  {
    icon: <Lightbulb className="text-[#F2A365]" />,
    title: "Innovative Thinking",
    desc: "Developing cognitive and creative problem-solving skills.",
  },
  {
    icon: <ShieldCheck className="text-[#3D737F]" />,
    title: "Emotional Resilience",
    desc: "A nurturing culture to build inner strength and confidence.",
  },
  {
    icon: <Users className="text-[#F2A365]" />,
    title: "Vital Social Skills",
    desc: "Learning to grow and interact as responsible individuals.",
  },
];

const educationCards = [
  {
    title: "Play Group",
    desc: "Dive Into Early Education With Our Exploratory Playgroup Where Toddlers Aged 2 To 2.6 Years Engage In Fun, Sensory-Based Activities.",
    image: physicalImg, // Replace with your yoga/physical image
    color: "#3D737F", // Teal
    shape: "rounded-full",
  },
  {
    title: "Nursery",
    desc: "Our Foundational Nursery Program For Children Aged 2.6 To 4 Years Focuses On Laying The Groundwork For Lifelong Learning Through Interactive Storytelling.",
    image: toysImg, // Replace with your writing image
    color: "#E67E7E", // Coral
    shape: "rounded-br-[80px]",
  },
  {
    title: "Day Care",
    desc: "Prepare Your Child For Primary Education With Our Comprehensive Kindergarten, For Ages above 1.8 Years. This Program Enhances Cognitive Development.",
    image: writingImg, // Replace with your toys image
    color: "#F2A365", // Orange
    shape: "rounded-3xl",
  },
];

const activities = [
  {
    title: "Learning Visually",
    img: imgVisually,
    color: "#3D737F",
    bg: "bg-[#EBF5F6]",
  },
  { title: "Toys & Play", img: imgToys, color: "#F2A365", bg: "bg-[#FFF4EB]" },
  {
    title: "Writing Games",
    img: imgWriting,
    color: "#E67E7E",
    bg: "bg-[#FEECEC]",
  },
  {
    title: "Physical Activity",
    img: imgPhysical,
    color: "#F9CC48",
    bg: "bg-[#FFF9E6]",
  },
  {
    title: "Abacus Training",
    img: imgAbacus,
    color: "#3D737F",
    bg: "bg-[#EBF5F6]",
  },
  { title: "Games & Fun", img: imgGames, color: "#F2A365", bg: "bg-[#FFF4EB]" },
  {
    title: "Drawing & Painting",
    img: imgDrawing,
    color: "#E67E7E",
    bg: "bg-[#FEECEC]",
  },
  {
    title: "Music & Rhymes",
    img: imgMusic,
    color: "#F9CC48",
    bg: "bg-[#FFF9E6]",
  },
];

const galleryItems = [
  { src: img1, size: "h-64" },
  { src: img2, size: "h-80" },
  { src: img3, size: "h-64" },
  { src: img4, size: "h-96" },
  { src: img5, size: "h-72" },
  { src: img6, size: "h-80" },
  { src: img7, size: "h-64" },
  { src: img8, size: "h-80" },
];

const reviews = [
  {
    name: "Hemalatha",
    date: "2024-04-10",
    text: "We absolutely loved having our daughter at this school. They care for her as their own. The level in which she learned and excelled a lot.",
    type: "Google Review",
  },
  {
    name: "Yasmin Noor",
    date: "2024-04-10",
    text: "Hi everyone, Rising Star Kindergarten follows an interactive and play-based learning approach, ensuring children develop essential skills.",
    type: "Feedback",
  },
  {
    name: "Kalai Mugil",
    date: "2024-04-02",
    text: "Thank you for giving me this opportunity to share something about Rising Stars Play School. I am happy to see my son's development.",
    type: "Google Review",
  },
  {
    name: "Suraiya Begum",
    date: "2024-03-30",
    text: "Excellent place where the kids get nurtured. Responsible management and very knowledgeable mentors.",
    type: "Feedback",
  },
];

const Home = () => {
  return (
    // SECTION: Full-width container to hold background shapes if needed
    <div className="w-full bg-white relative overflow-hidden ">
      <Hero />
      {/* --- PROGRAMS SECTION (Placed inside the Home/Hero wrapper) --- */}
      <section className="py-24 bg-[#FFF9F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mt-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT: The Visual (Discovery) */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-[#F2A365]/10 rounded-[3rem] rotate-3"></div>
            <img
              src={discoveryImg}
              alt="Child discovering"
              className="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-auto object-cover border-8 border-white"
            />
            {/* Decorative Plaything: A floating star */}
            <div className="absolute -bottom-8 -left-8 animate-pulse text-[#F2A365] opacity-20 hidden md:block">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          {/* RIGHT: The Text Content */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <h4 className="text-[#F2A365] font-black uppercase tracking-widest text-sm">
                Discovering, Growing and Thriving Together
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#113B45] leading-tight">
                Why Schooling At{" "}
                <span className="text-[#3D737F]">Lower Age?</span>
              </h2>
              <p className="text-[#3D737F] text-lg leading-relaxed">
                Schools have a significant impact on a child's cognitive,
                social, and emotional development. Beyond academics, schools
                offer a nurturing culture where kids gain innovative thinking
                skills, emotional resilience, and vital social skills.
              </p>
            </div>

            {/* ICON GRID */}
            <div className="grid gap-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-[#113B45] text-xl">
                      {item.title}
                    </h3>
                    <p className="text-[#3D737F]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="bg-white/50 p-6 rounded-3xl border-l-8 border-[#F2A365] text-[#113B45] italic font-medium">
              "School is the place where children learn, grow, and develop into
              responsible individuals through a truly holistic education."
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#FFF9F0] overflow-hidden">
        {/* BACKGROUND LAYER 1: The Watermark Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url(${doodles})`,
            backgroundSize: "600px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* BACKGROUND LAYER 2: Organic Floating Shapes */}
        {/* Top Left Circle */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F2A365] opacity-10 rounded-full blur-3xl"></div>
        {/* Mid Right Semi-Circle */}
        <div className="absolute top-1/2 -right-16 w-48 h-96 bg-[#3D737F] opacity-10 rounded-l-full blur-2xl"></div>
        {/* Bottom Center Blob */}
        <div className="absolute -bottom-24 left-1/4 w-96 h-48 bg-[#E67E7E] opacity-10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-[#F2A365] font-black uppercase tracking-widest text-sm">
              Discovering & Growing
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#113B45]">
              OUR <span className="text-[#3D737F]">EDUCATION</span>
            </h2>
            <div className="w-24 h-2 bg-[#F2A365] mx-auto rounded-full"></div>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {educationCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[2.5rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-white/50"
              >
                <div className="relative overflow-hidden rounded-[2rem] mb-6 h-64">
                  <img
                    src={card.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="px-4 pb-6 space-y-3">
                  <h3 className="text-2xl font-black text-[#113B45]">
                    {card.title}
                  </h3>
                  <p className="text-[#3D737F] leading-relaxed text-sm font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* activities section */}

      <section className="relative py-24 bg-white  overflow-hidden">
        {/* 1. DOODLE WATERMARK LAYER */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url(${doodles2})`,
            backgroundSize: "500px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* 2. COLOR GLOWS (Theme Accents) */}
        {/* Top Right Orange Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F2A365]/10 rounded-full blur-[100px] pointer-events-none"></div>
        {/* Bottom Left Teal Glow */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3D737F]/10 rounded-full blur-[100px] pointer-events-none"></div>
        {/* Center Soft Coral Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E67E7E]/05 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-[#F2A365] font-black uppercase tracking-widest text-sm">
              What We Offer
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#113B45]">
              Our <span className="text-[#3D737F]">Activities</span>
            </h2>
            <div className="w-20 h-2 bg-[#F2A365] mx-auto rounded-full"></div>
          </div>

          {/* ACTIVITIES GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {activities.map((act, index) => (
              <div
                key={index}
                className={`${act.bg} p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 group cursor-pointer border-2 border-transparent hover:border-white shadow-sm`}
              >
                {/* Image Container */}
                <div className="w-24 h-24 mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <img
                    src={act.img}
                    alt={act.title}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-black text-[#113B45] leading-tight">
                  {act.title}
                </h3>

                {/* Small dot accent */}
                <div
                  className="w-2 h-2 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: act.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our gallery section  */}

      <section className="relative py-24 bg-[#FFF9F0] overflow-hidden">
        {/* THEME BACKGROUND */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url(${doodles3})`,
            backgroundSize: "450px",
          }}
        />

        {/* Soft Theme Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2A365]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3D737F]/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-[#F2A365] font-black uppercase tracking-widest text-sm">
              Our Happy Moments
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#113B45]">
              Life At <span className="text-[#3D737F]">Rising Stars</span>
            </h2>
            <div className="w-24 h-2 bg-[#F2A365] mx-auto rounded-full"></div>
          </div>

          {/* MASONRY GRID (CSS Columns for Speed) */}
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-[2.5rem] border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid"
              >
                <img
                  src={item.src}
                  alt={`Rising Stars Gallery ${index + 1}`}
                  className={`w-full ${item.size} object-cover transition-transform duration-700 group-hover:scale-110`}
                />

                {/* Hover Overlay with Theme Color */}
                <div className="absolute inset-0 bg-[#3D737F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#3D737F] shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- START OF TESTIMONIALS SECTION --- */}
      <section className="relative py-24 bg-white font-['Nunito'] overflow-hidden">
        {/* THEME BACKGROUND: Doodles and Glows */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url(${doodles})`,
            backgroundSize: "400px",
          }}
        />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F2A365]/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h4 className="text-[#F2A365] font-black uppercase tracking-widest text-sm">
              Parent Perspectives
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#113B45]">
              TESTI<span className="text-[#3D737F]">MONIALS</span>
            </h2>
            <div className="w-24 h-2 bg-[#F2A365] mx-auto rounded-full"></div>
          </div>

          {/* Main Container for Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Google Reviews */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 flex-grow bg-orange-100 rounded-full"></div>
                <h3 className="text-2xl font-black text-[#113B45] whitespace-nowrap">
                  Google Reviews
                </h3>
                <div className="h-1 flex-grow bg-orange-100 rounded-full"></div>
              </div>

              <TestimonialItem
                name="Hemalatha"
                date="2024-04-10"
                text="We absolutely loved having our daughter at this school. They care her as their own. The level in which she learned and excelled a lot. She involved in the school's activities like different project expos, workshops, festival celebrations etc."
                color="#F2A365"
              />
              <TestimonialItem
                name="Kalai Mugil"
                date="2024-04-02"
                text="Thank you for giving me this opportunity to share something about Rising Stars Play school. I am happy to see my son's development for the past 20 days. He loves to be in the school. Some of the activity helps to improve his innovative knowledge."
                color="#F2A365"
              />
              <TestimonialItem
                name="Hema Padmanaban"
                date="2024-03-30"
                text="Wonderful place for kids. Giving all the preschool training which helps us our child for schooling preparation. Special mention to the teachers and correspondent for special care on each kid."
                color="#F2A365"
              />
            </div>

            {/* Right Column: FeedBacks */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 flex-grow bg-teal-50 rounded-full"></div>
                <h3 className="text-2xl font-black text-[#3D737F] whitespace-nowrap">
                  FeedBacks
                </h3>
                <div className="h-1 flex-grow bg-teal-50 rounded-full"></div>
              </div>

              <TestimonialItem
                name="Yasmin Noor"
                date="2024-04-10"
                text="Hi everyone, Rising star kindergarten. The school follows an interactive and play-based learning approach, ensuring that children develop essential skills while having fun. The curriculum includes storytelling, arts and crafts, music."
                color="#3D737F"
              />
              <TestimonialItem
                name="Manogaran Induma..."
                date="2024-04-02"
                text="A good place for our little one to nurture for their future. Very knowledgeable mentors and caring nannies with a decent..."
                color="#3D737F"
              />
              <TestimonialItem
                name="Suriya Begum"
                date="2024-03-30"
                text="Excellent place where the kids get nurtured. Responsible management."
                color="#3D737F"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------old code---------------------- */}
      {/* ----------------------------------
            ----------------------------------
      ---------------------------------- */}

      <ContactUs />
    </div>
  );
};

export default Home;
