import React,{ Component} from 'react';

class Ranking extends  Component{
    constructor(props, context) {
        super(props, context);
        this.state = {board: []};
    
        fetch("http://localhost:765/main")
          .then(res => res.json())
          .then(json => this.setState({ board: json }));
      }
    render(){
        return (<div>{this.state.board.map((ranker,index)=>{
            return(<div key = {index}><h1>{ranker.name}</h1>
            <p>{ranker.score}</p></div>)
        })}</div>)
    }
  }
  
  export default Ranking;