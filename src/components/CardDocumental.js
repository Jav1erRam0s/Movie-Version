import React from "react";
import "../styles/CardDocumental.css";
import ModalDocumental from "./ModalDocumental.js";

class CardDocumental extends React.Component {
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
    const documental = this.props.documental;

    return (
      <React.Fragment>
        <div
          className="card-documental"
          onClick={this.showDetails}
        >
          <div className="card-documental-foto">
            <img src={documental.photo} alt={documental.title} />
          </div>
        </div>

        <ModalDocumental
          documental={documental}
          estadoModal={this.state.estadoModal}
          closeModal={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default CardDocumental;
