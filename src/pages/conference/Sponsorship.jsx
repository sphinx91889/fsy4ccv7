export default function Sponsorship() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Sponsorship & Support</h1>

        {/* Ways to Support */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Financial Support</h2>
            <p className="text-gray-600 mb-6">
              Your financial contribution helps make the conference accessible to more youth.
            </p>
            <a href="#" className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition">
              Make a Donation
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
            <p className="text-gray-600 mb-6">
              Support the conference by volunteering your time and talents.
            </p>
            <a href="#" className="bg-black text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition">
              Volunteer Sign-up
            </a>
          </div>
        </div>

        {/* Sponsorship Levels */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Sponsorship Levels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">Bronze</h3>
              <p className="text-gray-600">Up to $500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">Silver</h3>
              <p className="text-gray-600">$501 - $1,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">Gold</h3>
              <p className="text-gray-600">$1,001+</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Contact for Support</h2>
          <p className="text-gray-600 mb-4">
            For more information about sponsorship opportunities, please contact:
          </p>
          <div className="text-gray-700">
            <p>Email: fsy4cc@gmail.com</p>
            <p>Phone: (305) 330-9549</p>
          </div>
        </div>
      </div>
    </div>
  )
}
