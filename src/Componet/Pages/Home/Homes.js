import React,{ useEffect } from 'react'
import"./home.css"
import Caroussel1 from './Carousselone/caroussel'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


export default function Homes () {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div>
 
    <Caroussel1/>

    </div>

    <div class='serviceshoph2'>
       <h2>  KBM Services Shop </h2>
    </div>

    <div class="cardshop">
    <a href='' class="card">
  <img src="./card/dev.gif" class="card-img-top" alt="dev"/>
  <p>Software developement<br/>for Web and Mobile</p>
  </a>

  <a href='' class="card">
  <img src="./card/editiing.gif" class="card-img-top" alt="editing"/>
  <p>Editing Video</p>
  </a>
  </div>

  <div class="abouthome">
  <img src="./seedev.jpg" class="serdev" alt='serdev' />
  <div class="bra">
    <h4 data-aos="fade-left">Professional services</h4>
    <p data-aos="fade-left">KBM Services will always act with integrity, and only use the very best<br/> proven methods for your IT needs.</p>
    <button data-aos="fade-left" type="button" class="btn btn-secondary">Our Values</button>
  </div>
  </div>

  <div class="contacthome">
    <div>
  <img src='./lets.jpg' class="lets" alt='lets'/>
  </div>
  <div class='pcontact'>
    <h4>Connect with us</h4>
    <p>If you have a question about our services, or how we <br/> could transform your company’s IT infrastructure, do not<br/> hesitate to get in touch with us. </p>
  </div>
    
  </div>

    </>
  )
}
