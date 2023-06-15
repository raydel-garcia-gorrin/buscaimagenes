// componente con class
import React, { Component } from 'react';

class Buscador extends Component {
    buscadorRef = React.createRef();

    obtenerDatos = (e)=>{
        e.preventDefault();

        // tomo el valor del input y lo envio al componente principal
        this.props.datosBusqueda(this.buscadorRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className='row' id='container-busqueda'>
                    <div className='form-group col-md-8'>
                        <input ref={this.buscadorRef} type='text' className='form-control form-control-lg' id='entradaBusqueda' placeholder='Busca Tu Imagen. Ej: Futbol' />
                    </div>
                    <div className='form-group col-md-4'>
                        <input type='submit' className='btn btn-lg btn-danger btn-block' value="Buscar..." />
                    </div>
                </div>
            </form>
        )
    }
}

export default Buscador