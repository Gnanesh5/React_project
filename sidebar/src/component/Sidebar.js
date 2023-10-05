import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';


export const Sidebar = () => {
  return (
    <div className='sidebar' style={{color: 'white'}}>
        <ul className='sidebarList'>
        {SidebarData.map((val, key) => {
        return (
            <li key={key} className='sidebarRow'id={window.location.pathname === val.llnk ? 'active' : ''} onClick={() => {window.location.pathname = val.link}}>
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
            </li>
        )
    })}
        </ul>
    </div>
  )
}
