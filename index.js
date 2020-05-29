import React, { Component,props } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import estilos from "./componentes/estilos";
import Teclas from "./componentes/Teclas";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display : '',
      
    }

this.linha1 = [0,1,2,3,4,5,6,7].map(item =>
<div>
   <Teclas t={item} setar ={this.concatenar} digito={item}/>
    
   </div>
);

 this.linha2 = [8,9,'A','B','C','D','E','F'].map(item =>
<div>
   <Teclas t={item} setar ={this.concatenar} digito={item}/>
  
   </div>
 );


}

concatenar =(digito)=> {
    const aux  = this.state.display;
    aux += digito;
    this.setState({
      display: aux
    });
  }
 

  render() {
    return (
      <div style={estilos.container}>
        <div style={estilos.rotulo}>Display</div>
        
        <div style={estilos.display}>
          {this.state.display}
        </div>

        <div style={estilos.linha}>
          {this.linha1}
        </div>

        <div style={estilos.linha}>
          {this.linha2}
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
