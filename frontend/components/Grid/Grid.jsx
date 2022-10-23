import React, { Component } from "react";

class Grid extends Component {

  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(" ") : []; // numbers existe ? se verdadeiro aplicar o método split no array numbers, senão : retornar um array vazio 
    let classes = "";

    if(cols[0]) classes += `col-xs-${cols[0]}`;
    if(cols[1]) classes += ` col-sm-${cols[1]}`;
    if(cols[2]) classes += ` col-md-${cols[2]}`;
    if(cols[3]) classes += ` col-lg-${cols[3]}`;

    return classes;
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12); // se cols não foi setado cols será 12

    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}

export default Grid;