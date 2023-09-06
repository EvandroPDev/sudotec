import { Outlet } from 'react-router-dom'
import Header from './layout/Header/Header'
import NavBar from './layout/NavBar/Navbar'
import Footer from './layout/Footer/Footer';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App