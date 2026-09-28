import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DestinationDetails() {
  const { tripId, destinationId } = useParams()

  const [destination, setDestination] = useState(null)
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [activitiesLoading, setActivitiesLoading] = useState(true)

  const [showActivityForm, setShowActivityForm] = useState(false)
  const [addingActivity, setAddingActivity] = useState(false)

  const [activityForm, setActivityForm] = useState({
    activity_name: '',
    description: '',
    activity_date: '',
    start_time: '',
    end_time: '',
    estimated_cost: '',
  })

  // Fetch Destination
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

  // Fetch Activities
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/destinations/${destinationId}/activities`
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error('Failed to fetch activities')
        }

        setActivities(data)
      } catch (error) {
        console.error(error)
      } finally {
        setActivitiesLoading(false)
      }
    }

    fetchActivities()
  }, [destinationId])

  // Handle Activity Form Change
  const handleActivityChange = (event) => {
    const { name, value } = event.target

    setActivityForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  // Add Activity
  const handleAddActivity = async (event) => {
    event.preventDefault()

    setAddingActivity(true)

    try {
      const response = await fetch(
        `http://localhost:5000/api/destinations/${destinationId}/activities`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            activity_name: activityForm.activity_name,
            description: activityForm.description,
            activity_date: activityForm.activity_date,
            start_time: activityForm.start_time,
            end_time: activityForm.end_time,
            estimated_cost: activityForm.estimated_cost || 0,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to add activity')
      }

      // Fetch activities again after adding
      const activitiesResponse = await fetch(
        `http://localhost:5000/api/destinations/${destinationId}/activities`
      )

      const activitiesData = await activitiesResponse.json()

      if (activitiesResponse.ok) {
        setActivities(activitiesData)
      }

      // Reset form
      setActivityForm({
        activity_name: '',
        description: '',
        activity_date: '',
        start_time: '',
        end_time: '',
        estimated_cost: '',
      })

      setShowActivityForm(false)

    } catch (error) {
      console.error(error)
      alert(error.message)
    } finally {
      setAddingActivity(false)
    }
  }

  // Format Date
  const formatDate = (date) => {
    if (!date) {
      return ''
    }

    const [year, month, day] = date.split('-')

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

  // Format Time
  const formatTime = (time) => {
    if (!time) {
      return ''
    }

    const [hours, minutes] = time.split(':')

    const date = new Date()
    date.setHours(Number(hours), Number(minutes), 0, 0)

    return date.toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

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

        <div className="mt-8 rounded-3xl border border-[#C8D8DE] bg-[#EAF3F5] p-8 shadow-[0_20px_45px_rgba(41,39,34,0.22)] sm:p-10">

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
              onClick={() => setShowActivityForm(!showActivityForm)}
              className="rounded-xl bg-[#118AB2] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
            >
              {showActivityForm ? 'Cancel' : '+ Add Activity'}
            </button>
          </div>

          {/* Add Activity Form */}
          {showActivityForm && (
            <form
              onSubmit={handleAddActivity}
              className="mt-8 rounded-2xl border border-[#D8E3E6] bg-[#F1F4F3] p-6"
            >

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div>
                  <label className="text-sm font-medium text-[#292722]">
                    Activity Name
                  </label>

                  <input
                    type="text"
                    name="activity_name"
                    value={activityForm.activity_name}
                    onChange={handleActivityChange}
                    required
                    placeholder="Visit Temple"
                    className="mt-2 w-full rounded-xl border border-[#D5D0C7] bg-white px-4 py-3 text-sm text-[#292722] outline-none transition focus:border-[#118AB2]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#292722]">
                    Activity Date
                  </label>

                  <input
                    type="date"
                    name="activity_date"
                    value={activityForm.activity_date}
                    onChange={handleActivityChange}
                    className="mt-2 w-full rounded-xl border border-[#D5D0C7] bg-white px-4 py-3 text-sm text-[#292722] outline-none transition focus:border-[#118AB2]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#292722]">
                    Start Time
                  </label>

                  <input
                    type="time"
                    name="start_time"
                    value={activityForm.start_time}
                    onChange={handleActivityChange}
                    className="mt-2 w-full rounded-xl border border-[#D5D0C7] bg-white px-4 py-3 text-sm text-[#292722] outline-none transition focus:border-[#118AB2]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#292722]">
                    End Time
                  </label>

                  <input
                    type="time"
                    name="end_time"
                    value={activityForm.end_time}
                    onChange={handleActivityChange}
                    className="mt-2 w-full rounded-xl border border-[#D5D0C7] bg-white px-4 py-3 text-sm text-[#292722] outline-none transition focus:border-[#118AB2]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#292722]">
                    Estimated Cost
                  </label>

                  <input
                    type="number"
                    name="estimated_cost"
                    value={activityForm.estimated_cost}
                    onChange={handleActivityChange}
                    min="0"
                    placeholder="500"
                    className="mt-2 w-full rounded-xl border border-[#D5D0C7] bg-white px-4 py-3 text-sm text-[#292722] outline-none transition focus:border-[#118AB2]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-[#292722]">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={activityForm.description}
                    onChange={handleActivityChange}
                    rows="3"
                    placeholder="Explore the temple and surrounding area..."
                    className="mt-2 w-full resize-none rounded-xl border border-[#D5D0C7] bg-white px-4 py-3 text-sm text-[#292722] outline-none transition focus:border-[#118AB2]"
                  />
                </div>

              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  disabled={addingActivity}
                  className="rounded-xl bg-[#118AB2] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0D6F91] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {addingActivity ? 'Adding...' : '+ Add Activity'}
                </button>
              </div>

            </form>
          )}

          {/* Activities */}
          {activitiesLoading ? (
            <div className="mt-8 rounded-2xl border border-dashed border-[#D8D0C5] bg-[#F7F4EE] p-8 text-center">
              <p className="text-sm text-[#706C65]">
                Loading activities...
              </p>
            </div>
          ) : activities.length > 0 ? (
            <div className="mt-8 space-y-4">

              {activities.map((activity) => (
                <article
                  key={activity.id}
                  className="rounded-2xl border border-[#E6DED3] bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <h3 className="text-lg font-semibold text-[#292722]">
                        {activity.activity_name}
                      </h3>

                      {activity.description && (
                        <p className="mt-2 text-sm leading-6 text-[#6F6A61]">
                          {activity.description}
                        </p>
                      )}

                      <div className="mt-4 flex flex-wrap gap-2">

                        {activity.activity_date && (
                          <span className="rounded-full bg-[#EAF3F5] px-3 py-1.5 text-xs font-semibold text-[#3F6875]">
                            {formatDate(activity.activity_date)}
                          </span>
                        )}

                        {activity.start_time && (
                          <span className="rounded-full bg-[#F1EAF5] px-3 py-1.5 text-xs font-semibold text-[#695477]">
                            {formatTime(activity.start_time)}
                          </span>
                        )}

                        {activity.end_time && (
                          <span className="rounded-full bg-[#F3EBDD] px-3 py-1.5 text-xs font-semibold text-[#80663D]">
                            {formatTime(activity.end_time)}
                          </span>
                        )}

                      </div>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p className="text-xs font-medium uppercase tracking-wider text-[#8A857C]">
                        Estimated Cost
                      </p>

                      <p className="mt-1 text-lg font-semibold text-[#536348]">
                        ₹{Number(activity.estimated_cost || 0).toLocaleString('en-IN')}
                      </p>
                    </div>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-[#D8D0C5] bg-[#F7F4EE] p-8 text-center">
              <p className="text-sm text-[#706C65]">
                Activities for this destination will appear here.
              </p>
            </div>
          )}

        </section>

      </div>
    </main>
  )
}

export default DestinationDetails
