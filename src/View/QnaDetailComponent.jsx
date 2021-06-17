import React,  { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CategoryHeader from '../Component/CategoryHeader';
import QnaComment from './QnaCommentComponent'
import axios from 'axios';

class QnaDetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num: this.props.match.params.num,
            qna: {}
        };
      }
      componentDidMount(){
        axios.get(`/weRecycle/boards/page/${this.state.num}`).then((res) => {
            this.setState({ qna: res.data});
        })
    }
      
      onChange = (event) => {
          this.setState({writeComment : event.target.value });

      }

    //뒤로가기
      goBack = () =>{
        this.props.history.push('/QnA/1');
    }
    //글 수정
      update = () => {

        if(this.state.qna.writer==window.localStorage.getItem("USER_NAME")){
            this.props.history.push('/QnA-update/'+this.state.num);
        }
        else{
            alert('본인것만 수정이 가능합니다.')
        }
      }
      //글 삭제
      delete = () => {
          if(this.state.qna.writer == window.localStorage.getItem("USER_NAME"))
          {
            axios.delete(`/weRecycle/boards/${this.state.num}`).then(res =>{
              alert('삭제되었습니다');
              window.history.back();
              });
          }
          else{
              alert('본인것만 삭제가 가능합니다.')
          }
      }

   render(){
    return(
        <>
            <CategoryHeader />
            <div className="container main-border text-center">
                <div style={{border:'3px solid black',borderTop:'none'}}>
                    <table className='table mt-4' style={{borderTop:'3px solid black',borderBottom:'none'}}>
                        <thead>
                            <tr style={{backgroundColor:'#e8e8e8',fontSize:'25px'}}>
                                <th colSpan='3'>{this.state.qna.title}</th>
                            </tr>
                            <tr>
                                <td>번호 : {this.state.qna.postid}</td>
                                <td>작성자 : '{this.state.qna.writer}'</td>
                                <td>작성일 : {this.state.qna.date}</td>
                            </tr>
                        </thead>
                    </table>
                    <div className="QnADetailBody mb-4" style={{width:'100%',height:'100%',borderTop:'3px solid black',borderBottom:'3px solid #e8e8e8',marginTop:'0px'}}>
                        <div className="QnAinside mt-5 ml-5" style={{textAlign:'left',fontSize:'20px',width:'60%',margin:'auto',height:'300px'}}>
                            {this.state.qna.content}
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <button className="btn btn-outline-info mt-3 mb-4"
                                    style={{fontSize:'18px',width:'100px',height:'40px'}}
                                    onClick={this.goBack}
                            >
                            목록
                        </button>
                        <button className="btn btn-outline-success mt-3 mb-4"
                                style={{fontSize:'18px',width:'100px',height:'40px'}}
                                onClick={this.update}

                        >
                            수정
                        </button>
                        <button className="btn btn-outline-danger mt-3 mb-4"
                                style={{fontSize:'18px',width:'100px',height:'40px'}}
                                onClick={this.delete}
                        >
                            삭제
                        </button>
                    </div>
                </div>
                <QnaComment />
            </div>
        </>
    )
}
}
export default withRouter(QnaDetailComponent);