import React from 'react';
import { Link } from 'react-router-dom';

import profile from '../../../assets/img/profile.svg';
import ranking from '../../../assets/img/ranking.svg';
import acertos from '../../../assets/img/acertos.svg';
import desafios from '../../../assets/img/desafios.svg';
import rules from '../../../assets/img/rules.svg';
import help from '../../../assets/img/help.svg';

import './styles.css';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-container'>
        <ul>
          <Link to='/profile'>
            <li>
              <div className='sidebar-link'>
                <img src={profile} alt='Meu perfil' />
                <span>PERFIL</span>
              </div>
            </li>
          </Link>
          <Link to='/dashboard'>
            <li>
              <div className='sidebar-link'>
                <img src={desafios} alt='Desafio' />
                <span>DESAFIOS</span>
              </div>
            </li>
          </Link>
          <Link to='/my-answers'>
            <li>
              <div className='sidebar-link'>
                <img src={acertos} alt='Meus acertos' />
                <span>MEUS ACERTOS</span>
              </div>
            </li>
          </Link>
          <Link to='/ranking'>
            <li>
              <div className='sidebar-link'>
                <img src={ranking} alt='Ranking' />
                <span>RANKING</span>
              </div>
            </li>
          </Link>
          <Link to='/rules'>
            <li>
              <div className='sidebar-link'>
                <img src={rules} alt='Regras' />
                <span>REGRAS</span>
              </div>
            </li>
          </Link>
          <Link to='/help'>
            <li>
              <div className='sidebar-link'>
                <img src={help} alt='Suporte' />
                <span>SUPORTE</span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
