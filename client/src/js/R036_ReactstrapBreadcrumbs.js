import React,{Component} from "react";
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

class R036_ReactBreadcrumbs extends Component{
  render(){
    return(
      <div id="top">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="http://example.com">Go Top</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#bottom">Go Bottom</BreadcrumbItem>
        </Breadcrumb>
        <div id="bottom" style={{marginTop:"1000px"}}> 
          <span>bottom</span>
        </div>
      </div>
    )
  }
}

export default R036_ReactBreadcrumbs;