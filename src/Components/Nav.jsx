import React from "react";
import { Container, Navbar } from "react-bootstrap";
import LazyLoad from "react-lazyload";

function Nav() {
  return (
    <div>
      <Navbar className="bg-gradient-to-b from-green-200 to-white">
        <Container className="flex flex-row justify-center h-52 pt-4">
          <LazyLoad height={200} offset={100}>
            <Navbar.Brand href="#home">
              <img
                src="/Assets/unnamed (2).png"
                alt="broken-image"
                className="h-28   p-1 flex flex-row justify-center"
              />
            </Navbar.Brand>
          </LazyLoad>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
