import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
  const [registrationType, setRegistrationType] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Check localStorage on component mount
    const savedRegistrationType = localStorage.getItem('registrationType')
    if (savedRegistrationType) {
      setRegistrationType(savedRegistrationType)
      
      // Automatically redirect based on saved registration type
      if (savedRegistrationType === 'group') {
        handleGroupRegistration()
      } else if (savedRegistrationType === 'individual') {
        navigate('/conference/registration/individual')
      }
    }
  }, [])

  const handleIndividualRegistration = () => {
    localStorage.setItem('registrationType', 'individual')
    window.location.href = '/conference/registration/individual'
  }

  const handleGroupRegistration = (event) => {
    if (event) {
      event.preventDefault()
    }
    
    localStorage.setItem('registrationType', 'group')
    window.open('https://registerfsy4cc.netlify.app', '_blank', 'noopener,noreferrer')
  }

  const clearRegistrationType = () => {
    localStorage.removeItem('registrationType')
    setRegistrationType(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Registration</h1>
      
      <div className="space-y-4">
        <p className="mb-4">Choose your registration type:</p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={handleIndividualRegistration}
            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Register as Individual
          </button>
          
          <button 
            onClick={handleGroupRegistration}
            className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Register a Group
          </button>
        </div>

        {registrationType && (
          <div className="mt-4 p-4 bg-yellow-100 rounded">
            <p>
              You have a pending {registrationType} registration. 
              <button 
                onClick={clearRegistrationType}
                className="ml-2 text-red-600 underline"
              >
                Clear
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
