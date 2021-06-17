import React from "react";
import Webcam from "react-webcam";
import axios from "axios";
import CategoryHeader from '../Component/CategoryHeader'
import Result from './Result';

class camera extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      capture:'capture',
      i : '0',
      aiResult: '0'
    };
  }
  handleOver = () => this.setState({capture:'캡 처'})
  handleOut = () => this.setState({capture:'capture'})

  handleClick = async() => {
    const screenshot = await this.webcam.getScreenshot();
    await this.setState({ screenshot });
    this.setState({i:'1'})
  }

  handlePost = async() => {

    // 스크린샷 사진이 없다면 찍기를 요청한다.
    if(this.state.screenshot == null){
      alert("사진을 먼저 찍어주세요");
      return;
    }
    // now upload
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      await axios.post('/camera/ai', {img: this.state.screenshot}, config).then(response => {
        console.log(response)
        this.setState({aiResult: response.data.result});
       })
       
}
  
    
  render() {
    return (
      <>
        <CategoryHeader />
        <div className="container main-border text-center">
          {this.state.aiResult == 0 ?
          <>
                    <div style={{fontSize:'21px'}}>
                        <span style={{color:'red',fontSize:'45px'}}>주의! </span>
                        <p>촬영시 이미지가 잘보이도록 해주세요.</p>
                        <p>촬영 이미지외 다른 물건등으로 인해 다른 결과값 나올수있습니다.</p>                    
                    </div>
               {this.state.i == 0 ? 
               <Webcam audio={false} ref={node => this.webcam = node} 
                        style={{width:'800px',height:'600px',border:'3px solid rgb(167, 167, 167)'}}
                />
                : <img src={this.state.screenshot} />
                }

                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <button className="btn btn-outline-danger mt-3 mb-4"
                                style={{fontSize:'18px',width:'100px',height:'40px'}}
                                onClick={this.handlePost}>
                        Uploading
                    </button>
                    {this.state.i == 0 ?
                        <button className="btn btn-outline-success mt-3 mb-4"
                                style={{fontSize:'18px',width:'100px',height:'40px'}}
                                onClick={this.handleClick}
                                onMouseOver={this.handleOver}
                                onMouseOut={this.handleOut}>
                            {this.state.capture}
                        </button> 
                        :
                        <button className="btn btn-outline-danger mt-3 mb-4"
                                style={{fontSize:'18px',width:'100px',height:'40px'}}
                                onClick={ e => (window.location.reload())}
                                >
                        다시찍기
                                </button>
                        }
                </div>
            </>
          :
           <Result result={this.state.aiResult} img={`${this.state.screenshot}`}/>
        }
        </div>
      </>
    );
  }
}
export default camera;