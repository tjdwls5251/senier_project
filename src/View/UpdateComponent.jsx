import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category_Header from '../Component/CategoryHeader'
import Category_title from "../Component/CategoryTitle"
import axios from 'axios';

class UpdateComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            num: this.props.match.params.num,
            new_title: '',
            new_content: '',
            qna: {}
        }

        this.updateBoard = this.updateBoard.bind(this);
    }
   
    componentDidMount() {
        axios.get(`/weRecycle/boards/page/${this.state.num}`).then((res) => {
            this.setState({ qna: res.data});
            this.setState({new_title: this.state.qna.title});
            this.setState({new_content: this.state.qna.content});
        })
    }

    updateBoard = (event) => {
        event.preventDefault();
        let board = {
            postid: this.state.qna.postid,
            title: this.state.new_title,
            content: this.state.new_content,
            writer: window.localStorage.getItem("USER_NAME")
        };
        axios.put(`/weRecycle/boards/${this.state.num}`, board).then(res => {
            this.props.history.push(`/QnA-read/${this.state.num}`);
        });
    }

    back() {
        this.props.history.push('/QnA/1');
    }

    render() {
        return (
            <div>
            <Category_Header />

            <div className="container main-border">

                <Category_title title='6' />
                              <table className="Write_table table table-bordered">
                    <tbody>
                        <tr>
                            <td>제목</td>
                            <td><input className="form-control ml-1" type="text"
                            value={this.state.new_title} onChange={this.changeTitleHandler} /></td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <p><textarea value={this.state.new_content} onChange={(event) => {this.setState({new_content: event.target.value})}}></textarea>
                            </p></td>
                        </tr>


                    </tbody>
                 </table>
                 <div class="Write_footer">
               <button class="btn btn-outline-danger" type="button" onClick={this.back.bind(this)}>
                        <span class="fa fa-undo fa-md ">뒤로가기</span>        
                    </button>
                
                    <button class="btn btn-outline-success" type="button"  onClick={this.updateBoard} >
                        <span class="fa fa-pen fa-md ">수정하기</span>        
                    </button>
                </div>
            </div>
            </div>
        );
    }
}

export default withRouter(UpdateComponent);