import React, { useState } from 'react';
import PropTypes from 'prop-types';
import data from '../data.json'
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

Trainding.propTypes = {
    
};

function Trainding(props) {
    const [dataa,setDataa] = useState(data[0])
    if(dataa.discription.length > 400){
        dataa.discription = dataa.discription.slice(0,400).concat("...");
    }

    return (
        <div>
        
       
            
            {console.log(dataa.discription.concat("..."))}
            
            <div className="container-fluid train">
                <span className="trending">
                    Trending Week
                </span>
                <div className="row">
                    <div className="col img">
                        <Link to="/mybook">
                            <img src={dataa.img} alt=""  className="image-book" />  
                        </Link>
                        
                    </div>
                    <div className="col-8 infor">
                        <div className="title">{dataa.title}</div>
                        <div className="category">Thể loại: {dataa.category}</div>
                        <div className="author">
                            Tác giả: {dataa.author}
                        </div>


                        <div className="description">
                            {dataa.discription}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trainding;