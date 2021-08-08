import React from "react";
import "../index.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="NavMenu">
      <LinkContainer to="/">
        <Navbar.Brand>BlockChain Demo</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Beginners" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/hash">Hash</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/block">Block</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/blockchain">BlockChain</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/distributed">Distributed</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/tokens">Tokens</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/coinbase">CoinBase</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Advanced" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/keys">Keys</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/verifysignature">
              Signature
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/transactions">
              Transactions
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/blockchaintotal">
              BlockChain_Total
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
