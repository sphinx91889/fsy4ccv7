export default function Rules() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Rules & Guidelines</h1>

        {/* General Rules */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">General Conference Rules</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <p>All participants must be registered and wear their conference badges at all times.</p>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <p>Respect and courtesy must be shown to all participants, volunteers, and staff.</p>
            </li>
            {/* Add more rules */}
          </ul>
        </div>

        {/* Decorum Guidelines */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Decorum Guidelines</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              As representatives of Christ, all participants are expected to maintain appropriate behavior and dress throughout the conference.
            </p>
            {/* Add more guidelines */}
          </div>
        </div>

        {/* Download Forms */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Important Forms</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold mb-2">Decorum Form</h3>
              <p className="text-gray-600">Download and sign the decorum agreement</p>
            </a>
            <a href="#" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold mb-2">Medical Release Form</h3>
              <p className="text-gray-600">Required for all participants</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
