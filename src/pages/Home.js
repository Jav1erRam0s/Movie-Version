import React from "react";
import { useNavigate } from "react-router-dom";

import VideoCortina from "../videos/Cortina.mp4";
import VideoMusical from "../videos/FM-84.ft.Ollie.Wride-Never.Stop.mp4";

import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const videoCortina = document.getElementById("video-cortina");

    videoCortina.addEventListener("ended", (event) => {
      const mensaje = document.getElementById("contain-presentacion");
      mensaje.style.display = "flex";
      let videoMusical = document.getElementById("video-musical");
      videoMusical.play();
    });

    const videoMusical = document.getElementById("video-musical");

    videoMusical.addEventListener("ended", (event) => {
      navigate("/peliculas");
    });
  }, [navigate]);

  return (
    <React.Fragment>
      <div id="container-home">
        <video id="video-cortina" src={VideoCortina} autoPlay></video>
        <div id="contain-presentacion" style={{ display: "none" }}>
          <video id="video-musical" src={VideoMusical} controls></video>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
