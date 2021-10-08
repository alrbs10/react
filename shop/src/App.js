import React, { useState } from 'react';
import {Navbar,Container,Nav,NavDropdown, Button} from 'react-bootstrap'
import './App.css';
import product from "./data.js";

function App() {

  let [shoes, shoes변경] = useState(product);
  let [누른상품, 누른상품변경] = useState(0);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <h1>20% Season Off</h1>
        <p> 슈의 신발가게에 오신 것을 환영합니다! <br></br>당신의 픽은 무엇인가요?</p>
        <Button variant="primary">구매하러 가기</Button>{' '}
      </div>
      <div className="container">
        <div className="row">
          {
          shoes.map(function(shoe){
            return(
              <div className="col-md-4"><img src={`https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`}width="100%" ></img>
              <h4>{shoe.title}</h4>
              <p>{shoe.content}<br></br> price:{shoe.price}</p>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
