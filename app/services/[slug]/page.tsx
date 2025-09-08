import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, MessageSquare, Calendar, Heart, FileText, Code, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

const serviceData = {
  "programs-projects-management": {
    icon: Target,
    title: "Programs/Projects Management",
    description: "Strategic planning and execution of complex projects with proven methodologies and expert oversight.",
    longDescription:
      "Our comprehensive project management services ensure your initiatives are delivered on time, within budget, and exceed expectations. We combine industry best practices with innovative approaches to drive successful outcomes.",
    features: [
      "Strategic project planning and roadmap development",
      "Risk assessment and mitigation strategies",
      "Resource allocation and team coordination",
      "Progress monitoring and reporting",
      "Quality assurance and control",
      "Stakeholder communication and management",
    ],
    benefits: [
      "Improved project success rates",
      "Reduced costs and timeline overruns",
      "Enhanced team productivity",
      "Better risk management",
      "Increased stakeholder satisfaction",
    ],
    process: [
      "Initial consultation and needs assessment",
      "Project scope definition and planning",
      "Team assembly and resource allocation",
      "Implementation and monitoring",
      "Quality review and delivery",
    ],
  },
  "capacity-building": {
    icon: Users,
    title: "Capacity Building",
    description:
      "Empowering individuals and organizations through comprehensive training and skill development programs.",
    longDescription:
      "We design and deliver customized capacity building programs that enhance individual skills and organizational capabilities. Our approach focuses on sustainable development and long-term impact.",
    features: [
      "Skills assessment and gap analysis",
      "Customized training program design",
      "Leadership development workshops",
      "Technical skills enhancement",
      "Organizational development consulting",
      "Performance measurement and evaluation",
    ],
    benefits: [
      "Enhanced employee capabilities",
      "Improved organizational performance",
      "Increased innovation and adaptability",
      "Better succession planning",
      "Higher employee engagement",
    ],
    process: [
      "Organizational assessment",
      "Training needs analysis",
      "Program design and development",
      "Implementation and delivery",
      "Impact evaluation and follow-up",
    ],
  },
  "consultancy-services": {
    icon: MessageSquare,
    title: "Consultancy Services",
    description: "Expert advisory services tailored to your unique challenges and organizational goals.",
    longDescription:
      "Our experienced consultants provide strategic guidance and practical solutions to help organizations overcome challenges and achieve their objectives. We bring deep industry knowledge and proven methodologies to every engagement.",
    features: [
      "Strategic planning and advisory",
      "Organizational restructuring",
      "Process optimization",
      "Change management support",
      "Market analysis and research",
      "Performance improvement initiatives",
    ],
    benefits: [
      "Objective external perspective",
      "Access to specialized expertise",
      "Accelerated problem-solving",
      "Improved operational efficiency",
      "Strategic competitive advantage",
    ],
    process: [
      "Problem identification and scoping",
      "Data collection and analysis",
      "Solution development",
      "Implementation planning",
      "Results monitoring and optimization",
    ],
  },
  "event-host-management": {
    icon: Calendar,
    title: "Event Host/Management",
    description: "Professional event planning and management services that create memorable and impactful experiences.",
    longDescription:
      "From corporate conferences to community gatherings, we handle every aspect of event planning and execution. Our team ensures seamless experiences that engage audiences and achieve your event objectives.",
    features: [
      "Event concept development and planning",
      "Venue selection and management",
      "Speaker and entertainment coordination",
      "Registration and attendee management",
      "Marketing and promotion support",
      "On-site event coordination",
    ],
    benefits: [
      "Professional event execution",
      "Increased attendee engagement",
      "Reduced planning stress",
      "Cost-effective solutions",
      "Memorable experiences",
    ],
    process: [
      "Event planning and concept development",
      "Logistics coordination",
      "Marketing and promotion",
      "Event execution",
      "Post-event evaluation and reporting",
    ],
  },
  "community-development": {
    icon: Heart,
    title: "Community Development",
    description: "Sustainable community-focused initiatives that drive positive social and economic change.",
    longDescription:
      "We work with communities to identify needs, develop solutions, and implement sustainable programs that create lasting positive impact. Our approach emphasizes local ownership and capacity building.",
    features: [
      "Community needs assessment",
      "Participatory planning processes",
      "Program design and implementation",
      "Stakeholder engagement",
      "Monitoring and evaluation",
      "Sustainability planning",
    ],
    benefits: [
      "Improved community well-being",
      "Enhanced local capacity",
      "Sustainable development outcomes",
      "Stronger community networks",
      "Increased social cohesion",
    ],
    process: [
      "Community engagement and assessment",
      "Collaborative planning",
      "Program implementation",
      "Capacity building",
      "Impact evaluation",
    ],
  },
  "content-development": {
    icon: FileText,
    title: "Content Development",
    description: "High-quality content creation and strategy development for effective communication and engagement.",
    longDescription:
      "Our content development services help organizations communicate effectively with their audiences through compelling, well-crafted content across multiple channels and formats.",
    features: [
      "Content strategy development",
      "Writing and editing services",
      "Visual content creation",
      "Digital content optimization",
      "Brand voice development",
      "Content performance analysis",
    ],
    benefits: [
      "Enhanced brand communication",
      "Improved audience engagement",
      "Consistent messaging",
      "Better search visibility",
      "Increased conversion rates",
    ],
    process: [
      "Content audit and strategy development",
      "Content planning and creation",
      "Review and optimization",
      "Publication and distribution",
      "Performance monitoring",
    ],
  },
  "web-development": {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive web solutions that enhance your digital presence and user experience.",
    longDescription:
      "We create custom web solutions that combine beautiful design with powerful functionality. Our development approach focuses on user experience, performance, and scalability.",
    features: [
      "Custom website development",
      "Responsive design implementation",
      "E-commerce solutions",
      "Content management systems",
      "Web application development",
      "SEO optimization",
    ],
    benefits: [
      "Professional online presence",
      "Improved user experience",
      "Mobile-friendly design",
      "Better search rankings",
      "Increased online conversions",
    ],
    process: [
      "Requirements gathering and planning",
      "Design and development",
      "Testing and optimization",
      "Launch and deployment",
      "Ongoing maintenance and support",
    ],
  },
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await the params promise
  const resolvedParams = await params
  const service = serviceData[resolvedParams.slug as keyof typeof serviceData]

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white mt-[7%]" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/20 p-6 rounded-full">
              <IconComponent className="h-16 w-16" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Features */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <Target className="h-6 w-6 text-orange-600 mr-3" />
                  Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                  Our Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </Badge>
                      <span className="text-slate-700">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="py-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our {service.title.toLowerCase()} services can help your organization achieve its
                  goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                    Contact Us Today
                  </Button>
                  <Link href="/#services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 bg-transparent"
                    >
                      View All Services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}