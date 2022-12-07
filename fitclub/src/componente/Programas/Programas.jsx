import React from 'react';
import "./Programas.css";
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programas = () => {
  return (
    <div className="Programas" id="programas">
        {/*header*/}
        <div className="programas-header">
            <span className='stroke-text'>Explorar os</span>
            <span>Programas</span>
            <span className='stroke-text'>para moldá-lo</span>
        </div>

        <div className="programas-categorias">
            {programsData.map((program)=>(
                <div className="categoria">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Acesse agora</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programas