import React,{Component} from 'react'

class Search extends  Component{
  searchRef=React.createRef()
  handle=(e)=>{
    e.preventDefault()
    const value=this.searchRef.current.value
    this.props.search(value)

  }

  render(){
    return(

      <form onSubmit={this.handle}>
         <div className="row">
          <div className=" form-group col-md-8">
              <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Search your digimon here"/>
          </div>


          <div className=" form-group col-md-4">
              <input type="submit" className="btn btn-lg btn-block btn-danger" value="Search..."/>
          </div>
         </div>

      </form>

    );
  }
}
export default Search
