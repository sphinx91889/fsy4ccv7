export default function Schedule() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Schedule & Activities</h1>

        {/* Conference Details */}
        <div className="bg-black text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Conference Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg">Date: June 25, 2025</p>
              <p className="text-lg">Location: Hallandale Beach, FL</p>
            </div>
            <div>
              <p className="text-lg">Check-in: 8:00 AM</p>
              <p className="text-lg">Opening Ceremony: 9:00 AM</p>
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="space-y-12">
          {/* Day 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Day 1 - June 25</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">8:00 AM - 9:00 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Registration & Check-in</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">9:00 AM - 10:30 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Opening Ceremony</td>
                  </tr>
                  {/* Add more schedule items */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add more days as needed */}
        </div>
      </div>
    </div>
  )
}
