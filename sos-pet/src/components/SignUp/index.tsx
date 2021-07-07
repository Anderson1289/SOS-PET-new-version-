import { FormEvent, useEffect, useState } from 'react';
import { MenuInitial } from '../MenuInitial';
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { Section, Body, UseTerm } from './styles';
import Pets from '../../assets/pets.png'

export function SignUp(){
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [useTerm, setUseTerm] = useState('');

    function handleCreateNewUser(event: FormEvent){
        event.preventDefault();

        console.log({
            name,
            email,
            password,
            userName,
            useTerm
        })
    }

    useEffect(() => {
        fetch('http://localhost:3333/api/users')
            .then(response => response.json())
            .then(date => console.log(date))
    }, []);

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

                                    <form className="mx-1 mx-md-4" onSubmit={handleCreateNewUser}>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <FaUser className="fas fa-user fa-lg me-3 fa-fw"/>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Nome" 
                                                value={name} 
                                                onChange = {event => setName(event.target.value)} 
                                                required
                                            />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <RiUserFollowFill className="fas fa-key fa-lg me-3 fa-fw"/>
                                                <input 
                                                    className="password form-control" 
                                                    type="text"  
                                                    placeholder="Digite o seu Username" 
                                                    value={userName} 
                                                    onChange = {event => setUserName(event.target.value)} 
                                                    required
                                                />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <FaEnvelope className="fas fa-envelope fa-lg me-3 fa-fw"/>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="E-mail" 
                                            value={email} 
                                            onChange = {event => setEmail(event.target.value)} 
                                            required
                                        />
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <FaLock className="fas fa-lock fa-lg me-3 fa-fw"/>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Senha" 
                                                value={password} 
                                                onChange = {event => setPassword(event.target.value)} 
                                                required
                                            />
                                        </div>

                                        

                                        <UseTerm className="form-check d-flex justify-content-center mb-5">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            id="form2Example3c"
                                            value = {useTerm} 
                                            onChange = {event => setUseTerm(event.target.value)} 
                                            required
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
                                    <img src={Pets} className="img-fluid useTerm" alt="Sample"/>
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