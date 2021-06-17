import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class ResultComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
    selected:{
        list:'',
        x:'',
        y:'',
        이미지:'', 
    },
    infor: []
    };
  }
  
    ClickX =()=>{
        this.setState({color1:'rgb(47, 136, 252)'})
        this.setState({color2:'black'})
        this.setState({click:'1'})
        axios.get(`/weRecycle/recycles/infor/${this.state.selected.x}`).then(res => {
                this.setState({ infor : res.data.split("/")});
        });
    }
    ClickY =()=>{
        this.setState({color1:'black'})
        this.setState({color2:'rgb(47, 136, 252)'})
        this.setState({click:'2'})
        axios.get(`/weRecycle/recycles/infor/${this.state.selected.y}`).then(res => {
                this.setState({ infor : res.data.split("/")});
    });
    }

    componentDidMount(){
        axios.get(`/weRecycle/recycles/article/${this.props.result}`) 
            .then((res) => {
            this.setState({selected:
            {
            list: this.props.result, 
            x: res.data[0],
            y: res.data[1],
            이미지:this.props.img
            }
            })
        });
    }
          
    render(){
    return(
        <>
          <div style={{textAlign:'center',fontSize:'50px'}}>{this.props.result}</div>
          //<div ><img src={this.state.selected.이미지} style={{width:'100%',height:'100%',maxWidth:"700px",maxHeight:'600px'}}/></div>
          <p style={{fontSize:'30px', marginTop:'40px'}}> 원하는 정보를 선택해주세요</p>
          <div style={{marginTop:'40px',fontSize:'30px',display:'flex',justifyContent:'space-around'}}>
            <li onClick={this.ClickX}  style={{color:`${this.state.color1}`}}>{this.state.selected.x}</li>
            <li onClick={this.ClickY}  style={{color:`${this.state.color2}`}}>{this.state.selected.y}</li>
          </div>
          <hr/>
          {this.state.click == 1 ? 
            <>  
                    <div style={{fontSize:'20px'}}>                       
                      <div>{this.state.infor[0]}</div>
                      <div>{this.state.infor[1]}</div>
                      <div>{this.state.infor[2]}</div>
                      <div>{this.state.infor[3]}</div>
                  </div>
            </>
          :
            <>  
              
                    <div style={{fontSize:'20px'}}>
                        <div>{this.state.infor[0]}</div>
                        <div>{this.state.infor[1]}</div>
                        <div>{this.state.infor[2]}</div>
                        <div>{this.state.infor[3]}</div>
                  </div>
            </>              
          }            
        </>
      )
  }
}
export default withRouter(ResultComponent);
