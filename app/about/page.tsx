"use client"
import Footer from "@/components/ui/footer";
import {
  FaThLarge,
  FaEye,
  FaHeart,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaBuilding,
  // FaTarget,
  FaChartLine,
  FaGlobe,
  FaStar,
  FaRocket,
} from "react-icons/fa";
import { ValueTimeline } from "./ValueTimeline";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr Nasir-Raji Olaitan Mustapha",
      title:
        "Founder/CEO, Crown Group of Companies (Chairman, Board of Trustees)",
      image: "/Raji.jpg",
      bio: "Visionary entrepreneur and leader driving innovation across multiple industries.",
    },
    {
      name: "Dr. Lanre Philips",
      title: "CEO, Elpee Consults, Abuja (Member, Board of Trustees)",
      image: "/Lanre.jpg",
      bio: "Experienced consultant with expertise in strategic advisory and business growth.",
    },
    {
      name: "Mr Lukman Ibrahim Kehinde",
      title: "Founder/CEO, KSolutions Limited (Member, Board of Trustees)",
      image: "/Lukman.jpg",
      bio: "Technology leader focused on delivering innovative IT solutions for businesses.",
    },
    {
      name: "Alhaji Issa Muhammad Alata",
      title:
        "Founder/Proprietor, Al-Furqan Group of Schools, Ilorin (Member, Board of Trustees)",
      image: "/Alhaji.jpg",
      bio: "Education advocate committed to raising future leaders through quality learning.",
    },
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "We apply creative problem-solving and forward-thinking approaches to deliver projects, programs, and advisory services. Our flexibility ensures we adapt to changing needs while meeting client demands.",
    },
    {
      icon: FaUsers,
      title: "Humanity",
      description:
        "People remain at the center of everything we do. We adopt a human-centered approach in our projects, programs, operations, and client engagements.",
    },
    {
      icon: FaHeart,
      title: "Integrity",
      description:
        "We are committed to honesty and reliability, consistently delivering on our promises with excellence across capacity development, consulting, and program management.",
    },
    {
      icon: FaHandshake,
      title: "Client-Focused",
      description:
        "Our clients goals drive our work. We provide tailor-made services designed to actualize their developmental aspirations and project outcomes.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-600 via-orange-400 to-orange-500 text-white min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Overlay for better text contrast */}

        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated floating icons */}
        <div className="absolute inset-0 overflow-hidden">
          <FaUsers
            className="absolute top-20 left-10 text-white/20 text-4xl animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <FaHandshake
            className="absolute top-32 right-16 text-white/15 text-5xl animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
          <FaLightbulb
            className="absolute bottom-32 left-20 text-white/20 text-3xl animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          />
          <FaBuilding
            className="absolute top-40 left-1/3 text-white/15 text-4xl animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "5s" }}
          />
          <FaThLarge
            className="absolute bottom-20 right-20 text-white/20 text-3xl animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "4s" }}
          />
          <FaChartLine
            className="absolute top-16 right-1/3 text-white/15 text-4xl animate-pulse"
            style={{ animationDelay: "2.5s", animationDuration: "3s" }}
          />
          <FaGlobe
            className="absolute bottom-40 left-1/4 text-white/20 text-5xl animate-bounce"
            style={{ animationDelay: "3s", animationDuration: "4.5s" }}
          />
          <FaStar
            className="absolute top-24 left-2/3 text-white/15 text-3xl animate-pulse"
            style={{ animationDelay: "0.8s", animationDuration: "3.5s" }}
          />
          <FaRocket
            className="absolute bottom-24 right-1/3 text-white/20 text-4xl animate-bounce"
            style={{ animationDelay: "1.8s", animationDuration: "4s" }}
          />
          <FaHeart
            className="absolute top-36 right-10 text-white/15 text-3xl animate-pulse"
            style={{ animationDelay: "2.2s", animationDuration: "5s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our story, mission, and the passionate team driving
            positive change in communities worldwide.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className=" text-2xl md:text-4xl font-bold text-orange-600 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple yet ambitious goal: to provide
                service beyond comparison. Over the years, we have evolved and
                grown, expanding our offerings to meet the diverse needs of our
                clients. From tailored solutions to comprehensive consultations,
                we leverage our extensive knowledge and experience to drive
                transformative change and help our clients succeed in
                today&apos;s dynamic business environment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What sets us apart is our commitment to understanding our
                clients unique challenges and goals. We take a collaborative
                approach, working closely with each client to develop customized
                strategies that address their specific needs and objectives.
              </p>
              <p className="text-lg text-gray-600">
                Our team of seasoned professionals brings together a wealth of
                expertise from various industries, ensuring that we can provide
                insights and solutions that are both innovative and effective.
              </p>
            </div>
            <div>
              <img
                src="/about.jpg"
                alt="Company pics"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 text-center">
                <FaThLarge className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className=" text-xl md:text-3xl font-bold text-orange-600 mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600">
                  Our mission is to cultivate an empowering atmosphere for skill
                  acquisition and capacity enhancement that heralds a holistic
                  growth and development for individuals and organizations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 text-center">
                <FaEye className="h-16 w-16 text-teal-600 mx-auto mb-6" />
                <h3 className=" text-xl md:text-3xl font-bold text-orange-600 mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600">
                  To become a premier organization dedicated to enhancing both
                  personal and professional capacities of individuals and
                  businesses, fostering efficiency, heightened productivity, and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className=" text-2xl md:text-4xl font-bold text-orange-600 mb-4">
              Meet our Board of Trustees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders bring strategic insight, diverse
              expertise, and strong governance to guide our company&apos;s
              vision and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-xl text-blue-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValueTimeline values={values} />
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-orange-600 mb-2">
            The Impact We&apos;ve Made
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Watch how our work has transformed communities and empowered
            individuals across the globe.
          </p>

          <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/watch?v=Cmr57bo0JjQ"
              title="Impact Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-96 object-cover"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Impact Video Section */}

      <Footer />
    </div>
  );
}
