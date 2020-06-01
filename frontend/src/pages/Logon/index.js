import React from 'react';
import {Link} from 'react-router-dom';


import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Heroes" />
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link  className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />                    
                    Não tenho cadastro</Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    );
}