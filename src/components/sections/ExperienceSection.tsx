// "use client";

// import { motion } from "framer-motion";
// import { MapPin, Calendar } from "lucide-react";
// import { experiences } from "@/data/portfolio";
// import { Section, SectionHeader, Reveal, Pill } from "@/components/ui";

// export function ExperienceSection() {
//   return (
//     <Section id="experience">
//       <SectionHeader
//         label="Work Experience"
//         title="Where I've been building."
//         subtitle="From AI labs to early-stage startups — always at the frontier."
//       />

//       <div className="relative">
//         {/* Timeline line */}
//         <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block" />

//         <div className="space-y-8">
//           {experiences.map((exp, i) => (
//             <Reveal key={exp.id} delay={i * 0.15}>
//               <div className="relative sm:pl-16">
//                 {/* Timeline dot */}
//                 <motion.div
//                   className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-accent bg-surface items-center justify-center hidden sm:flex"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
//                 >
//                   <div className="w-1.5 h-1.5 rounded-full bg-accent" />
//                 </motion.div>

//                 <div className="bg-card border border-default rounded-2xl p-6 card-hover group">
//                   <div className="flex flex-col sm:flex-row sm:items-start gap-4">
//                     {/* Logo */}
//                     <div
//                       className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0 shadow-md"
//                       style={{ backgroundColor: exp.logoColor }}
//                     >
//                       {exp.logo}
//                     </div>

//                     <div className="flex-1 min-w-0">
//                       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
//                         <div>
//                           <h3 className="text-base font-body font-semibold text-ink">{exp.role}</h3>
//                           <p className="text-accent font-body text-sm font-medium">{exp.company}</p>
//                         </div>
//                         <div className="flex flex-col sm:items-end gap-1 text-xs text-ink-subtle font-mono flex-shrink-0">
//                           <span className="flex items-center gap-1">
//                             <Calendar size={11} />
//                             {exp.period}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <MapPin size={11} />
//                             {exp.location}
//                           </span>
//                         </div>
//                       </div>

//                       <p className="text-sm text-ink-muted font-body leading-relaxed mb-4">{exp.description}</p>

//                       <div className="flex flex-wrap gap-1.5">
//                         {exp.tags.map((tag) => (
//                           <Pill key={tag} variant="subtle" className="text-xs">
//                             {tag}
//                           </Pill>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }
