import React from "react";
import {
  Target,
  Users,
  MessageSquare,
  Calendar,
  Heart,
  FileText,
  Code,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Target,
    title: "Programs/Projects Management",
    description:
      "Strategic planning and execution of complex projects with proven methodologies and expert oversight.",
    color: "text-orange-600",
    slug: "programs-projects-management",
  },
  {
    icon: Users,
    title: "Capacity Building",
    description:
      "Empowering individuals and organizations through comprehensive training and skill development programs.",
    color: "text-orange-500",
    slug: "capacity-building",
  },
  {
    icon: MessageSquare,
    title: "Consultancy Services",
    description:
      "Expert advisory services tailored to your unique challenges and organizational goals.",
    color: "text-orange-700",
    slug: "consultancy-services",
  },
  {
    icon: Calendar,
    title: "Event Host/Management",
    description:
      "Professional event planning and management services that create memorable and impactful experiences.",
    color: "text-orange-600",
    slug: "event-host-management",
  },
  {
    icon: Heart,
    title: "Community Development",
    description:
      "Sustainable community-focused initiatives that drive positive social and economic change.",
    color: "text-orange-500",
    slug: "community-development",
  },
  {
    icon: FileText,
    title: "Content Development",
    description:
      "High-quality content creation and strategy development for effective communication and engagement.",
    color: "text-orange-700",
    slug: "content-development",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, responsive web solutions that enhance your digital presence and user experience.",
    color: "text-orange-600",
    slug: "web-development",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive growth, build capacity,
            and create lasting impact in your organization and community.
          </p>
        </div>

        <div className=" flex flex-wrap gap-8 max-w-7xl mx-auto justify-center items-center w-full ">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg justify-center justify-self-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-sm"
              >
                <div className="p-6 text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="px-6 pb-6 text-center">
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <button className="inline-flex items-center text-slate-700 hover:text-orange-500 font-semibold transition-all duration-300 px-4 py-2 rounded-md hover:bg-orange-50">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
