import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = 'home'>
            <div className = 'home__container'>
                <img className = 'home__image' src = 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M31/V176783821_Samsung_M31_Teaser_LP_header_bannerPC_1500.jpg' alt='no internet'/>

                <div className = 'home__row'>
                    <Product id = "11" title = {"The lean startup"} image = {"https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"} price = {199} rating = {5} />
                    <Product id = "12" title = {"The lean startup"} image = {"https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"} price = {99} rating = {4} />
                </div>
                <div className = 'home__row'>
                    <Product id = "13" title = {"The lean startup"} image = {"https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"} price = {99} rating = {4} />
                    <Product id = "14" title = {"The lean startup"} image = {"https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"} price = {99} rating = {4} />
                    <Product id = "15" title = {"The lean startup"} image = {"https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"} price = {99} rating = {4} />    
                 </div>
                <div className = 'home__row'>
                    <Product id = "16" title = {"The lean startup"} image = {"https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"} price = {99} rating = {4} />
                </div>

            </div>
        </div>
    )
}

export default Home
