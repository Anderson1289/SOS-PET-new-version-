import {Navbar, Container, Carousel } from 'react-bootstrap'
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
                    <h3 className="title">Todo animal de rua merece um lar</h3>
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