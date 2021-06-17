import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CategoryHeader from '../Component/CategoryHeader'
import axios from 'axios';

class SignComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: ''
        }

        this.createUser = this.createUser.bind(this);
    }

    createUser = (event) => {
        event.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };

        axios.post(`/weRecycle/users/join`, user).then(response => { 
            alert("!!회원가입이 완료되었습니다!!로그인페이지로 이동합니다!!");
            this.props.history.push('/login');
        }).catch(error => {
            alert(error.response.data);
            window.location.reload();
        });
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <CategoryHeader/>
                <div className="container main-border text-center">
            <div style={{fontSize:'60px'}}>회원가입</div>
            <div style={{border:'3px solid green',width:'50%',margin:'auto'}}>
            <form>
                    <table className="table">

                        <tbody style={{fontSize:'18px'}}>
                            <tr>
                                <td style={{textAlign:'right'}}>아이디(닉네임) :</td>
                                <td style={{textAlign:'center'}}><input style={{border:'1px solid #2f88fc',borderRadius:'3px'}}type="text" placeholder="아이디(닉네임)"
                                 value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} /></td>
                            </tr>
                                
                            <tr>
                                <td style={{textAlign:'right'}}>비밀번호 :</td>
                                <td style={{textAlign:'center'}}><input style={{border:'1px solid #2f88fc',borderRadius:'3px'}} type="password" placeholder="비밀번호"
                                value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} /></td>
                            </tr>

                            <tr>
                                <td style={{textAlign:'right'}}>이메일 :</td>
                                <td style={{textAlign:'center'}}><input style={{border:'1px solid #2f88fc',borderRadius:'3px'}} type="text" placeholder="이메일@email.com"
                                value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} /></td>
                            </tr>
                                  
                            <tr>
                                <td style={{textAlign:'right'}}>
                                    <button className="btn btn-outline-danger" type="button" onClick={this.cancel.bind(this)}>
                                    <span style={{fontSize:'20px'}} >취소</span>        
                                    </button>
                                </td>
                                <td style={{textAlign:'center'}}>
                                    <input style={{fontSize:'20px'}} type="submit" className="btn btn-outline-success"value="가입" onClick={this.createUser} /> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>         
                </div>
            <br/>
        </div>
        </div>
        );
    }
}

export default withRouter(SignComponent);