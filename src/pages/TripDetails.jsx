import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function TripDetails() {
  const { tripId } = useParams()
  const navigate = useNavigate()

  const [trip, setTrip] = useState(null)
  const [destinations, setDestinations] = useState([])
  const [loading, setLoading] = useState(true)
  const [showDestinationForm, setShowDestinationForm] = useState(false)

  const [destinationForm, setDestinationForm] = useState({
    place_name: '',
    description: '',
    visit_date: '',
  })

  const [addingDestination, setAddingDestination] = useState(false)

  // Delete Trip
  const handleDelete = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this trip?'
    )

    if (!confirmed) return

    try {
      const response = await fetch(
        `http://localhost:5000/api/trips/${tripId}`,
        { method: 'DELETE' }
      )

      const data = await response.json()

      if (!response.ok) {
        console.error(data)
        return
      }

      navigate('/trips')
    } catch (error) {
      console.error('Error deleting trip:', error)
    }
  }

  // Destination Form Change
  const handleDestinationChange = (event) => {
    const { name, value } = event.target

    setDestinationForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  // Delete Destination
  const handleDeleteDestination = async (destinationId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this destination?'
    )

    if (!confirmed) return

    try {
      const response = await fetch(
        `http://localhost:5000/api/destinations/${destinationId}`,
        { method: 'DELETE' }
      )

      const data = await response.json()

      if (!response.ok) {
        console.error(data)
        return
      }

      setDestinations((previous) =>
        previous.filter((destination) => destination.id !== destinationId)
      )
    } catch (error) {
      console.error('Error deleting destination:', error)
    }
  }

  // Add Destination
  const handleAddDestination = async (event) => {
    event.preventDefault()
    setAddingDestination(true)

    try {
      const response = await fetch(
        `http://localhost:5000/api/trips/${tripId}/destinations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(destinationForm),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        console.error(data)
        window.alert(data.message || 'Failed to add destination.')
        return
      }

      const destinationsResponse = await fetch(
        `http://localhost:5000/api/trips/${tripId}/destinations`
      )

      const destinationsData = await destinationsResponse.json()

      if (!destinationsResponse.ok) {
        throw new Error('Destination added, but the list could not be refreshed.')
      }

      setDestinations(destinationsData)

      setDestinationForm({
        place_name: '',
        description: '',
        visit_date: '',
      })

      setShowDestinationForm(false)
    } catch (error) {
      console.error('Error adding destination:', error)
      window.alert(error.message || 'Error adding destination.')
    } finally {
      setAddingDestination(false)
    }
  }

  // Fetch Trip and Destinations
  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/trips/${tripId}`
        )

        const data = await response.json()

        if (!response.ok) {
          console.error(data)
          return
        }

        setTrip(data)

        const destinationsResponse = await fetch(
          `http://localhost:5000/api/trips/${tripId}/destinations`
        )

        const destinationsData = await destinationsResponse.json()

        if (destinationsResponse.ok) {
          setDestinations(destinationsData)
        }
      } catch (error) {
        console.error('Error fetching trip:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrip()
  }, [tripId])

  // Format Date
  const formatDate = (date) => {
    if (!date) return ''

    const dateOnly = date.split('T')[0]
    const [year, month, day] = dateOnly.split('-')

    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    ).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  // Loading State
  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-[#6F6A61]">Loading trip...</p>
        </div>
      </main>
    )
  }

  // Trip Not Found
  if (!trip) {
    return (
      <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/trips"
            className="text-sm font-medium text-[#118AB2] transition-colors hover:text-[#0D6F91]"
          >
            ← Back to My Trips
          </Link>

          <h1 className="mt-8 text-3xl font-semibold text-[#292722]">
            Trip not found
          </h1>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          to="/trips"
          className="inline-flex items-center text-sm font-medium text-[#6F6A61] transition-colors hover:text-[#118AB2]"
        >
          ← Back to My Trips
        </Link>

        {/* Header */}
        <section className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#118AB2]">
              Trip Details
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722] sm:text-5xl">
              {trip.trip_name}
            </h1>

            <p className="mt-3 text-base text-[#6F6A61]">
              {trip.destination}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/trips/${tripId}/edit`}
              className="inline-flex w-fit rounded-xl bg-[#118AB2] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
            >
              Edit Trip
            </Link>

            <button
              type="button"
              onClick={handleDelete}
              className="inline-flex w-fit rounded-xl border border-[#C9A9A5] bg-white px-5 py-3 text-sm font-semibold text-[#8B3A32] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B3A32] hover:bg-[#FBF3F1]"
            >
              Delete Trip
            </button>
          </div>
        </section>

        {/* Overview */}
        <section className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#DED5C9] bg-white p-6">
            <p className="text-sm text-[#8A857C]">Start Date</p>
            <p className="mt-3 text-lg font-semibold text-[#292722]">
              {formatDate(trip.start_date)}
            </p>
          </div>

          <div className="rounded-2xl border border-[#DED5C9] bg-white p-6">
            <p className="text-sm text-[#8A857C]">End Date</p>
            <p className="mt-3 text-lg font-semibold text-[#292722]">
              {formatDate(trip.end_date)}
            </p>
          </div>

          <div className="rounded-2xl border border-[#DED5C9] bg-white p-6">
            <p className="text-sm text-[#8A857C]">Travelers</p>
            <p className="mt-3 text-lg font-semibold text-[#292722]">
              {trip.travelers}{' '}
              {trip.travelers === 1 ? 'Traveler' : 'Travelers'}
            </p>
          </div>
        </section>

        {/* Destinations */}
        <section className="mt-8 rounded-3xl border border-[#DED5C9] bg-white p-8 sm:p-10">

          {/* Section Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#118AB2]">
                Places to explore
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#292722]">
                Destinations
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6F6A61]">
                Add places to your journey and keep track of the destinations
                you plan to visit.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="text-sm font-medium text-[#8A857C]">
                {destinations.length}{' '}
                {destinations.length === 1 ? 'place' : 'places'}
              </span>

              <button
                type="button"
                onClick={() => setShowDestinationForm((previous) => !previous)}
                className="shrink-0 rounded-xl bg-[#118AB2] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
              >
                {showDestinationForm ? 'Cancel' : '+ Add Destination'}
              </button>
            </div>
          </div>

          {/* Add Destination Form + Trip Summary */}
          {showDestinationForm && (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              {/* Add Destination Form */}
              <div className="rounded-2xl border border-[#E6DED3] bg-[#FCFAF7] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A857C]">
                  Plan a place
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#292722]">
                  Add Destination
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6F6A61]">
                  Add a place you want to explore during this trip.
                </p>

                <form onSubmit={handleAddDestination} className="mt-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#292722]">
                      Place Name
                    </label>

                    <input
                      type="text"
                      name="place_name"
                      value={destinationForm.place_name}
                      onChange={handleDestinationChange}
                      placeholder="e.g. Baga Beach"
                      required
                      className="h-11 w-full rounded-xl border border-[#DED5C9] bg-white px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-[#292722]">
                      Visit Date
                    </label>

                    <input
                      type="date"
                      name="visit_date"
                      value={destinationForm.visit_date}
                      onChange={handleDestinationChange}
                      className="h-11 w-full rounded-xl border border-[#DED5C9] bg-white px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-[#292722]">
                      Description
                    </label>

                    <textarea
                      name="description"
                      value={destinationForm.description}
                      onChange={handleDestinationChange}
                      placeholder="Add a short note about this place..."
                      rows="4"
                      className="w-full resize-none rounded-xl border border-[#DED5C9] bg-white px-4 py-3 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={addingDestination}
                      className="w-full rounded-xl bg-[#118AB2] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {addingDestination ? 'Adding...' : '+ Add Destination'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Trip Summary */}
              <div className="rounded-2xl border border-[#C8D8DE] bg-[#EAF3F5] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D7480]">
                  Your journey
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#292722]">
                  Trip Summary
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#596A70]">
                  A quick overview of your planned trip.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-[#C8D8DE] bg-white/70 p-4">
                    <p className="text-sm text-[#6F6A61]">Trip Name</p>
                    <p className="mt-1 text-base font-semibold text-[#292722]">
                      {trip.trip_name}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#C8D8DE] bg-white/70 p-4">
                    <p className="text-sm text-[#6F6A61]">Main Destination</p>
                    <p className="mt-1 text-base font-semibold text-[#292722]">
                      {trip.destination}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-[#C8D8DE] bg-white/70 p-4">
                      <p className="text-sm text-[#6F6A61]">Travelers</p>
                      <p className="mt-1 text-base font-semibold text-[#292722]">
                        {trip.travelers}
                      </p>
                    </div>

                    <div className="rounded-xl border border-[#C8D8DE] bg-white/70 p-4">
                      <p className="text-sm text-[#6F6A61]">Places Added</p>
                      <p className="mt-1 text-base font-semibold text-[#292722]">
                        {destinations.length}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#C8D8DE] bg-white/70 p-4">
                    <p className="text-sm text-[#6F6A61]">Travel Dates</p>
                    <p className="mt-1 text-sm font-semibold text-[#292722]">
                      {formatDate(trip.start_date)} – {formatDate(trip.end_date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* Current Destinations - Full Width */}
          <div className="mt-8 rounded-2xl border border-[#E6DED3] bg-[#FCFAF7] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A857C]">
                  Your places
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#292722]">
                  Current Destinations
                </h3>
              </div>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#6F6A61]">
                {destinations.length}
              </span>
            </div>

            {destinations.length > 0 ? (
             
<div className="relative mt-6">
  <div className="relative grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
    {destinations.map((destination, index) => {
      // Place destination 3 beside destination 4,
      // with destination 4 below destination 1.
      const cardPosition =
        index === 2
          ? 'sm:col-start-2 sm:row-start-2'
          : index === 3
            ? 'sm:col-start-1 sm:row-start-2'
            : ''

      return (
        <article
          key={destination.id}
          className={`relative z-10 rounded-xl border border-[#D8E5E7] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${cardPosition}`}
        >
          <div className="flex items-start justify-between gap-3">
            <Link
              to={`/trips/${tripId}/destinations/${destination.id}`}
              className="flex min-w-0 flex-1 gap-3 rounded-lg outline-none"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#9BCBD6] bg-[#E6F5F8] text-sm font-semibold text-[#118AB2]">
                {index + 1}
              </span>

              <div className="min-w-0">
                <h4 className="break-words text-base font-semibold text-[#292722] transition-colors hover:text-[#118AB2]">
                  {destination.place_name}
                </h4>

                {destination.description && (
                  <p className="mt-1 text-sm leading-5 text-[#6F6A61]">
                    {destination.description}
                  </p>
                )}

                {destination.visit_date && (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#118AB2]">
                    {formatDate(destination.visit_date)}
                  </p>
                )}

                <p className="mt-3 text-xs font-medium text-[#8A857C]">
                  View activities →
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => handleDeleteDestination(destination.id)}
              className="shrink-0 text-xs font-semibold text-[#8B3A32] transition-colors hover:text-[#6F2D27]"
            >
              Delete
            </button>
          </div>
        </article>
      )
    })}
  </div>
</div>
            ) : (
              <div className="mt-6 rounded-xl border border-dashed border-[#DED5C9] bg-white px-6 py-12 text-center">
                <p className="text-sm font-medium text-[#292722]">
                  No destinations yet
                </p>

                <p className="mt-2 text-sm leading-6 text-[#8A857C]">
                  Click “Add Destination” above to plan your first place.
                </p>
              </div>
            )}
          </div>

        </section>
      </div>
    </main>
  )
}

export default TripDetails
