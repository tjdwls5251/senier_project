import React from 'react';
import camera from "../pictures/camera.png";
import upload from "../pictures/upload.png";

import {Link} from 'react-router-dom';

function MainMenu(){
    return(
        <div className="container main-border">
            <div className="menu">
                <Link to="camera">
                <div>
                  <img src={camera} style={{maxWidth:"100%", height:"auto"}}/>
                </div>
                </Link>
                
                <Link to="upload">
                <div>
                <img src={upload} style={{maxWidth:"100%", height:"auto"}}/>
                </div>
                </Link>         
            </div>
        
        </div>
            
    )
}

export default MainMenu;
