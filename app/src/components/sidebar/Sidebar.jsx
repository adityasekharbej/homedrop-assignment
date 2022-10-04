import React from 'react'
import "./sidebar.css";

const data = [
    {name:'Overview', class: 'fa-solid fa-house'},
    {name:'Sales', class: 'fa-solid fa-cart-shopping'},
    {name:'Purchase', class: 'fa-solid fa-cube'},
    {name:'Inventory', class: 'fa-brands fa-windows'},
    {name:'Marketing', class: 'fa-solid fa-bullhorn'},
    {name:'Analytics', class: 'fa-solid fa-chart-simple'},
    {name:'Staff', class: 'fa-solid fa-user-group'},
]
export const Sidebar = () => {
  return (
    <div className='sidebar'>
        {data.map((e)=>(
            <div className='row'>
                <i className={e.class}></i>
                <p>{e.name}</p>
            </div>
        ))}
    </div>
  )
}
