import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "Successful Projects",
    description: "Completed across various sectors",
  },
  {
    number: "11000+",
    label: "Individuals Trained",
    description: "Through our capacity building programs",
  },
  {
    number: "20+",
    label: "Community Events",
    description: "With sustainable development initiatives",
  },
  {
    number: "20+",
    label: "Events Managed",
    description: "Rate across all our services",
  },
];

export default function ImpactStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-600 via-orange-700 to-slate-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to creating
            positive change and driving sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-300 transition-colors">
                {stat.label}
              </h3>
              <p className="text-slate-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
