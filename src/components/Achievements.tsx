import { motion } from "framer-motion";
import { Trophy, Star, Award, TrendingUp, Target, Zap } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Achievement Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Trophy Icon */}
                  <motion.div
                    initial={{ rotate: -20, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="relative"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Trophy className="w-16 h-16 text-white" />
                    </div>
                    {/* Sparkles */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -top-2 -right-2"
                    >
                      <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [360, 180, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -bottom-2 -left-2"
                    >
                      <Star className="w-6 h-6 text-orange-400 fill-orange-400" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="text-3xl md:text-4xl mb-3 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                        Rising Star Award
                      </h3>
                      <p className="text-xl text-blue-600 mb-4">
                        Capgemini - June 2025
                      </p>
                      <p className="text-lg text-slate-700 mb-4">
                        Recognized for outstanding performance and exceeding expectations in OTC Cash Application operations
                      </p>
                      <p className="text-slate-600">
                        Appreciated by Management for accuracy, efficiency and timely processing
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg text-slate-800">Outstanding Performance</h4>
              </div>
              <p className="text-slate-600">
                Consistently exceeded performance targets and quality standards
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-cyan-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg text-slate-800">Accuracy & Efficiency</h4>
              </div>
              <p className="text-slate-600">
                Maintained high accuracy rates in cash application processes
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg text-slate-800">Timely Processing</h4>
              </div>
              <p className="text-slate-600">
                Delivered results ahead of deadlines with exceptional quality
              </p>
            </motion.div>
          </motion.div>

          {/* Certification Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl mb-2">Online Certifications</h3>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      SAP E-FILLING
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievement Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdWNjZXNzJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzcyNzI5ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate Success and Achievement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-900/70 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="text-center text-white px-6"
                >
                  <h3 className="text-3xl md:text-4xl mb-2">
                    Excellence in Action
                  </h3>
                  <p className="text-lg text-blue-200">
                    Committed to delivering exceptional results
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
