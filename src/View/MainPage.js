import React from 'react';

import MainHeader from '../Component/MainHeader';
import MainMenu from '../Component/MainMenu';
import MainCategories from '../Component/MainCategroies';
import "../CSS/We'Re Cycle.css";

import 'react-bootstrap';


function MainPage() {

    const categories=[
        {title:'0'},
        {title:'1'},
        {title:'2'},
        {title:'3'},
        {title:'4'},
      ];
    
      const readCategory = categories.map(category => {
        return(
          <MainCategories category={category} />
          );
      });

    return (
    <div className="background text-center">
      <MainHeader />
      <MainMenu />
      <div className="container  main-border">
        <div className="row ">
          {readCategory}
        </div>
      </div>
    </div>

    )
}
export default MainPage;