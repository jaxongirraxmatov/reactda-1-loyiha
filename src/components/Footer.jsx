import React from 'react'

function Footer() {
  return (
    <section className=' footer-container '>
      <footer className="footer container">
        <div>
          <a href="#" className='footer-logo'> 
            <img src="./logo-icon.svg" alt="Logo" />
            AnsorMed
          </a>
        </div>
        <nav className='footer-nav'>
          <a className='footer-link' href="">Xizmatlar</a>
          <a className='footer-link' href="">Dorilar</a>
          <a className='footer-link' href="">Asal</a>
          <a className='footer-link' href="">Kontaktlar</a>
          <a className='footer-link' href="">Blog</a>
        </nav>
      </footer>
    </section>
  )
}

export default Footer