import { Link } from "react-router-dom";
import '../styles/components/Landing.scss';
import StarsBackground from "../elementLanding/StarsBackground.js";
import multicolorPotion from "../images/Potionmulticolor.png";

const Landing = () => {
  return (
    <div className="bodyLanding" >
      
      <StarsBackground className="stars"/>
      
      <header className="headerLanding">
        <h1 className="headerLanding__title">A druid's work <img className="headerLanding__title--icon" src={multicolorPotion} alt="" /></h1>
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
      <footer className="footerLanding">
        <div className="footerLanding__box">
          <p className="footerLanding__box--copy">&copy; 2024 🌩️</p>
          <p className="footerLanding__box--text">Desarrollado por Aida Blaya Balaguer</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
