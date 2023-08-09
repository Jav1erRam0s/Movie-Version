import React from "react";

import Video from "../video/presentacion.mp4";
import Titanic from "../audio/James Horner - The Dream.mp3";

import "../styles/Home.css";

class Home extends React.Component {
  componentDidMount() {
    const video = document.querySelector("video");

    video.addEventListener("ended", (event) => {
      const mensaje = document.getElementById("contain-presentacion");
      mensaje.style.display = "flex";

      const audioTitanic = document.getElementById("reproductor-titanic");
      audioTitanic.play();
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="container-home">
          <video src={Video} autoPlay></video>
          <audio id="reproductor-titanic" src={Titanic}></audio>
          <div id="contain-presentacion" style={{ display: "none" }}>
            <div id="presentacion-title">
              ¡ 👋 Bienvenid@s amantes del buen cine 👋 !
            </div>
            <div className="presentacion-txt">
              Aquí encontrarás películas 📼, documentales y miniseries 📽️ que
              fueron seleccionadas como las mejores 🥇.
            </div>
            <div className="presentacion-txt">
              Para cualquier recomendación podés escribirme a
              <div style={{ display: "inline-block" }}>
                👉{" "}
                <a href="mailto:javier.ramos.a.a@gmail.com" target="blank">
                  javier.ramos.a.a@gmail.com
                </a>{" "}
                👈
              </div>
              y tu film puede ser la próxima en el sistema 🙌.
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
