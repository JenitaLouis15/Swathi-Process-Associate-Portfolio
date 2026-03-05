import { motion } from "framer-motion";
import { 
  Database, 
  FileSpreadsheet, 
  FileText, 
  BarChart, 
  Calculator, 
  Server,
  Keyboard,
  MonitorCheck
} from "lucide-react";

const skills = [
  { name: "Accounts", icon: Calculator, level: 90 },
  { name: "ERP Oracle (OTC)", icon: Server, level: 95 },
  { name: "MS Word", icon: FileText, level: 85 },
  { name: "MS Excel", icon: FileSpreadsheet, level: 90 },
  { name: "PowerPoint", icon: BarChart, level: 85 },
  { name: "Tally Prime", icon: Database, level: 80 },
  { name: "Type Writing", icon: Keyboard, level: 88 },
  { name: "Data Analysis", icon: MonitorCheck, level: 87 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function Skills() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Professional Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                      index % 2 === 0 
                        ? 'from-blue-500 to-cyan-500' 
                        : 'from-cyan-500 to-blue-500'
                    } flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg mb-3 text-slate-800">
                    {skill.name}
                  </h3>

                  {/* Skill level bar */}
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-sm text-slate-600 mt-2"
                  >
                    {skill.level}% Proficiency
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnAlMjBzb2Z0d2FyZSUyMHN5c3RlbSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MjcyOTgyNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="ERP System and Technology"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/80 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl mb-4"
                >
                  ERP Oracle Specialist
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-blue-200"
                >
                  Order to Cash - Cash Application Expert
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
