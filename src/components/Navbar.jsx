import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="border-b border-[#ded8cc] bg-[#f5f1e8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-[#292722]"
        >
          TripMate
        </Link>

        <div className="flex gap-8 text-sm font-medium text-[#6f695f]">
          <Link
            to="/"
            className="transition-colors hover:text-[#292722]"
          >
            Home
          </Link>

          <Link
            to="/trips"
            className="transition-colors hover:text-[#292722]"
          >
            Trips
          </Link>

          <Link
            to="/about"
            className="transition-colors hover:text-[#292722]"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar