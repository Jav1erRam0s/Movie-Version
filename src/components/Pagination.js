import React from "react";

import "../styles/Pagination.css";

class Pagination extends React.Component {
  /* Metodos de paginacion */
  goToPage(page) {
    this.props.updatePage(page);
  }
  previousPage() {
    const nuevaPage = this.props.paginaActual - 1;
    if (nuevaPage >= 1) {
      this.goToPage(nuevaPage);
    }
  }
  nextPage() {
    const cantidadPaginas = this.props.paginas.length;
    const nuevaPage = this.props.paginaActual + 1;
    if (nuevaPage <= cantidadPaginas) {
      this.goToPage(nuevaPage);
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.paginas.length >= 2 && (
          <section id="section-pagination">
            <nav aria-label="Page navigation example">
              <ul className="nav-pagination pagination pagination-sm justify-content-center mb-0">
                {/* Button Previous */}
                <li className="page-item">
                  <a href="#up" className="anclaje">
                    <button
                      className="page-link page-link-navegator"
                      onClick={() => this.previousPage()}
                      aria-label="Previous"
                    >
                      <span className="buttonControl">
                        ◄
                      </span>
                    </button>
                  </a>
                </li>
                {/* Info */}
                {/* {this.props.paginas.map((element, index) => {
                  return (
                    <li className="page-item">
                      <a href="#up" className="anclaje">
                        <button
                          className="page-link"
                          onClick={() => this.goToPage(element)}
                        >
                          <span className="buttonPage">{element}</span>
                        </button>
                      </a>
                    </li>
                  );
                })} */}
                <li className="page-item info-pagination">
                  <div className="page-link">
                    <span className="buttonPage">
                      {this.props.paginaActual} / {this.props.paginas.length}
                    </span>
                  </div>
                </li>
                {/* Button Next */}
                <li className="page-item">
                  <a href="#up" className="anclaje">
                    <button
                      className="page-link page-link-navegator"
                      onClick={() => this.nextPage()}
                      aria-label="Next"
                    >
                      <span className="buttonControl">
                        ►
                      </span>
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default Pagination;
