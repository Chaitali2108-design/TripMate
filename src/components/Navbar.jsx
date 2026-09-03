function Navbar() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold tracking-tight">
          TripMate
        </h1>

        <div className="flex gap-8 text-sm font-medium text-stone-600">
          <a href="#">Home</a>
          <a href="#">Trips</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar