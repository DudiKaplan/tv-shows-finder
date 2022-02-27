import React from 'react'
import Search from './Search'
import reactLogo from '../assets/reactLogo.svg'

function Header({title , getSearchTerm }) {


  return (
    <header className='header'>
      <div className='title'>{title}</div>
      <div className='sub-header'>
        <Search  getSearchTerm={getSearchTerm} />
        <img className='icon' src={reactLogo} alt='logo..' width={60} height={60} />
      </div>
   
    </header>
  )
}


Header.defaultProps = {
    title: 'TV Shows Finder'
}

export default Header
