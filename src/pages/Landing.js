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
      //document.body.removeChild(script);
      document.body.removeChild(document.getElementById('embedim--snow'));
      
    };
  }, []);

  return (
    <div>
      <header className="headerLanding">
        <h1 className="headerLanding__title">RAINBOW POT</h1>
      </header>

      <main className="main">
        <section className="main__box">
          <div className="container-text">
            <label className="main__box--text">Jugador atrevido:</label>
            <input type="text" name="user" placeholder="Escribe aqui..." /> 
            <article className="main__box--records">
              <h4>Records</h4>
              
                <ul>
                  <li><p>JugadorX...................................02:56 min</p></li>
                  <li><p>JugadorX...................................03:56 min</p></li>
                  <li><p>JugadorX...................................04:86 min</p></li>
                  <li><p>JugadorX...................................05:77 min</p></li>
                  <li><p>JugadorX...................................05:80 min</p></li>
                </ul>
            
            </article>      
            </div>
        </section>

        <button className="main__button">
          <Link to='/Gaming' className="link">PLAY</Link>
        </button>
      </main>
    </div>
  );
};

export default Landing;
