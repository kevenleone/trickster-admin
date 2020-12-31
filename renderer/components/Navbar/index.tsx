import { useRouter } from 'next/router';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Menu: React.FC = () => {
  const router = useRouter();

  const routes = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Giveaway',
      path: '/home'
    }
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Trickster Administrator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {routes.map(route => (
            <Nav.Link key={route.name} onClick={() => router.push(route.path)}>{route.name}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
