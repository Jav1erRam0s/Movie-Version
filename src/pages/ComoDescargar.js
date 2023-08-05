import React from "react";

import CarouselComoDescargar from "../components/CarouselComoDescargar.js";

import "../styles/ComoDescargar.css";

import Registracion1 from "../images/como-descargar/registracion-de-cuenta-1.png";
import Registracion2 from "../images/como-descargar/registracion-de-cuenta-2.png";
import Registracion3 from "../images/como-descargar/registracion-de-cuenta-3.png";
import Registracion4 from "../images/como-descargar/registracion-de-cuenta-4.png";

import DescargaTeraBox1 from "../images/como-descargar/descarga-e-instalacion-de-terabox-for-pc-1.png";
import DescargaTeraBox2 from "../images/como-descargar/descarga-e-instalacion-de-terabox-for-pc-2.png";
import DescargaTeraBox3 from "../images/como-descargar/descarga-e-instalacion-de-terabox-for-pc-3.png";
import DescargaTeraBox4 from "../images/como-descargar/descarga-e-instalacion-de-terabox-for-pc-4.png";

import DescargaCopiaArchivos1 from "../images/como-descargar/descarga-o-copia-de-archivos-1.png";
import DescargaCopiaArchivos2 from "../images/como-descargar/descarga-o-copia-de-archivos-2.png";
import DescargaCopiaArchivos3 from "../images/como-descargar/descarga-o-copia-de-archivos-3.png";
import DescargaCopiaArchivos4 from "../images/como-descargar/descarga-o-copia-de-archivos-4.png";
import DescargaCopiaArchivos5 from "../images/como-descargar/descarga-o-copia-de-archivos-5.png";
import DescargaCopiaArchivos6 from "../images/como-descargar/descarga-o-copia-de-archivos-6.png";
import DescargaCopiaArchivos7 from "../images/como-descargar/descarga-o-copia-de-archivos-7.png";

