import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditTrip() {
  const { tripId } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    trip_name: '',
    destination: '',
    start_date: '',
    end_date: '',
    travelers: '1',
  })

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

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

        setFormData({
          trip_name: data.trip_name,
          destination: data.destination,
          start_date: data.start_date.split('T')[0],
          end_date: data.end_date.split('T')[0],
          travelers: String(data.travelers),
        })
      } catch (error) {
        console.error('Error fetching trip:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrip()
  }, [tripId])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSaving(true)
    setMessage('')

    try {
      const response = await fetch(
        `http://localhost:5000/api/trips/${tripId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            trip_name: formData.trip_name,
            destination: formData.destination,
            start_date: formData.start_date,
            end_date: formData.end_date,
            travelers: Number(formData.travelers),
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setMessage(data.message || 'Failed to update trip')
        return
      }

      setMessage('Trip updated successfully!')

      setTimeout(() => {
        navigate(`/trips/${tripId}`)
      }, 800)
    } catch (error) {
      console.error('Error updating trip:', error)
      setMessage('Unable to connect to the server.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-[#6F6A61]">Loading trip...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">

        <Link
          to={`/trips/${tripId}`}
          className="inline-flex text-sm font-medium text-[#6F6A61] transition-colors hover:text-[#BC4F4F]"
        >
          ← Back to Trip
        </Link>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BC4F4F]">
            Update your journey
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722]">
            Edit Trip
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#6F6A61]">
            Update the basic details of your journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border border-[#DED5C9] bg-white p-7 shadow-[0_20px_60px_rgba(41,39,34,0.06)] sm:p-9"
        >

          <div>
            <label className="mb-2 block text-sm font-medium text-[#292722]">
              Trip Name
            </label>

            <input
              type="text"
              name="trip_name"
              value={formData.trip_name}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-xl border border-[#DED5C9] bg-[#FCFAF7] px-4 text-sm text-[#292722] outline-none transition focus:border-[#BC4F4F] focus:ring-2 focus:ring-[#BC4F4F]/10"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-[#292722]">
              Destination
            </label>

            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-xl border border-[#DED5C9] bg-[#FCFAF7] px-4 text-sm text-[#292722] outline-none transition focus:border-[#BC4F4F] focus:ring-2 focus:ring-[#BC4F4F]/10"
            />
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292722]">
                Start Date
              </label>

              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl border border-[#DED5C9] bg-[#FCFAF7] px-4 text-sm text-[#292722] outline-none transition focus:border-[#BC4F4F] focus:ring-2 focus:ring-[#BC4F4F]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#292722]">
                End Date
              </label>

              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                required
                className="h-12 w-full rounded-xl border border-[#DED5C9] bg-[#FCFAF7] px-4 text-sm text-[#292722] outline-none transition focus:border-[#BC4F4F] focus:ring-2 focus:ring-[#BC4F4F]/10"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-[#292722]">
              Travelers
            </label>

            <select
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-[#DED5C9] bg-[#FCFAF7] px-4 text-sm text-[#292722] outline-none transition focus:border-[#BC4F4F] focus:ring-2 focus:ring-[#BC4F4F]/10"
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5">5 Travelers</option>
              <option value="6">6+ Travelers</option>
            </select>
          </div>

          {message && (
            <p className="mt-6 text-sm font-medium text-[#2F7D4A]">
              {message}
            </p>
          )}

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <Link
              to={`/trips/${tripId}`}
              className="rounded-xl border border-[#DED5C9] px-6 py-3 text-center text-sm font-semibold text-[#6F6A61] transition hover:border-[#BC4F4F] hover:text-[#BC4F4F]"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[#BC4F4F] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A94040] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>

          </div>

        </form>
      </div>
    </main>
  )
}

export default EditTrip