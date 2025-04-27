import React from 'react'
import House1 from '../public/images/House1.png' 
import House2 from '../public/images/House2.jpg' 
import House3 from '../public/images/House3.jpg' 
import NavBar from './NavBar.jsx'


import './Wealthspace.css'


const Wealthspace = () => {
  return (
    <div style={{overflowX:'hidden'}} className='BabaWealth'>
      <NavBar className="Tge-bar"/>
      <div>
 <TheWealth className="thewealthsd" />
      </div>
     
       </div>
  )
}

const TheWealth=()=>{
  return(

    <div>
      <div>
        <div className='HeadONe  BabaWealth434'>
          <h1>Find your most suitable <br />Apartment</h1>
          <p>Huge number of Houses here to Buy,Sell and Rent,There are <br /> Also properties ou can Co-live in.So there are a lot  of opportunity to grab</p>
          <button>Contact Us</button>
        </div>

        <div className='HeadTWo'>
          <div><h3>+300</h3>
          <p>Available Houses</p></div>

          <div><h3>+500</h3>
          <p>Satisfied Customers</p></div>
          
          <div><h3>+200</h3>
          <p>Referrals</p></div>

          <div><h3>+1k</h3>
          <p>Houses Sold</p></div>
        </div>

        <div className='HeadThree'>
            <div className='HeadThree-sub1'>
              <p>Best Choices</p>
              <h3>Popular Properties</h3>
            </div>

            <div className='HeadThree-sub2'>
              <div className='HeadThree-sub2-sub1'>
                <img src={House1} alt="" />
                <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div>
                    
                      <h4>5Bed</h4>
                    </div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>
              <div className='HeadThree-sub2-sub1'>
                <img src={House2} alt="" />
              <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>5Bed</h4>
                    </div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>

              <div className='HeadThree-sub2-sub1'>
                <img src={House3} alt="" />
              <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>5Bed</h4>
                    </div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>


            </div>
        </div>


        <div className='HeadFour'>
          <div className='HeadFour-sub1'>
            <img src={House1} alt="" />
            <img src={House1} alt="" className='thehouse2' />
          </div>
          <div className='GHoli'>
            <h2>Who Are We?</h2>
            <p>At Wealth Space Limited, we pride ourselves on <br />our commitment to exceptional service and <br />deep market  knowledge</p>
            <div className='Holi'>
              <li>Expertise and Experience</li>
              <li>integrity and Transparency  </li>
              <li>Client-Centric Approach</li>
              <li>Innovative Marketing Strategies </li>
            </div>
          </div>
        </div>

        <div>
          <div className='PropSell'>
            <h2>Properties</h2>
            <div style={{display:'flex',gap:'40px'}}>
              <p>All Properties</p>
              <p>Buy </p>
              <p>Rent</p>
            </div>
          </div>
        <div className='HeadThree-sub2 htyhtih'>
        <div className='HeadThree-sub2-sub1'>
                <img src={House1} alt="" />
                <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>5Bed</h4>
                    </div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>
              <div className='HeadThree-sub2-sub1'>
                <img src={House1} alt="" />
                <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>5Bed</h4>
                    </div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>
              <div className='HeadThree-sub2-sub1'>
                <img src={House2} alt="" />
              <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>5Bed</h4>
                    </div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>

              <div className='HeadThree-sub2-sub1'>
                <img src={House3} alt="" />
              <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>5Bed</h4>
                    </div>
                    <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div>
                      {/* <i class="fas fa-accessible-icon    "></i> */}
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>


            </div>
        </div>
        <div className='headtb'>
            <h1>Market Overview in Nigeria</h1>
            <div className='firstoffirsttb'>

            <div className='minifirsttb'>
              <div className='TopGaimer'>
                <h3>Top Gainers</h3> 
              <div>04/2025</div>
              
              </div>
            </div>
            <div className="minitb" >
              <div><h2>SYDNEY ESTATE</h2></div>
              <div><p>4966.67 %</p></div>
              <div><h2>390,000,000</h2></div>
            </div>
            <div className="minitb" >
              <div><h2>ALOMOLARAM ESTATE</h2></div>
              <div><p>89900.00 %</p></div>
              <div><h2>270,000,000</h2></div>
            </div>
            <div className="minitb" >
              <div><h2>ROYAL ESTATE</h2></div>
              <div><p>13.33 %</p></div>
              <div><h2>17,000,000</h2></div>
            </div>
            <div className="minitb" >
              <div><h2>IGWRUTA ESTATE.</h2></div>
              <div><p>952.63%</p></div>
              <div><h2>100,000,000</h2></div>
              
            </div>
            </div>
            
            <div className='headtb firstoffirsttb2' >
            <div className='minifirsttb'>
              <div className='TopGaimer'> 
                <h3>Top Gainers</h3>
                <div>04/2025</div>
                </div>
              
            </div>
            <div className="minitb" >
              <div><h2>YABATECH GRA</h2></div>
              <div><p>-98.93%</p></div>
              <div><h2>1,500,000/Year</h2></div>
            </div>
            <div className="minitb" >
              <div><h2>PHASE 1 ESTATE</h2></div>
              <div><p>-98.42 %</p></div>
              <div><h2>15,000,000/Year</h2></div>
            </div>
            <div className="minitb" >
              <div><h2>BALAFUN ESTATE</h2></div>
              <div><p>-90.00 %</p></div>
              <div><h2>1,000,000</h2></div>
            </div>
            <div className="minitb" >
              <div><h2>DOC GARDENS ESTATE ESTATE.</h2></div>
              <div><p>-72.00 %</p></div>
              <div><h2>5,000,000</h2></div>
              
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Wealthspace