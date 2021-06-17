import React from 'react';
import CategoryHeader from '../Component/CategoryHeader'
import CategoryTitle from "../Component/CategoryTitle"
import CategorySearch from "../Component/CategorySearch"
import Pagination from "../Component/Pagination"

import 숲스토리 from "../pictures/숲스토리.png"
import 가구매장 from "../pictures/가구매장.png"
import 리싸이클오피스 from "../pictures/리싸이클오피스.png"
import 매장 from "../pictures/매장.png"

import 'react-bootstrap';
import "../CSS/Store.css"
function Store() {
    const database_store=[
        {이미지:숲스토리,이름:'숲 스토리',품목:'여성용 의류',주소:'경기도 의정부시 용민로 98',연락처:'031-7589-5412'},
        {이미지:가구매장,이름:'가구매장',품목:'가구 매장',주소:'서울특별시 중구 신당동 340-83번지 1층',연락처:'031-7589-5412'},
        {이미지:리싸이클오피스,이름:'리싸이클오피스',품목:'가전,의류,가구',주소:'경기도 군포시 엘에스로 45번길 49층',연락처:'02-1559-5611'},
        {이미지:매장,이름:"매장's",품목:'플라스틱 레고점',주소:'서울 강진구 xx로 45번길 49층',연락처:'010-2341-1489'},
        {이미지:리싸이클오피스,이름:'5',품목:'5',주소:'경기도 군포시 엘에스로 45번길 49층',연락처:'02-1559-5611'},

    ];

    const readdatebase_store = database_store.map(database_store => {
        return(
        <tr>
            <td><img src={database_store.이미지}/></td>
            <td>{database_store.이름}</td>
            <td>{database_store.품목}</td>
            <td>{database_store.주소}</td>
            <td>{database_store.연락처}</td>
        </tr>
          );
      });
      
    return(
        <div>
            <CategoryHeader/>
            <div className="container main-border">
                <CategoryTitle title='3' />
                <CategorySearch />

                <table class="Store_table table">              
                    <thead>
                        <tr>
                            <th>이미지</th>
                            <th>이름</th>
                            <th>품목</th>
                            <th>주소</th>
                            <th>연락처</th>
                        </tr>
                    </thead>
                    <tbody>
                        {readdatebase_store}
                    </tbody>
        
                </table>
                <hr/>
                <div className="footer">
                    <Pagination/>
                </div>
            </div>

        </div>
    )

}
export default Store;