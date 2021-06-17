import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SearchMyWritedComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            qnas: []
        }
    }
    
    componentDidMount() {
        console.log("who? "+window.localStorage.getItem("USER_NAME"));
        axios.get(`/weRecycle/users/mypage/${window.localStorage.getItem("USER_NAME")}/posts`)
            .then((res) => {
                this.setState({ qnas: res.data});
            })
        
    }
           
    readQna(no) {
        this.props.history.push(`/QnA-read/${no}`);
    }
    
    render() {
    return(
        <> 
            <table className="table table-striped" style={{fontSize:'16px'}}>
                <thead>
                    <th>순서</th>
                    <th>제목</th>
                    <th>작성일</th>
                </thead>
                {
                    this.state.qnas 
                    ?
                    <tbody>{
                        this.state.qnas.map(qna => {
                            return(
                          <tr>
                            <td>{qna.postid}</td>
                            <td><a onClick = {() => this.readQna(qna.postid)}>{qna.title}</a></td>
                            <td>{qna.date}</td>
                         </tr>
                            )
                         })
                        }
                    </tbody>    
                    : null
                }
                </table>
        </>
        )
    }
}

export default withRouter(SearchMyWritedComponent);