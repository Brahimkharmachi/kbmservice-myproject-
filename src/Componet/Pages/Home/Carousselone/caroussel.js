import React from 'react'
import "./caroussel.css"

export default function Caroussel1() {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./caroussel/c1.jpg" class="d-block w-100" alt="Wild Landscape" style={{height:"630px"}}/>
      <button type="button" class="btn btn-secondary">Book a Consultation</button>
    </div>
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera"/>
    </div>
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits"/>
    </div>
  </div>
</div>
    </div>
  )
}
