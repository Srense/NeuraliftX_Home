import { Eye, Target } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function VisionMission() {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjAyMzU4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-900/90 to-blue-900/95" />
      </div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-10 left-20 w-40 h-40 border-4 border-blue-400/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 border-4 border-purple-400/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="bg-blue-800/20 backdrop-blur-xl border-blue-700/50 p-8 sm:p-10 hover:bg-blue-800/40 transition-all duration-300 relative overflow-hidden group h-full">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all duration-500" />

              <motion.div 
                className="flex items-center mb-6 relative z-10"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4 shadow-2xl relative"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-lg opacity-50" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl text-white">Our Vision</h2>
              </motion.div>
              <p className="text-blue-200/90 leading-relaxed text-base sm:text-lg relative z-10">
                To become the world's leading AI-powered learning platform, democratizing access to 
                quality education for every learner, everywhere. We envision a future where learning 
                is personalized, accessible, and engaging for all, breaking down barriers and creating 
                opportunities for millions worldwide.
              </p>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: -5,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="bg-blue-800/20 backdrop-blur-xl border-blue-700/50 p-8 sm:p-10 hover:bg-blue-800/40 transition-all duration-300 relative overflow-hidden group h-full">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-all duration-500" />

              <motion.div 
                className="flex items-center mb-6 relative z-10"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-2xl relative"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-lg opacity-50" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl text-white">Our Mission</h2>
              </motion.div>
              <p className="text-blue-200/90 leading-relaxed text-base sm:text-lg relative z-10">
                To empower educators and learners with innovative AI technology that enhances the 
                learning experience, drives better outcomes, and makes education more effective and 
                enjoyable. We're committed to continuous innovation, putting learners first, and 
                building tools that truly make a difference.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
