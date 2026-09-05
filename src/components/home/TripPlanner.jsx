function TripPlanner() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7c7568]">
            Plan your journey
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#292722] sm:text-4xl">
            Where will you go next?
          </h2>
        </div>

        {/* Planner Card */}
        <div className="rounded-[2rem] border border-[#ded8cc] bg-[#f8f5ee] p-6 shadow-[0_20px_60px_rgba(41,39,34,0.08)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(41,39,34,0.12)] lg:p-8">

          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">

            {/* Destination */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#7c7568]">
                Destination
              </label>

              <div className="flex h-14 items-center rounded-xl border border-[#ded8cc] bg-[#f5f1e8] px-4 transition-all duration-300 focus-within:border-[#766b5a] focus-within:shadow-sm">
                <span className="mr-3 text-lg">⌖</span>

                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full bg-transparent text-sm text-[#292722] outline-none placeholder:text-[#9a9387]"
                />
              </div>
            </div>

            {/* Start Date */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#7c7568]">
                Start Date
              </label>

              <div className="flex h-14 items-center rounded-xl border border-[#ded8cc] bg-[#f5f1e8] px-4 transition-all duration-300 focus-within:border-[#766b5a] focus-within:shadow-sm">
                <input
                  type="date"
                  className="w-full bg-transparent text-sm text-[#292722] outline-none"
                />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#7c7568]">
                End Date
              </label>

              <div className="flex h-14 items-center rounded-xl border border-[#ded8cc] bg-[#f5f1e8] px-4 transition-all duration-300 focus-within:border-[#766b5a] focus-within:shadow-sm">
                <input
                  type="date"
                  className="w-full bg-transparent text-sm text-[#292722] outline-none"
                />
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#7c7568]">
                Travelers
              </label>

              <select
                className="h-14 w-full rounded-xl border border-[#ded8cc] bg-[#f5f1e8] px-4 text-sm text-[#292722] outline-none transition-all duration-300 focus:border-[#766b5a] focus:shadow-sm"
                defaultValue="2"
              >
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5">5 Travelers</option>
                <option value="6">6+ Travelers</option>
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button
                type="button"
                className="h-14 w-full rounded-xl bg-[#292722] px-7 text-sm font-semibold text-[#f5f1e8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#403d36] hover:shadow-xl active:translate-y-0 lg:w-auto"
              >
                Plan Trip
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default TripPlanner