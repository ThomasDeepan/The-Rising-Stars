import React from "react";
import logo from "../assets/logo.png";
import founder from "../assets/founder.jpeg";
import cofounder from "../assets/cofounder.jpeg";

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* HERO SECTION */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome To <span className="text-[#ff6b81]">Rising Stars!</span>
        </h1>
        <div className="max-w-3xl mx-auto mt-6 space-y-4">
          <p className="italic text-lg text-gray-700">
            "A Pre-School Which Enlighten Your Kids To Rise Like A Sun And Shine
            Like A Star."
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our Foundational Nursery Program For Children Aged 1.8 To 4 Years
            Focuses On Laying The Groundwork For Lifelong Learning Through
            Interactive Storytelling, Basic Numeracy, And Language Skills, All
            In A Playful And Supportive Setting.
          </p>
        </div>
        <button className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-md">
          Enquire Us
        </button>
      </section>

      {/* PRE SCHOOL SECTION */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          PRE-SCHOOL IN VILLUPURAM!
        </h2>
        <p className="max-w-4xl mx-auto text-[#ff6b81] font-bold text-lg leading-relaxed uppercase">
          RISING STARS KIDS SCHOOL IS THE BEST PLACE TO KICK START YOUR KIDS’
          ACADEMIC JOURNEY. WE BELIEVE THAT LEARNING SHOULD TAKE PLACE IN A
          HAPPY, CARING AND SIMULATING ENVIRONMENT IN WHICH FACULTIES, CHILDREN
          AND PARENTS HAVE AN IMPORTANT ROLE TO PLAY.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-orange-500">Mission</h3>
          <p className="text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-4">
            To Provide A Dynamic Educational Environment Where Children Can
            Learn And Apply The Principles Of Chanakya's Teachings.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-orange-500">Vision</h3>
          <p className="text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-4">
            To Nurture Future Leaders Equipped With The Knowledge And Skills To
            Shape Their Communities And The World.
          </p>
        </div>
      </section>

      {/* FOUNDER & CO-FOUNDER SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">
        {/* Founder */}
        <section className="flex flex-col md:flex-row gap-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          <img
            src={founder}
            alt="Founder"
            className="w-full md:w-64 h-80 object-cover rounded-xl shadow-lg"
          />
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Founder - Mr. Anandharaj
            </h3>
            <h4 className="text-orange-500 font-semibold text-lg italic">
              Inspiring Little Hearts For Big Dreams
            </h4>
            <p className=" text-sm text-gray-600 leading-relaxed md:text-sm">
              Mr. Anandharaj, the founder, with around 15 years of vast
              experience in marketing, advertising, branding, and promoting the
              growth and significance of educational products. His vision of
              reforming early childhood education was firmly established by his
              proficiency in identifying the needs of his audience, delivering
              strong messages, as well as creative solutions. Through Rising
              Stars, his team was able to achieve his aim of establishing an
              educational environment that combines innovative thinking,
              curiosity, and essential abilities since he had a strong
              enthusiasm for developing young minds and a dedication to holistic
              development. Rising Stars, which offers a caring environment where
              kids can go on a happy journey of exploration and development, is
              a tribute to his commitment today.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 bg-white p-4 rounded-r-lg">
              “Every Child Is A Seed Of Infinite Potential, And Our Mission Is
              To Nurture Curiosity And Confidence.”
            </blockquote>
          </div>
        </section>

        {/* Co-Founder - Reverse Layout */}
        <section className="flex flex-col md:flex-row-reverse gap-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          <img
            src={cofounder}
            alt="Co Founder"
            className="w-full md:w-64 h-80 object-cover rounded-xl shadow-lg"
          />
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Co-Founder - Mrs. Sowmya Anandharaj
            </h3>
            <h4 className="text-orange-500 font-semibold text-lg italic">
              Inspiring Little Hearts For Big Dreams
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-sm">
              Mrs. Sowmya Anandharaj, a well-paid corporate worker at the time,
              bravely quit her job in 2018 to pursue her passion for early
              childhood education. She devoted the following five years to
              understand every aspect of preschool teaching and gained practical
              expertise in the sector. With a clear vision and a profound
              understanding, Sowmya Anandharaj started to work for Rising Stars
              in Villupuram in 2023. This preschool was notable for its special
              fusion of caring educators and top-notch teaching. By emphasizing
              holistic development, the school made sure that every kid had a
              happy and fulfilling educational experience. Rising Stars started
              growing by opening a new branch in Villupuram. As a part of the
              success, Rising Stars Started providing the quality education in
              two more places in 2025 in Villupuram.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 bg-white p-4 rounded-r-lg">
              “Every Child Holds Limitless Potential, And Our Mission Is To
              Cultivate Curiosity And Confidence.”
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
