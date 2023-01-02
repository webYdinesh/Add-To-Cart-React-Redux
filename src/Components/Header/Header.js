import React from 'react'
import './Header.css'
import {BsCart4} from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const navigate = useNavigate()
    const CartHandler=()=>{
        navigate('/cart')
    }
    const itemQuantity = useSelector(state=>state.ProductsReducer.cartProduct)
  return (
    <header className='flex'>
        <div className="logo">
            <a href="/"> <img src="https://i.postimg.cc/sgMMS5hY/SHOp-removebg-preview-1.png" alt="companylogo" /></a>
        </div>
        <nav className='flex'>
            <ul className='flex'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="cart-icon">
            <button onClick={CartHandler}>
                <BsCart4 fontSize={30}/>
                <span>{itemQuantity.length}</span>
            </button>
            </div>
        </nav>
    </header>
  )
}

export default Header