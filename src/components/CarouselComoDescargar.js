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
        <div className="carousel-indicators">
          {this.props.data.map((element, index) => {
            if (index === 0) {
              return (
                <button type="button" data-bs-target={"#" + this.props.idCarousel} data-bs-slide-to={index} className="active" aria-current="true"></button>
              );
            } else {
              return (
                <button type="button" data-bs-target={"#" + this.props.idCarousel} data-bs-slide-to={index}></button>
              );
            }
            })}
        </div>

        <div className="carousel-inner carousel-body">
          {this.props.data.map((data, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active carousel-item-slide">
                  <img src={data.img} alt="..." />
                  <div className="carousel-caption d-md-block">
                    <p className="carousel-item-text">{data.txt}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="carousel-item carousel-item-slide">
                  <img src={data.img} alt="..." />
                  <div className="carousel-caption d-md-block">
                    <p className="carousel-item-text">{data.txt}</p>
                  </div>
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
