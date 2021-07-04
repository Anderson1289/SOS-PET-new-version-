import { Navbar, Container } from 'react-bootstrap';
import { Body } from './styles';
import Logo from '../../assets/logoOther.png'

export function MenuInitial() {
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
                    <Navbar.Brand href="#home" className="title-main">SOS PET</Navbar.Brand>
                </Navbar>
            </Body>
        </>
    )
}