import React,{ useEffect } from 'react'
import "./serviice.css"
import Carousselserviices from './Carousselservice/Carouselservices'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Servicess() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div>
        <div>
            <Carousselserviices />
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

        <div class="softdev">
        <img src="./softdev.jpg" class="serdev" alt='softdev' />
        <div class="bra">
        <h4 data-aos="fade-left">Software developement</h4>
        <p data-aos="fade-left">We design, develop, and deliver web and mobile applications bespoke<br/> software solutions for SMEs, enterprise and funded startups.<br/><br/>We will be with you every step of the way – from initial planning to delivery<br/>and beyond.</p>
        <button data-aos="fade-left" type="button" class="btn btn-secondary">Book a Consultation</button>
        </div>
        </div>

        <div class='softvideo'>
          <img src='./softvideo.jpg' class="softvideo" alt='softvideo' />
          <div class='bravideo'>
          <h4 data-aos="fade-right">Editing Video</h4>
          <p data-aos="fade-right">Professional video editing for horizontal videos on platforms<br/> like YouTube and Facebook...<br/><br/>professionally edited videos in record time so that you can do literally <br/> anything else!</p>
          <button data-aos="fade-right" type="button" class="btn btn-secondary">Book a Consultation</button>
          </div>
        </div>

        <div class="contactservice">
        <div>
        <img src='./letsservice.jpg' class="lets" alt='lets'/>
        </div>
        <div class='pcontact'>
        <h4>Connect with us</h4>
        <p>If you have a question about our services, or how we <br/> could transform your company’s IT infrastructure, do not<br/> hesitate to get in touch with us. </p>
        </div>
    
        </div>


    </div>
  )
}
