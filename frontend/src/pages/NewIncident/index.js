import React from 'react';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';


export default function NewIncident(){
    return (
        <div className ="new-incident-container">
            <div className ="content">
                <section>
                    <img src = {logoImg} alt = "Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para que possa encontrar um herói que possa resolver isso.</p>

                    <Link  className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />                    
                        Votlar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea placeholder="Desrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>

            </div>
        </div>
    )
}