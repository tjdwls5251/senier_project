/*global kakao*/ 
import React,{ useEffect, useState} from 'react';
import CategoryHeader from '../Component/CategoryHeader'
import CategoryTitle from "../Component/CategoryTitle"
import  "../CSS/Address.css"
import {useParams} from 'react-router-dom';
import  "../CSS/Address_detail.css"
import axios from 'axios';


const AddressDetail = ()=> {
        const {address} =useParams();
        const [item, setItem] = useState("");

        useEffect(async ()=>{
            let url = `/weRecycle/facilities/detail?n=${address}`

            await axios.get(url)
                .then(response => response.data)
                .then((item)=> {
                    setItem(item);
                })
                .catch((err)=>{
                    console.log(err)
                })
                
            var container = await document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(item.latitude,item.longitude),
                level: 5
            };
        
            var map = await new kakao.maps.Map(container, options);
            var markerPosition  = await new kakao.maps.LatLng(item.latitude,item.longitude); 
            var marker = await new kakao.maps.Marker({
                position: markerPosition
            });
            await marker.setMap(map);
        
        
        }, [item.latitude])

            return(
            <div>
                <CategoryHeader/> 
                <div className="container main-border">
                    <CategoryTitle title='4' />
                    <div className="address_detail_page">
                        <div className="address_map" id="map">
                        </div>                                           
                        <div className="address_detail_info">
                            <div className="address_detail_name">"{item.name}"</div>
                            <div >주소 : {item.address_detail}</div>
                            <div>연락처 : {item.tel}</div>
                            <div className="address_openTime">
                                <div>
                                    <div style={{color:"blue"}}>평일</div>
                                    <div className="address_Time_info">
                                        <span>Open : {item.opentime}</span>
                                        <span> ~ </span>
                                        <span>Close : {item.closetime}</span>
                                    </div>
                                </div>
                                <div> 
                                    <div style={{color:"red"}}>공휴일 및 주말</div>
                                    <div className="address_Time_info">
                                        <span>Open : {item.opentime_holiday}</span>
                                        <span> ~ </span>
                                        <span>Close : {item.closetime_holiday}</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{color:'red',fontSize:'23px',paddingTop:'15px'}}>휴무 정보</div>
                            <div style={{fontSize:'23px'}}>{item.off_info}</div>
                            <div style={{textDecorationLine: 'underline',paddingTop:'15px'}}><span onClick={() => window.open(item.site_url,'_blank')}>사이트 바로가기</span></div>

                            
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default AddressDetail;