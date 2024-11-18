import React,{Component} from "react";



class R028_PureComponentClass extends Component{
  constructor(props){
    super(props);
    this.state = {
      StateString : 'react',
      StateArrayObj: ['react', {react:'200'}]
    }
  }

  buttonClick = (type) => {
    if(type ==='String'){
      this.setState({StateString:'react'});
    }
    else{
      this.setState({StateArrayObj:['react',{react: '200'}] });
    }
  }

  render(){
    console.log('render() 실행')
    return(
      <div>
        <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={e => this.buttonClick('ArrayObj')}>객체 배열변경</button>
      </div>
    )
  }
}

export default R028_PureComponentClass;