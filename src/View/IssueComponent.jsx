import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category_Header from '../Component/CategoryHeader'
import Category_title from "../Component/CategoryTitle"
import axios from 'axios';
import "../CSS/Issue.css"

class IssueComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            num:  this.props.match.params.num,
            issues: []
        }
    }

    componentDidMount(){
        axios.get(`/weRecycle/issues/${this.state.num}`).then((res =>{
            this.setState({ issues: res.data });
        }))
    }

    render() {
        return (
            <div>
            <Category_Header title='1' />
            <div className="container main-border">
                <Category_title title='1' />
                <div class="Issue container row">

                <table class="Issue_table table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>링크</th>
                    </tr>
                </thead>
                <tbody>
                {
                this.state.issues.map(issue =>
                    <tr>
                    <td style={{paddingLeft:'40px'}}>{issue.title}</td>
                    <td style={{textAlign:'center'}}>{issue.date}</td>
                    <td style={{textAlign:'center'}}><button className='btn btn-lg btn-outline-info' onClick={()=>window.open("http://blog.naver.com/"+issue.pageUrl,'_blank')}>링크</button></td>
                    </tr>
                )}
                </tbody>
                </table>
                </div>
                <div className="footer">

                <ul className="pagination">
            <li className="page-item"><a href="/issue/1"><span>1</span></a></li>
            <li className="page-item"><a href="/issue/2"><span>2</span></a></li>
            <li className="page-item"><a href="/issue/3"><span>3</span></a></li>
            <li className="page-item"><a href="/issue/4"><span>4</span></a></li>
            <li className="page-item"><a href="/issue/5"><span>5</span></a></li>
        </ul>
               
                </div>

            </div>

        </div>
        );
    }
}

export default withRouter(IssueComponent);