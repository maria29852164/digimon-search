
import React,{Component} from 'react'
import '../estilos/cardDigimon.css'

class DigimonCard extends  Component{




  render(){
    return(
      <div>
       <div>
          <div className="card text-white bg-primary mb-3"  >
            <div className="card-header text-center">
            <img src={this.props.digimon[0].img} className="img-digimon rounded-circle "/>

            </div>
            <div className="card-body text-center">
            <h4 className="card-title">{this.props.digimon[0].name}</h4>
            <p className="card-text">{this.props.digimon[0].level}</p>
            </div>
            </div>
        </div>
      </div>


    );
  }
}
export default DigimonCard
