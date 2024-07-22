import './App.css'
import { LoginForm } from './components/LoginForm'
import { UserPage } from './pages/UserPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        {!sessionStorage.getItem('token') && <nav>
          <Link className='link' to='/'>Login</Link>
          <Link className='link' to='/registration'>Registration</Link>
        </nav>}
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/user' element={<UserPage />}/>
          <Route path='/registration' element={<RegistrationPage />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
