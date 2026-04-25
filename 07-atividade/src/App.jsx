import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Principal from './Pages/Principal'
import Produtos from './Pages/Produtos'
import SobreNos from './Pages/SobreNos'
import FaleConosco from './Pages/FaleConosco'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/faleconosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
