import React from 'react';
import PropTypes from 'prop-types';
import data from '../data.json'
import './style.scss'
import { Link } from 'react-router-dom';
ShowList.propTypes = {
    
    
};

function ShowList(props) {
    function to_slug(str)
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}

    return (
        <>
            {data.map(book =>{
                let display = book.discription

                if(book.discription.length > 200){
                    display = book.discription.slice(0,100).concat("...")
                }
                
                return (
                    <div className="col-4 text-center p-5">
                        <Link to={"/" + to_slug(book.title)} className="a-one">
                            <img src={book.img} alt="" className="img-one" />
                            <div className="title-one"> {book.title} </div>
                            <div className="discription-one"> {display} </div>
                        </Link>

                    </div>
                )
            })}
        </>
    );
}

export default ShowList;