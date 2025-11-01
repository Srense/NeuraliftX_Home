import { Sparkles, Zap, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { ParticleBackground } from './ParticleBackground';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/da76a6014aba70444a87e95b01ba89bfd2caa874.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegister = () => {
    window.open('https://neuralift-x-lfrc.vercel.app/', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDIwMjQxOHww&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-purple-900/95" />
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.img 
                src={logoImage}
                alt="Neuralift-X Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain relative z-10"
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(96, 165, 250, 0.6))',
                    'drop-shadow(0 0 40px rgba(96, 165, 250, 0.9))',
                    'drop-shadow(0 0 20px rgba(96, 165, 250, 0.6))',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-200 via-cyan-100 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Neuralift-X
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-4 drop-shadow-lg">
              AI-Enabled Learning Management System
            </p>
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg text-blue-200/90 mb-8 max-w-2xl mx-auto px-4 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Revolutionizing education through artificial intelligence. Empowering learners and educators with cutting-edge technology for a smarter, more personalized learning experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleRegister}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Register with us
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-blue-300 text-blue-100 hover:bg-blue-800/50 backdrop-blur px-8 py-6 rounded-lg shadow-xl"
              >
                <Zap className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating icons */}
          <div className="absolute top-1/4 left-10 hidden lg:block">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-12 h-12 text-yellow-400 opacity-60" />
            </motion.div>
          </div>
          <div className="absolute top-1/3 right-20 hidden lg:block">
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <Zap className="w-10 h-10 text-cyan-400 opacity-60" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with glow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{ zIndex: 10 }}
      >
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center relative">
          <motion.div 
            className="w-1 h-3 bg-blue-300 rounded-full mt-2"
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <div className="absolute inset-0 border-2 border-blue-400 rounded-full blur-md opacity-50" />
        </div>
      </motion.div>
    </section>
  );
}
