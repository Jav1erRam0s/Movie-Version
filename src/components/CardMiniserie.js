import React from "react";
import "../styles/CardMiniserie.css";
import ModalMiniserie from "./ModalMiniserie.js";

class CardMiniserie extends React.Component {
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
    const miniserie = this.props.miniserie;

    return (
      <React.Fragment>
        <div
          className="card-miniserie"
          onClick={this.showDetails}
        >
          <div className="card-miniserie-foto">
            <img src={miniserie.photo} alt={miniserie.title} />
          </div>
        </div>

        <ModalMiniserie
          miniserie={miniserie}
          estadoModal={this.state.estadoModal}
          closeModal={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default CardMiniserie;
