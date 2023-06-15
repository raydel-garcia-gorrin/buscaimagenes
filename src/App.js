import React, { Component } from 'react'
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'
import './index.css'

class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = ()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }

  paginaAnterior = ()=>{
    // leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Si la pagina es la 1 no ir mas atras
    if(pagina === 1) return null;

    // Restar 1 a la pagina actual
    pagina--;

    // Agrefar el cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi()
      this.scroll()
    });

    // console.log(pagina);
  }
  paginaSiguiente = ()=>{
    // leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Sumar 1 a la pagina actual
    pagina++;

    // Agrefar el cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi()
      this.scroll()
    });

    // console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=37294804-54be26d1f4c1dba6fe36d4c9b&q=${termino}&per_page=30&page=${pagina}`;

    // console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Busca la Imagen que necesitas</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        {/* {this.state.termino} */}

        <div className="row justify-content-center" id='result-container'>
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
