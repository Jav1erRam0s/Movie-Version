import React from "react";
import axios from "axios";
import url from "../config/url.js";
import FiltroPeliculas from "../components/FiltroPeliculas.js";
import CardPelicula from "../components/CardPelicula.js";
import "../styles/ListaPeliculas.css";

import Pagination from "../components/Pagination.js";

class ListaPeliculas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFilter: [],
      peliculasPage: [],
      paginacion: [],
      genres: [],
      decades: [],
      actualPage: 1,
      cantidadPeliculasPage: 24,
      statusPeliculas: false,
    };
  }

  /* <!-- Peticiones HTTPS --> */
  cargarPeliculas() {
    axios.get(`${url.path}/peliculas.json`).then((res) => {
      const response = res.data;
      /*.reverse();*/
      /*.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });*/

      this.setState({
        peliculas: response,
        peliculasFilter: response,
        statusPeliculas: true,
      });

      this.setState({
        peliculasPage: response.slice(
          (this.state.actualPage - 1) * this.state.cantidadPeliculasPage,
          this.state.actualPage * this.state.cantidadPeliculasPage
        ),
      });

      const cantidadPaginas = Math.ceil(
        response.length / this.state.cantidadPeliculasPage
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

      var listDecades = [];
      response.forEach((element) => {
        listDecades.push(element.year - (element.year % 10));
      });
      //filtra valores unicos
      listDecades = listDecades.filter(
        (value, index, array) => array.indexOf(value) === index
      );
      //Ordena de menor a mayor
      listDecades.sort();
      this.setState({ decades: listDecades });
    });
  }
  componentDidMount() {
    this.cargarPeliculas();
  }
  /* <!-- /Peticiones HTTPS --> */

  /* <!-- Metodo de Paginacion --> */
  updatePage = (page) => {
    this.setState({
      actualPage: page,
      peliculasPage: this.state.peliculasFilter.slice(
        (page - 1) * this.state.cantidadPeliculasPage,
        page * this.state.cantidadPeliculasPage
      ),
    });
  };
  /* <!-- /Metodo de Paginacion --> */

  /* <!-- Metodo Filtro --> */
  updateListPeliculas = (
    valuePelicula,
    valueGenero,
    valueDecada,
    valueDuracion
  ) => {
    //inicializamos las variables limites de 'duracion'
    let duracionDesde = 0;
    let duracionHasta = 0;
    switch (valueDuracion) {
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
      case "all":
        duracionDesde = 0;
        duracionHasta = Number.POSITIVE_INFINITY;
        break;
      default:
        break;
    }

    //inicializamos las variables limites de 'decada'
    let anioDesde = 0;
    let anioHasta = 0;
    if (valueDecada === "all") {
      anioDesde = 0;
      anioHasta = Number.POSITIVE_INFINITY;
    } else {
      anioDesde = parseInt(valueDecada);
      anioHasta = parseInt(valueDecada) + 9;
    }

    let newPeliculasFilter;

    // Previo al filtro evaluamos si filtramos por genero
    if (valueGenero !== "all") {
      newPeliculasFilter = this.state.peliculas.filter(
        (pelicula) =>
          pelicula.title.toLowerCase().indexOf(valuePelicula.toLowerCase()) >
            -1 &&
          pelicula.genre.includes(valueGenero) &&
          pelicula.year >= anioDesde &&
          pelicula.year <= anioHasta &&
          pelicula.duration >= duracionDesde &&
          pelicula.duration <= duracionHasta
      );
    } else {
      newPeliculasFilter = this.state.peliculas.filter(
        (pelicula) =>
          pelicula.title.toLowerCase().indexOf(valuePelicula.toLowerCase()) >
            -1 &&
          pelicula.year >= anioDesde &&
          pelicula.year <= anioHasta &&
          pelicula.duration >= duracionDesde &&
          pelicula.duration <= duracionHasta
      );
    }

    //inicializo la paginacion en la hoja 1
    let newActualPage = 1;
    //evaluo la cantidad de paginas en la paginacion
    const cantidadPaginas = Math.ceil(
      newPeliculasFilter.length / this.state.cantidadPeliculasPage
    );
    var listPaginacion = [];
    for (var i = 1; i <= cantidadPaginas; i++) {
      listPaginacion.push(i);
    }

    //Actualizamos los estados con lo anteriormente calculado.
    this.setState({
      actualPage: newActualPage,
      peliculasFilter: newPeliculasFilter,
      peliculasPage: newPeliculasFilter.slice(
        (newActualPage - 1) * this.state.cantidadPeliculasPage,
        newActualPage * this.state.cantidadPeliculasPage
      ),
      paginacion: listPaginacion,
    });
  };
  /* <!-- /Metodo Filtro --> */

  render() {
    return (
      <React.Fragment>
        <div id="body-lista-peliculas">
          {/* FILTRO DE PELICULAS */}
          <FiltroPeliculas
            updateListPeliculas={this.updateListPeliculas}
            genres={this.state.genres}
            decades={this.state.decades}
          />
          {/* LISTA DE PELICULAS */}
          <div className="row m-0" style={{ height: "100%" }}>
            {this.state.statusPeliculas === true &&
              this.state.peliculas.length === 0 && (
                <div
                  className="col-12 align-content-column"
                  style={{ height: "100%", padding: "0" }}
                >
                  <div className="notificacion-peliculas">
                    A la brevedad tendremos películas
                  </div>
                </div>
              )}
            {this.state.statusPeliculas === true &&
              this.state.peliculasFilter.length === 0 && (
                <div
                  className="col-12 align-content-column"
                  style={{ height: "100%", padding: "0" }}
                >
                  <div className="notificacion-peliculas">
                    No se encontraron resultados que coincidan con la búsqueda
                  </div>
                </div>
              )}
            <div className="container text-center p-0">
              <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {this.state.statusPeliculas === true &&
                  this.state.peliculasPage.map((element, index) => {
                    return (
                      <span className="col mb-4" key={index}>
                        <CardPelicula pelicula={element} />
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* BARRA DE PAGINACION */}
          <Pagination
            updatePage={this.updatePage}
            paginas={this.state.paginacion}
            paginaActual={this.state.actualPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ListaPeliculas;
