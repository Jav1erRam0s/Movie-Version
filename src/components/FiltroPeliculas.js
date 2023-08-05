import React from "react";

import "../styles/FiltroPeliculas.css";

import Buscador from "../images/buscador.png";
import Genero from "../images/genero.png";
import Decada from "../images/decada.png";
import Duracion from "../images/duracion.png";

import { Tooltip } from 'reactstrap';

class FiltroPeliculas extends React.Component {
  constructor(props) {
    super(props);
    this.filtrar = this.filtrar.bind(this); 
    
    this.toggleBuscador = this.toggleBuscador.bind(this);
    this.toggleGenero = this.toggleGenero.bind(this);
    this.toggleDecada = this.toggleDecada.bind(this);
    this.toggleDuracion = this.toggleDuracion.bind(this);

    this.state = {
      tooltipBuscador: false,
      tooltipGenero: false,
      tooltipDecada: false,
      tooltipDuracion: false,
      valorInput: "",
    };
  }

  toggleBuscador() {
    this.setState({
      tooltipBuscador: !this.state.tooltipBuscador
    });
  }

  toggleGenero() {
    this.setState({
      tooltipGenero: !this.state.tooltipGenero
    });
  }

  toggleDecada() {
    this.setState({
      tooltipDecada: !this.state.tooltipDecada
    });
  }

  toggleDuracion() {
    this.setState({
      tooltipDuracion: !this.state.tooltipDuracion
    });
  }

  changeValueInput = (e) => {
    var valuePelicula = document.getElementById("input-pelicula").value;
    this.setState({
      valorInput: valuePelicula,
    });
    this.filtrar();
  };

  filtrar = () => {
    var valuePelicula = document.getElementById("input-pelicula").value;
    var valueGenero = document.getElementById("select-genero").value;
    var valueDecada = document.getElementById("select-decada").value;
    var valueDuracion = document.getElementById("select-duracion").value;

    this.props.updateListPeliculas(valuePelicula, valueGenero, valueDecada, valueDuracion);
  };

  backBuscador(){
    this.setState({
      valorInput: "",
    });
    document.getElementById("input-pelicula").value = "";
    this.filtrar();
  }

  backGenero(){
    document.getElementById("select-genero").value = "all";
    this.filtrar();
  }

  backDecada(){
    document.getElementById("select-decada").value = "1980-a-inf";
    this.filtrar();
  }
  
  backDuracion(){
    document.getElementById("select-duracion").value = "0-d-inf";
    this.filtrar();
  }

  render() {

    return (
      <div id="filtro-peliculas" className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 text-center my-auto">
          <div className="container-pelicula-section-filter-item">
            <div id="TooltipBuscador" className="container-peliculas-filtro-imgs" onClick={() => this.backBuscador()}>
              <img src={Buscador} alt="buscador"/>
            </div>
            <input
              id="input-pelicula"
              className="element-form-peliculas-filter form-control form-control-sm"
              type="text"
              value={this.state.valorInput}
              placeholder="Diarios de motocicleta"
              onChange={this.changeValueInput}
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-2 mb-2 text-center my-auto">
          <div className="container-pelicula-section-filter-item">
            <div id="TooltipGenero" className="container-peliculas-filtro-imgs" onClick={() => this.backGenero()}>
              <img src={Genero} alt="genero"/>
            </div>
            <select
              id="select-genero"
              className="element-form-peliculas-filter form-select form-select-sm"
              aria-label=".form-select-sm example"
              onChange={this.filtrar}
            >
              {this.props.genres.map((element, index) => {
                return <option value={element}>{element}</option>;
              })}
              <option value="all" selected>
                Todos
              </option>
            </select>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-2 text-center my-auto">
          <div className="container-pelicula-section-filter-item">
            <div id="TooltipDecada" className="container-peliculas-filtro-imgs" onClick={() => this.backDecada()}>
              <img src={Decada} alt="decada"/>
            </div>
            <select
              id="select-decada"
              className="element-form-peliculas-filter form-select form-select-sm"
              aria-label=".form-select-sm example"
              onChange={this.filtrar}
            >
              <option value="1980-a-1989">1980's</option>
              <option value="1990-a-1999">1990's</option>
              <option value="2000-a-2009">2000's</option>
              <option value="2010-a-2019">2010's</option>
              <option value="2020-a-2029">2020's</option>
              <option value="1980-a-inf" selected>
                Todos
              </option>
            </select>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-2 text-center my-auto">
          <div className="container-pelicula-section-filter-item">
            <div id="TooltipDuracion" className="container-peliculas-filtro-imgs" onClick={() => this.backDuracion()}>
              <img src={Duracion} alt="duracion"/>
            </div>
            <select
              id="select-duracion"
              className="element-form-peliculas-filter form-select form-select-sm"
              aria-label=".form-select-sm example"
              onChange={this.filtrar}
            >
              <option value="0-d-89">Menor a 1h:30min</option>
              <option value="90-d-150">Entre 1h:30min y 2h:30min</option>
              <option value="151-d-inf">Mayor a 2h:30min</option>
              <option value="0-d-inf" selected>
                Todos
              </option>
            </select>
          </div>
        </div>

        <Tooltip placement="bottom" isOpen={this.state.tooltipBuscador} target="TooltipBuscador" toggle={this.toggleBuscador}>
          Buscador
        </Tooltip>
        <Tooltip placement="bottom" isOpen={this.state.tooltipGenero} target="TooltipGenero" toggle={this.toggleGenero}>
          Genero
        </Tooltip>
        <Tooltip placement="bottom" isOpen={this.state.tooltipDecada} target="TooltipDecada" toggle={this.toggleDecada}>
          Decada
        </Tooltip>
        <Tooltip placement="bottom" isOpen={this.state.tooltipDuracion} target="TooltipDuracion" toggle={this.toggleDuracion}>
          Duración
        </Tooltip>

      </div>
    );
  }
}

export default FiltroPeliculas;