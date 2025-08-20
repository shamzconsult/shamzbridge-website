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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
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
      caseStudy: "Case Study: [Details to be provided]",
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 mt-[80px] bg-gradient-to-br from-blue-900 to-teal-700 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl font-bold mb-6">Our Services</h1>
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
                        <service.icon className="h-16 w-16 text-amber-500 mb-6" />
                        <h3 className="font-serif text-3xl font-bold text-blue-900 mb-4">
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
                          rel="noopener"
                          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200"
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
                        src={`/placeholder.svg?height=300&width=500&query=${service.title.toLowerCase()} case study`}
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
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our services can help you achieve your
              goals and create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shamzbridgeconsult@gmail.com?subject=Contacting%20you%20about%20hiring%20service%20with%20Shamzbridge&body=Hi, %0D%0A%0D%0A"
                target="_blank"
                rel="noopener"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors duration-200"
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
