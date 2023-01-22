import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <h3>CME Group Logo</h3>
                <Link to={"/"}>Home</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to={"/profile/2"}>Profile</Link>
            </div>
        </>
    )
}
