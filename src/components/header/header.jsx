/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { HeaderStyle } from "./headerStyle"
import { Link } from 'react-router-dom';



export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menu = ()=>{
            if(menuOpen){
                return(
                    <div className="menuToogle">
                    <nav className="nav">
                            <Link to="/about">Home</Link>
                            <Link to="/about">Program</Link>
                            <Link to="/about">Service</Link>
                            <Link to="/about">About</Link>
                            <Link to="/about">Community</Link>
                            <svg onClick={()=>{setMenuOpen(false)}} width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7L7 17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </nav>
                    </div>
                )
            }
    }

    return(
        <HeaderStyle>
            <div className="container">
                <div className="logo">
                    <img src="/logo.png" alt="" />
                </div>
                <nav className="nav">
                        <Link to="/about">Home</Link>
                        <Link to="/about">Program</Link>
                        <Link to="/about">Service</Link>
                        <Link to="/about">About</Link>
                        <Link to="/about">Community</Link>
                </nav>
                <div className="button">
                    <h3>Join Now</h3>
                </div>
                <svg onClick={()=>{setMenuOpen(true)}} className="menuToogleIcon" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            {menu()}
            
        </HeaderStyle>
    )
}