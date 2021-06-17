import React from 'react';
import 분리배출 from "../pictures/분리배출.png";
import 이슈 from "../pictures/이슈.png";
import 이벤트 from "../pictures/이벤트.png";
import 매장 from "../pictures/매장.png";
import 위치 from "../pictures/위치.png";
import QA from "../pictures/QA.png";
import 질문작성 from "../pictures/Write.png";



function CategoryTitle(props) {
    let category_img = [분리배출, 이슈, 이벤트, 매장,위치,QA,질문작성];
    let category_title =['분리배출 방법','최근이슈','이벤트 정보','친환경 매장','지역 정보','자유 게시판','글 작성'];
    return(
    <div className="title">
        <img src={category_img[props.title]} style={{height:"60px"}}/>
        <text>{category_title[props.title]}</text>
    </div>
    )
}
export default CategoryTitle;