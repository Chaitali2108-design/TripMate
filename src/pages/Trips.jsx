import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#95271D]">
              Your journeys
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722] sm:text-5xl">
              My Trips
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6F6A61]">
              Keep all your journeys organized and ready for the road ahead.
            </p>
          </div>

          <Link
            to="/create-trip"
            className="inline-flex w-fit rounded-xl bg-[#BC4F4F] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#403D36] hover:shadow-lg"
          >
            + Create New Trip
          </Link>

        </section>

        {/* Loading */}
        {loading && (
          <div className="mt-10 rounded-3xl border border-[#DED5C9] bg-white p-12 text-center">
            <p className="text-sm text-[#6F6A61]">
              Loading your trips...
            </p>
          </div>
        )}

        {/* Trips */}
        {!loading && trips.length > 0 && (
          <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {trips.map((trip) => (
              <article
                key={trip.id}
                className="group overflow-hidden rounded-3xl border border-[#DED5C9] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Card Top */}
                <div className="bg-[#E8DED0] px-6 py-5">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#68705A]">
                      Upcoming
                    </span>

                    <span className="text-lg text-[#95271D]">
                      ◇
                    </span>

                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#7A6F63]">
                    {trip.destination}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-[#292722]">
                    {trip.trip_name}
                  </h2>

                </div>

                {/* Card Details */}
                <div className="p-6">

                  <div className="space-y-4">

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#8A857C]">
                        Dates
                      </span>

                      <span className="text-sm font-medium text-[#292722]">
                        {formatDate(trip.start_date)}
                        {' — '}
                        {formatDate(trip.end_date)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#8A857C]">
                        Travelers
                      </span>

                      <span className="text-sm font-medium text-[#292722]">
                        {trip.travelers}{' '}
                        {trip.travelers === 1 ? 'Traveler' : 'Travelers'}
                      </span>
                    </div>

                  </div>

                  <div className="mt-6 border-t border-[#EEE9E1] pt-5">

                    <Link
  to={`/trips/${trip.id}`}
  className="text-sm font-semibold text-[#BC4F4F] transition-colors hover:text-[#A94040]"
>
  View Trip →
</Link>

                  </div>

                </div>

              </article>
            ))}

          </section>
        )}

        {/* Empty State */}
        {!loading && trips.length === 0 && (
          <section className="mt-10 rounded-3xl border border-[#DED5C9] bg-white px-6 py-16 text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#95271D]">
              No journeys yet
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#292722]">
              Your next adventure starts here.
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#6F6A61]">
              Create your first trip and start organizing your journey
              with TripMate.
            </p>

            <Link
              to="/create-trip"
              className="mt-7 inline-flex rounded-xl bg-[#292722] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#403D36] hover:shadow-lg"
            >
              Create Your First Trip
            </Link>

          </section>
        )}

      </div>
    </main>
  )
}

export default Trips