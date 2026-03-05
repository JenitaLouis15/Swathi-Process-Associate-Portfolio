import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "CMA Foundation Level",
    institution: "CMA Certification",
    period: "Jan 2020 - Present",
    achievement: "Cleared CMA foundation level",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Bishop Heber College Trichy",
    period: "Jan 2020 - Jan 2023",
    achievement: "CGPA: 8.57",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-500",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "State Board",
    period: "Jan 2019 - Jan 2020",
    achievement: "Percentage: 82.5%",
    icon: BookOpen,
    color: "from-blue-600 to-cyan-600",
  },
  {
    degree: "Secondary School (X)",
    institution: "State Board",
    period: "Completed Jan 2019",
    achievement: "Percentage: 87.6%",
    icon: BookOpen,
    color: "from-cyan-600 to-blue-600",
  },
];

export function Education() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl h-full transition-all duration-300 group-hover:bg-white/15">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl mb-2 text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-blue-300 mb-2">
                    {edu.institution}
                  </p>
                  
                  <p className="text-slate-400 text-sm mb-4">
                    {edu.period}
                  </p>

                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <p className="text-lg text-cyan-400">
                      {edu.achievement}
                    </p>
                  </div>

                  {/* Hover effect - gradient border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-20 transition-opacity -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <span className="text-white text-lg">
              Continuous Learner & Professional Development Focused
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
