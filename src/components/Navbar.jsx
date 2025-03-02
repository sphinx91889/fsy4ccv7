import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConferenceMenu, setShowConferenceMenu] = useState(false)

  const conferenceMenuItems = [
    { title: 'Registration', path: '/conference/registration' },
    { title: 'Competitions', path: '/conference/competitions' },
    { title: 'Schedule & Activities', path: '/conference/schedule' },
    { title: 'Rules & Guidelines', path: '/conference/rules' },
    { title: 'Team Forms', path: '/conference/team-forms' },
    { title: 'Senior Recognition', path: '/conference/senior-recognition' },
    { title: 'Sponsorship & Support', path: '/conference/sponsorship' },
  ]

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c05940da719a1b7256f4b4.png" 
              alt="FSY4CC Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="nav-link text-gray-800 hover:text-gray-600">HOME</Link>
            
            {/* Conference Dropdown */}
            <div className="relative group">
              <Link 
                to="/conference" 
                className="nav-link text-gray-800 hover:text-gray-600 inline-flex items-center"
              >
                2025 CONFERENCE
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                {conferenceMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/gallery" className="nav-link text-gray-800 hover:text-gray-600">GALLERY</Link>
            <Link to="/about" className="nav-link text-gray-800 hover:text-gray-600">ABOUT</Link>
            <Link to="/contact" className="nav-link text-gray-800 hover:text-gray-600">CONTACT</Link>
          </div>

          {/* Social & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <FaFacebook size={20} />
            </a>
            <Link
              to="/conference/registration"
              className="nav-link bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              REGISTRATION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="nav-link block px-3 py-2 text-gray-800 hover:text-gray-600">HOME</Link>
              <Link to="/conference" className="nav-link block px-3 py-2 text-gray-800 hover:text-gray-600">2025 CONFERENCE</Link>
              {conferenceMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-6 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  {item.title}
                </Link>
              ))}
              <Link to="/gallery" className="nav-link block px-3 py-2 text-gray-800 hover:text-gray-600">GALLERY</Link>
              <Link to="/about" className="nav-link block px-3 py-2 text-gray-800 hover:text-gray-600">ABOUT</Link>
              <Link to="/contact" className="nav-link block px-3 py-2 text-gray-800 hover:text-gray-600">CONTACT</Link>
              
              {/* Social Links */}
              <div className="flex space-x-4 px-3 py-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <FaFacebook size={20} />
                </a>
              </div>

              {/* Registration Button */}
              <Link
                to="/conference/registration"
                className="nav-link block mx-3 my-2 bg-black text-white px-6 py-2 rounded-full text-center hover:bg-gray-800 transition"
              >
                REGISTRATION
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
