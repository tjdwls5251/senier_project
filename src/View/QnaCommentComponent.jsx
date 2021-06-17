import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class QnaCommentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: this.props.match.params.num,
            writeComment: '',
            params:'8',
            contents: [],
            n: 1
        };
      }
      componentDidMount(){
        axios.get(`/weRecycle/boards/${this.state.num}/comments`).then((res) => {
            this.setState({ contents: res.data});
        }).catch((error) => {
            alert(error.response.data);
            this.setState({ contents : 'null' });  
        });
    }

      onChange = (event) => {
          this.setState({writeComment : event.target.value });

      }
     
      onSubmit = (event) => {
        if(this.state.writeComment.length <= 0){
            alert('빈칸은 작성할수 없습니다.')
        }
        else{
            if(window.localStorage.getItem("USER_NAME")){
                event.preventDefault();
            let comment = {
                num: this.state.num,
                writer: window.localStorage.getItem("USER_NAME"),
                content: this.state.writeComment
            };
            console.log("add comment => "+ JSON.stringify(comment));
            axios.post(`/weRecycle/boards/${this.state.num}/comments`, comment).then(res => {
                window.location.reload();
            });
            }
            else{
                alert("로그인이 필요한 페이지 입니다. 로그인 페이지로 이동합니다.")
                this.props.history.push('/login');
            }
        }
      }

      delete(writer,date){
        if(writer==window.localStorage.getItem("USER_NAME")){
            axios.delete(`/weRecycle/boards/${this.state.num}/comments/${writer}/${date}`).then(res => {
                window.location.reload();
            });
        }
        else{
            alert('본인것만 삭제가 가능합니다.')
        }
    }
   render(){
    return(
                <div style={{border:'3px solid black',borderTop:'none',padding:'20px',marginBottom:'20px'}}>
                    <div style={{fontSize:'40px',border:'1px solid black',background:'#e8e8e8'}}>
                        <p>댓글을 달아주세요!</p>
                    </div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th style={{width:'200px',tableLayout:'fixed'}}>작성자</th>
                                <th style={{tableLayout:'fixed'}}>내용</th>
                                <th style={{width:'200px',tableLayout:'fixed'}}>작성일</th>
                                <th style={{width:'100px',color:'red',tableLayout:'fixed'}}>삭제</th>

                            </tr>
                        </thead>
                        {
                            this.state.contents ?
                        <tbody style={{fontSize:'20px'}}>
                            {this.state.contents.map(comment => {
                                return(
                                <tr>
                                    <td>{comment.writer}</td>
                                    <td>{comment.content}</td>
                                    <td>{comment.date}</td>
                                    <td>
                                        <button className="btn btn-outline-danger"
                                                style={{fontSize:'15px',width:'50px',height:'30px'}}
                                                onClick={() => this.delete(comment.writer,comment.date)}
                                        >
                                            삭제
                                        </button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                        : null
                         }
                    </table>
                    <form onSubmit={this.onSubmit}>
                    <div style={{display:'flex',fontSize:'20px'}}>
                            <input  className="form-control ml-1" 
                                    style={{fontSize:'20px'}}
                                    type='text' 
                                    placeholder="광고, 욕설, 비방글 등은 삭제될수있습니다."
                                    value={this.state.writeComment}
                                    onChange={this.onChange}
                            />
                            <input type='submit' value="작성"></input>
                    </div>
                    </form>
                </div>
                )
   }
}
export default withRouter(QnaCommentComponent);