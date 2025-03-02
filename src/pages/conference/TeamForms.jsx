export default function TeamForms() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Team Forms</h1>

        {/* Team Registration Forms */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Bible Bowl Team</h2>
            <p className="text-gray-600 mb-6">
              Register your congregation's Bible Bowl team members and alternates.
            </p>
            <a href="#" className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition">
              Download Form
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Math Team</h2>
            <p className="text-gray-600 mb-6">
              Submit your Count on the Word team registration.
            </p>
            <a href="#" className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition">
              Download Form
            </a>
          </div>
        </div>

        {/* Sample Tests */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Practice Materials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold mb-2">Math Test Sample</h3>
              <p className="text-gray-600">Practice questions for Count on the Word</p>
            </a>
            <a href="#" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold mb-2">Bible Bowl Study Guide</h3>
              <p className="text-gray-600">Preparation materials for Bible Bowl</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
