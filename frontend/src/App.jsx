import './App.css'
import { LoginForm } from './components/LoginForm'
import { CurrentUser } from './components/CurrentUser'
import { UserPage } from './pages/UserPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        {!sessionStorage.getItem('token') && <nav>
          <Link className='link' to='/'>Login</Link>
        </nav>}
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/user' element={<UserPage />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
