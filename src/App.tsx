import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import ListaCategorias from './components/categorias/listarcategorias/ListarCategorias'
import FormCategorias from './components/categorias/formcategorias/FormCategorias'
import DeletarCategorias from './components/categorias/deletarcategorias/DeletarCategorias'


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategorias />} />
              <Route path="/editarcategoria/:id" element={<FormCategorias />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App