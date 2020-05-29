import React, {Component} from "react";
import estilos from "./estilos";


export default class Teclas extends Component {
  
  
  render() {
    return (
    <button 
     style={estilos.botao_tecla}
     onClick={this.props.setar.bind(this, this.props.digito)}
    >
    {this.props.digito}

      </button>
      );
  }
}


 