import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/pages/Home'
import SobreNos from './Components/pages/SobreNos'
import FaleConosco from './Components/pages/FaleConosco'

function App() {
  return (
    <>
      <Header />
      <main>
        {/*Qualquer página terá header e footer*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/faleconosco" element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
