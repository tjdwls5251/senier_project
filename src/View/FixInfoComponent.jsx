import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class FixInfoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prePW: '',
            newPW1: '',
            newPW2: '',
            user: {}
        }
    }

    componentDidMount(){
        axios.get(`/weRecycle/users/mypage/${window.localStorage.getItem("USER_NAME")}`)
        .then((res) => {
            this.setState({user: res.data});
        });
    }
    
    doFixInfo = (event) => {
        event.preventDefault();
        let changeduser = {
            username: this.state.user.username,
            password: this.state.prePW,
            newPassword1: this.state.newPW1,
            newPassword2: this.state.newPW2
        };
        console.log("user-fixInfo => "+ JSON.stringify(changeduser));
        axios.put(`/weRecycle/users/mypage`, changeduser)
        .then((response) => {
            alert(response.data);
            console.log("data: "+response.data);
            window.location.reload();
        })
        .catch(error => {
            alert(error.response.data);
            this.props.history.push('/mypage');
        })
    }

    cancel() {
        this.props.history.push('/mypage');
    }

    render() {
        return (
            <div>
                <div style={{border:'3px solid black',width:'50%',margin:'auto'}}>
                <div style={{fontSize:'60px'}}>{this.state.user.username}</div>
                <div style={{fontSize:'24px'}}>{this.state.user.email}</div>
                <form>
                    <table className="table">
                        <thead>
                            <th colSpan='2' style={{background:'rgb(134, 253, 55)'}}>비밀번호 변경</th>
                        </thead>
                        <tbody style={{fontSize:'15px'}}>
                            <tr>
                                <td style={{textAlign:'right'}}>현재 비밀번호 :</td>
                                <td style={{textAlign:'center'}}><input type="password" placeholder="현재 비밀번호"
                                value={this.state.prePW} onChange={(e) => this.setState({prePW: e.target.value})}/></td>
                            </tr>

                            <tr>
                                <td style={{textAlign:'right'}}>새 비밀번호 :</td>
                                <td style={{textAlign:'center'}}><input type="password" placeholder="새 비밀번호"
                                value={this.state.newPW1} onChange={(e) => this.setState({newPW1: e.target.value})}/></td>
                            </tr>

                            <tr>
                                <td style={{textAlign:'right'}}>새 비밀번호 확인 :</td>
                                <td style={{textAlign:'center'}}><input type="password" placeholder="새 비밀번호 확인"
                                value={this.state.newPW2} onChange={(e) => this.setState({newPW2: e.target.value})}/></td>
                            </tr>

                            <tr>
                                <td style={{textAlign:'right'}}>
                                    <button className="btn btn-outline-danger" type="button"  onClick={this.cancel.bind(this)}>
                                    <span style={{fontSize:'20px'}}>취소</span>        
                                    </button>
                                </td>
                                <td style={{textAlign:'center'}}>
                                    <input style={{fontSize:'20px'}} type="submit" className="btn btn-outline-success"value="저장"
                                    onClick={this.doFixInfo} /> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>         
            </div>
                
            </div>
        );
    }
}

export default withRouter(FixInfoComponent);