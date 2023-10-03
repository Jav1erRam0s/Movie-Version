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
                <li className="page-item">
                  <a href="#up" className="anclaje">
                    <button
                      className="page-link"
                      onClick={() => this.previousPage()}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true" className="buttonControl">
                        <b>&laquo;</b>
                      </span>
                    </button>
                  </a>
                </li>

                {this.props.paginas.map((element, index) => {
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
                })}

                <li className="page-item">
                  <a href="#up" className="anclaje">
                    <button
                      className="page-link"
                      onClick={() => this.nextPage()}
                      aria-label="Next"
                    >
                      <span aria-hidden="true" className="buttonControl">
                        <b>&raquo;</b>
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
