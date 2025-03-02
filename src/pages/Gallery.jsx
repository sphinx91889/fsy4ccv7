import { useState } from 'react'

export default function Gallery() {
  const images = [
    {
      url: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c050db51688f4674e26036.mp4',
      title: '2024 Bible Bowl Competition',
      category: 'competitions'
    },
    {
      url: 'https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c05940da719a1b7256f4b4.png',
      title: 'FSY4CC Logo',
      category: 'fellowship'
    },
    {
      url: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800',
      title: 'Youth Worship Session',
      category: 'worship'
    }
  ]

  const categories = ['all', 'competitions', 'worship', 'activities', 'fellowship']
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Photo Gallery</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-200"
            >
              {image.url.endsWith('.mp4') ? (
                <video
                  src={image.url}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4 font-bold">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-12 p-8 bg-gray-100 rounded-lg">
          <p className="text-gray-600">
            More photos from our past conferences and events coming soon!
          </p>
        </div>
      </div>
    </div>
  )
}
