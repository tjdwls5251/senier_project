import React from 'react';
import 분리배출 from "../pictures/분리배출.png";
import 이슈 from "../pictures/이슈.png";

import 위치 from "../pictures/위치.png";
import QA from "../pictures/QA.png";
import 마이페이지 from "../pictures/매장.png";

import 'react-bootstrap';
import {Link} from 'react-router-dom';
function Categories(props){
    let category = [분리배출, 이슈, 위치, QA,마이페이지];
    let title = ['분리배출', '최근 이슈', '지역 위치', '자유 게시판','마이페이지'];
    let page = ['/Recycle', '/Issue/1', '/address', '/QnA/1','/login'];
 
    return(
        
        <div className="col-4">
            <div className="main-page card" style={{border:"0px"}}>    
                <Link to={page[props.category.title]}>
                    <img className="card-img-top" src={category[props.category.title]} alt='이미지'/>
                </Link>                 
                <div className="d-none d-lg-block">
                    <div className="card-body ">
                    <Link to={page[props.category.title]}>
                        <button type="button" className="test btn-block btn-dark"  style={{fontSize:"2.8rem"}} > {title[props.category.title]}</button>
                    </Link>
                    </div>
                </div>
                
            </div>
      


        </div>

    )
}
export default Categories;
