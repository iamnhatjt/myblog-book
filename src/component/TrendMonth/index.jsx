import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

TrendingMonth.propTypes = {

};

function TrendingMonth(props) {
    return (
        <div>
            <div className="Trending">
                Top Month
            </div>
            <div className="list-item">
                <a href="" className="link-item">
                    <div className="item d-flex flex-row  justify-content-between">
                        <div className="number">I</div>
                        <div className="title">Muôn Kiếp Nhân Sinh</div>
                        <div className="icon"><i class="fas fa-fire"></i></div>
                    </div>
                </a>
                <a href="" className="link-item">
                    <div className="item d-flex flex-row  justify-content-between">
                        <div className="number">II</div>
                        <div className="title">Dấu chân trên cát</div>
                        <div className="icon"><i class="fas fa-fire"></i></div>
                    </div>
                </a>
                <a href="" className="link-item">
                    <div className="item d-flex flex-row  justify-content-between">
                        <div className="number">III</div>
                        <div className="title">Đường về xứ phật</div>
                        <div className="icon"><i class="fas fa-fire"></i></div>
                    </div>
                </a>
                <a href="" className="link-item">
                    <div className="item d-flex flex-row  justify-content-between">
                        <div className="number">IV</div>
                        <div className="title">Hoa sen Trên Tuyết</div>
                        <div className="icon"><i class="fas fa-fire"></i></div>
                    </div>
                </a>
                <a href="" className="link-item">
                    <div className="item d-flex flex-row  justify-content-between">
                        <div className="number">V</div>
                        <div className="title">Yêu em hơn cả harvard</div>
                        <div className="icon"><i class="fas fa-fire"></i></div>
                    </div>
                </a>
                <a href="" className="link-item">
                    <div className="item d-flex flex-row  justify-content-between">
                        <div className="number">VI</div>
                        <div className="title">Bên dãy tuyết Sơn</div>
                        <div className="icon"><i class="fas fa-fire"></i></div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default TrendingMonth;