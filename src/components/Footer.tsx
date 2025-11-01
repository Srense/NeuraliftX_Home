import { Linkedin, Twitter, Facebook, Instagram, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/da76a6014aba70444a87e95b01ba89bfd2caa874.png';

export function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-blue-900 py-12 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div 
                className="w-12 h-12 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                animate={{
                  filter: [
                    'drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))',
                    'drop-shadow(0 0 15px rgba(96, 165, 250, 0.7))',
                    'drop-shadow(0 0 10px rgba(96, 165, 250, 0.5))',
                  ],
                }}
              >
                <img 
                  src={logoImage} 
                  alt="Neuralift-X Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </div>
            <p className="text-blue-200/80 mb-4 max-w-md">
              Revolutionizing education through AI-powered learning management. 
              Empowering learners and educators worldwide.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, color: 'from-blue-600 to-blue-700' },
                { icon: Twitter, color: 'from-cyan-600 to-blue-700' },
                { icon: Facebook, color: 'from-blue-700 to-indigo-700' },
                { icon: Instagram, color: 'from-purple-600 to-pink-600' },
              ].map((social, index) => (
                <motion.button 
                  key={index}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center transition-all relative overflow-hidden group`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <social.icon className="w-5 h-5 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Vision & Mission', 'Our Team', 'Contact'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={`#${link.toLowerCase().replace(/ & | /g, '-')}`} className="text-blue-200/80 hover:text-white transition-colors inline-flex items-center group">
                    <motion.span
                      className="w-0 h-0.5 bg-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
                    />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-blue-200/80 hover:text-white transition-colors inline-flex items-center group">
                    <motion.span
                      className="w-0 h-0.5 bg-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
                    />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-blue-900 pt-8 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Glowing line */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            animate={{
              width: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          <p className="text-blue-200/60">
            © 2025 Neuralift-X. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
