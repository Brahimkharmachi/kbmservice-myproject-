import React, { useEffect, useState } from 'react'
import "../Header/headers.css"



export default function Headerss() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
   
  return (
    <div class="flexcenter">
     <header className={isSticky ? 'sticky' : ''}>
        <nav>
            
             
              <img src='./logohe.gif' alt='logohe' />

             <div class='linknav' >
               <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/services'>Services</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
               </ul>
               </div>
             
            
            <div className='socialemedialogo'>
            <ul class="navbar-nav d-flex flex-row" >
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-facebook-f text-blue"></i>
                    </a>
                </li>
                
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-instagram text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-linkedin text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-whatsapp text-blue"></i>
                    </a>
                </li>
                </ul>
            
            </div>
        </nav>
     </header>
    </div>
  )
}
