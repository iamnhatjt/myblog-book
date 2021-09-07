import React from 'react';
import PropTypes from 'prop-types';
import Trainding from '../Traingding'
import TrendingMonth from '../TrendMonth'
import ShowList from '../ShowList'


Home.propTypes = {
    
};

function Home(props) {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row">
                <div className="col-md-8">
                    <Trainding />
                </div>
                <div className="col-md-4">
                    <TrendingMonth />
                </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                <ShowList />
                </div>
            </div>
        </div>
    );
}

export default Home;