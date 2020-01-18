import React,{Component} from 'react';
import Search from './components/Search'


class App extends Component {
  state={
    term:'digimon'
  }
  queryApi=()=>{
    const query=this.state.term
    const url=`https://digimon-api.herokuapp.com/api/digimon/id/${query}`
    fetch(url).then((res)=>res.json)
    .then(data=>console.log(data))
    //console.log(url)
  }
  searchData=(term)=>{
    this.setState({term},()=>this.queryApi())

  }
  render(){
    return(

      <div className="app container">
          <div className="jumbotron">
            <p className="lead text-center">Buscador de digimons</p>
            <Search  search={this.searchData}/>
        


        </div>
      </div>
    );

  }
}
export default App
