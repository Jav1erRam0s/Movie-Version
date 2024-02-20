import React from "react";

import "../styles/FiltroMiniseries.css";

import Buscador from "../images/buscador.png";
import Genero from "../images/genero.png";

import { Tooltip } from 'reactstrap';

class FiltroMiniseries extends React.Component {
  constructor(props) {
    super(props);
    this.filtrar = this.filtrar.bind(this);
    
    this.toggleBuscador = this.toggleBuscador.bind(this);
    this.toggleGenero = this.toggleGenero.bind(this);

    this.state = {
      tooltipBuscador: false,
      tooltipGenero: false,
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

  changeValueInput = (e) => {
    var valueMiniserie = document.getElementById("input-miniserie").value;
    this.setState({
      valorInput: valueMiniserie,
    });
    this.filtrar();
  };

  filtrar = () => {
    var valueMiniserie = document.getElementById("input-miniserie").value;
    var valueGenero = document.getElementById("select-genero").value;

    this.props.updateListMiniseries(valueMiniserie, valueGenero);
  };

  backBuscador(){
    this.setState({
      valorInput: "",
    });
    
    var element = document.getElementById("input-miniserie");
    element.value = ""
    element.focus();

    this.filtrar();
  }

  backGenero(){
    document.getElementById("select-genero").value = "all";
    this.filtrar();
  }

  render() {

    return (
      <div id="filtro-miniseries" className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-2 text-center my-auto">
          <div className="container-miniserie-section-filter-item">
            <div id="TooltipBuscador" className="container-miniseries-filtro-imgs" onClick={() => this.backBuscador()}>
              <img src={Buscador} alt="buscador"/>
            </div>
            <input
              id="input-miniserie"
              className="element-form-miniseries-filter form-control form-control-sm"
              type="text"
              value={this.state.valorInput}
              placeholder="El codigo de la discordia"
              onChange={this.changeValueInput}
            />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-2 mb-2 text-center my-auto">
          <div className="container-miniserie-section-filter-item">
            <div id="TooltipGenero" className="container-miniseries-filtro-imgs" onClick={() => this.backGenero()}>
              <img src={Genero} alt="genero"/>
            </div>
            <select
              id="select-genero"
              className="element-form-miniseries-filter form-select form-select-sm"
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
        
        <Tooltip placement="bottom" isOpen={this.state.tooltipBuscador} target="TooltipBuscador" toggle={this.toggleBuscador}>
          <span className="tooltip-miniseries">Buscador</span>
        </Tooltip>
        <Tooltip placement="bottom" isOpen={this.state.tooltipGenero} target="TooltipGenero" toggle={this.toggleGenero}>
          <span className="tooltip-miniseries">Género</span>
        </Tooltip>

      </div>
    );
  }
}

export default FiltroMiniseries;
