import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CategoryHeader from '../Component/CategoryHeader'

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.doitlogin = this.doitlogin.bind(this);
    }

    doitlogin = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password
        };
        
        axios.post(`/weRecycle/users/login`, user)
        .then(response => {
            window.localStorage.setItem("USER_NAME",response.data);
            alert("!!로그인이 완료되었습니다!!");
            this.props.history.push('/Mypage');
        }).catch(error => {
            alert(error.response.data);
            window.location.reload();
        });
    }

    goSign() {
        this.props.history.push('/login/sign');
    }
    logout() {
        console.log("USER_NAME : "+window.localStorage.getItem("USER_NAME"));
        if(window.localStorage.getItem("USER_NAME") == ""){
        alert("로그인된 사용자가 없습니다"); 
        }else{
            window.localStorage.setItem("USER_NAME","");
        alert("로그아웃 되었습니다");
        this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
             <CategoryHeader />
            <div className="container main-border" style={{textAlign:'center'}}>
                <form>
                <div style={{ width:'40%',margin:'auto'}}>
                        <div style={{fontSize:'50px',marginBottom:'10px'}}>Login</div>
                        <div style={{border:'3px solid green',marginBottom:'10px'}}>
                            <div>
                                <input style={{fontSize:'22px',border:'1px solid #2f88fc',borderRadius:'3px',marginTop:'10px'}} type='text' placeholder="사용자 아이디"
                                value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                            </div>
                            <div>
                                <input style={{fontSize:'22px',border:'1px solid #2f88fc',borderRadius:'3px',marginTop:'10px'}} type='password' placeholder="비밀번호"
                                value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                            </div>
                            <input style={{width:"57%",fontSize:'22px',marginTop:'10px'}} type="submit" value="로그인" onClick={this.doitlogin} />
                            <div style={{fontSize:'22px',marginBottom:'22px'}}>
                                <span onClick={this.goSign.bind(this)} style={{color:'black'}}>회원가입</span>
                                <span> / </span>
                                <span onClick={this.logout.bind(this)} style={{color:'black'}} >logout</span>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
        </div>
        );
    }
}

export default withRouter(LoginComponent);