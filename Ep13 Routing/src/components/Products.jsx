import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        Products<br/>
        <Link to="list">List</Link><br/>
        <Link to="details">Details</Link>
        <Outlet />
    </div>
  )
}

export default Products