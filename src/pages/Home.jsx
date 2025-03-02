import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CountdownTimer from '../components/CountdownTimer'

export default function Home() {
  const events = [
    {
      title: 'BIBLE BOWL',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0686b28abddb9a79cb799.png',
      path: '/registration'
    },
    {
      title: 'COUNT THE WORD',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c06a3f9276027109312bb9.jpeg',
      path: '/registration'
    },
    {
      title: 'SPEAK A WORD',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c069f59276020364312b9a.jpeg',
      path: '/registration'
    },
    {
      title: 'SPELLING BEE',
      image: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c06a9c1b9e0f4d7caede48.jpeg',
      path: '/registration'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -60, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="pt-28">
      <CountdownTimer />
      
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source 
            src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c050db51688f4674e26036.mp4" 
            type="video/mp4" 
          />
        </video>
        
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Main Content */}
      <section className="py-20 px-4 bg-black">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            FSY4CC promotes & fosters fellowship,<br />
            and provides education, edification<br />
            & recreation for youth of all ages.
          </h1>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="relative bg-black py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Image */}
            <div 
              className="aspect-[16/9] relative"
              style={{
                backgroundImage: `url('https://storage.googleapis.com/msgsndr/PO72vKGaKYHArh9FNTOw/media/67c08a78e4beaea60e6e2760.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Join Us in 2025
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
                    Experience a transformative gathering of youth from across Florida, 
                    united in fellowship and faith. Together, we'll create memories that 
                    last a lifetime while growing stronger in our walk with Christ.
                  </p>
                  <Link
                    to="/conference"
                    className="inline-flex items-center text-white text-lg font-semibold hover:text-gray-200 transition-colors"
                  >
                    Learn More
                    <svg 
                      className="ml-2 w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="bg-gray-100 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group min-h-[200px] flex flex-col justify-between"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 opacity-50 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ 
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: '110% 110%',
                    backgroundPosition: 'center'
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/30 z-1" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{event.title}</h3>
                  <Link
                    to={event.path}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                  >
                    <span>Learn More</span>
                    <motion.span 
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