class ComoDescargar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsRegistracion: [
        Registracion1,
        Registracion2,
        Registracion3,
        Registracion4,
      ],
      imgsDescargaTeraBox: [
        DescargaTeraBox1,
        DescargaTeraBox2,
        DescargaTeraBox3,
        DescargaTeraBox4,
      ],
      imgsDescargaCopiaArchivos: [
        DescargaCopiaArchivos1,
        DescargaCopiaArchivos2,
        DescargaCopiaArchivos3,
        DescargaCopiaArchivos4,
        DescargaCopiaArchivos5,
        DescargaCopiaArchivos6,
        DescargaCopiaArchivos7,
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="body-como-descargar">
          {/* Seccion ¿ Que es TeraBox ? */}
          <section id="section-que-es-terabox">
            <div className="como-descargar-titulo">¿ Qué es TeraBox ?</div>
            <div className="como-descargar-separador-titulo" />

            <div className="como-descargar-texto">
              TeraBox es un servicio de almacenamiento en la nube que te ofrece
              1 TB de espacio gratis. Es un software desarrollado por Baidu, el
              principal proveedor de búsqueda de internet en China, y cuyo
              monopolio le valió el nombre de 'El Google chino'.
            </div>
            <div className="como-descargar-separador-texto" />
            <div className="como-descargar-texto">
              Haciendo un poco de comparación de versiones gratuitas podemos ver
              que Mega ofrece 20 GB de espacio, mientras que Google Drive te
              permite un límite de almacenamiento de 15 GB, por otro lado
              OneDrive 5 GB y Dropbox solo 2 GB.
            </div>
            <div className="como-descargar-separador-texto" />
            <div className="como-descargar-texto">
              <b>Caracteristícas de TeraBox en versión gratuita:</b>
            </div>
            <div className="como-descargar-separador-texto" />
            <div className="como-descargar-texto">
              <ul id="list-caracteristicas-terabox" style={{ margin: 0 }}>
                <li>Espacio limitado a 1 TB (1024 GB).</li>
                <li>
                  Tamaño máximo de 4 GB por archivo. <b>(*)</b>
                </li>
                <li>
                  Subida de 300 archivos a la vez. <b>(*)</b>
                </li>
                <li>
                  Resolución máxima de 720px de visualización de video en línea.
                </li>
              </ul>
            </div>
            <div className="como-descargar-separador-texto" />
            <div className="como-descargar-texto">
              <b>(*)</b> Límite otorgado en el sitio web. Sin embargo{" "}
              <i>TeraBox for PC</i>, no posee estas limitaciones.
            </div>
          </section>

          <div className="como-descargar-separador-section" />

          {/* Seccion ¿ Como descargar ? */}
          <section id="section-como-descargar">
            <div className="como-descargar-titulo">¿ Cómo descargar ?</div>
            <div className="como-descargar-separador-titulo" />

            <div className="como-descargar-texto">
              Una observación a tomar en cuenta, es que los archivos pueden ser
              descargados de forma directa, sin necesidad de crear una cuenta,
              pero el ancho de banda de descarga es sumamente inferir a
              comparación de tener la cuenta TeraBox y la aplicación Desktop.
              Por lo tanto se recomienda realizar los siguientes pasos para no
              esperar demasiado. Además se obtiene un servicio de backup muy
              bueno y gratis.
            </div>
            <div className="como-descargar-separador-titulo" />

            <div className="como-descargar-subtitulo">
              Registración de cuenta TeraBox
            </div>
            <div className="como-descargar-separador-titulo" />
            <div className="como-descargar-texto">
              Podemos registrar una cuenta{" "}
              <a
                className="ulr-como-descargar"
                href="https://www.terabox.com/spanish/"
                target="blank"
              >
                TeraBox
              </a>{" "}
              a través de Google, otorgándole acceso a los datos, a apps y
              servicios de terceros, o por otro lado podemos crear una cuenta,
              ingresando mail y contraseña.
            </div>
            <div className="como-descargar-separador-texto" />
            <div className="como-descargar-texto">
              Los terceros son empresas o desarrolladores que no pertenecen a
              Google.
            </div>
            <div className="como-descargar-separador-carousel" />
            <CarouselComoDescargar
              idCarousel="Registracion"
              imagenes={this.state.imgsRegistracion}
            />

            <div className="como-descargar-separador-titulo" />
            <div className="como-descargar-subtitulo">
              Descarga e instalación de TeraBox para PC
            </div>
            <div className="como-descargar-separador-titulo" />
            <div className="como-descargar-texto">
              La descarga de{" "}
              <a
                className="ulr-como-descargar"
                href="https://www.terabox.com/spanish/terabox-cloud-storage-for-pc-free-download"
                target="blank"
              >
                TeraBox for PC
              </a>{" "}
              es importante, ya que permite hacer las descargas a mayor
              velocidad que hacerlo de forma directa.
            </div>
            <div className="como-descargar-separador-carousel" />
            <CarouselComoDescargar
              idCarousel="DescargaTeraBox"
              imagenes={this.state.imgsDescargaTeraBox}
            />

            <div className="como-descargar-separador-titulo" />
            <div className="como-descargar-subtitulo">
              Descarga o copia de archivos
            </div>
            <div className="como-descargar-separador-titulo" />
            <div className="como-descargar-texto">
              Una vez registrada la cuenta e iniciada la sesión en TeraBox for
              PC, podemos hacer la descarga o copia de los archivos compartidos.
            </div>
            <div className="como-descargar-separador-carousel" />
            <CarouselComoDescargar
              idCarousel="DescargaCopiaArchivo"
              imagenes={this.state.imgsDescargaCopiaArchivos}
            />
            <div className="como-descargar-separador-carousel" />
            <div className="como-descargar-texto">
              Finalmente descargada la totalidad de las partes de la carpeta,
              hacemos click izquierdo sobre cualquier archivo {">"} WinRAR {">"}{" "}
              Extract Here, y obtendremos el/los videos.
            </div>

            <div className="como-descargar-separador-titulo" />
            <div className="como-descargar-observacion">
              Observemos que la velocidad de descarga maxima es de 2 MB por
              segundo. Cada archivo comprimido es de 1 GB (1024 MB) lo que da
              como resultado, aplicando regla de tres, 8.53 min de demora por
              cada uno y como los videos tiene un tamaño promedio de 3.5 GB,
              tenemos un tiempo de demora es de 29.86 min ≈ 1/2 hora para
              disfrutar de una buena pelicula, documental o miniserie en
              altisima calidad.
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ComoDescargar;
