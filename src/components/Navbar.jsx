function Navbar() {
  return (
    <nav className="border-b border-[#ded8cc] bg-[#f5f1e8]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold tracking-tight text-[#292722]">
          TripMate
        </h1>

        <div className="flex gap-8 text-sm font-medium text-[#6f695f]">
          <a href="#" className="transition-colors hover:text-[#292722]">
            Home
          </a>

          <a href="#" className="transition-colors hover:text-[#292722]">
            Trips
          </a>

          <a href="#" className="transition-colors hover:text-[#292722]">
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar