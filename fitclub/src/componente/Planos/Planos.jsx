import React from 'react';
import './Planos.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'

const Planos = () => {
  return (
        <div className="plans-container">
            <div className="blur plans-blur1"></div>
            <div className="blur plans-blur"></div>
            <div className="programas-header" style={{gap : '2rem'}}>
                <span className='stroke-text'>VAMOS</span>
                <span>COMEÇAR ESSA</span>
                <span className='stroke-text'>TRANSFORMAÇÃO ?</span>
            </div>
            {/*plans card*/}
            <div className="plans">            
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={1}>{feature}</span>
                        </div>
                        ))}
                    </div>
                    <div><span>Veja mais benefícios -></span></div>
                    <button className="btn">Acesse agora</button>
                </div>
            ))}
        </div>            
    </div>
  );
};

export default Planos