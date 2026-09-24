import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

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
    <main className="min-h-[calc(100vh-73px)] bg-[#F7F6F2] px-6 py-16">
      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="mb-9 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#118AB2]">
            TripMate
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#292722]">
            Welcome back
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#706C65]">
            Continue planning your next journey.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-[#E5E2DB] bg-white p-8 shadow-[0_20px_60px_rgba(41,39,34,0.07)]"
        >

          {/* Email */}
          <div>

            <label className="mb-2 block text-sm font-medium text-[#292722]">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="h-12 w-full rounded-xl border border-[#DED5C9] bg-[#FCFAF7] px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
            />

          </div>

          {/* Password */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-[#292722]">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="h-12 w-full rounded-xl border border-[#DED5C9] bg-[#FCFAF7] px-4 text-sm text-[#292722] outline-none transition focus:border-[#118AB2] focus:ring-2 focus:ring-[#118AB2]/10"
            />

          </div>

          {/* Message */}
          {message && (
            <p className="mt-5 rounded-xl bg-[#E6F5F8] px-4 py-3 text-center text-sm text-[#118AB2]">
              {message}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="mt-7 h-12 w-full rounded-xl bg-[#118AB2] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D6F91] hover:shadow-lg"
          >
            Sign In
          </button>

        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-[#706C65]">
          Don't have an account?{' '}

          <Link
            to="/register"
            className="font-semibold text-[#118AB2] transition-colors hover:text-[#0D6F91] hover:underline"
          >
            Create one
          </Link>

        </p>

      </div>
    </main>
  )
}

export default Login