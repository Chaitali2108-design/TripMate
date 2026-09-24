
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateTrip() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    trip_name: '',
    destination: '',
    start_date: '',
    end_date: '',
    travelers: '1',
  })

  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1,
          trip_name: formData.trip_name,
          destination: formData.destination,
          start_date: formData.start_date,
          end_date: formData.end_date,
          travelers: Number(formData.travelers),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setMessage(data.message || 'Failed to create trip')
        return
      }

      setMessage('Trip created successfully!')

      console.log('Trip created:', data)

      setFormData({
        trip_name: '',
        destination: '',
        start_date: '',
        end_date: '',
        travelers: '1',
      })

      setTimeout(() => {
        navigate('/trips')
      }, 700)
    } catch (error) {
      console.error('Error creating trip:', error)
      setMessage('Unable to connect to the server.')
    }
  }

  return (
    <main className="min-h-screen bg-transparent px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#118AB2]">
            Plan a journey
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722]">
            Create a new trip
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#6F6A61]">
            Add the basic details of your journey. You can organize
            destinations and activities later.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
    
  className="mt-10 rounded-3xl border border-[#BCCDB1] bg-[#E4EBDD] p-7 shadow-[0_20px_60px_rgba(41,39,34,0.08)] sm:p-9"
>

          {/* Form Grid */}
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Trip Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#292722]">
                Trip Name
              </label>

              <input
                type="text"
                name="trip_name"
                value={formData.trip_name}
                onChange={handleChange}
                placeholder="e.g. Japan Adventure"
                required
                className="h-12 w-full rounded-xl border border-[#DED5C9] bg-white px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#292722]">
                Destination
              </label>

              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="e.g. Kyoto, Japan"
                required
                className="h-12 w-full rounded-xl border border-[#DED5C9] bg-white px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
              />
            </div>

            {/* Start Date */}
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
                className="h-12 w-full rounded-xl border border-[#DED5C9] bg-white px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
              />
            </div>

            {/* End Date */}
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
                className="h-12 w-full rounded-xl border border-[#DED5C9] bg-white px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
              />
            </div>

            {/* Travelers */}
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#292722]">
                Travelers
              </label>

              <select
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-[#DED5C9] bg-white px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5">5 Travelers</option>
                <option value="6">6+ Travelers</option>
              </select>
            </div>

          </div>

          {/* Message */}
          {message && (
            <p className="mt-6 rounded-xl border border-[#D9BDA5] bg-[#EBD2BE] px-4 py-3 text-center text-sm font-medium text-[#80563F]">
              {message}
            </p>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#E6E0D8] pt-6 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => navigate('/trips')}
              className="rounded-xl border border-[#DED5C9] bg-white px-6 py-3 text-sm font-semibold text-[#6F6A61] transition hover:border-[#BDB4A8] hover:bg-[#F7F3EC]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#118AB2] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
            >
              Create Trip
            </button>

          </div>

        </form>

      </div>
    </main>
  )
}

export default CreateTrip

