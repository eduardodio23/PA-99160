import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import CadastrarAlunos from './pages/CadastrarAlunos'
import ListarAlunos from './pages/ListarAlunos'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
     <Header/>
     <main>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cadastro' element={<CadastrarAlunos/>} />
        <Route path='/lista' element={<ListarAlunos/>} />
       </Routes>
     </main>
     <Footer/>
     <ToastContainer autoClose={3000} />
    </>
  )
}

export default App
