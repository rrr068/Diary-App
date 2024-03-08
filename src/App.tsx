import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Create from './pages/Create'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
	<Route path="/*" element={<NotFound />} />
      </Routes> 
      <Footer />
    </BrowserRouter>
  )
}

export default App