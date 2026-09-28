import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DestinationDetails() {
  const { tripId, destinationId } = useParams()

  const [destination, setDestination] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/trips/${tripId}/destinations`
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error('Failed to fetch destination')
        }

        const selectedDestination = data.find(
          (item) => item.id === Number(destinationId)
        )

        setDestination(selectedDestination || null)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchDestination()
  }, [tripId, destinationId])

  if (loading) {
    return (
      <main className="min-h-[calc(100vh-73px)] bg-transparent px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm text-[#706C65]">
            Loading destination...
          </p>
        </div>
      </main>
    )
  }

  if (!destination) {
    return (
      <main className="min-h-[calc(100vh-73px)] bg-transparent px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-2xl font-semibold text-[#292722]">
            Destination not found
          </h1>

          <Link
            to={`/trips/${tripId}`}
            className="mt-5 inline-block text-sm font-semibold text-[#118AB2] hover:text-[#0D6F91]"
          >
            ← Back to Trip
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100vh-73px)] bg-transparent px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          to={`/trips/${tripId}`}
          className="text-sm font-medium text-[#706C65] transition-colors hover:text-[#118AB2]"
        >
          ← Back to Trip
        </Link>

        <div className="mt-8 rounded-3xl border border-[#C8D5C1] bg-[#E4EBDD] p-8 shadow-[0_20px_60px_rgba(41,39,34,0.08)]">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#617653]">
            Destination
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722]">
            {destination.place_name}
          </h1>

          {destination.description && (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#625F57]">
              {destination.description}
            </p>
          )}

          {destination.visit_date && (
            <p className="mt-5 text-sm font-medium text-[#536348]">
              Visit Date: {destination.visit_date}
            </p>
          )}

        </div>

        <section className="mt-10 rounded-3xl border border-[#D8E3E6] bg-[#FCFAF7] p-8 shadow-[0_16px_45px_rgba(41,39,34,0.06)]">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#118AB2]">
                Itinerary
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#292722]">
                Activities
              </h2>
            </div>

            <button
              type="button"
              className="rounded-xl bg-[#118AB2] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
            >
              + Add Activity
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-[#D8D0C5] bg-[#F7F4EE] p-8 text-center">
            <p className="text-sm text-[#706C65]">
              Activities for this destination will appear here.
            </p>
          </div>

        </section>

      </div>
    </main>
  )
}

export default DestinationDetails