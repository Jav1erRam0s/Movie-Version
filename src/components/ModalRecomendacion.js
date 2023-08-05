import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import "../styles/ModalRecomendacion.css";

class ModalRecomendacion extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.closeModal();
  }

  render() {
    return (
      <React.Fragment>
        <Modal size="lg" isOpen={this.props.estadoModal} centered>
          <ModalHeader
            toggle={this.handleSave}
            cssModule={{ "modal-title": "w-100 text-center m-0" }}
            className="modal-recomendacion-header"
          >
            <span className="modal-recomendacion-titulo">
              <b>{this.props.recomendacion.title}</b>
            </span>
          </ModalHeader>
          
          <iframe id="iframe-recomendacion" src={this.props.recomendacion.trailer+'?autoplay=1&mute=0&loop=0'} title={this.props.recomendacion.title}></iframe>
        </Modal>
      </React.Fragment>
    );  
  }
}

export default ModalRecomendacion;
