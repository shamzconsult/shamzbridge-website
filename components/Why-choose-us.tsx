import { Shield, Users, Lightbulb, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "Years of experience delivering successful projects across diverse sectors and communities.",
  },
  {
    icon: Users,
    title: "Community-Centric Approach",
    description: "We prioritize community needs and sustainable development in every project we undertake.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Cutting-edge methodologies and creative problem-solving for complex challenges.",
  },
  {
    icon: Award,
    title: "Excellence Guaranteed",
    description: "Committed to delivering exceptional results that exceed expectations and create lasting impact.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and community focus to deliver exceptional results that make a real
            difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-600 text-white mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
