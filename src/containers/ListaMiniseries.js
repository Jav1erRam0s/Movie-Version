import React from "react";
import axios from "axios";
import url from "../config/url.js";
import FiltroMiniseries from "../components/FiltroMiniseries.js";
import CardMiniserie from "../components/CardMiniserie.js";
import "../styles/ListaMiniseries.css";

class ListaMiniseries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miniseries: [],
      miniseriesFilter: [],
      miniseriesPage: [],
      paginacion: [],
      genres: [],
      actualPage: 1,
      cantidadMiniseriesPage: 12,
      statusMiniseries: false,
    };
  }

  /* <!-- Peticiones HTTPS --> */
  cargarMiniseries() {
    axios.get(`${url.path}/miniseries.json`).then((res) => {
      const response = res.data;
      /*.reverse();*/
      /*.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });*/

      this.setState({
        miniseries: response,
        miniseriesFilter: response,
        statusMiniseries: true,
      });

      this.setState({
        miniseriesPage: response.slice(
          (this.state.actualPage - 1) * this.state.cantidadMiniseriesPage,
          this.state.actualPage * this.state.cantidadMiniseriesPage
        ),
      });

      const cantidadPaginas = Math.ceil(
        response.length / this.state.cantidadMiniseriesPage
      );
      var list = [];
      for (var i = 1; i <= cantidadPaginas; i++) {
        list.push(i);
      }
      this.setState({ paginacion: list });

      var listGenres = [];
      response.forEach((element) => {
        listGenres = listGenres.concat(element.genre);
      });
      //filtra valores unicos
      listGenres = listGenres.filter(
        (value, index, array) => array.indexOf(value) === index
      );
      //Ordena alfabeticamente
      listGenres.sort();

      this.setState({ genres: listGenres });
    });
  }
  componentDidMount() {
    this.cargarMiniseries();
  }
  /* <!-- /Peticiones HTTPS --> */

  /* <!-- Metodos Paginacion --> */
  goToPage(page) {
    this.setState({
      actualPage: page,
      miniseriesPage: this.state.miniseriesFilter.slice(
        (page - 1) * this.state.cantidadMiniseriesPage,
        page * this.state.cantidadMiniseriesPage
      ),
    });
  }
  previousPage() {
    const nuevaPage = this.state.actualPage - 1;
    if (nuevaPage >= 1) {
      this.goToPage(nuevaPage);
    }
  }
  nextPage() {
    const cantidadPaginas = this.state.paginacion.length;
    const nuevaPage = this.state.actualPage + 1;
    if (nuevaPage <= cantidadPaginas) {
      this.goToPage(nuevaPage);
    }
  }
  /* <!-- /Metodos Paginacion --> */

  /* <!-- /Metodo Filtro --> */
  updateListMiniseries = (valueMiniserie, valueGenero) => {
    let newMiniseriesFilter;

    // Previo al filtro evaluamos si filtramos por genero
    if (valueGenero !== "all") {
      newMiniseriesFilter = this.state.miniseries.filter(
        (miniserie) =>
          miniserie.title.toLowerCase().indexOf(valueMiniserie.toLowerCase()) >
            -1 && miniserie.genre.includes(valueGenero)
      );
    } else {
      newMiniseriesFilter = this.state.miniseries.filter(
        (miniserie) =>
          miniserie.title.toLowerCase().indexOf(valueMiniserie.toLowerCase()) >
          -1
      );
    }

    //inicializo la paginacion en la hoja 1
    let newActualPage = 1;
    //evaluo la cantidad de paginas en la paginacion
    const cantidadPaginas = Math.ceil(
      newMiniseriesFilter.length / this.state.cantidadMiniseriesPage
    );
    var listPaginacion = [];
    for (var i = 1; i <= cantidadPaginas; i++) {
      listPaginacion.push(i);
    }

    //Actualizamos los estados con lo anteriormente calculado.
    this.setState({
      actualPage: newActualPage,
      miniseriesFilter: newMiniseriesFilter,
      miniseriesPage: newMiniseriesFilter.slice(
        (newActualPage - 1) * this.state.cantidadMiniseriesPage,
        newActualPage * this.state.cantidadMiniseriesPage
      ),
      paginacion: listPaginacion,
    });
  };
  /* <!-- /Metodo Filtro --> */

  render() {
    return (
      <React.Fragment>
        <div id="body-lista-miniseries">
          {/* FILTRO DE PELICULAS */}
          <FiltroMiniseries
            updateListMiniseries={this.updateListMiniseries}
            genres={this.state.genres}
          />
          {/* LISTA DE PELICULAS */}
          <div className="row m-0" style={{ height: "100%" }}>
            {this.state.statusMiniseries === true &&
              this.state.miniseries.length === 0 && (
                <div
                  className="col-12 align-content-column"
                  style={{ height: "100%", padding: "0" }}
                >
                  <div className="notificacion-miniseries">
                    A la brevedad tendremos miniseries
                  </div>
                </div>
              )}
            {this.state.statusMiniseries === true &&
              this.state.miniseriesFilter.length === 0 && (
                <div
                  className="col-12 align-content-column"
                  style={{ height: "100%", padding: "0" }}
                >
                  <div className="notificacion-miniseries">
                    No se encontraron resultados que coincidan con la búsqueda
                  </div>
                </div>
              )}
            <div className="container text-center p-0">
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                {this.state.statusMiniseries === true &&
                  this.state.miniseriesPage.map((element, index) => {
                    return (
                      <span className="col mb-4" key={index}>
                        <CardMiniserie miniserie={element} />
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* BARRA DE PAGINACION */}
          {this.state.statusMiniseries === true &&
            this.state.paginacion.length >= 2 && (
              <section id="section-pagination-miniseries">
                <nav aria-label="Page navigation example">
                  <ul className="nav-pagination pagination pagination-sm justify-content-center mb-0">
                    <li className="page-item">
                      <a href="#up" className="anclaje">
                        <button
                          className="page-link"
                          onClick={() => this.previousPage()}
                          aria-label="Previous"
                        >
                          <span
                            aria-hidden="true"
                            className="buttonControlMiniserie"
                          >
                            <b>&laquo;</b>
                          </span>
                        </button>
                      </a>
                    </li>

                    {this.state.statusMiniseries === true &&
                      this.state.paginacion.map((element, index) => {
                        return (
                          <li className="page-item">
                            <a href="#up" className="anclaje">
                              <button
                                className="page-link"
                                onClick={() => this.goToPage(element)}
                              >
                                <span className="buttonPageMiniserie">
                                  {element}
                                </span>
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
                          <span
                            aria-hidden="true"
                            className="buttonControlMiniserie"
                          >
                            <b>&raquo;</b>
                          </span>
                        </button>
                      </a>
                    </li>
                  </ul>
                </nav>
              </section>
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default ListaMiniseries;
