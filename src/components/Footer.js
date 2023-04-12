import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"

const repeatIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M451 934q-123-10-207-101t-84-216q0-77 35.5-145T295 361l43 43q-56 33-87 90.5T220 617q0 100 66 173t165 84v60Zm60 0v-60q100-12 165-84.5T741 617q0-109-75.5-184.5T481 357h-20l60 60-43 43-133-133 133-133 43 43-60 60h20q134 0 227 93.5T801 617q0 125-83.5 216T511 934Z"/></svg>
const shieldIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 975q-140-35-230-162.5T160 533V295l320-120 320 120v238q0 152-90 279.5T480 975Zm0-62q115-38 187.5-143.5T740 533V337l-260-98-260 98v196q0 131 72.5 236.5T480 913Zm0-337Z"/></svg>
const mapIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m612 936-263-93-179 71q-17 9-33.5-1T120 883V325q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840 268v565q0 11-7.5 19T814 864l-202 72Zm-34-75V356l-196-66v505l196 66Zm60 0 142-47V302l-142 54v505Zm-458-12 142-54V290l-142 47v512Zm458-493v505-505Zm-316-66v505-505Z"/></svg>


const youtubeIcon=<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"/></svg>
const twitterIcon=<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
const instagramIcon=<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>
const facebookIcon=<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z"/></svg>
const Footer = ({footer}) => {
  return (
    <>
    <div className="PreFooter">
        <div>
            {repeatIcon}
             <p> <b>Hassle-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
           </div>
        <div>{shieldIcon} <p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p></div>
        <div>{mapIcon} <p> <b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities</p></div>
    </div>

    <div className="PreFooter2">
         <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

         <div>
             <div>
                 <input type="email" name="email" placeholder="Enter Email Address" />
                 <button>›</button>
             </div>
             <span>Thanks. You're on our email list for special offers.</span>
         </div>

         <div>
                <p>FOLLOW MI</p>
                <span>We want to hear from you!</span>
         </div>

         <div>
            {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon} 
         </div>
    </div>

    <div className="footer">
              <div> 
                 <p> SUPPORT</p>
                  {footer.support.map((item,index)=>(
                     <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
             <p> SHOP AND LEARN</p>
              {footer.shopAndLearn.map((item,index)=>(
                     <a key={item.url} href={item.url}>{item.name} </a>

                  ))}

              </div>
              <div>
               <p> RETAIL STORE</p>
                {footer.retailStore.map((item,index)=>(
                     <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
                       <p>  ABOUT</p>
                         {footer.aboutUS.map((item,index)=>(
                     <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
             <p> CONTACT US</p>
              {footer.contactUs.map((item,index)=>(
                     <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
                  <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
              </div>


              
    </div>
    <div className="footerBorder">
   <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
    </div>

   </>
  )
}

export default Footer