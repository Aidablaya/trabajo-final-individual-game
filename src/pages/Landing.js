import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/components/Landing.scss';

const Landing = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.embed.im/snow.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <h1 className="header__title">The gaming of colors</h1>
      </header>

      <main className="main">
        <section className="main__box">
          <label className="main__box--text">Jugador atrevido:</label>
          <input type="text" name="user" placeholder="Escribe aqui..." /> 
          <article>
            <h4>Records</h4>
          <ul>
            <li><p>JugadorX...................................02:56 min</p></li>
            <li><p>JugadorX...................................03:56 min</p></li>
            <li><p>JugadorX...................................04:86 min</p></li>
            <li><p>JugadorX...................................05:77 min</p></li>
            <li><p>JugadorX...................................05:80 min</p></li>
          </ul>
          </article>      
        </section>

        <button className="main__button">
          <Link to='/Gaming' className="link">PLAY</Link>
        </button>
      </main>
    </div>
  );
};

export default Landing;
