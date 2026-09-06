import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Application Pages */}
        <Route
          path="/home"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />


      </Routes>
    </BrowserRouter>
  )
}

export default App