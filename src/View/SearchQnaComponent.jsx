import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category_Header from '../Component/CategoryHeader'
import Category_title from "../Component/CategoryTitle"
import axios from 'axios';
import "../CSS/QnA.css"

class SearchQnAComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
           qnas:[],
           word: ''
        }
    }

    writeQna() {
        if(window.localStorage.getItem("USER_NAME")){
           this.props.history.push('/QnA-write');
        }
        else{
            alert("로그인이 필요한 페이지 입니다. 로그인 페이지로 이동합니다.")
            this.props.history.push('/login');
        }
    }

    searchWord() {
        
        this.props.history.push("/QnA-search/"+this.state.word);
        window.location.reload();
    }

    readQna(no) {
        this.props.history.push(`/QnA-read/${no}`);
    }

    componentDidMount() {
            axios.get(`/weRecycle/boards/${this.props.match.params.word}`).then((res) => {
            this.setState({ qnas: res.data});
        })
        .catch((error) => {
            alert(error.response.data);
                this.props.history.push("/QnA/1");
            })
    }

    render() {
        return (
            <div>
        <Category_Header title='5'/>
      
        <div className="container main-border">
          
            <Category_title title='5' />
           
            <div className="Search">
            <div className="search_input" style={{ width: "100%" }}>
                <input className="form-control" type="text" placeholder="검색어를 입력해주세요." aria-label="Search"
                 value={this.state.word} onChange={(event) => {this.setState({word: event.target.value})}} />
            </div>
            <div>
                <button className="btn btn-outline-info" type="submit" onClick={this.searchWord.bind(this)}>
                    <span className="fa fa-search fa-md ">Search</span>
                </button>
            </div>
        </div>

            <div>   
                    <table className="QnA_table table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>순서</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
        
                        <tbody>
                            {
                                this.state.qnas.map(
                                    qna =>
                                    <tr key = {qna.postid}>
                                        <td>{qna.postid}</td>
                                        <td><a onClick = {() => this.readQna(qna.postid)}>{qna.title}</a></td>
                                        <td>{qna.date}</td>
                                        <td>{qna.writer}</td>
                                    </tr>
                                )
                        }
                        </tbody>
                    </table>
        
          </div>
          <div className="footer">
          <ul className="pagination">
            <li className="page-item"><a href="/qna/1"><span>1</span></a></li>
            </ul>
                <div className="write" >
                    
                        <button className="btn btn-outline-success" type="button" onClick={this.writeQna.bind(this)}>
                            <span className="fa fa-pen fa-md ">글쓰기</span>        
                        </button>
                </div>

            </div>
        </div>

  </div>
          );
    }
}

export default withRouter(SearchQnAComponent);