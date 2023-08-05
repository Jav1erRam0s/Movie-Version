import React from "react";
import "../styles/CardPelicula.css";
import ModalPelicula from "./ModalPelicula.js";

class CardProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoModal: false,
    };
  }

  showDetails = () => {
    this.setState({ estadoModal: true });
  };

  closeModal = () => {
    this.setState({ estadoModal: false });
  };

  render() {
    const pelicula = this.props.pelicula;

    return (
      <React.Fragment>
        <div
          className="card-pelicula"
          onClick={this.showDetails}
        >
          <div className="card-pelicula-foto">
            <img src={pelicula.photo} alt={pelicula.title} />
          </div>
        </div>

        <ModalPelicula
          pelicula={pelicula}
          estadoModal={this.state.estadoModal}
          closeModal={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default CardProducto;
