import React from 'react'
import Header from '../Header/Header'
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import {motion} from 'framer-motion';

const Hero = () => {
  const transition = {type: 'spring', duration : 3}
  return (
    <div className='hero'>
      <div className="left-h">
        <Header/>        
        <div className="the-best-ad">
            <motion.div
            initial={{left: '238px'}}
            whileInView={{left: '9px'}}
            transition={{...transition, type: 'tween'}}
            ></motion.div>
            <div></div>
            <span>O melhor clube fitness da cidade</span>
        </div>

        {/*Cabeçalho*/}
        <div className="hero-text">
            <div>
                <sapn className='stroke-text'>MOLDE </sapn>
                <sapn>O SEU </sapn>
            </div>
            <div>
                <span>CORPO IDEAL</span>
            </div>
            <div>
               <span>
                Aqui vamos ajudar a moldar e construir o seu corpo idódico e viver a sua vida ao máximo
               </span>                
            </div>
          </div>
          {/*figures*/}
          <div className="figures">
            <div>
                <span>+140</span>
                <span>treinadores</span>
            </div>
            <div>
                <span>+978</span>
                <span>membros</span>
            </div>
            <div>
                <span>+50</span>
                <span>programas</span>
            </div>
          </div>
          {/*botões*/}
          <div className="hero-buttons">
            <buttons className="btn">Começar</buttons>
            <buttons className="btn">Saber mais</buttons>
          </div>
        </div>
        <div className="right-h">
            <button className="btn">Acesse agora</button>


            <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/*img*/}
            <img src={hero_image} alt="" className="hero-image" />
            <img src={hero_image_back} alt="" className="hero-image-back" />

            {/*Calorias*/}
            <div className="calories">
              <img src={Calories} alt="" />  
              <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
              </div>
            </div>
        </div>
    </div> 
  )
}

export default Hero