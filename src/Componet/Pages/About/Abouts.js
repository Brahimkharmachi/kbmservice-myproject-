import React from 'react'
import "./about.css"
import Carousselabouts from './Carousselabout/Carousselabouts'

export default function Aboutss() {
  return (
    <div>
        <div>
        <Carousselabouts/>
        </div>

        <div className='chose'>
            <h2>Why Choose us?</h2>
            <p>
            With an established global track record, KBM have a deep expertise in risk mitigation. We use only the very best cutting-edge technology to create <br/> your bespoke software or IT management solution.
            </p>
        </div>

        <div className='abouttwo'>
            <div className='shield'>
                <img src='./shield.jpg' alt='shield' />
                <h4>Trust</h4>
                <p>You can trust KBM to provide unparalleled expertise, and advise you on what would be best for you.</p>
            </div>
            <div className='collaboration'>
                <img src='./collaboration.jpg' alt='collaboration' />
                <h4>Integrity</h4>
                <p>KBM will always act with integrity, and only use the very best, proven methods for your IT needs.</p>
            </div>
            <div className='excellence'>
                <img src='./excellence.jpg' alt='excellence' />
                <h4>Excellence</h4>
                <p>Our track record demonstrates excellence – from our partnerships through to our expertise.</p>
            </div>
            <div>

            <div className='aboutme'>
              <img src='ffv.jpg' alt='ffv' />
            </div>

            
            
            <div class="aboutcontacthome">
            <div>
            <img src='./lets.jpg' class="lets" alt='lets'/>
            </div>
            <div class='aboutpcontact'>
            <h4>Connect with us</h4>
            <p>If you have a question about our services, or how we <br/> could transform your company’s IT infrastructure, do not<br/> hesitate to get in touch with us. </p>
           </div>
    
    
            </div>

            </div>
        </div>
    </div>
  )
}
