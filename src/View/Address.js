import React from 'react';
import {useState, useEffect} from 'react';
import CategoryHeader from '../Component/CategoryHeader'
import CategoryTitle from "../Component/CategoryTitle"
import  "../CSS/Address.css"
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useForm } from "react-hook-form";

function Address(){

    const [reqPage, setReqPage] = useState(false);

    const [data, setData] = useState([]);

    const [totalnum, setTotalnum] = useState(0);

    const [currentPage, setCurrentPage] = useState(0);
    const [searchedCurrentPage, setSearchedCurrentPage] = useState(0);

    var selectedValueTag = "";
    var typedValueTag = "";

    const [selectedValue, setSelectedValue] = useState("");
    const [typedValue, setTypedValue] = useState("");

    const { selected, handleSubmit } = useForm();

    const address = ["종로구", "중구", "용산구", "성동구","광진구","동대문구", "중랑구",
    "성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구",
    "구로구","금천구","영등포구","동작구","관악구","서초구","강남구","송파구"]  

    const onSubmit = async () => {
        selectedValueTag = await document.getElementById("address").value;
        typedValueTag = await document.getElementById("searchBar").value;
        
        if( (selectedValueTag != "전체" || typedValueTag != "") || (selectedValueTag != "전체" && typedValueTag == null)){           
             await setReqPage(true);
            
            await axios.get(`/weRecycle/facilities/search?search=${selectedValueTag}&word=${typedValueTag}`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
                setTotalnum(response.headers.totaldnum)
            })
            
        }else if( selectedValueTag == "전체" || typedValueTag == ""){
            await setReqPage(false);

            await axios.get(`/weRecycle/facilities`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
                setTotalnum(response.headers.totaldnum)
            })
        }
        
    };

    useEffect(async () => {
        console.log("searchedCurrentPage useEffeect is called")
        await axios.get(`/weRecycle/facilities/search?search=${selectedValue}&word=${typedValue}&page=${searchedCurrentPage}`)
            .then(response => {
                console.log(searchedCurrentPage)
                setData(response.data)
                setTotalnum(response.headers.totaldnum)
            })
    },[searchedCurrentPage])

    useEffect(async () => {
        console.log("useEffeect is called")
        await axios.get(`/weRecycle/facilities?page=${currentPage}`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
                setTotalnum(response.headers.totaldnum)
            })
    },[currentPage])

    const changePage = async (e) => {
        const selectedPage = e.selected;
        reqPage ? await setSearchedCurrentPage(selectedPage) : await setCurrentPage(selectedPage);
    };

    const readdatebase_address = data.map(data => {
        return(
            <tr>
                <td><i className="address_icon fa fa-map-marker-alt fa-md"></i><Link to ={`/address/${data.name}`} style={{color:'black'}}>{data.name}</Link></td>
                <td><i className="address_icon fa fa-phone-volume fa-md"></i>{data.tel}</td>
            </tr>
        );
    });

   return (
       
    <div>
      <CategoryHeader title='4'/> 
        <div className="container main-border">
            
            <CategoryTitle title='4' />

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="Search" style={{fontSize:'20px'}}>
                    <select name="address" ref={selected} id="address" >
                        <option value="전체" selected>전체</option>
                        {address.map(location => {
                            return(
                                <option value={location}>{location}</option>
                            )
                        })}
                    </select>
                    <div className="search_input ml-2" style={{ width: "100%" }}>
                        <input id="searchBar" className="form-control" type="text" placeholder="지역을 입력해주세요." aria-label="Search" />
                    </div>
                    <div>
                    <button className="btn btn-outline-info" type="submit">
                        <span className="fa fa-search fa-md ">Search</span>
                    </button>
                    </div>
                    </div>
                </form>

            <table class="address_table table table-bordered table-striped">
                <thead>
                    <tr>
                        <th class="center_border">지역</th>
                        <th>전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    {readdatebase_address}
                </tbody>
            </table>
            <div className="footer">
                <ReactPaginate 
                    pageCount={Math.ceil(totalnum/10)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    breakLabel={"..."}
                    previousLabel={"이전"}
                    nextLabel={"다음"}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    activeClassName={"page-item"}
                    previousClassName={"pageLabel-btn"}
                    nextClassName={"pageLabel-btn"}
                />
            </div>
        </div>
    </div>
  );
};

export default Address;