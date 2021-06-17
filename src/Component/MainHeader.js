import React from 'react';
import Logo from "../pictures/We'Re Cycle.png";
import 'react-bootstrap';
import {Link} from 'react-router-dom';

function MainHeader() {
    return(
    <div className="Logo">
        <Link to="/">
                <img src={Logo} style={{ maxWidth: "100%", height: "auto"}} />
        </Link>
    </div>

  )
}

export default MainHeader;



