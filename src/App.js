// src/App.js
import React from 'react'; // Importa a biblioteca React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa componentes do React Router
import NavigationBar from './components/Navbar'; // Importa o componente Navbar
import Home from './components/Home'; // Importa o componente Home
import About from './components/About'; // Importa o componente About
import Contact from './components/Contact'; // Importa o componente Contact

const App = () => {
  return (
    <Router> {/* Envolve o aplicativo no Router para habilitar a navegação */}
      <NavigationBar /> {/* Inclui a barra de navegação */}
      <div className="container mt-4"> {/* Container para centralizar o conteúdo com margem superior */}
        <Routes> {/* Define as rotas */}
          <Route exact path="/" element={<Home />} /> {/* Rota para a página Home */}
          <Route path="/about" element={<About />} /> {/* Rota para a página About */}
          <Route path="/contact" element={<Contact />} /> {/* Rota para a página Contact */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporta o componente para ser usado em outros lugares
