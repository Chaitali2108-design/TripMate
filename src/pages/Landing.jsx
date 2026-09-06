function Landing() {
  return (
    <main className="bg-[#F7F6F2] text-[#24231F]">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8">

          {/* Content */}
          <div className="max-w-xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#95271D]">
              Your journey, your way
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Travel plans
              <br />
              <span className="text-[#68645D]">
                made effortless.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#706C65]">
              TripMate brings your destinations, itineraries, expenses,
              and travel plans together in one beautifully organized place.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <a
                href="/register"
                className="rounded-full bg-[#24231F] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#34322D] hover:shadow-lg"
              >
                Start Planning
              </a>

              <a
                href="/login"
                className="rounded-full border border-[#D8D5CE] bg-white px-7 py-3.5 text-sm font-semibold text-[#24231F] transition-all duration-300 hover:-translate-y-1 hover:border-[#95271D] hover:shadow-md"
              >
                Sign In
              </a>

            </div>

            {/* Trust line */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="h-9 w-9 rounded-full border-2 border-[#F7F6F2] bg-[#D8C6B7]" />
                <div className="h-9 w-9 rounded-full border-2 border-[#F7F6F2] bg-[#A8B0A0]" />
                <div className="h-9 w-9 rounded-full border-2 border-[#F7F6F2] bg-[#B7A99A]" />
              </div>

              <p className="text-sm text-[#706C65]">
                Built for travelers who love organized journeys.
              </p>
            </div>

          </div>

          {/* Visual */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[2rem] bg-[#E8E5DE] shadow-[0_30px_80px_rgba(36,35,31,0.12)]">

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
                alt="Beautiful travel destination"
                className="h-[560px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Trip Card */}
            <div className="absolute -bottom-6 -left-5 w-64 rounded-2xl border border-[#E1DED7] bg-white p-5 shadow-xl sm:-left-8">

              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A857C]">
                  Upcoming trip
                </p>

                <span className="text-[#95271D]">
                  ●
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-[#24231F]">
                Explore Kyoto
              </h3>

              <p className="mt-1 text-sm text-[#77736C]">
                12 Oct — 18 Oct
              </p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#ECE9E2]">
                <div className="h-full w-2/3 rounded-full bg-[#8A857C]" />
              </div>

              <p className="mt-2 text-xs text-[#8A857C]">
                Planning 68% complete
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Features */}
      <section className="border-t border-[#E5E2DB] bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#95271D]">
              Everything in one place
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From the first idea
              <br />
              to the final destination.
            </h2>

            <p className="mt-5 leading-7 text-[#706C65]">
              Plan every part of your journey without jumping between
              different apps and notes.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-[#E5E2DB] bg-[#F7F6F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">✦</span>

              <h3 className="mt-8 text-lg font-semibold">
                Plan Trips
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#706C65]">
                Create and organize complete journeys around your plans.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E2DB] bg-[#F7F6F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">◫</span>

              <h3 className="mt-8 text-lg font-semibold">
                Build Itineraries
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#706C65]">
                Keep destinations, activities, dates, and plans organized.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E2DB] bg-[#F7F6F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">₹</span>

              <h3 className="mt-8 text-lg font-semibold">
                Track Expenses
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#706C65]">
                Keep your travel spending visible and under control.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E2DB] bg-[#F7F6F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span className="text-2xl">↗</span>

              <h3 className="mt-8 text-lg font-semibold">
                Travel Together
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#706C65]">
                Collaborate with your travel companions and plan together.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Final CTA */}
      <section className="bg-[#24231F] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A79E]">
            Your next adventure
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Stop collecting travel plans.
            <br />
            Start living them.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#B8B4AC]">
            Create your TripMate account and turn your next destination
            into a journey worth remembering.
          </p>

          <a
            href="/register"
            className="mt-9 inline-flex rounded-full bg-[#95271D] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#AA3024] hover:shadow-xl"
          >
            Create Your TripMate Account
          </a>

        </div>
      </section>

    </main>
  )
}

export default Landing