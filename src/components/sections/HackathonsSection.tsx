// "use client";

// import { motion } from "framer-motion";
// import { Trophy, MapPin, Calendar } from "lucide-react";
// import { hackathons } from "@/data/portfolio";
// import { Section, SectionHeader, Reveal, Pill } from "@/components/ui";

// export function HackathonsSection() {
//   return (
//     <Section id="hackathons">
//       <SectionHeader
//         label="Hackathons & Achievements"
//         title="Competing at the frontier."
//         subtitle="Highlights from competitions, demos, and recognition I'm proud of."
//       />

//       <div className="relative">
//         {/* Timeline line */}
//         <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block" />

//         <div className="space-y-8">
//           {hackathons.map((hack, i) => (
//             <Reveal key={hack.id} delay={i * 0.15}>
//               <div className="relative sm:pl-16">
//                 {/* Timeline dot */}
//                 <motion.div
//                   className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 border-amber-400 bg-surface items-center justify-center hidden sm:flex"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
//                 >
//                   <Trophy size={10} className="text-amber-400" />
//                 </motion.div>

//                 <div className="bg-card border border-default rounded-2xl p-6 card-hover">
//                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
//                     <div>
//                       <h3 className="font-body font-semibold text-ink text-base mb-1">{hack.title}</h3>
//                       <p className="text-sm text-accent font-mono font-medium">{hack.event}</p>
//                     </div>
//                     <div className="flex flex-col sm:items-end gap-1 text-xs text-ink-subtle font-mono flex-shrink-0">
//                       <span className="flex items-center gap-1">
//                         <Calendar size={11} />
//                         {hack.date}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <MapPin size={11} />
//                         {hack.location}
//                       </span>
//                     </div>
//                   </div>

//                   {hack.prize && (
//                     <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono font-medium mb-3">
//                       <Trophy size={11} />
//                       {hack.prize}
//                     </div>
//                   )}

//                   <p className="text-sm text-ink-muted font-body leading-relaxed mb-4">
//                     {hack.description}
//                   </p>

//                   <div className="flex flex-wrap gap-1.5">
//                     {hack.tags.map((tag) => (
//                       <Pill key={tag} variant="subtle" className="text-xs">
//                         {tag}
//                       </Pill>
//                     ))}
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
