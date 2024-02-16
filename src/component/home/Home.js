import React from 'react'
import "./Home.css";
const Home = () => {
  return (
    <>
    <div id='home'>
        <div className='self-img'>
        <img src='./assets/img/homebg.png'/>
        <div className='text'>
        <h1 className='container text-center py-5'>Only Quality Food</h1>
        <div className='container text-center py-6'>
            <p>Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.</p>
        </div>
        <div className='container text-center py-6'>
            <button  type='button'  className='btn '>VIEW MENU</button>
            <button  type='button' className=' btn btn1'>RESERVATION</button>
        </div>
        </div>
        </div>
      </div>

    </>
  )
}

export default Home
