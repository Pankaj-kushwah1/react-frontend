import React from 'react'
import './Flex.css'
function Flex() {
  return (
    <>
     <div className="flex-container">
      <header className="header">
        <nav className='flex-nav'>
          <ul className='nav-list'>
            <li className="nav-items">navbar</li>
            <li className="nav-items">navbar</li>
            <li className="nav-items">navbar</li>
            <li className="nav-items">navbar</li>
            <li className="nav-items">navbar</li>
            <li className="nav-items">navbar</li>
          </ul>
          <ul className='nav-list'>
            <li className="nav-items">
              <a href="#">Login</a>
            </li>
            <li className="nav-items">  </li>
          </ul>
        </nav>
        
      </header>

      {/* <main>
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
        <div className="flex-item">4</div>
        <div className="flex-item">5</div>
        
      </main>

      <footer>
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
        <div className="flex-item">4</div>
        <div className="flex-item">5</div>
        
      </footer> */}
     </div>
    </>
  )
}

export default Flex
