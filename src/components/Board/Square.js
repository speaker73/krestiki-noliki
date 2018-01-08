import React, { Component } from 'react';

class Square extends Component {
	
  render() {
  	const size = `${this.props.width}px`;
	const margin = `${this.props.margin}px`;	
	const padding = `${this.props.padding}px`;
	const {x, y} = this.props.cord;
	const printCord = `${x},${y}`;
    return (
	     <div onClick={()=>this.props.onClick({cord:this.props.cord, state:this.props.state})} className="square" style={{width:size, height:size, padding:padding, margin:margin}}>
	   		<div style={{position: 'absolute', left:0, top:0 }}>{printCord}</div>
	   		<div style={{fontSize:'40px'}} > {this.props.state} </div>
	    </div>
    );
  }
}

export default Square;