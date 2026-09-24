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

const cardColors = [
  {
    top: 'bg-[#DCD2E8]',
    border: 'border-[#C8BAD8]',
    label: 'text-[#625174]',
    icon: 'text-[#705786]',
  },
  {
    top: 'bg-[#EBD2BE]',
    border: 'border-[#D9BDA5]',
    label: 'text-[#80563F]',
    icon: 'text-[#996246]',
  },
  {
    top: 'bg-[#D4E0CB]',
    border: 'border-[#BCCDB1]',
    label: 'text-[#536348]',
    icon: 'text-[#617653]',
  },
]

  return (
    <main className="min-h-screen bg-transparent px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#118AB2]">
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
            className="inline-flex w-fit rounded-xl bg-[#118AB2] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
          >
            + Create New Trip
          </Link>

        </section>

        {/* Loading */}
        {loading && (
          <div className="mt-10 rounded-3xl border border-[#DDD5EA] bg-[#F0ECF7] p-12 text-center shadow-[0_10px_30px_rgba(80,70,100,0.06)]">
            <p className="text-sm text-[#74658A]">
              Loading your trips...
            </p>
          </div>
        )}

        {/* Trips */}
        {!loading && trips.length > 0 && (
          <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {trips.map((trip, index) => {
              const color = cardColors[index % cardColors.length]

              return (
                <article
                  key={trip.id}
                  className={`group overflow-hidden rounded-3xl border ${color.border} bg-[#FCFAF7] shadow-[0_12px_35px_rgba(41,39,34,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >

                  {/* Card Top */}
                  <div className={`${color.top} px-6 py-5`}>

                    <div className="flex items-center justify-between">

                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#6F6A61]">
                        Upcoming
                      </span>

                      <span className={`text-lg ${color.icon}`}>
                        ◇
                      </span>

                    </div>

                    <p className={`mt-5 text-xs font-semibold uppercase tracking-wider ${color.label}`}>
                      {trip.destination}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-[#292722]">
                      {trip.trip_name}
                    </h2>

                  </div>

                  {/* Card Details */}
                  <div className="bg-[#FCFAF7] p-6">

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

                    <div className="mt-6 border-t border-[#E6E0D8] pt-5">

                      <Link
                        to={`/trips/${trip.id}`}
                        className="text-sm font-semibold text-[#118AB2] transition-colors hover:text-[#0D6F91]"
                      >
                        View Trip →
                      </Link>

                    </div>

                  </div>

                </article>
              )
            })}

          </section>
        )}

        {/* Empty State */}
        {!loading && trips.length === 0 && (
          <section className="mt-10 rounded-3xl border border-[#DDD5EA] bg-[#F0ECF7] px-6 py-16 text-center shadow-[0_12px_35px_rgba(80,70,100,0.06)]">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8064A2]">
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
              className="mt-7 inline-flex rounded-xl bg-[#118AB2] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
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

