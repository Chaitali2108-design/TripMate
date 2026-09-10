import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#ded8cc]/80 bg-[#f5f1e8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292722] text-sm font-bold text-[#f5f1e8] transition-transform duration-300 group-hover:rotate-6">
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
            className="text-sm font-medium text-[#292722] transition-colors duration-300 hover:text-[#766b5a]"
          >
            Home
          </Link>

          <Link
            to="/trips"
            className="text-sm font-medium text-[#6f695f] transition-colors duration-300 hover:text-[#292722]"
          >
            Trips
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-[#6f695f] transition-colors duration-300 hover:text-[#292722]"
          >
            About
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/create-trip"
          className="rounded-full bg-[#292722] px-5 py-2.5 text-sm font-semibold text-[#f5f1e8] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#403d36] hover:shadow-lg"
        >
          Create Trip
        </Link>

      </div>
    </nav>
  )
}

export default Navbar