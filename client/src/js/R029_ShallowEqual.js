import React,{Component} from "react";
import { shallowEqualArrays } from "shallow-equal";

class R029_ShallowEqual extends Component {
  constructor(props){
    super(props);
    this.state = {StateString:'react'}
  }

  shouldComponentUpdate(NextProps, NextState){
    return !shallowEqualArrays(this.state, NextState)
  }

  componentDidMount(){
    const object = {react: '200'};
    const Array1 = ['리액트', object];
    const Array2 = ['리액트', object];
    const Array3 = ['리액트', {react:'200'}];

    console.log('shallowEqualArray(Array1, Array2) : ' + shallowEqualArrays(Array1, Array2));
    console.log('shallowEqualArray(Array2, Array3) : ' + shallowEqualArrays(Array2, Array3));
    this.setState({StateString: 'react'})
  }

  render(){
    console.log('render() 실행');
    return(
      <div>
        <button onClick={() => this.setState({StateString:'변경됨'})}>변경됨</button>
      </div>
    )
  }
}

export default R029_ShallowEqual;