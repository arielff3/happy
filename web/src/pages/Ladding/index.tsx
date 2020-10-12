import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../../styles/pages/ladding.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


const Ladding: React.FC = () => {
  return (
    <div id="page-ladding">
      <div className="content-wrapper">
        <img src={logo} alt="logo"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Medeiros Neto</strong>
          <span>Bahia</span>
        </div>

        <Link to="orfanatos" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Ladding;