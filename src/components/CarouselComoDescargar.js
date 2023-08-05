import React from "react";

import "../styles/CarouselComoDescargar.css";

class CarouselComoDescargar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id={this.props.idCarousel}
        className="carousel slide"
      >
        <div className="carousel-inner carousel-body">
          {this.props.imagenes.map((element, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active carousel-item-slide">
                  <img src={element} alt="..." />
                </div>
              );
            } else {
              return (
                <div className="carousel-item carousel-item-slide">
                  <img src={element} alt="..." />
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#" + this.props.idCarousel}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#" + this.props.idCarousel}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
export default CarouselComoDescargar;
