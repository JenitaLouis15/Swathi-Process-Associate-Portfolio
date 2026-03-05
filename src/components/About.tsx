import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Lightbulb } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1768839724256-28cd4a373209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhY2NvdW50aW5nJTIwZGF0YSUyMGFuYWx5c2lzfGVufDF8fHx8MTc3MjcyOTgyNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Financial Data Analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-lg text-slate-700 leading-relaxed">
                Eager to take on new challenges and responsibilities, contributing to the success of a dynamic organization through strong analytical skills, ERP Oracle expertise, financial knowledge, and problem-solving abilities, while continuing to learn and grow in a collaborative and supportive environment.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
              >
                <Target className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-lg mb-2 text-slate-800">Goal-Oriented</h3>
                <p className="text-sm text-slate-600">
                  Focused on delivering accurate results and exceeding expectations
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-cyan-500"
              >
                <TrendingUp className="w-10 h-10 text-cyan-500 mb-3" />
                <h3 className="text-lg mb-2 text-slate-800">Continuous Growth</h3>
                <p className="text-sm text-slate-600">
                  Committed to learning and professional development
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
              >
                <Users className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="text-lg mb-2 text-slate-800">Team Player</h3>
                <p className="text-sm text-slate-600">
                  Collaborative approach with international teams
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-cyan-500"
              >
                <Lightbulb className="w-10 h-10 text-cyan-500 mb-3" />
                <h3 className="text-lg mb-2 text-slate-800">Problem Solver</h3>
                <p className="text-sm text-slate-600">
                  Strong analytical and troubleshooting abilities
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
