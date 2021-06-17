import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CategoryHeader from '../Component/CategoryHeader'
import CategoryTitle from "../Component/CategoryTitle"
import "../CSS/Write.css"
import axios from 'axios';

class WriteComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            content: ''
        }
        this.createBoard = this.createBoard.bind(this);
    }

    createBoard = (event) => {
        event.preventDefault();
        let board = {
            title: this.state.title,
            content: this.state.content,
            writer: window.localStorage.getItem("USER_NAME")
        };
        axios.post(`/weRecycle/boards`, board).then(res => {
            this.props.history.push(`/QnA-read/${res.data}`);
        });
    }

    back() {
        this.props.history.push('/QnA/1');
    }

    render() {
        return (
            <div>
            <CategoryHeader />

            <div className="container main-border">

                <CategoryTitle title='6' />
            <div>
                              <table className="Write_table table table-bordered">
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td><input className="form-control ml-1" type="text"  placeholder="제목을 작성해 주세요"
                            value={this.state.title} onChange={(event) => {this.setState({title: event.target.value})}} /></td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <p><textarea placeholder="&#13;&#10; 광고 및 불건전한 질문은 강제 삭제됩니다&#13;&#10;&#13;&#10; 모든 게시글은 익명입니다&#13;&#10;&#13;&#10; 모두가 함께 사용하며 질문하는 게시판을&#13;&#10;&#13;&#10; 깨끗한 글로 채워갑시다 :)"
                            value={this.state.content} onChange={(event) => {this.setState({content: event.target.value})}}></textarea>
                            </p></td>
                        </tr>


                    </tbody>
                 </table>
                 <div class="Write_footer">
               <button class="btn btn-outline-danger" type="button" onClick={this.back.bind(this)}>
                        <span class="fa fa-undo fa-md ">뒤로가기</span>        
                    </button>
                
                    <button class="btn btn-outline-success" type="button"  onClick={this.createBoard} >
                        <span class="fa fa-pen fa-md ">글쓰기</span>        
                    </button>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default withRouter(WriteComponent);