import React from 'react';
import PropTypes from 'prop-types';
import data from '../data.json'
import TrendingMonth from '../TrendMonth';

DetailBook.propTypes = {
    
};

function DetailBook(props) {
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
        <div>
           {data.map(book =>{
               if(window.location.href.search(to_slug(book.title)) >0){
                   return (
                       <div className="container-fluid ">
                           <div className="row">
                                <div className="col-5">
                                    <div className="fs-2 text-white">
                                        {book.title}
                                    </div>
                                    <div className="fs-4">
                                        Tác giả: {book.author}
                                    </div>
                                    <div className="fs-4">
                                        Thể loại: {book.category}
                                    </div>
                                </div>
                                <div className="col-3">
                                    <img src={book.img} alt="" />
                                </div>
                                <div className="col">
                                    <TrendingMonth />
                                </div>
                           </div>
                        <div className="fs-3">Giới Thiệu Sơ qua:</div>
                        <div className="fs-5 m-4">
                            {book.discription}
                        </div>
                        <div className="fs-3">Về Chúng tôi:</div>
                        <div className="fs-5">
                            Nơi giao lưu văn hóa đọc sách, nơi giúp bạn đọc và đánh giá sách một cách đơn gian nhất, chúng tôi rất cảm ơn
                        </div>
                       </div>
                   )
               }
           })}
        </div>
    );
}

export default DetailBook;