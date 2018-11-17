import React, { Component } from 'react';


class SearchSong extends Component {
    constructor(){
        super()
        this.state ={
            song: ''
        }

        this.onHandleChange = this.onHandleChange.bind(this)
    }

    onHandleChange(e){
        console.log(e.target.value)
        this.setState({
            song: e.target.value
        })
    }

    



  render() {
      return(
          <div className="container">
              <form onSubmit={this.onSubmit}>
                <input type="text" className="form-control" name="song" placeholder="Search Song..." required value={this.state.song} onChange={this.onHandleChange}/>
              </form>
          </div>
      )
  }
}

export default SearchSong;