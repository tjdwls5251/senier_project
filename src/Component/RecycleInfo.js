import React from 'react';
import 전구이미지 from "../pictures/전구이미지.png"
import 안내 from "../pictures/안내.png"

function RecycleInfo (){ 
    return(
        <>
        <div style={{display:"flex",justifyContent:"center"}}>
            <img src={전구이미지} style={{width:"100px",height:"100px"}}/>
            <div style={{fontSize:"50px",fontFamily:'blackgodic',padding:"20px"}}>분리배출의 핵심 4가지</div>
        </div>
        <div style={{textAlign:"center"}}>
            <img src={안내} style={{width:"100%"}}/>
        </div>
        </>
    )}
export default RecycleInfo;
