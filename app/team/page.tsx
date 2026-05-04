"use client"
import { Mail } from "lucide-react";
import { useState } from "react";
import { managingDirector, teamMembers } from "@/lib/utils";
import Footer from "@/components/ui/footer";

export default function Teams() {
    const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  const md = managingDirector;
  const [copied, setCopied] = useState(false);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] selection:bg-orange-500/20">
      <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
        <div className="max-w-3xl mb-12 md:mb-24">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">
            Executive Talent
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-black leading-tight md:leading-[1.1] mb-6 md:mb-8">
            The people driving{" "}
            <span className="text-orange-600 italic block sm:inline">
              excellence.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black/60 leading-relaxed font-medium">
            Meet the dedicated professionals at Shamzbridge Consult who combine
            industry expertise with deep strategic insight to deliver world-class
            results.
          </p>
        </div>

        {/* Featured MD Card */}
        <div className="mb-32">
          <div className="bg-white luxury-shadow rounded-[3rem] overflow-hidden border border-black/5 flex flex-col lg:flex-row hover:border-orange-200 transition-colors duration-500">
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
              <img
                src={md.image}
                alt={md.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-fit transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">
                Leadership
              </span>
              <h2 className="text-2xl md:text-5xl font-display font-bold text-black mb-4">
                {md.name}
              </h2>
              <p className="text-xl font-medium text-black/40 mb-8 border-l-4 border-orange-500 pl-6">
                {md.role}
              </p>
              <p className="text-lg text-black/60 leading-relaxed mb-10">{md.bio}</p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-4">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {md.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-1.5 bg-orange-50 text-orange-700 font-bold rounded-lg text-[11px] tracking-tight"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                
                   <button
                      onClick={() => setSelectedEmail(md.email)}
                      className="flex items-center gap-2 text-sm font-semibold hover:text-orange-600"
                    >
                     <Mail className="w-3 h-3 text-orange-500" />
                      Reach Out
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Core Section */}
        <div className="mb-12 flex items-center justify-between">
          <h3 className="text-md md:text-3xl font-display font-bold text-black flex items-center gap-4">
            Technical Core
            <div className="h-px w-24 bg-orange-200" />
          </h3>
          <p className="text-black/40 text-md md:text-3xl font-semibold uppercase tracking-widest">
            {teamMembers.length} Specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-2 luxury-shadow border border-black/5 border-orange-200 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-fit grayscale-0 group-hover:grayscale transition-all duration-500 scale-105"
                />
                <div className="absolute inset-0 hover:bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex-grow">
                <h4 className="text-2xl font-display font-bold text-black mb-1 transition-colors group-hover:text-orange-600">
                  {member.name}
                </h4>
                <p className="text-sm font-bold text-orange-600/70 mb-6 uppercase tracking-widest">
                  {member.role}
                </p>
                <p className="text-sm text-black/50 leading-relaxed mb-8">{member.bio}</p>
              </div>

              <div className="pt-6 border-t border-black/5">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-black/5 text-black/40 rounded-md text-[9px] font-bold uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                
                   <button
                      onClick={() => setSelectedEmail(member.email)}
                      className="flex items-center gap-2 text-sm font-semibold hover:text-orange-600"
                    >
                     <Mail className="w-3 h-3 text-orange-500" />
                      Reach Out
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />


        {selectedEmail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm text-center">

            <h3 className="font-bold mb-2">Copy Email</h3>

            <div className="bg-gray-100 p-3 rounded mb-4 break-all">
              {selectedEmail}
            </div>

            <button
              onClick={() => handleCopy(selectedEmail)}
              className="w-full py-2 bg-orange-600 text-white rounded mb-2"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>

            <button
              onClick={() => setSelectedEmail(null)}
              className="w-full py-2 border rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}


