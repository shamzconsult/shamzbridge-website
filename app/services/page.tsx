import Footer from "@/components/ui/footer";
import {
  FaThLarge,
  FaUsers,
  FaLightbulb,
  FaCalendarAlt,
  FaHeart,
  FaFileAlt,
  FaCode,
  FaCheckCircle,
  FaUserCheck,
  FaPalette,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: FaThLarge,
      title: "Programs/Projects Management",
      description:
        "Partner with us for seamless project and program execution, driven by clear goals and objectives, structured planning, effective resource and risk management, active stakeholder engagement, and continuous monitoring and evaluation.",
      features: [
        "Clear goals and objectives",
        "Structured planning",
        "Effective resource and risk management",
        "Active stakeholder engagement",
        "Continuous monitoring and evaluation",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856677/69770a14-91c1-49b3-a865-989d700caab0_q8shh4.jpg",
      caseStudy:
        " Planned, managed, and executed the JCI Aso Presidential Campaign for Felix Akinyemi, which culminated in a successful election victory and his emergence as President. The campaign strategy combined effective planning, stakeholder engagement, and impactful execution, ensuring strong visibility and support throughout the process.",
    },
    {
      icon: FaUsers,
      title: "Capacity Building",
      description:
        "Nurture talent and skills with our capacity building services, featuring skills development, organizational strengthening, resource optimization, sustainability, and knowledge sharing & collaboration.",
      features: [
        "Skills development",
        "Organizational strengthening",
        "Resource optimization",
        "Sustainability",
        "Knowledge sharing & collaboration",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856245/capacity_zmuvda.jpg",
      caseStudy:
        "Conducted a Data Analysis training program for staff of the Nigerian Ports Authority, enhancing their ability to efficiently manage and interpret data. The training strengthened participants’ analytical skills and improved overall workplace capacity, enabling them to make more informed and data-driven decisions.",
    },
    {
      icon: FaLightbulb,
      title: "Consultancy Services",
      description:
        "Elevate your strategy with our consultancy services, offering expert guidance, tailored solutions, strategic planning, problem solving & innovation, and performance improvement.",
      features: [
        "Expert guidance",
        "Tailored solutions",
        "Strategic planning",
        "Problem solving & innovation",
        "Performance improvement",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856263/consult_cqtrqo.png",
      caseStudy:
        "Successfully consulted for Crown Agrovet Limited providing expert guidance on website development, social media enhancement, and business development strategies. The intervention led to thriving business growth, enhanced brand visibility, and a significant boost in client interactions and audience engagement.",
    },
    {
      icon: FaCalendarAlt,
      title: "Event Hosting and Management",
      description:
        "Let us handle the details while you enjoy the moment, with creative concept & design, detailed planning & coordination, vendor & resource management, audience engagement, and seamless execution & evaluation.",
      features: [
        "Creative concept & design",
        "Detailed planning & coordination",
        "Vendor & resource management",
        "Audience engagement",
        "Seamless execution & evaluation",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856250/eventhost_df9ixt.jpg",
      caseStudy:
        "Successfully hosted and curated the official report for the 13th BABA 'N' YARA Novelty Games, organized by Junior Chamber International (JCI), Aso, helping foster sportsmanship, enhanced marketing visibility, and created valuable networking opportunities while ensuring a memorable experience for attendees across the city",
    },
    {
      icon: FaHeart,
      title: "Community Development",
      description:
        "Championing development where it matters most by fostering empowerment, participation, capacity building, sustainability, and social inclusion.",
      features: [
        "Empowerment",
        "Participation",
        "Capacity building",
        "Sustainability",
        "Social inclusion",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856245/commdev_mquwyb.jpg",
      caseStudy:
        "Successfully hosted the 3rd edition of our Business Development Series, where we trained over 30 participants on the art of business pitching. The program equipped them with practical strategies to present their businesses compellingly—capturing client interest, building confidence, and ultimately increasing their chances of securing contracts.",
    },
    {
      icon: FaFileAlt,
      title: "Content Development",
      description:
        "Unleash your creativity and transform ideas into impactful stories through research & strategy, creativity & originality, audience relevance, quality & consistency, and multi-platform adaptability.",
      features: [
        "Research & strategy",
        "Creativity & originality",
        "Audience relevance",
        "Quality & consistency",
        "Multi-platform adaptability",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856246/contentdev_umsxtx.jpg",
      caseStudy:
        "Developed a comprehensive report for the Mswitch Creative Academy for Post-Production, thoroughly documenting every detail and highlight—from the Audio Masterclass Cohort 1 training sessions to the Demo-Day graduation. This helped our client preserve the full experience, creating a resource that both captures the event’s impact and allows stakeholders to relive the moments.",
    },
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "Bring your online presence to life with our web development services, featuring responsive design, user-friendly interfaces, fast performance & security, scalable architecture, and SEO & integration capabilities.",
      features: [
        "Responsive design",
        "User-friendly interfaces",
        "Fast performance & security",
        "Scalable architecture",
        "SEO & integration capabilities",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856254/webdev_n6nwvl.png",
      caseStudy:
        "Designed and developed a user-friendly website for Brandbuild.ng, creating an engaging platform that effectively showcases their creative services. The revamped site not only enhanced brand presentation but also boosted client interaction and audience engagement.",
    },
    {
      icon: FaUserCheck,
      title: "Talent Recruitment and Management",
      description:
        "Enhance your team with our talent recruitment and management services, featuring strategic talent sourcing, efficient screening & selection, onboarding & integration, performance management, and employee growth & retention.",
      features: [
        "Strategic talent sourcing",
        "Efficient screening & selection",
        "Onboarding & integration",
        "Performance management",
        "Employee growth & retention",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856249/recruitment_pqu1t7.jpg",
      caseStudy:
        "Successfully recruited a qualified and skilled Social Media Manager for GAI Academy through a structured process that included careful applicant sourcing, thorough résumé reviews, and detailed interview assessments. This ensured the placement of a candidate well-suited to drive the Academy’s digital presence and engagement.",
    },
    {
      icon: FaPalette,
      title: "Branding and Design",
      description:
        "Bring your vision to life with our branding and design services, featuring brand identity development, creative visual design, consistency across platforms, strategic messaging, and audience connection.",
      features: [
        "Brand identity development",
        "Creative visual design",
        "Consistency across platforms",
        "Strategic messaging",
        "Audience connection",
      ],
      img: "https://res.cloudinary.com/dcgghkk7q/image/upload/v1755856246/branding_ncgdlw.png",
      caseStudy:
        "Provided comprehensive branding and design services for Rheenadive, including the creation of a logo, letterhead, business card, and invoice templates. The project successfully brought the brand to life by delivering a cohesive visual identity that clearly represents its values, essence, and corporate identity. This strengthened Rheenadive’s professional image and improved brand consistency across all touchpoints.",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[70vh] bg-gradient-to-br from-orange-600 via-orange-400 to-orange-500 text-white relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            {/* Large lanterns */}
            <div
              className="absolute top-10 left-10 w-24 h-32 bg-gradient-to-b from-red-200 to-red-300 rounded-full shadow-2xl"
              style={{
                animation: "pulse 3s ease-in-out infinite",
                opacity: "0.6",
              }}
            ></div>
            <div
              className="absolute top-20 right-16 w-20 h-28 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full shadow-2xl"
              style={{
                animation: "pulse 4s ease-in-out infinite 1s",
                opacity: "0.5",
              }}
            ></div>
            <div
              className="absolute bottom-16 left-1/4 w-16 h-24 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full shadow-xl"
              style={{
                animation: "pulse 2.5s ease-in-out infinite 2s",
                opacity: "0.4",
              }}
            ></div>
            <div
              className="absolute bottom-20 right-1/3 w-18 h-26 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full shadow-xl"
              style={{
                animation: "pulse 3.5s ease-in-out infinite 0.5s",
                opacity: "0.45",
              }}
            ></div>

            {/* Medium lanterns */}
            <div
              className="absolute top-1/3 left-1/3 w-12 h-18 bg-gradient-to-b from-purple-200 to-purple-300 rounded-full shadow-lg"
              style={{
                animation: "pulse 2.8s ease-in-out infinite 1.5s",
                opacity: "0.35",
              }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-14 h-20 bg-gradient-to-b from-blue-200 to-blue-300 rounded-full shadow-lg"
              style={{
                animation: "pulse 4.2s ease-in-out infinite 3s",
                opacity: "0.4",
              }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/2 w-10 h-16 bg-gradient-to-b from-green-200 to-green-300 rounded-full shadow-lg"
              style={{
                animation: "pulse 3.2s ease-in-out infinite 2.5s",
                opacity: "0.3",
              }}
            ></div>

            {/* Small floating lanterns */}
            <div
              className="absolute top-1/4 right-1/3 w-8 h-12 bg-gradient-to-b from-indigo-200 to-indigo-300 rounded-full shadow-md"
              style={{
                animation: "pulse 2.2s ease-in-out infinite 1.8s",
                opacity: "0.25",
              }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/2 w-6 h-10 bg-gradient-to-b from-teal-200 to-teal-300 rounded-full shadow-md"
              style={{
                animation: "pulse 3.8s ease-in-out infinite 1s",
                opacity: "0.3",
              }}
            ></div>
            <div
              className="absolute top-2/3 left-1/5 w-7 h-11 bg-gradient-to-b from-rose-200 to-rose-300 rounded-full shadow-md"
              style={{
                animation: "pulse 2.6s ease-in-out infinite 2.2s",
                opacity: "0.2",
              }}
            ></div>

            {/* Glowing effects */}
            <div
              className="absolute top-10 left-10 w-24 h-32 bg-red-400 rounded-full blur-xl"
              style={{
                animation: "pulse 3s ease-in-out infinite",
                opacity: "0.2",
              }}
            ></div>
            <div
              className="absolute top-20 right-16 w-20 h-28 bg-yellow-400 rounded-full blur-lg"
              style={{
                animation: "pulse 4s ease-in-out infinite 1s",
                opacity: "0.15",
              }}
            ></div>
            <div
              className="absolute bottom-16 left-1/4 w-16 h-24 bg-pink-400 rounded-full blur-lg"
              style={{
                animation: "pulse 2.5s ease-in-out infinite 2s",
                opacity: "0.1",
              }}
            ></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          {/* <div className="absolute inset-0 bg-black/30 z-5"></div> */}

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our diverse offerings and experience unparalleled
              excellence from tailored solutions to personalized consultations.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white rounded-lg">
                      <div className="p-8">
                        <service.icon className="h-10 w-10 text-orange-600 mb-6" />
                        <h3 className="text-xl md:text-2xl font-bold text-orange-600 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                          {service.description}
                        </p>

                        <h4 className="font-semibold text-xl text-blue-900 mb-4">
                          Key Features:
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-gray-600"
                            >
                              <FaCheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="mailto:shamzbridgeconsult@gmail.com?subject=Contacting%20you%20about%20hiring%20service%20with%20Shamzbridge&body=Hi, %0D%0A%0D%0A"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-2 rounded-md font-medium text-lg transition-colors duration-200"
                        >
                          Get Consultation
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <div className="bg-gray-50 p-8 rounded-lg">
                      <h4 className="font-semibold text-xl text-blue-900 mb-4">
                        Case Study
                      </h4>
                      <p className="text-gray-600 mb-6">{service.caseStudy}</p>
                      <img
                        src={service.img || "/placeholder.svg"}
                        alt={`${service.title} case study`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/bg1.jpg')",
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how our services can help you achieve your
              goals and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shamzbridgeconsult@gmail.com?subject=Contacting%20you%20about%20hiring%20service%20with%20Shamzbridge&body=Hi, %0D%0A%0D%0A"
                target="_blank"
                rel="noreferrer noopener"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
