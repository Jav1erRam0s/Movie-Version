import React from "react";
import axios from "axios";
import url from "../config/url.js";
import FiltroDocumentales from "../components/FiltroDocumentales.js";
import CardDocumental from "../components/CardDocumental.js";
import "../styles/ListaDocumentales.css";

class ListaDocumentales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documentales: [],
      documentalesFilter: [],
      documentalesPage: [],
      paginacion: [],
      genres: [],
      actualPage: 1,
      cantidadDocumentalesPage: 12,
      statusDocumentales: false,
    };
  }

  /* <!-- Peticiones HTTPS --> */
  cargarDocumentales() {
    axios.get(`${url.path}/documentales.json`).then((res) => {
      const response = res.data.reverse();
      /*.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });*/

      this.setState({
        documentales: response,
        documentalesFilter: response,
        statusDocumentales: true,
      });

      this.setState({
        documentalesPage: response.slice(
          (this.state.actualPage - 1) * this.state.cantidadDocumentalesPage,
          this.state.actualPage * this.state.cantidadDocumentalesPage
        ),
      });

      const cantidadPaginas = Math.ceil(
        response.length / this.state.cantidadDocumentalesPage
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
    this.cargarDocumentales();
  }
  /* <!-- /Peticiones HTTPS --> */

  /* <!-- Metodos Paginacion --> */
  goToPage(page) {
    this.setState({
      actualPage: page,
      documentalesPage: this.state.documentalesFilter.slice(
        (page - 1) * this.state.cantidadDocumentalesPage,
        page * this.state.cantidadDocumentalesPage
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
  updateListDocumentales = (valuePelicula, valueGenero, valueDecada, valueDuracion) => {
    //inicializamos las variables limites de 'duracion'
    let duracionDesde = 0;
    let duracionHasta = 0;
    switch(valueDuracion){
      case "0-d-89":
        duracionDesde = 0;
        duracionHasta = 89;
        break;
      case "90-d-150":
        duracionDesde = 90;
        duracionHasta = 150;
        break;
      case "151-d-inf":
        duracionDesde = 151;
        duracionHasta = Number.POSITIVE_INFINITY;
        break;
      case "0-d-inf":
        duracionDesde = 0;
        duracionHasta = Number.POSITIVE_INFINITY;
        break;
      default:
        break;
    }

    //inicializamos las variables limites de 'decada'
    let anioDesde = 0;
    let anioHasta = 0;
    switch(valueDecada){
      case "1980-a-1989":
        anioDesde = 1980;
        anioHasta = 1989;
        break;
      case "1990-a-1999":
        anioDesde = 1990;
        anioHasta = 1999;
        break;
      case "2000-a-2009":
        anioDesde = 2000;
        anioHasta = 2009;
        break;
      case "2010-a-2019":
        anioDesde = 2010;
        anioHasta = 2019;
        break;
      case "2020-a-2029":
        anioDesde = 2020;
        anioHasta = 2029;
        break;
      case "1980-a-inf":
        anioDesde = 1980;
        anioHasta = Number.POSITIVE_INFINITY;
        break;
      default:
        break;
    }

    let newDocumentalesFilter;

    // Previo al filtro evaluamos si filtramos por genero
    if (valueGenero !== "all"){
      newDocumentalesFilter = this.state.documentales.filter(
        (pelicula) =>
          pelicula.title.toLowerCase().indexOf(valuePelicula.toLowerCase()) >
            -1 &&
          pelicula.genre.includes(valueGenero) &&
          pelicula.year >= anioDesde &&
          pelicula.year <= anioHasta &&
          pelicula.duration >= duracionDesde &&
          pelicula.duration <= duracionHasta)
    }
    else{
      newDocumentalesFilter = this.state.documentales.filter(
        (pelicula) =>
          pelicula.title.toLowerCase().indexOf(valuePelicula.toLowerCase()) >
            -1 &&
          pelicula.year >= anioDesde &&
          pelicula.year <= anioHasta &&
          pelicula.duration >= duracionDesde &&
          pelicula.duration <= duracionHasta)
    }

    //inicializo la paginacion en la hoja 1
    let newActualPage = 1;
    //evaluo la cantidad de paginas en la paginacion
    const cantidadPaginas = Math.ceil(
      newDocumentalesFilter.length / this.state.cantidadDocumentalesPage
    );
    var listPaginacion = [];
    for (var i = 1; i <= cantidadPaginas; i++) {
      listPaginacion.push(i);
    }

    //Actualizamos los estados con lo anteriormente calculado.
    this.setState({
      actualPage: newActualPage,
      documentalesFilter: newDocumentalesFilter,
      documentalesPage: newDocumentalesFilter.slice(
        (newActualPage - 1) * this.state.cantidadDocumentalesPage,
        newActualPage * this.state.cantidadDocumentalesPage
      ),
      paginacion: listPaginacion,
    });
  }
  /* <!-- /Metodo Filtro --> */

  render() {
    return (
      <React.Fragment>
        <div id="body-lista-documentales">
          {/* FILTRO DE PELICULAS */}
          <FiltroDocumentales
            updateListDocumentales={this.updateListDocumentales}
            genres={this.state.genres}
          />
          {/* LISTA DE PELICULAS */}
          <div className="row m-0" style={{ height: "100%" }}>
            {this.state.statusDocumentales === true &&
              this.state.documentales.length === 0 && (
                <div className="col-12 align-content-column" style={{ height: "100%", padding: "0" }}>
                  <div className="notificacion-documentales">
                    A la brevedad tendremos documentales
                  </div>
                </div>
              )}
            {this.state.statusDocumentales === true &&
              this.state.documentalesFilter.length === 0 && (
                <div className="col-12 align-content-column" style={{ height: "100%", padding: "0" }}>
                  <div className="notificacion-documentales">
                    No se encontraron resultados que coincidan con la busqueda
                  </div>
                </div>
              )}
            <div className="container text-center p-0">
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                {this.state.statusDocumentales === true &&
                  this.state.documentalesPage.map((element, index) => {
                    return (
                      <span className="col mb-4" key={index}>
                        <CardDocumental documental={element} />
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* BARRA DE PAGINACION */}
          {this.state.statusDocumentales === true &&
            this.state.paginacion.length >= 2 && (
              <section id="section-pagination-documentales">
                <nav aria-label="Page navigation example">
                  <ul
                    className="nav-pagination pagination pagination-sm justify-content-center mb-0"
                  >
                    <li className="page-item">
                      <a href="#up" className="anclaje">
                        <button
                          className="page-link"
                          onClick={() => this.previousPage()}
                          aria-label="Previous"
                        >
                          <span aria-hidden="true" className="buttonControlDocumental">
                            <b>&laquo;</b>
                          </span>
                        </button>
                      </a>
                    </li>

                    {this.state.statusDocumentales === true &&
                      this.state.paginacion.map((element, index) => {
                        return (
                          <li className="page-item">
                            <a href="#up" className="anclaje">
                              <button
                                className="page-link"
                                onClick={() => this.goToPage(element)}
                              >
                                <span className="buttonPageDocumental">{element}</span>
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
                          <span aria-hidden="true" className="buttonControlDocumental">
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

export default ListaDocumentales;
