
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#DED8CC]/80 bg-[#F5F1E8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/home"
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#BC4F4F] text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-6">
            T
          </span>

          <span className="text-xl font-bold tracking-tight text-[#292722]">
            TripMate
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/home"
            className="text-sm font-medium text-[#292722] transition-colors duration-300 hover:text-[#BC4F4F]"
          >
            Home
          </Link>

          <Link
            to="/trips"
            className="text-sm font-medium text-[#6F695F] transition-colors duration-300 hover:text-[#BC4F4F]"
          >
            Trips
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-[#6F695F] transition-colors duration-300 hover:text-[#BC4F4F]"
          >
            About
          </Link>

        </div>

        {/* CTA */}
        <Link
          to="/create-trip"
          className="rounded-full bg-[#BC4F4F] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A94040] hover:shadow-lg"
        >
          Create Trip
        </Link>

      </div>
    </nav>
  )
}

export default Navbar

