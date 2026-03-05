import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SWATHI N
            </h3>
            <p className="text-slate-400 mb-4">
              Process Associate specializing in Order to Cash Cash Application with expertise in ERP Oracle and financial operations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg mb-4 text-blue-300">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-slate-400 hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="block text-slate-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="#experience" className="block text-slate-400 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#skills" className="block text-slate-400 hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="block text-slate-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg mb-4 text-blue-300">Get In Touch</h4>
            <div className="space-y-3 text-slate-400">
              <p>Trichy, India</p>
              <p>+91 7502554072</p>
              <p>Swathi732003@gmail.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:Swathi732003@gmail.com"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © 2026 Swathi N. Built with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            and dedication
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
