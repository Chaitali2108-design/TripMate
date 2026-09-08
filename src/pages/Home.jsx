function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Welcome Section */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#95271D]">
            Your travel space
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#292722] sm:text-5xl">
            Plan your next journey.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#6F6A61]">
            Organize your trips, discover destinations, and keep every
            travel detail in one place.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="mt-10 grid gap-5 md:grid-cols-2">

          {/* Create Trip */}
          <button
            type="button"
            className="group rounded-3xl bg-[#E8DED0] p-7 text-left text-[#292722] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#7A6F63]">
                Start something new
              </p>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#95271D] text-lg text-white transition-transform duration-300 group-hover:rotate-6">
                +
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold">
              Create a Trip
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#6F6A61]">
              Build a new journey with destinations, dates, activities,
              and everything you want to experience.
            </p>

            <span className="mt-6 inline-flex text-sm font-semibold text-[#95271D]">
              Create Trip →
            </span>
          </button>

          {/* Explore */}
          <button
            type="button"
            className="group rounded-3xl border border-[#DED5C9] bg-[#FFFDFC] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#C8B9A8] hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#7A756C]">
                Continue exploring
              </p>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#68705A] text-lg text-white transition-transform duration-300 group-hover:rotate-6">
                ↗
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-[#292722]">
              Explore Destinations
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#6F6A61]">
              Find places worth visiting and get inspired for your
              next adventure.
            </p>

            <span className="mt-6 inline-flex text-sm font-semibold text-[#68705A]">
              Explore →
            </span>
          </button>

        </section>

        {/* Travel Overview */}
        <section className="mt-12">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#95271D]">
                Your journeys
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#292722]">
                Travel Overview
              </h2>
            </div>

            <span className="hidden text-sm text-[#7A756C] sm:block">
              Your travel at a glance
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {/* Trips */}
            <div className="rounded-2xl border border-[#DED5C9] bg-[#FFFDFC] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#7A756C]">
                  Total Trips
                </p>

                <span className="text-xl text-[#95271D]">
                  ◇
                </span>
              </div>

              <p className="mt-4 text-3xl font-semibold text-[#292722]">
                0
              </p>

              <p className="mt-1 text-xs text-[#8A857C]">
                Journeys planned
              </p>
            </div>

            {/* Upcoming */}
            <div className="rounded-2xl border border-[#DED5C9] bg-[#FFFDFC] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#7A756C]">
                  Upcoming
                </p>

                <span className="text-xl text-[#68705A]">
                  ◷
                </span>
              </div>

              <p className="mt-4 text-3xl font-semibold text-[#292722]">
                0
              </p>

              <p className="mt-1 text-xs text-[#8A857C]">
                Upcoming adventures
              </p>
            </div>

            {/* Destinations */}
            <div className="rounded-2xl border border-[#DED5C9] bg-[#FFFDFC] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#7A756C]">
                  Destinations
                </p>

                <span className="text-xl text-[#B66A4A]">
                  ◎
                </span>
              </div>

              <p className="mt-4 text-3xl font-semibold text-[#292722]">
                0
              </p>

              <p className="mt-1 text-xs text-[#8A857C]">
                Places on your list
              </p>
            </div>

          </div>
        </section>

        {/* Empty Trips Section */}
        <section className="mt-12 overflow-hidden rounded-3xl border border-[#DED5C9] bg-[#EDE5DA]">

          <div className="px-7 py-10 sm:px-10">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#95271D]">
              Your next adventure
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#292722] sm:text-3xl">
              Your travel story starts here.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6F6A61]">
              You haven't created a trip yet. Start planning your first
              journey and keep everything organized with TripMate.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-[#95271D] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7D2018] hover:shadow-lg"
            >
              Create Your First Trip
            </button>

          </div>

        </section>

      </div>
    </main>
  )
}

export default Home