import React from 'react'

function Hero() {
  return (<section className="hero">
    <div className="container hero-container">
        <div className="hero-text">
              <h2>Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h2>
              <p>Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>
        <a href="#">Qabulga yozilish</a>
        </div>
        <div className="hero-img">
        <img src="./hero-img.png" width={423} height={504} alt="" />
        </div>
    </div>
  </section>
  )
}

export default Hero