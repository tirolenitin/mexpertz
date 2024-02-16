import React from 'react'
import "./Item.css"
const Item = () => {
  return (
    <>
    <div id='item'>
    <div className='item' >
        <h6  className='container text-center py-3 '>Only The Best</h6>
        <h1 className='container text-center '>Fresh Ingredient, Tasty Meals</h1>
        <div className='container text-center py-6'>
            <p>Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.</p>
        </div>
        <div className='container text-center py-6'>
            <button  type='button'  className='btn 'id='btn1'>VIEW ITEMS</button>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default Item
