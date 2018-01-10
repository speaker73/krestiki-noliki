import React, { Component, StyleSheet } from 'react';



class Li extends Component {
	constructor(props) {
	    super(props);
	    this.state = {active: false};
  	}
	onClick(){
		this.setState({active:true});
		setTimeout(()=>this.setState({active:false}),400);
		this.props.onClick();
	}
  render() {
  	const {active} = this.state;
    return (
     <li style={active?{padding:'15px 10px 5px' }:{}} className={this.props.className} onClick={()=>{ this.onClick() }}>
     	{this.props.children}
     </li>
    );
  }
}

export default Li