
import { Mail} from "lucide-react";
import { managingDirector, teamMembers } from "@/lib/utils";
import Footer from "@/components/ui/footer";

export default function Teams() {
  const md = managingDirector;

  return (
    <div className="min-h-screen bg-[#FCFAF8] selection:bg-orange-500/20">
    

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
        <div className="max-w-3xl mb-24">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Executive Talent
          </span>
          <h1 className="text-6xl md:text-7xl font-display font-bold text-black leading-[1.1] mb-8">
            The people driving <br />
            <span className="text-orange-600 italic">excellence.</span>
          </h1>
          <p className="text-xl text-black/60 leading-relaxed font-medium">
            Meet the dedicated professionals at Shamzbridge Consult who combine industry expertise with deep strategic insight to deliver world-class results.
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
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">Leadership</span>
              <h2 className="text-5xl font-display font-bold text-black mb-4">{md.name}</h2>
              <p className="text-xl font-medium text-black/40 mb-8 border-l-4 border-orange-500 pl-6">
                {md.role}
              </p>
              <p className="text-lg text-black/60 leading-relaxed mb-10">
                {md.bio}
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-4">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {md.expertise.map((skill) => (
                      <span key={skill} className="px-4 py-1.5 bg-orange-50 text-orange-700 font-bold rounded-lg text-[11px] tracking-tight">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8 border-t border-black/5">
                  <a 
                    href={`mailto:${md.email}`}
                    className="inline-flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-black/40 uppercase tracking-wider">Contact Shamsudeen</span>
                      <span className="block text-sm font-bold text-black group-hover:text-orange-600 transition-colors underline decoration-orange-200 underline-offset-4">
                        {md.email}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Core Section */}
        <div className="mb-12 flex items-center justify-between">
          <h3 className="text-3xl font-display font-bold text-black flex items-center gap-4">
            Technical Core
            <div className="h-px w-24 bg-orange-200" />
          </h3>
          <p className="text-black/40 text-sm font-semibold uppercase tracking-widest">
            {teamMembers.length} Specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-2 luxury-shadow border border-black/5 hover:border-orange-200 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105"
                />
                <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex-grow">
                <h4 className="text-2xl font-display font-bold text-black mb-1 transition-colors group-hover:text-orange-600">
                  {member.name}
                </h4>
                <p className="text-sm font-bold text-orange-600/70 mb-6 uppercase tracking-widest">
                  {member.role}
                </p>
                <p className="text-sm text-black/50 leading-relaxed mb-8">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-black/5">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.expertise.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 bg-black/5 text-black/40 rounded-md text-[9px] font-bold uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-xs font-bold text-black hover:text-orange-600 flex items-center gap-2 transition-colors"
                  >
                    <Mail className="w-3 h-3 text-orange-500" />
                    Reach Out
                  </a>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
          <Footer/>
      
    </div>
  );
}


























// import { Mail, Github, Linkedin, ExternalLink, Sparkles } from "lucide-react";
// import { managingDirector, teamMembers } from "@/lib/utils";

// export default function App() {
//   const md = managingDirector;

//   return (
//     <div className="min-h-screen relative overflow-x-hidden font-sans selection:bg-orange-500/30">
//       {/* Background Atmosphere */}
//       <div className="atmosphere" />

//       <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
//         {/* Header Section */}
//         <div className="text-center mb-24">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6 tracking-wider uppercase">
//             <Sparkles className="w-3 h-3 text-orange-400" />
//             Our World-Class Team
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
//             The people behind <br /> the vision.
//           </h1>
//           <p className="max-w-xl mx-auto text-lg text-white/50 leading-relaxed">
//             A diverse group of engineers, designers, and thinkers working together to build the future of human-centric technology.
//           </p>
//         </div>

//         {/* Managing Director - Featured Card */}
//         <div className="mb-32">
//           <div className="glass-card rounded-[2.5rem] overflow-hidden group">
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//               <div className="relative aspect-square lg:aspect-auto h-[400px] lg:h-full overflow-hidden">
//                 <img
//                   src={md.image}
//                   alt={md.name}
//                   referrerPolicy="no-referrer"
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0502] via-transparent to-transparent lg:bg-gradient-to-r" />
//               </div>
//               <div className="p-8 md:p-16 flex flex-col justify-center relative">
//                 <div className="mb-8">
//                   <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
//                     Directorate
//                   </span>
//                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                     {md.name}
//                   </h2>
//                   <p className="text-xl md:text-2xl text-white/80 font-medium">
//                     {md.role}
//                   </p>
//                 </div>
                
//                 <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
//                   {md.bio}
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
//                   <div>
//                     <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Expertise</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {md.expertise.map((skill) => (
//                         <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 rounded-md text-[11px] font-mono">
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-end gap-3">
//                     <a 
//                       href={`mailto:${md.email}`}
//                       className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all text-sm group/btn"
//                     >
//                       <Mail className="w-4 h-4" />
//                       Contact {md.name.split(" ")[0]}
//                       <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Grid section header */}
//         <div className="flex items-end justify-between mb-12">
//           <div>
//             <h3 className="text-3xl font-bold mb-2">Technical Core</h3>
//             <p className="text-white/40">The specialists driving our operational excellence.</p>
//           </div>
//           <div className="hidden md:block h-px flex-1 mx-12 bg-gradient-to-r from-white/10 to-transparent" />
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {teamMembers.map((member) => (
//             <div
//               key={member.id}
//               className="glass-card group hover:bg-white/[0.08] transition-all rounded-3xl p-6 flex flex-col h-full"
//             >
//               <div className="relative mb-8 aspect-square rounded-2xl overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   referrerPolicy="no-referrer"
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
//                   <div className="flex gap-3">
//                      <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors">
//                         <Linkedin className="w-4 h-4" />
//                      </button>
//                      <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors">
//                         <Github className="w-4 h-4" />
//                      </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex-grow">
//                 <div className="mb-4">
//                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
//                     {member.name}
//                   </h4>
//                   <p className="text-sm font-medium text-white/50">
//                     {member.role}
//                   </p>
//                 </div>
                
//                 <p className="text-sm border-l-2 border-white/10 pl-4 py-1 text-white/40 leading-relaxed mb-6 italic">
//                   {member.bio}
//                 </p>

//                 <div className="space-y-4">
//                   <div>
//                     <div className="flex flex-wrap gap-1.5">
//                       {member.expertise.map((skill) => (
//                         <span key={skill} className="px-2 py-0.5 bg-white/5 border border-white/5 text-white/50 rounded text-[10px] uppercase tracking-wider font-semibold">
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
//                 <a
//                   href={`mailto:${member.email}`}
//                   className="text-white/60 hover:text-white transition-colors text-xs font-semibold flex items-center gap-2"
//                 >
//                   <Mail className="h-3 w-3" />
//                   Send message
//                 </a>
//                 <Sparkles className="h-3 w-3 text-orange-500/30 group-hover:text-orange-500 transition-colors" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer info */}
//         <footer className="mt-32 pt-16 border-t border-white/5 text-center">
//           <p className="text-white/30 text-sm">
//             © 2026 Team Atmosphere. Built with precision and purpose.
//           </p>
//         </footer>
//       </main>
//     </div>
//   );
// }






