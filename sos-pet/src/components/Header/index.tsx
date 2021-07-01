import {Navbar, Nav, Container, NavDropdown,Carousel } from 'react-bootstrap'
import firstSlide from '../../assets/firstSlide.jpg'
import secondSlide from '../../assets/secondSlide.jpg'
import thirdSlide from '../../assets/thirdSlide.jpg'
import { ContainerHeader, Title, Menu } from './style'
export function Header (){
    return(
        <ContainerHeader>
            <Menu>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">
                            <Title>SOS PET</Title> 
                        </Navbar.Brand>
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
                    </Container>
                </Navbar>
            </Menu>
            <Carousel>
                <Carousel.Item className="container-carousel">
                    <img
                    className="d-block w-100 fluid"
                    src={firstSlide}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="title">Todo animal merece um lar</h3>
                    <p className="title">E todo lar merece um animal que veio da rua.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="container-carousel">
                    <img
                        className="d-block w-100"
                        src={secondSlide}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="title">Aqueles que nós resgatamos,</h3>
                    <p className="title">nos resgatam.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="container-carousel">
                    <img
                        className="d-block w-100"
                        src={thirdSlide}
                        alt="thirdslide"
                    />
                    <Carousel.Caption>
                    <h3 className="title">Não existem cachorros de rua!!!</h3>
                    <p className="title">Existem cachorros, por nós abandonados nas ruas...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </ContainerHeader>
    )
}