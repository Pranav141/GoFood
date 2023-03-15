import React from 'react'
import '../../src/index.css'
export default function Carousel() {
  return (
    <div className='h-50'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade"  data-bs-ride="carousel" style={{objectFit:'contain !important'}}>
        <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
              <form className="d-flex ">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/1000x1000/?fruit" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/1000x1000/?football" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/1000x1000/?burger" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
