import "../App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { FaBars } from "react-icons/fa";
// import styled from "styled-components";

const NavBar = () => {
  //   const Bars = styled(FaBars)`
  //     display: none;
  //     color: #f1f7ed;
  //     @media screen and (max-width: 950px) {
  //       display: block;
  //       position: absolute;
  //       top: 0;
  //       right: 0;
  //       transform: translate(-100%, 75%);
  //       font-size: 1.8rem;
  //       cursor: pointer;
  //     }
  //   `;

  return (
    <Navbar bg="dark" variant="dark" className="NavMenu">
      {/* <Bars /> */}
      <LinkContainer to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Beginners" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/hash">Hash</NavDropdown.Item>

            <NavDropdown.Item href="/block">Block</NavDropdown.Item>

            <NavDropdown.Item href="/blockchain">BlockChain</NavDropdown.Item>

            <NavDropdown.Item href="/distributed">Distributed</NavDropdown.Item>

            <NavDropdown.Item href="/tokens">Tokens</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Advanced" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/keys">Keys</NavDropdown.Item>

            <NavDropdown.Item href="/coinbase">CoinBase</NavDropdown.Item>

            <NavDropdown.Item href="/transactions">
              Transactions
            </NavDropdown.Item>

            <NavDropdown.Item href="/verifysignature">
              Verify&Signature
            </NavDropdown.Item>

            <NavDropdown.Item href="/blockchaintotal">
              BlockChain_Total
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          {/* 
          <LinkContainer to="/coinbase">
            <Nav.Link>CoinBase</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/keys">
            <Nav.Link>Keys</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/verifysignature">
            <Nav.Link>Verify&Signature</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/transactions">
            <Nav.Link>Transactions</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/blockchaintotal">
            <Nav.Link>BlockChain_Total</Nav.Link>
          </LinkContainer> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
