import heroImage from '../../assets/hero.png'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Hero Content */}
        <div className="relative z-10">

          <p className="animate-[fadeInUp_0.8s_ease-out] text-sm font-semibold uppercase tracking-[0.3em] text-[#7c7568]">
            Travel differently
          </p>

          <h1 className="mt-5 max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.15s_both] text-5xl font-bold leading-[1.05] tracking-tight text-[#292722] sm:text-6xl lg:text-7xl">
            Your journey,
            <br />
            <span className="text-[#766b5a]">beautifully planned.</span>
          </h1>

          <p className="mt-7 max-w-xl animate-[fadeInUp_0.8s_ease-out_0.3s_both] text-lg leading-8 text-[#6f695f]">
            Plan unforgettable trips, organize every detail, and
            keep your entire journey in one beautiful place.
          </p>

          <div className="mt-9 flex flex-wrap gap-4 animate-[fadeInUp_0.8s_ease-out_0.45s_both]">
            <button className="rounded-full bg-[#292722] px-7 py-3.5 text-sm font-semibold text-[#f5f1e8] transition-all duration-300 hover:-translate-y-1 hover:bg-[#403d36] hover:shadow-lg">
              Plan a Trip
            </button>

            <button className="rounded-full border border-[#cfc8bb] px-7 py-3.5 text-sm font-semibold text-[#292722] transition-all duration-300 hover:-translate-y-1 hover:border-[#292722] hover:bg-[#ebe5d9]">
              Explore Trips
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8 border-t border-[#ded8cc] pt-7 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            <div>
              <p className="text-2xl font-bold text-[#292722]">01</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#7c7568]">
                Plan
              </p>
            </div>

            <div className="h-10 w-px bg-[#ded8cc]" />

            <div>
              <p className="text-2xl font-bold text-[#292722]">02</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#7c7568]">
                Explore
              </p>
            </div>

            <div className="h-10 w-px bg-[#ded8cc]" />

            <div>
              <p className="text-2xl font-bold text-[#292722]">03</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#7c7568]">
                Travel
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-[fadeInUp_1s_ease-out_0.2s_both]">

          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={heroImage}
              alt="Beautiful travel destination"
              className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-5 rounded-2xl border border-[#ded8cc] bg-[#f8f5ee] px-5 py-4 shadow-xl backdrop-blur-sm sm:-left-8">
            <p className="text-xs font-medium uppercase tracking-wider text-[#7c7568]">
              Your next adventure
            </p>

            <p className="mt-1 text-sm font-semibold text-[#292722]">
              Starts with a plan.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero