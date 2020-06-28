import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';


import {FiLogIn} from 'react-icons/fi';

import api from '../../Services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('http://localhost:3333/sessions',{ id });
            console.log(response.data.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch(err){
             alert('falha no loggin, tente ligar novamente.')
        }
    }
    
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Heroes" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        />
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