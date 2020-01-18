import React,{Component} from 'react';
import Search from './components/Search'


class App extends Component {
  searchData=(termino)=>{
    console.log(termino)
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
