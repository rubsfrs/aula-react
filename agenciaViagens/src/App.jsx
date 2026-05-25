import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Escocia from './components/Escocia'
import Aruba from './components/Aruba'
import Muralhas from './components/Muralhas'
import GrandCanyon from './components/GrandCanyon'

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Escocia' element={<Escocia />} />
          <Route path='/Aruba' element={<Aruba />} />
          <Route path='/Muralhas' element={<Muralhas />} />
          <Route path='GrandCanyon' element={<GrandCanyon />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
