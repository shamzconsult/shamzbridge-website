"use client";

import { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";

const stats = [
  {
    number: 15,
    suffix: "+",
    label: "Successful Projects",
    description: "Completed across various sectors",
  },
  {
    number: 100,
    suffix: "+",
    label: "Individuals Trained",
    description: "Through our capacity building programs",
  },
  {
    number: 5,
    suffix: "+",
    label: "Community Events",
    description: "With sustainable development initiatives",
  },
  {
    number: 10,
    suffix: "+",
    label: "Events Managed",
    description: "Rate across all our services",
  },
];

function Counter({
  value,
  suffix = "",
  duration = 2,
  isVisible,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isVisible, value, duration]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

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
          {stats.map((stat, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { margin: "-50px", once: false });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mb-2">
                  <Counter
                    value={stat.number}
                    suffix={stat.suffix}
                    isVisible={isInView}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors">
                  {stat.label}
                </h3>
                <p className="text-slate-300 text-sm">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
