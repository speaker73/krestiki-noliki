import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';

class Square extends Component {
  icon() {
    if (this.props.state == 'X') {
      return 'times'
    } else
      return 'circle-o'
  }
  render() {
    const size = `${this.props.width}px`;
    const {x, y} = this.props.cord;
    const printCord = `${x},${y}`;
    const backgroundColor = this.props.select ? '#7c7' : '#ccc';
    const style = {
      width: size,
      height: size,
      padding: `${this.props.padding}px`,
      margin: `${this.props.margin}px`,
      backgroundColor
    };
    return (
      <div
           onClick={ () => this.props.onClick({
                       cord: this.props.cord,
                       state: this.props.state
                     }) }
           className="square"
           style={ style }>
       {/* <div style={ { position: 'absolute', left: 0, top: 0 } }>
          { printCord }
        </div>*/}
        { this.props.state.length ? <FontAwesome
                                                 name={ this.icon() }
                                                 style={ { fontSize: `${this.props.width/2}px` } } /> : <div></div> }
      </div>
    );
  }
}

export default Square;