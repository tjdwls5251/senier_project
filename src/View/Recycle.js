import React from 'react';
import CategoryHeader from '../Component/CategoryHeader'
import CategoryTitle from "../Component/CategoryTitle"
import RecycleInfo from "../Component/RecycleInfo"

/* 영어: img 한글 : text */
import plastic from "../pictures/plastic_img.png"
import 플라스틱 from "../pictures/플라스틱.png"
import glass from "../pictures/glass.png"
import 유리 from "../pictures/유리.png"
import paper from "../pictures/paper.png"
import 종이 from "../pictures/종이.png"
import 캔 from "../pictures/캔,고철.png"
import cans from "../pictures/cans.png"
import 비닐 from "../pictures/비닐.png"
import vinyl from "../pictures/vinyl.png"
import 종이팩 from "../pictures/종이팩.png"
import pagerpack from "../pictures/pagerpack.png"
import 의류 from "../pictures/의류.png"
import cloth from "../pictures/cloth.png"
import 아이스팩 from "../pictures/아이스팩.png"
import icepack from "../pictures/icepack.png"
import 전지류 from "../pictures/전지류.png"
import battery from "../pictures/battery.png"

import {Link} from 'react-router-dom';
import "../CSS/Recycle.css"
function Recycle(){
    const database_recycle=[
        {이미지:plastic,텍스트:플라스틱,분류:'plastic'},
        {이미지:glass,텍스트:유리,분류:'glass'},
        {이미지:paper,텍스트:종이,분류:'paper'},
        {이미지:cans,텍스트:캔,분류:'cans'},
        {이미지:vinyl,텍스트:비닐,분류:'vinyl'},
        {이미지:pagerpack,텍스트:종이팩,분류:'pagerpack'},
        {이미지:cloth,텍스트:의류,분류:'cloth'},
        {이미지:icepack,텍스트:아이스팩,분류:'icepack'},
        {이미지:battery,텍스트:전지류,분류:'battery'},
    ];

    const readdatebase_recycle= database_recycle.map(database_recycle => {
        return(
            <div className="imgswap col-sm-4">
                <Link to={`/Recycle/${database_recycle.분류}`}>
                    <img src={database_recycle.이미지}/>
                    <img src={database_recycle.텍스트}/>
                </Link>
            </div>
      );
    });
    return(
        <div>
            <CategoryHeader />
            <div className="container main-border">
                <CategoryTitle title='0' />
                <RecycleInfo/>
                <br/>   
                <div className="container row imagetap text-center">
                    {readdatebase_recycle}
                </div>
            </div>

        </div>

    )
}
export default Recycle;
    