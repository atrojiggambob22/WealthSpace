import React from 'react'
import House1 from '../public/images/House1.png' 
import House2 from '../public/images/House2.jpg' 
import House3 from '../public/images/House3.jpg' 
import NavBar from './NavBar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed,faToilet,faSquare,faBuilding,faWarehouse,faHome,faStore,faHouseChimney, faStar, faStarHalf, faLocation, faLocationPin, faLocationPinLock, faMapLocationDot, faLocationArrow} from '@fortawesome/free-solid-svg-icons'; 
import './Wealthspace.css'
import { Warehouse } from 'lucide-react'
import ContactForm from './ContactForm.jsx'



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
          <h1>Find your most <br />suitable Apartment</h1>
          <p>Huge number of Houses here to Buy,Sell and Rent,There are <br /> Also properties ou can Co-live in.So there are a lot  of opportunity to grab</p>
          <button>Contact Us</button>
        </div>

        {/* <div className='HeadTWo'>
          <div><h3>+300</h3>
          <p>Available Houses</p></div>

          <div><h3>+500</h3>
          <p>Satisfied Customers</p></div>
          
          <div><h3>+200</h3>
          <p>Referrals</p></div>

          <div><h3>+1k</h3>
          <p>Houses Sold</p></div>
        </div> */}

          <div className='AprtTypes'>
            <div className='Aprtsub-2'>
              <h3>Property by requirement</h3>
              <p>Explore Apartment <span style={{color:'green'}}>Types</span></p>
            </div>
            <div className='Aprtsub2'>
              <div className='Aprtsub2-111'>
                <div className='Asub22-min2'>
                  <FontAwesomeIcon icon={faBuilding}/>
                </div>
                <div className='Asub2-min3'>
                  <h3>
                    Commercial 
                  </h3>
                  <p>6 Properties</p>
                </div>
              </div>

               <div className='Aprtsub2-111'>
                <div className='Asub22-min2'>
                  <FontAwesomeIcon icon={faHouseChimney}/>
                </div>
                <div className='Asub2-min3'>
                  <h3>Villa</h3>
                 <p>6 Properties</p>
                </div>
              </div>

              <div className='Aprtsub2-111'>
                <div className='Asub22-min2'>
                  <FontAwesomeIcon icon={faWarehouse}/>
                </div>
                <div className='Asub2-min3'>
                  <h3>Warehouse</h3>
                  <p>6 Properties</p>
                </div>
              </div>
             
              <div className='Aprtsub2-111'>
                <div className='Asub22-min2'>
                  <FontAwesomeIcon icon={faHome}/>
                </div>
                <div className='Asub2-min3'>
                  <h3>Apartment</h3>
                  <p>6 Properties</p>
                </div>
              </div>

              <div className='Aprtsub2-111'>
                <div className='Asub22-min2'>
                  <FontAwesomeIcon icon={faStore}/>
                </div>
                <div className='Asub2-min3'>
                  <h3>HomeStay</h3>
                 <p>6 Properties</p>
                </div>
              </div>


            </div>
          </div>

        <div className='HeadThree'>
            <div className='HeadThree-sub1'>
              <p>Best Choices</p>
              <h3>Popular Properties</h3>
            </div>

              <div className='thheheadsss'>
                   <div className='HeadThree-sub2'>
              <div className='ehadione'>
                <img src={House1} alt="" />
                <div className='firstphase'>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div className='threeheads22'>
                    <div className='iccon'>
                      <FontAwesomeIcon icon={faBed}/>
                    </div>
                      <h4>5Bed</h4>
                    </div>
                    <div className='threeheads22'>
                      <div className='iccon'>
                        <FontAwesomeIcon icon={faToilet}/>
                      </div>
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div className='threeheads22'>
                      <div className='iccon' >
                      <FontAwesomeIcon icon={faSquare}/>
                      </div>
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>

              <div className='ehadione ediitrerf'>
               
              <div>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div className='threeheads22'>
                      <div className='iccon'>
                        <FontAwesomeIcon icon={faBed}/>
                      </div>
                      <h4>5Bed</h4>
                    </div>
                    <div className='threeheads22'>
                      <div className='iccon'>
                        <FontAwesomeIcon icon={faToilet}/>
                      </div>
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div className='threeheads22'>
                      <div className='iccon'>
                      <FontAwesomeIcon icon={faSquare}/>
                      </div>
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div >
                 <img src={House2} alt="" className='firstphaseimg' />
              </div>

              <div className='ehadione'>
                <img src={House3} alt="" />
              <div className='firstphase'>
                  <h3>Lekki Phase 1</h3>
                  <div>
                    <div className='threeheads22'>
                      <div className='iccon'>
                        <FontAwesomeIcon icon={faBed}/>
                      </div>
                      <h4>5Bed</h4>
                    </div>
                    <div className='threeheads22'>
                       <div className='iccon'>
                        <FontAwesomeIcon icon={faToilet}/>
                      </div>
                      <h4>4 Toilets</h4>
                    </div>
                  </div>
                  <div className='threeheads22'>
                      <div className='iccon'>
                      <FontAwesomeIcon icon={faSquare}/>
                      </div>
                      <h4>200ft</h4>
                    </div>
                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>


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

        <div className='HeadThree-sub2-sub1 subsosubsss'>
                <img src={House1} alt="" />
                <div >
            
                  <div style={{display:'flex'}}>

                        <div style={{color:'gold', margin:'20px 4px'}}>
                    <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                          <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStarHalf}/>  
                  </div>
                  <p>5.0</p>
                   </div>     


                  <div>
                    <h3>Famouse Pluto Homes</h3>
                      <div style={{display:'flex',gap:'20px'}}>
                      <FontAwesomeIcon icon={faLocationPin} style={{color:'red'}}/>
                       <h3 style={{position:'relative', top:'-20px'}}>Lekki Phase 1</h3>
                       </div>
                      
                  </div>
                  {/* <div style={{margin:'10px 0', position:'relative', top:'-16px',textAlign:'left',width:'80%', fontSi}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repellendus cum quam voluptas corrupti!
                  </div> */}
                  <div className='mamaapaerte'>
                    <div className='apertmentsredire'>
                      <div className=''>
                        <FontAwesomeIcon icon={faBed}/>
                      </div>
                      <h4>5Bed</h4>
                    </div>

                      {/* costome divider instead of using hr tag */}
                     <div style={{backgroundColor:'gray',height:'20px', width:'2px'}}></div>

                    <div className='apertmentsredire'>
                       <div className=''>
                        <FontAwesomeIcon icon={faToilet}/>
                      </div>
                      <h4>4 Toilets</h4>
                    </div>

                    {/* costome divider instead of using hr tag */}
                     <div style={{backgroundColor:'gray',height:'20px', width:'2px'}}></div>

                      <div className='apertmentsredire'>
                       <div className=''>
                      <FontAwesomeIcon icon={faSquare}/>
                      </div>
                      <h4>200ft</h4>
                    </div>
                  </div>

                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>

              <div className='HeadThree-sub2-sub1 subsosubsss'>
                <img src={House1} alt="" />
                <div>

                  <div style={{display:'flex'}}>
                     <div style={{color:'gold', margin:'20px 4px'}}>
                    <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                          <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStarHalf}/>  
                         </div>
                         <p>
                          4.0
                         </p>
                  </div>

                  <div>

                  </div>
                  <div>
                    <h3>Famouse Pluto Homes</h3>

                      <div style={{display:'flex',gap:'20px'}}>
                      <FontAwesomeIcon icon={faLocationPin} style={{color:'red'}}/>
                       <h3 style={{position:'relative', top:'-20px'}}>Lekki Phase 1</h3>
                       </div>

                  </div>
                  <div className='mamaapaerte'>
                    <div className='apertmentsredire'>
                      <div className=''>
                        <FontAwesomeIcon icon={faBed}/>
                      </div>
                      <h4>5Bed</h4>
                    </div>

                      {/* costome divider instead of using hr tag */}
                     <div style={{backgroundColor:'gray',height:'20px', width:'2px'}}></div>

                    <div className='apertmentsredire'>
                       <div className=''>
                        <FontAwesomeIcon icon={faToilet}/>
                      </div>
                      <h4>4 Toilets</h4>
                    </div>

                    {/* costome divider instead of using hr tag */}
                     <div style={{backgroundColor:'gray',height:'20px', width:'2px'}}></div>

                      <div className='apertmentsredire'>
                       <div className=''>
                      <FontAwesomeIcon icon={faSquare}/>
                      </div>
                      <h4>200ft</h4>
                    </div>
                  </div>

                  <div>
                    <h3>Price: ₦3,000,000</h3>
                  </div>
                </div>
              </div>

              <div className='HeadThree-sub2-sub1 subsosubsss'>
                <img src={House2} alt="" />
              <div>
                <div style={{display:'flex'}}>
                    
                    <div style={{color:'gold',margin:'20px 4px'}}>
                    <FontAwesomeIcon icon={faStar}/>
                      <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                          <FontAwesomeIcon icon={faStar}/>  <FontAwesomeIcon icon={faStarHalf}/>  
                  </div>
                  <p>4.0</p>
                </div>
                  <div>
                    <h3>Famouse Pluto Homes</h3>
                        <div style={{display:'flex',gap:'20px'}}>
                      <FontAwesomeIcon icon={faLocationPin} style={{color:'red'}}/>
                       <h3 style={{position:'relative', top:'-20px'}}>Lekki Phase 1</h3>
                       </div>
                  </div>
                 
                  <div className='mamaapaerte'>
                    <div className='apertmentsredire'>
                      <div className=''>
                        <FontAwesomeIcon icon={faBed}/>
                      </div>
                      <h4>5Bed</h4>
                    </div>

                      {/* costome divider instead of using hr tag */}
                     <div style={{backgroundColor:'gray',height:'20px', width:'2px'}}></div>

                    <div className='apertmentsredire'>
                       <div className=''>
                        <FontAwesomeIcon icon={faToilet}/>
                      </div>
                      <h4>4 Toilets</h4>
                    </div>

                    {/* costome divider instead of using hr tag */}
                     <div style={{backgroundColor:'gray',height:'20px', width:'2px'}}></div>

                      <div className='apertmentsredire'>
                       <div className=''>
                      <FontAwesomeIcon icon={faSquare}/>
                      </div>
                      <h4>200ft</h4>
                    </div>
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

          <div>
            <div>
              <h3>Book Apointment</h3>
              <p>Send Message Anytime</p>
            </div>

            
<div>
  <ContactForm/>
</div>
            
          </div>
      </div>
    </div>
  )
}
export default Wealthspace