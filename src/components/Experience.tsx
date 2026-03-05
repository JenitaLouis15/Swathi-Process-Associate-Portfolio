import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Process Associate - Order to Cash (Cash Application)",
    company: "Capgemini",
    location: "Trichy",
    period: "Jul 2025 - Present",
    current: true,
    responsibilities: [
      "Currently working for clients in Portugal and Switzerland",
      "Apply cash receipts to customer accounts, ensuring accurate and timely posting using ERP Oracle",
      "Reconcile cash transactions, identifying and resolving discrepancies",
      "Maintain accurate records of cash transactions, accounts receivable and customer payments",
      "Support month-end closing activities and contribute to process improvements",
      "Collaborate with internal teams and international clients to resolve payment issues and streamline workflows",
    ],
  },
  {
    title: "Associate - Order to Cash (Cash Application)",
    company: "Capgemini",
    location: "Trichy",
    period: "Mar 2025 - Jun 2025",
    current: false,
    responsibilities: [
      "Worked for client in Sweden, Denmark and Norway",
      "Applied cash receipts to customer accounts, ensuring accurate and timely posting using ERP Oracle",
      "Maintained accurate records of cash transactions, accounts receivable and customer payments",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      exp.current
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                        : "bg-gradient-to-br from-blue-600 to-cyan-600"
                    } shadow-lg`}
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
                >
                  {exp.current && (
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm rounded-full mb-4">
                      Current Position
                    </span>
                  )}

                  <h3 className="text-2xl mb-2 text-white">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-blue-300">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.div
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + respIndex * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-200">{resp}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
