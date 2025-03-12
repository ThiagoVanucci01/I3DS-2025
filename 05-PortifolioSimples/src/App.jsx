import Perfil from "../components/perfil/perfil";
import SocialLinks from "../components/socialLinks/SocialLinks";
import "./App.css";
import foto from "./img/PerfilThiagoV.jpeg";

const App = () => {
  return (
    <div id="App">
      <div id="TextPortifolio">
        <h5 id="Bv">Bem-Vindo ao</h5>
        <h2>Meu Portifolio</h2>
      </div>
      <Perfil fotoPerfil={foto}>ThiagoVanucc1</Perfil>
      <div id="sobreMim">
        <p>
          Prazer! Sou o Thiago, tenho 17 anos, sou estudante de Desenvolvimento
          de Sistemas no Senai de Jau,......{" "}
        </p>
      </div>
      <div id="socialLinks">
        <SocialLinks
          link={"https://github.com/ThiagoVanucci01"}
          icon={"logo-github"}
        />
        <SocialLinks
          link={"https://www.instagram.com/thiago_vanucc1/"}
          icon={"logo-instagram"}
        />
        <SocialLinks link={"https://www.youtube.com/"} icon={"logo-youtube"} />
        <SocialLinks link={"https://www.youtube.com/"} icon={"logo-linkedin"} />
      </div>
    </div>
  );
};

export default App;
