import React,{Component} from "react";
import {Button, Fade} from 'reactstrap';


class R043_ReactstrapFade extends Component{
  constructor(props){
    super(props);
    this.state={fadeInOut:true, timeout:900}
  }

  toggle = (e)=>{
    this.setState({fadeInOut: !this.state.fadeInOut})
  }

  render(){
    return(
      <div>
        <Button color="success" onClick={this.toggle}>Fade In/Fade Out</Button>
        <Fade in={this.state.fadeInOut} timeout={this.state.timeout} tag="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Fade>
      </div>
    )
  }
}


export default R043_ReactstrapFade;