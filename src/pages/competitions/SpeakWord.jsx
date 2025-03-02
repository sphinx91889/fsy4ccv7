export default function SpeakWord() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Speak a Word</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About the Competition</h2>
            <p className="text-gray-600 mb-6">
              Showcase your public speaking skills through scripture recitation 
              and spiritual message delivery.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold">Categories:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Scripture Memorization</li>
                <li>Prepared Speech</li>
                <li>Impromptu Speaking</li>
                <li>Biblical Storytelling</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Registration</h2>
            <p className="text-gray-600 mb-6">
              Register for the Speak a Word competition.
            </p>
            <a 
              href="#"
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
