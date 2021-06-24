import { Row, Col, Form, Button } from 'react-bootstrap';
import { Body } from './styles';
import { FiMail, FiUnlock } from 'react-icons/fi';

export function Login (){
    return(
        <>
            <Body className="container-body ">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjfJz4Yx_m8e9s20tOG31_bkoj668YiyaZA&usqp=CAU" 
                    alt="Login App"
                    className="mt-5" 
                />
                <h1 className="title">SOS PET</h1>
                <Row className="form-login">
                    <Col lg={4} md={6} sm={12} className="text-center">
                        <Form className="login">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <FiMail/>
                                <Form.Control type="email" placeholder="Digite seu email"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <FiUnlock/>
                                <Form.Control type="password" placeholder="Digite sua senha" />
                            </Form.Group>
                            <Button variant="primary btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Body>
        </>
    )
}