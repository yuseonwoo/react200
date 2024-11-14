import React, {Component} from "react";

class R006_LifeCycleEx extends Component{
  static getDerivedStateFromProps(props,state){
    console.log('2.getDerivedStateFromProps Call : '+props.prop_value);
    return{};
  }
  constructor(props){
    super(props);
    this.state = {};
    console.log('1. construnctor Call');
  }
  render(){
    console.log('3. render Call');
    return(
      <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
    )
  }
}

export default R006_LifeCycleEx;