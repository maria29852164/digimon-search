import React,{Component} from 'react'
import DigimonCard from './DigimonCard'


class ShowDigimons extends Component{
  state={
    card_background:''
  }



 prueba=()=>{
  const data=this.props.digimon
   if(data.length===0)return null

    return (
      <DigimonCard digimon={data}/>



    );


 }

  render(){
    return(
      <div>{this.prueba()}


      </div>
    )


  }

}
export default ShowDigimons
