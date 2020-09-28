import React from 'react';
import { Link } from 'react-router-dom';

import profile from '../../../assets/img/profile.svg';
import ranking from '../../../assets/img/ranking.svg';
import acertos from '../../../assets/img/acertos.svg';
import desafios from '../../../assets/img/desafios.svg';

import './styles.css';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='sidebar-container'>
        <ul>
          <li>
            <Link to='/profile'>
              <div className='sidebar-link'>
                <img src={profile} alt='Meu perfil' />
                <span>PERFIL</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/dashboard'>
              <div className='sidebar-link'>
                <img src={desafios} alt='Desafio' />
                <span>DESAFIOS</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/acertos'>
              <div className='sidebar-link'>
                <img src={acertos} alt='Meus acertos' />
                <span>MEUS ACERTOS</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/ranking'>
              <div className='sidebar-link'>
                <img src={ranking} alt='Ranking' />
                <span>RANKING</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
