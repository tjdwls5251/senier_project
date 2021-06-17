import React from 'react';
import Logo from "../pictures/We'Re Cycle.png";
import {Link, NavLink} from 'react-router-dom';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function CategoryHeader() {
    const history = useHistory();

    const nav = [
        {title:'분리배출', page:'Recycle'},
        {title:'최근 이슈', page:'Issue/1'},
        {title:'지역 위치', page:'address'},
        {title:'자유 게시판', page:'QnA/1'},
        {title:'카메라', page:'camera'},
        {title:'파일 업로드', page:'upload'},
    ]

    const logout = () => {
        console.log("USER_NAME : "+window.localStorage.getItem("USER_NAME"));
        if(window.localStorage.getItem("USER_NAME") == ""){
        alert("로그인된 사용자가 없습니다"); 
        }else{
            window.localStorage.setItem("USER_NAME","");
        alert("로그아웃 되었습니다");
        window.location.reload();
        }
    }
    const onCLick = () => {
        if(window.localStorage.getItem("USER_NAME")){
            history.push('/Mypage');
        }
        else{
            alert("로그인이 필요한 페이지 입니다. 로그인 페이지로 이동합니다.")
            history.push('/login');
        }
    }
    return(
    <div>
        <header>
            <Link to="/">
                <img src={Logo} style={{ maxWidth: "100%", height: "auto" }} />
            </Link>
        
        </header>
             <nav className="container navigation">
                <ul className="nav nav-tabs mb-3 mt-3" style={{fontSize:'25px',border:"none"}} >
                    {nav.map(nav => {
                        return (
                            <li className="nav-item">
                                <NavLink
                                    to={`/${nav.page}`}
                                    className="nav-link"
                                    activeStyle={{color:"rgb(47, 136, 252)"}}
                                    style={{color:"black",border:"none"}}
                                >
                                    <span>{nav.title}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                    
                    <DropdownButton  className='mt-2 ml-3' variant='info'size='lg' title='메 뉴 '>
                        <Dropdown.Item style={{fontSize:'15px',textAlign:'center',color:'blue'}} href={'/login'} >로그인</Dropdown.Item>
                        <Dropdown.Item style={{fontSize:'15px',textAlign:'center',color:'red'}} onClick={logout} >로그아웃</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item style={{fontSize:'15px',textAlign:'center'}} onClick={onCLick}>마이페이지</Dropdown.Item>
                    </DropdownButton>
                </ul>
            </nav>
  </div>

  )
 
}

export default CategoryHeader;