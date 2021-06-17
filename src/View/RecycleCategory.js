import React from 'react';
import CategoryHeader from '../Component/CategoryHeader'

import  "../CSS/Recycle_category.css"
import {useParams} from 'react-router-dom';

import Plasticinfo from '../pictures/플라스틱정보.png'
import Glassinfo from '../pictures/유리정보.png'
import Paperinfo from '../pictures/종이정보.png'
import Cansinfo from '../pictures/고철정보.png'
import Vinylinfo from '../pictures/비닐정보.png'
import Pagerpackinfo from '../pictures/종이팩정보.png'
import Clothinfo from '../pictures/의류정보.png'
import Icepack from '../pictures/아이스팩정보.png'
import Battery from '../pictures/전지류정보.png'


const RecycleCategory = () => { 
    const {list}= useParams();
    const category=
    [
        { list:'plastic',info:Plasticinfo },
        { list:'glass',info:Glassinfo },
        { list:'paper',info:Paperinfo },
        { list:'cans',info:Cansinfo },
        { list:'vinyl',info:Vinylinfo },
        { list:'pagerpack',info:Pagerpackinfo },
        { list:'cloth',info:Clothinfo },
        { list:'icepack',info:Icepack },
        { list:'battery',info:Battery },
    ]
    
    let item={list:'',info:''}
        category.map(category => {
            if(category.list == list){
                item.list=category.list;
                item.info=category.info;
            }
         
        });

        return(
            <div>
                <CategoryHeader />
                <div className="container main-border text-center">
                    <img src={item.info} />

                </div>
            </div>
        ); 
}
export default RecycleCategory;
