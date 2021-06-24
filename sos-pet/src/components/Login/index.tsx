import { Row, Col, Form, Button, Navbar, Container } from 'react-bootstrap';
import { Body } from './styles';
import Logo from '../../assets/logoOther.png'

export function Login() {
    return (
        <>
            <Body className="container-body ">
                <Navbar className="menu" expand="lg">
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    <Container>
                        <Navbar.Brand href="#home" className="title-main">SOS PET</Navbar.Brand>
                    </Container>
                </Navbar>
                <Row className="landing">    
                    <Col lg={4} md={6} sm={12}>
                        <Form className="form-login">
                            <h1 className="title">Login</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Digite seu email" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Digite sua senha" required/>
                            </Form.Group>
                            <Button className="button-enter" type="submit">
                                Entrar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Body>
        </>
    )
}