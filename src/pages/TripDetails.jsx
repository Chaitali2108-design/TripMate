import { Link } from 'react-router-dom'

function TripDetails() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          to="/trips"
          className="inline-flex items-center text-sm font-medium text-[#6F6A61] transition-colors hover:text-[#BC4F4F]"
        >
          ← Back to My Trips
        </Link>

        {/* Header */}
        <section className="mt-8">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BC4F4F]">
            Trip Details
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722] sm:text-5xl">
            Goa Beach Escape
          </h1>

          <p className="mt-3 text-base text-[#6F6A61]">
            Goa, India
          </p>

        </section>

        {/* Overview */}
        <section className="mt-10 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-[#DED5C9] bg-white p-6">
            <p className="text-sm text-[#8A857C]">
              Start Date
            </p>

            <p className="mt-3 text-lg font-semibold text-[#292722]">
              10 Nov 2026
            </p>
          </div>

          <div className="rounded-2xl border border-[#DED5C9] bg-white p-6">
            <p className="text-sm text-[#8A857C]">
              End Date
            </p>

            <p className="mt-3 text-lg font-semibold text-[#292722]">
              15 Nov 2026
            </p>
          </div>

          <div className="rounded-2xl border border-[#DED5C9] bg-white p-6">
            <p className="text-sm text-[#8A857C]">
              Travelers
            </p>

            <p className="mt-3 text-lg font-semibold text-[#292722]">
              3 Travelers
            </p>
          </div>

        </section>

        {/* Coming Soon */}
        <section className="mt-8 rounded-3xl border border-[#DED5C9] bg-white p-8 sm:p-10">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BC4F4F]">
            Your journey
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-[#292722]">
            Plan the details of your trip
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6F6A61]">
            Destinations, activities, itinerary, expenses, and other
            travel details will be organized here.
          </p>

        </section>

      </div>
    </main>
  )
}

export default TripDetails