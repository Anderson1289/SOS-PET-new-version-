import { Row, Col, Form, Button } from 'react-bootstrap';
import { Body } from './styles';
import { MenuInitial } from '../MenuInitial';

export function Login() {
    return (
        <>
            <Body className="container-body">
                <MenuInitial/>
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
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="user" type="checkbox" label="Eu concordo com o termo do usuário" required/>
                                <a href="http://" className="password" target="_blank" rel="noopener noreferrer">Esqueci minha senha</a>
                            </Form.Group>
                            <Button className="button-enter" type="submit">
                                Entrar
                            </Button>
                            <Button className="sign-up" type="submit">
                                Cadastre-se
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Body>
        </>
    )
}