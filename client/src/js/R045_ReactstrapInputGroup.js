import React,{Component} from "react";
import {InputGroup, InputGroupText, Input, Button} from 'reactstrap';
// InputGroupAddon 이 사라졌음 InputGroupText로 똑같이 가능하게 구현됨
class R045_ReactstrapInputGroup extends Component{
  render(){
    return(
      <>
      <InputGroup>
        <Input placeholder="userid"/>
          <InputGroupText>@naver.com</InputGroupText>
      </InputGroup>
      <InputGroup>
        <InputGroupText><Button>버튼</Button></InputGroupText>
        <Input/>
      </InputGroup>
      </>
    )
  }
}


export default R045_ReactstrapInputGroup;