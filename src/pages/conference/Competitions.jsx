import { Link } from 'react-router-dom'

const competitions = [
  {
    title: 'Bible Bowl',
    description: 'Test your knowledge of scripture in our annual Bible Bowl competition.',
    path: '/conference/competitions/bible-bowl',
    icon: '📖'
  },
  {
    title: 'Count on the Word',
    description: 'Mathematical challenges based on biblical principles.',
    path: '/conference/competitions/count-word',
    icon: '🔢'
  },
  {
    title: 'How Great Thou Art Fair',
    description: 'Showcase your artistic talents inspired by faith.',
    path: '/conference/competitions/art-fair',
    icon: '🎨'
  },
  {
    title: 'Spelling Bee',
    description: 'Compete in our annual spelling competition.',
    path: '/conference/competitions/spelling-bee',
    icon: '📝'
  },
  {
    title: 'Speak a Word',
    description: 'Public speaking and scripture recitation competition.',
    path: '/conference/competitions/speak-word',
    icon: '🎙️'
  }
]

export default function Competitions() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Competitions</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition) => (
            <div key={competition.title} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{competition.icon}</div>
              <h2 className="text-2xl font-bold mb-3">{competition.title}</h2>
              <p className="text-gray-600 mb-6">{competition.description}</p>
              <Link 
                to={competition.path}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
