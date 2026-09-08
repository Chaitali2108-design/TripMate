import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setMessage(data.message || 'Login failed')
        return
      }

      setMessage('Login successful!')

console.log('Logged in user:', data.user)

setTimeout(() => {
  navigate('/home')
}, 800)
    } catch (error) {
      console.error(error)
      setMessage('Unable to connect to the server.')
    }
  }

  return (
    <main className="min-h-[calc(100vh-73px)] bg-[#F8F5F0] px-6 py-16">
      <div className="mx-auto max-w-md">

        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#95271D]">
            TripMate
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#211E1B]">
            Welcome back
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#716B64]">
            Continue planning your next journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-[#E5DED7] bg-white p-8 shadow-[0_20px_60px_rgba(33,30,27,0.07)]"
        >

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#211E1B]">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="h-12 w-full rounded-xl border border-[#E5DED7] bg-[#FCFAF7] px-4 text-sm text-[#211E1B] outline-none transition focus:border-[#95271D] focus:ring-2 focus:ring-[#95271D]/10"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#211E1B]">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="h-12 w-full rounded-xl border border-[#E5DED7] bg-[#FCFAF7] px-4 text-sm text-[#211E1B] outline-none transition focus:border-[#95271D] focus:ring-2 focus:ring-[#95271D]/10"
            />
          </div>

          {/* Message */}
          {message && (
            <p className="mt-5 rounded-xl bg-[#F8F5F0] px-4 py-3 text-center text-sm text-[#95271D]">
              {message}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="mt-7 h-12 w-full rounded-xl bg-[#95271D] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7D2018] hover:shadow-lg"
          >
            Sign In
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-[#716B64]">
          Don't have an account?{' '}
          <Link
  to="/register"
  className="font-semibold text-[#95271D] hover:underline"
>
  Create one
</Link>
        </p>

      </div>
    </main>
  )
}

export default Login