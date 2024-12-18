import React,{Component} from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component{
  render(){
    let{
      String, Number, Boolean, Array, ObjectJson, Function
    } = this.props
    return(
      <div style={{padding:"0px"}}>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <span>BooleanProps: {Boolean.toString()}</span>
        <p>ArrayProps: {Array.toString()}</p>
        <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    )
  }
}

R018_PropsDatatype.propTypes={
  string: datatype.number,
  number: datatype.number,
  boolean: datatype.bool,
  array: datatype.array,
  objectJson: datatype.object,
  function: datatype.func,
}

export default R018_PropsDatatype;
