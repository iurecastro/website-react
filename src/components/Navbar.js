// src/components/Navbar.js
import React from 'react'; // Importa a biblioteca React
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Importa componentes do Bootstrap
import { Link } from 'react-router-dom'; // Importa o Link do React Router

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg"> {/* Componente Navbar do Bootstrap */}
      <Container> {/* Container para centralizar o conteúdo */}
        <Navbar.Brand as={Link} to="/">Meu Site</Navbar.Brand> {/* Nome do site que também é um link para a página inicial */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Botão para expandir/colapsar o menu em telas pequenas */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Contêiner que agrupa os itens de navegação */}
          <Nav className="me-auto"> {/* Grupo de links de navegação */}
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Link para a página inicial */}
            <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Link para a página About */}
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Link para a página Contact */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"> {/* Dropdown com mais opções */}
              <NavDropdown.Item as={Link} to="/action1">Action 1</NavDropdown.Item> {/* Item 1 do Dropdown */}
              <NavDropdown.Item as={Link} to="/action2">Action 2</NavDropdown.Item> {/* Item 2 do Dropdown */}
              <NavDropdown.Item as={Link} to="/action3">Action 3</NavDropdown.Item> {/* Item 3 do Dropdown */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar; // Exporta o componente para ser usado em outros lugares
