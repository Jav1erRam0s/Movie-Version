import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./containers/Layout.js";

import Home from "./pages/Home.js";
import Peliculas from "./pages/Peliculas.js";
import Documentales from "./pages/Documentales.js";
import Miniseries from "./pages/Miniseries.js";
import ComoDescargar from "./pages/ComoDescargar.js";

import "../src/styles/App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="row" style={{ margin: 0 }}>
          <Layout></Layout>
          <div id="ContentBody" className="col-lg-9 col-md-9 col-sm-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/peliculas" element={<Peliculas />} />
              <Route path="/documentales" element={<Documentales />} />
              <Route path="/miniseries" element={<Miniseries />} />
              <Route path="/como-descargar" element={<ComoDescargar />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
