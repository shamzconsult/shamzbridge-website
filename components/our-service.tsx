// import ServiceNumber from "./service-numbers";

// import { ServiceNumber } from "./service-numbers";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowUpRightDots,
//   faHandshake,
//   faHelmetSafety,
//   faMicrophoneAlt,
//   faUsersGear,
//   faVideoCamera,
// } from "@fortawesome/free-solid-svg-icons";

// export default function Services() {
//   return (
//     <section id="service" className="bg-slate-50">
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
//         <div className="py-12 md:py-20 flex flex-col items-center justify-center">
//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h2 className="h2 mb-4 text-orange-600">Our Services</h2>
//             <p className="text-xl text-gray-600">
//               Explore our diverse offerings and experience unparalleled
//               excellence from tailored solutions to personalized consultations.
//             </p>
//           </div>

//           {/* Items */}
//           <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl items-center justify-center  lg:max-w-none">
//             {/* 1st item */}
//             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl  hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-500">
//               <div className="bg-slate-200 rounded-full">
//                 <FontAwesomeIcon
//                   icon={faHelmetSafety}
//                   className="w-16 h-16 -mt-1 text-orange-500 p-4 "
//                 />
//               </div>
//               <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1 text-orange-600">
//                 Programs/Projects Management
//               </h4>
//               <p className="text-gray-600 text-center">
//                 Partner with us for seamless project execution.
//               </p>
//             </div>

//             {/* 2nd item */}
//             <div className="relative flex flex-col items-center p-8 bg-white rounded shadow-xl hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-500">
//               <div className="bg-slate-200 rounded-full mb-2">
//                 <FontAwesomeIcon
//                   icon={faArrowUpRightDots}
//                   className="w-16 h-16 -mt-1 text-orange-500  p-4 "
//                 />
//               </div>
//               <h4 className="text-xl font-bold leading-snug mt-2 tracking-tight mb-1 text-orange-600">
//                 Capacity Building
//               </h4>
//               <p className="text-gray-600 text-center">
//                 Nurture talent and skills with our capacity building services.
//               </p>
//             </div>

//             {/* 3rd item */}
//             <div className="relative flex flex-col items-center p-8 bg-white rounded shadow-xl hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-500">
//               <div className="bg-slate-200 rounded-full mb-2">
//                 <FontAwesomeIcon
//                   icon={faUsersGear}
//                   className="w-16 h-16 -mt-1 text-orange-500  p-4 "
//                 />
//               </div>
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-orange-600">
//                 Consultancy Services
//               </h4>
//               <p className="text-gray-600 text-center">
//                 Elevate your strategy with our consultancy services.
//               </p>
//             </div>

//             {/* 4th item */}
//             <div className="relative flex flex-col items-center p-8 bg-white rounded shadow-xl hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-500">
//               <div className="bg-slate-200 rounded-full mb-2">
//                 <FontAwesomeIcon
//                   icon={faMicrophoneAlt}
//                   className="w-16 h-16 -mt-1 text-orange-500 p-4 "
//                 />
//               </div>
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-orange-600">
//                 Event Host/Management
//               </h4>
//               <p className="text-gray-600 text-center">
//                 Let us handle the details while you enjoy the moment.
//               </p>
//             </div>

//             {/* 5th item */}
//             <div className="relative flex flex-col items-center p-8 bg-white rounded shadow-xl hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-500">
//               <div className="bg-slate-200 rounded-full mb-2">
//                 <FontAwesomeIcon
//                   icon={faHandshake}
//                   className="w-16 h-16 -mt-1 text-orange-500  p-4 "
//                 />
//               </div>
//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-orange-600">
//                 Community Development
//               </h4>
//               <p className="text-gray-600 text-center">
//                 Championing development where it matters most.
//               </p>
//             </div>

//             {/* 6th item */}
//             <div className="relative flex flex-col items-center p-8 bg-white rounded shadow-xl hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-500">
//               <div className="bg-slate-200 rounded-full mb-2">
//                 <FontAwesomeIcon
//                   icon={faVideoCamera}
//                   className="w-16 h-16 -mt-1 text-orange-500  p-4 "
//                 />
//               </div>

//               <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-orange-600">
//                 Content Development
//               </h4>
//               <p className="text-gray-600 text-center">
//                 Unleash your creativity and transform ideas into impactful
//                 stories.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import { Target, Users, MessageSquare, Calendar, Heart, FileText, Code, ArrowRight } from "lucide-react";

