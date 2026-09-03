import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#292722]">
      <Navbar />

      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#7c7568]">
            Travel differently
          </p>

          <h1 className="text-5xl font-bold tracking-tight">
            TripMate
          </h1>

          <p className="mt-4 text-lg text-[#6f695f]">
            Plan less. Travel more.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App