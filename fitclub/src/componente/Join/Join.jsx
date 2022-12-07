import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">PRONTO PARA </span>
                <span>NIVELAR </span>
            </div>
            <div>
                <span>SEU CORPO </span>
                <span className="stroke-text">CONOSCO?</span>
            </div>
        </div>
        <div className="right-j">
            <form action="" className="email-container">
                <input type="email" name="user_email" placeholder="Your Email address"/>
                <button className="btn btn-j">Acesse agora</button>
            </form>
        </div>
    </div>
  )
}

export default Join