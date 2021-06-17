import React from "react";
import axios from "axios";
import CategoryHeader from '../Component/CategoryHeader'
import Upload from "../pictures/uploadimg.png";
import Result from './Result';

class upload extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imgBase64: [],
        previewURL : '',
        i:'0',
        aiResult: '0'
      };
    }
  
    onChange = (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = async() => {   
        await this.setState({
          file : file,
          previewURL : reader.result
        })
        await alert(this.state.previewURL)
      }
      reader.readAsDataURL(file);
    };
  
    onClick = async () => {
    
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };
      await axios.post(
          '/camera/ai', 
          {img: this.state.previewURL}, 
          config
      ).then(response => {
        console.log(response.data)
        this.setState({aiResult: response.data.result});
      });
    };
    
    render(){
      let profile_preview = null;
      if(this.state.file !== ''){
        profile_preview = <img className='profile_preview' style={{width:'50%',height:'50%'}} src={this.state.previewURL}></img>
      }
      return (
        <>
            <CategoryHeader />
            <div className="container main-border text-center">
              { this.state.aiResult== 0 ? 
                <>
                  <div className="title">
                      <img src={Upload} style={{height:"60px"}}/>
                      <text>파일업로드</text>
                  </div>
                  <div style={{fontSize:'30px',marginBottom:'15px'}}><span style={{color:'rgb(49, 145, 253)'}}>업로드</span>할 파일을 선택해주세요</div>
                  <input  type="file" accept ='image/*' 
                          onChange={this.onChange}
                          style={{fontSize:'15px',margin:'auto'}}
                  />
                  <div className="uploadimg mt-4 mb-4"style={{margin:'auto'}}>
                      {profile_preview}
                  </div>
                  <button className="btn btn-outline-success mt-4 mb-4"
                          onClick={this.onClick}
                          style={{fontSize:'18px',width:'120px',height:'40px'}} >
                      <strong>Uploading</strong>
                  </button>
                </>
                :
                <Result result={this.state.aiResult} img={`${this.state.previewURL}`}/> 
              }
          </div>
        </>
      );
    }
    
  }
  
  export default upload;