// const services = [
//   {
//     icon: Target,
//     title: "Programs/Projects Management",
//     description: "Strategic planning and execution of complex projects with proven methodologies and expert oversight.",
//     color: "text-blue-600",
//   },
//   {
//     icon: Users,
//     title: "Capacity Building",
//     description:
//       "Empowering individuals and organizations through comprehensive training and skill development programs.",
//     color: "text-teal-600",
//   },
//   {
//     icon: MessageSquare,
//     title: "Consultancy Services",
//     description: "Expert advisory services tailored to your unique challenges and organizational goals.",
//     color: "text-amber-600",
//   },
//   {
//     icon: Calendar,
//     title: "Event Host/Management",
//     description: "Professional event planning and management services that create memorable and impactful experiences.",
//     color: "text-purple-600",
//   },
//   {
//     icon: Heart,
//     title: "Community Development",
//     description: "Sustainable community-focused initiatives that drive positive social and economic change.",
//     color: "text-rose-600",
//   },
//   {
//     icon: FileText,
//     title: "Content Development",
//     description: "High-quality content creation and strategy development for effective communication and engagement.",
//     color: "text-green-600",
//   },
//   {
//     icon: Code,
//     title: "Web Development",
//     description: "Modern, responsive web solutions that enhance your digital presence and user experience.",
//     color: "text-indigo-600",
//   },
// ];

// // Custom Card components
// const Card = ({ children, className = "" }) => (
//   <div className={`bg-white rounded-lg shadow-lg ${className}`}>
//     {children}
//   </div>
// );

// const CardHeader = ({ children, className = "" }) => (
//   <div className={`p-6 ${className}`}>
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "" }) => (
//   <div className={`px-6 pb-6 ${className}`}>
//     {children}
//   </div>
// );

// const CardTitle = ({ children, className = "" }) => (
//   <h3 className={`font-semibold ${className}`}>
//     {children}
//   </h3>
// );

// const CardDescription = ({ children, className = "" }) => (
//   <p className={`text-sm ${className}`}>
//     {children}
//   </p>
// );

// // Custom Button component
// const Button = ({ children, variant = "default", className = "", onClick }) => {
//   const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
//   const variantClasses = {
//     default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
//     ghost: "bg-transparent hover:bg-gray-100 text-gray-700"
//   };

//   return (
//     <button
//       className={`${baseClasses} ${variantClasses[variant]} ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default function Services() {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             Comprehensive solutions designed to drive growth, build capacity, and create lasting impact in your
//             organization and community.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <Card
//                 key={index}
//                 className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
//               >
//                 <CardHeader className="text-center pb-4">
//                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className={`h-8 w-8 ${service.color}`} />
//                   </div>
//                   <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
//                     {service.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <CardDescription className="text-slate-600 mb-6 leading-relaxed">
//                     {service.description}
//                   </CardDescription>
//                   <Button
//                     variant="ghost"
//                     className="text-slate-700 hover:text-teal-600 font-semibold group-hover:bg-teal-50 transition-all duration-300"
//                   >
//                     Learn More
//                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import { Target, Users, MessageSquare, Calendar, Heart, FileText, Code, ArrowRight } from "lucide-react";
// import Link from 'next/link';

// const services = [
//   {
//     icon: Target,
//     title: "Programs/Projects Management",
//     description: "Strategic planning and execution of complex projects with proven methodologies and expert oversight.",
//     color: "text-orange-600",
//     slug: "programs-projects-management",
//   },
//   {
//     icon: Users,
//     title: "Capacity Building",
//     description:
//       "Empowering individuals and organizations through comprehensive training and skill development programs.",
//     color: "text-orange-500",
//     slug: "capacity-building",
//   },
//   {
//     icon: MessageSquare,
//     title: "Consultancy Services",
//     description: "Expert advisory services tailored to your unique challenges and organizational goals.",
//     color: "text-orange-700",
//     slug: "consultancy-services",
//   },
//   {
//     icon: Calendar,
//     title: "Event Host/Management",
//     description: "Professional event planning and management services that create memorable and impactful experiences.",
//     color: "text-orange-600",
//     slug: "event-host-management",
//   },
//   {
//     icon: Heart,
//     title: "Community Development",
//     description: "Sustainable community-focused initiatives that drive positive social and economic change.",
//     color: "text-orange-500",
//     slug: "community-development",
//   },
//   {
//     icon: FileText,
//     title: "Content Development",
//     description: "High-quality content creation and strategy development for effective communication and engagement.",
//     color: "text-orange-700",
//     slug: "content-development",
//   },
//   {
//     icon: Code,
//     title: "Web Development",
//     description: "Modern, responsive web solutions that enhance your digital presence and user experience.",
//     color: "text-orange-600",
//     slug: "web-development",
//   },
// ]

// export default function Services() {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
//           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//             Comprehensive solutions designed to drive growth, build capacity, and create lasting impact in your
//             organization and community.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="p-6 text-center pb-4">
//                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
//                     <Icon className={`h-8 w-8 ${service.color}`} />
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
//                     {service.title}
//                   </h3>
//                 </div>
//                 <div className="px-6 pb-6 text-center">
//                   <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
//                   <Link href={`/services/${service.slug}`}>
//                     <button className="inline-flex items-center text-slate-700 hover:text-teal-600 font-semibold group-hover:bg-teal-50 hover:text-orange-500 transition-all duration-300 px-4 py-2 rounded-md">
//                       Learn More
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
