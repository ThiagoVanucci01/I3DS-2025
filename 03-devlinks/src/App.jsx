import Perfil from "./components/perfil/perfil";
import fotoLight from "./img/PerfilThiagoV2.jpeg";
import fotoDark from "./img/PerfilThiagoV.jpeg";

import "./App.css";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(false);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight && "light"}>
      <div id="container">
        <Perfil fotoPerfil={isLight ? fotoLight : fotoDark}>
          @ThiagoVanucc1
        </Perfil>
        <Switch troca={troca} isLight={isLight} />

        <ul id="links">
          <Links link={"https://github.com/ThiagoVanucci01"}>GitHub</Links>
          <Links link={"https://www.instagram.com/thiago_vanucc1/"}>
            Instagram
          </Links>
          <Links
            link={
              "00020101021126330014br.gov.bcb.pix0111442761358695204000053039865802BR5916THIAGO C VANUCCI6003JAU62070503***63049337"
            }
          >
            Me mande um PIX😁
          </Links>
          <Links link={"https://github.com/ThiagoVanucci01?tab=repositories"}>
            Projetos
          </Links>
        </ul>

        <div id="socialLinks">
          <SocialLinks
            link={"https://github.com/ThiagoVanucci01"}
            icon={"logo-github"}
          />
          <SocialLinks
            link={"https://www.instagram.com/thiago_vanucc1/"}
            icon={"logo-instagram"}
          />
          <SocialLinks
            link={"https://www.youtube.com/"}
            icon={"logo-youtube"}
          />
          <SocialLinks
            link={"https://www.youtube.com/"}
            icon={"logo-linkedin"}
          />
        </div>
        <Rodape>Thiago Vanucci</Rodape>
      </div>
    </div>
  );
};

export default App;
