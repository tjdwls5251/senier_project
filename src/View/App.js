import React, {useState} from 'react';
import QnADetail from './QnaDetailComponent';
import QnASearch from './SearchQnaComponent';
import QnAUpdate from './UpdateComponent';
import QnA from './QnaComponent';
import Write from './WriteComponent';
import MainPage from './MainPage';
import AddressDetail from './AddressDetail';
import Upload from './upload';
import Result from './Result';

import Address from './Address';
import Mypage from './Mypage';
import Issue from './IssueComponent';
import Recycle from './Recycle';
import RecycleCategory from './RecycleCategory';
import Login from './LoginComponent';
import Sign from './SignComponent';
import Camera from './Camera';

import "../CSS/public.css"
import 'react-bootstrap';


import{
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

function App (){


    return (
      <Router>
        <Switch>
          {/* 로그인&마이페이지 */}

          {/* 로그인 됨 */}
          <Route path="/Mypage" exact>
            <Mypage/>
          </Route>

          {/* 로그인 안됨 */}
          <Route path="/login" exact>
             <Login/>
          </Route>

          <Route path="/login/sign" exact>
             <Sign/>
          </Route>

          <Route path="/result" exact>
            <Result/>
          </Route>

          {/* 질문게시판 -> 글작성탭 (이때 로그인 여부 확인) */}
          <Route path="/QnA-write" exact>
            <Write/>
          </Route>

          {/* 질문게시판 -> 상세보기 */}
          <Route path="/QnA-read/:num" component={QnADetail}/>

          <Route path="/QnA-update/:num" exact>
            <QnAUpdate/>
          </Route>

          <Route path="/QnA-search/:word" exact>
            <QnASearch/>
          </Route>
          
          {/* 질문게시판 */}
          <Route path="/QnA/:num" exact>
            <QnA/>
          </Route>
    
          {/* 지역정보 탭 -> 상세보기 */}
          <Route path="/address/:address" exact>
            <AddressDetail/>
          </Route>

          {/* 지역정보 페이지 */}
          <Route path="/address" exact>
            <Address/>
          </Route>

          {/* 최근 이슈 페이지 */}
          <Route path="/Issue/:num" exact>
            <Issue/>
          </Route>

          {/* 분리배출 페이지 -> 카테고리별 상세페이지 */}
          <Route path='/Recycle/:list' exact>
            <RecycleCategory />
          </Route>

          {/* 분리배출 페이지 */}
          <Route path="/Recycle">
            <Recycle />
          </Route>
          
          <Route path="/Camera">
            <Camera />
          </Route>

          {/* 파일 업로드 페이지 */}
          <Route path="/upload">
            <Upload />
          </Route>

          {/* root 페이지 */}
          <Route path="/">
            <MainPage/>
          </Route>

      </Switch>
    </Router>
    );
  }

export default App;
