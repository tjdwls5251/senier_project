import React, {useState} from 'react';
import CategoryHeader from '../Component/CategoryHeader'
import Fixinfo from './FixInfoComponent';
import SearchMyWrited from './SearchMyWritedComponent';

function Mypage(){
    const [select,setselect]=useState('');
    const [color1,setcolor1]=useState('black');
    const [color2,setcolor2]=useState('black');
    const FixPassword = () => {
        setselect(Fixinfo);
        setcolor1('rgb(47, 136, 252)');
        setcolor2('black')
      
    }
    const CheckMyWrite = () => {
        setselect(SearchMyWrited);
        setcolor1('black');
        setcolor2('rgb(47, 136, 252)')
    }
   
    return(
        <div>
            <CategoryHeader />
            <div className="container main-border text-center">
                <div style={{fontSize:'60px'}}>마이페이지</div>
                <div style={{fontSize:'24px'}}>
                    <button onClick={FixPassword}  style={{color:`${color1}`}}>정보수정</button>
                    <span> | </span>
                    <button onClick={CheckMyWrite}  style={{color:`${color2}`}}>작성글</button>
                </div>
                <br/>
                {select}
               <br/>
            </div>
        </div>
    )
}
export default Mypage;