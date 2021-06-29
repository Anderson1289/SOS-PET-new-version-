import { MenuInitial } from '../MenuInitial';
import { FaEnvelope, FaUser, FaLock, FaKey } from "react-icons/fa";
import { Section, Body, UseTerm } from './styles';
import Pets from '../../assets/pets.png'
export function SignUp(){
    return (
        <> 
            <MenuInitial/>
            <Section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Cadastre-se</p>

                                    <form className="mx-1 mx-md-4">

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <FaUser className="fas fa-user fa-lg me-3 fa-fw"/>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="text" className="form-control" required/>
                                        <label className="form-label">Nome</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <FaEnvelope className="fas fa-envelope fa-lg me-3 fa-fw"/>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="email" className="form-control" required/>
                                        <label className="form-label">E-mail</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <FaLock className="fas fa-lock fa-lg me-3 fa-fw"/>
                                        <div className="form-outline flex-fill mb-0">
                                        <input type="password" className="form-control" required/>
                                        <label className="form-label">Senha</label>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <FaKey className="fas fa-key fa-lg me-3 fa-fw"/>
                                        <div className="form-outline flex-fill mb-0">
                                            <input className="password form-control" required/>
                                            <label className="form-label"> Repita sua senha</label>
                                        </div>
                                    </div>

                                    <UseTerm className="form-check d-flex justify-content-center mb-5">
                                        <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3c"
                                        />
                                        <label className="form-check-label">
                                            Concordar com todas as declarações <a href="#!" className="useTerm">nos Termos de serviço</a>
                                        </label>
                                    </UseTerm>
                                    <Body>    
                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" className="btn btn-primary btn-lg button">Cadastrar</button>
                                        </div>
                                    </Body>
                                    </form>

                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    <img src={Pets} className="img-fluid useTerm" alt="Sample image"/>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}