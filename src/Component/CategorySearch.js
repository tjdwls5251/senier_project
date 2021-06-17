import React from 'react';

function CategorySearch(props) {
    const address = ["종로구", "중구", "용산구", "성동구","광진구","동대문구", "중랑구",
    "성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구",
    "구로구","금천구","영등포구","동작구","관악구","서초구","강남구","송파구"]    

   const Searched= () =>{
       if(props.title==0){
           return(
            <div className="Search">
                <div className="select_date">
                    <input type='date' name='start_date' />
                    <h1>~</h1>
                    <input type='date' name='end_date' />
                </div>
                <div className="search_input" style={{ width: "100%" }}>
                    <input className="form-control" type="text" placeholder="검색어를 입력해주세요." aria-label="Search" />
                </div>
                <div>
                    <button className="btn btn-outline-info" type="submit">
                        <span className="fa fa-search fa-md ">Search</span>
                    </button>
                </div>
            </div>
           )
       }

       else if(props.title==1){
           return(
              <>
              <div className="Search" style={{fontSize:'20px'}}>
                <select name="address" id="address" >
                    <option value="전체" selected>전체</option>
                    {address.map(address => {
                        return(
                            <option value={address} >{address}</option>
                        )
                    })}
                </select>
                <div className="search_input ml-2" style={{ width: "100%" }}>
                    <input className="form-control" type="text" placeholder="지역을 입력해주세요." aria-label="Search" />
                </div>
                <div>
                    <button className="btn btn-outline-info" type="submit">
                        <span className="fa fa-search fa-md ">Search</span>
                    </button>
                </div>
            </div>
                
              </>
            )
       }
       else{
           return(
               <div> error</div>
           )
       }
    }
    return (
        <>
        <Searched/>
        </>
    )
}

export default CategorySearch;