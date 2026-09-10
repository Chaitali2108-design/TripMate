import { useEffect, useState } from 'react'

function Trips() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/users/1/trips'
        )

        const data = await response.json()

        if (!response.ok) {
          console.error(data)
          return
        }

        setTrips(data)
      } catch (error) {
        console.error('Error fetching trips:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrips()
  }, [])

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#95271D]">
            Your journeys
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722]">
            My Trips
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#6F6A61]">
            All your upcoming and past adventures in one place.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-10 rounded-3xl border border-[#DED5C9] bg-white p-10 text-center">
            <p className="text-sm text-[#6F6A61]">
              Loading your trips...
            </p>
          </div>
        )}

        {/* Trips */}
        {!loading && trips.length > 0 && (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {trips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-3xl border border-[#DED5C9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#95271D]">
                  {trip.destination}
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-[#292722]">
                  {trip.trip_name}
                </h2>

                <div className="mt-6 space-y-3 text-sm text-[#6F6A61]">

                  <div className="flex justify-between">
                    <span>Start</span>
                    <span className="font-medium text-[#292722]">
                      {trip.start_date}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>End</span>
                    <span className="font-medium text-[#292722]">
                      {trip.end_date}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Travelers</span>
                    <span className="font-medium text-[#292722]">
                      {trip.travelers}
                    </span>
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

        {/* Empty State */}
        {!loading && trips.length === 0 && (
          <div className="mt-10 rounded-3xl border border-[#DED5C9] bg-white p-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#95271D]">
              No trips yet
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#292722]">
              Your next adventure starts here.
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#6F6A61]">
              Create your first trip and start organizing your journey.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}

export default Trips