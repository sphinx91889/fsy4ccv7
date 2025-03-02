export default function BibleBowl() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Bible Bowl</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Competition Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About the Competition</h2>
            <p className="text-gray-600 mb-6">
              Test your knowledge of scripture in our annual Bible Bowl competition. 
              Teams compete by answering questions based on selected books of the Bible.
            </p>
            <div className="space-y-4">
              <h3 className="font-bold">Competition Format:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Teams of 4-6 participants</li>
                <li>Multiple rounds of questions</li>
                <li>Timed responses</li>
                <li>Written and oral components</li>
              </ul>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Registration</h2>
            <p className="text-gray-600 mb-6">
              Register your team for the Bible Bowl competition.
            </p>
            <a 
              href="#"
              className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition"
            >
              Register Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
