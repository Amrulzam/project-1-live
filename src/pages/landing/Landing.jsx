import React from 'react';
import './Landing.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useSelector, useDispatch } from 'react-redux';
import { setAbout,setContact,setHome } from '../../features/check';

import pic from 'F:/Programming/Fiverr/project-1/frontend/src/assets/Screenshot 2024-10-09 204155.png';
import pic2 from 'F:/Programming/Fiverr/project-1/frontend/src/assets/Screenshot 2024-10-09 205517.png';
import pic3 from 'F:/Programming/Fiverr/project-1/frontend/src/assets/Screenshot 2024-10-09 211749.png';
import pic4 from 'F:/Programming/Fiverr/project-1/frontend/src/assets/Screenshot 2024-10-09 211759.png';

import pic5 from 'F:/Programming/Fiverr/project-1/frontend/src/assets/Screenshot 2024-10-10 172221.png';

const Landing = () => {

    const isHome = useSelector((state)=> state.check.isHome);
    const isAbout = useSelector((state)=> state.check.isAbout);
    const isContact = useSelector((state)=> state.check.isContact);

    const dispatch = useDispatch();

  return (
    <div className='landing-wrapper'>
        <div className="landing-upper">

        </div>

        <div className="landing-blocks">
            <div className='block-top'>
                <header className='upeer-header'>
                    <ul>
                        <li onClick={()=>{dispatch(setHome())}} className={isHome?'underlined':''}>Home</li>
                        <li onClick={()=>dispatch(setAbout())} className={isAbout?'underlined':''}>Rio</li>
                        <li onClick={()=>dispatch(setContact())} className={isContact?'underlined':''}>Contact</li>
                    </ul>
                </header>
                <div className="upper-body">
                    <h3>Be my guest</h3>
                    <h1>Welcome To Rio</h1>
                </div>
            </div>

            <div className="main-block">
                <div className={isHome?'block-home show':'hide'}>
                    <div className="block-type-1">
                        <h3>Home in the heart of the city</h3>
                        <p>Stay in a beautiful highrise in Ipanema just off the beach close to
                            many world-class cafes and restaurants. Enjoy Bossa Nova with a cold beer!</p>
                    </div>

                    <dir className="block-type-2">
                        <div className="box-1">
                            <h2>Our Apartment</h2>
                        </div>
                        <div className="box-2">
                            <img src={pic} alt="" />
                        </div>
                    </dir>

                    <div className="block-type-3 extra">
                        <div className="box-1">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="box-2">
                            <p>The apartment is spacious with high ceilings,
                                large windows, an open balcony and a beautiful view of the beach.
                                Stay cool with central A/C and wind-down comfortably in the queen sized bedroom.</p>
                        </div>
                    </div>

                    <div className="block-type-4">
                        <div className="box-1">
                            <img src={pic3} alt="" />
                        </div>
                        <div className="box-2">
                            <h2>Location</h2>
                        </div>
                    </div>

                    <div className="block-type-6">
                        <p>Conveniently located just opposite Leblon Beach in Ipanema, our apartment will sweep you into
                            the charm and excitements of Rio! Dine at one of our neighborhood’s many world-renowned restaurants,
                            enjoy fresh-squeezed juices from one of the colourful stalls along the beach,
                            and don’t miss live bossy-nova show in one of the local bars</p>
                    </div>

                    <div className="block-type-5">
                        <div className="box-1">
                            <img src={pic4} alt="" />
                        </div>
                        <div className="box-2">
                            <div>
                                <h2>About Camila & Tiago</h2>
                                <p>Hi, my name is Camila and I’m a nutritionist from the south of Brazil.
                                    I moved to the beautiful Ipanema neighborhood two years ago with my husband, Tiago.
                                    We live in a homie highrise just off the Leblon Beach, but in the summer we travel!</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* about section */}
                <div className={isAbout? "block-about":"hide"}>
                    <div className="a-block-type-1">
                        <div className="a-box-1">
                            <h2>The Marvelous City</h2>
                        </div>
                        <div className="a-box-2">
                            <p>Create memories of a lifetime in one of the most beautiful cities in the world - Rio de Janeiro.
                            Relax on gorgeous white sandy beaches,
                            explore a cultural hub of art and entertainment, or check out the many famous landmarks around the city.
                            </p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="a-block-type-1">
                        <div className="a-box-1">
                            <h2>The Games</h2>
                        </div>
                        <div className="a-box-2">
                            <p>Be where the action is. Witness 10,500 athletes from around the world compete in 306 medal events.
                                Celebrate the wins and cheer your nation on. When it comes to The Games, you’ll want to be there.
                                Check the official Games website for updates on events and locations
                            </p>
                        </div>
                    </div>
                    <div className="a-block-type-2">
                        <img src={pic5} alt="" />
                    </div>
                </div>



                {/* contact section */}
                <div className={isContact? 'block-contact show':"hide"}>
                    <div className="c-block-type-1">
                        <div className="c-box-1">
                            <h2>Ask Us Anything!</h2>
                        </div>
                        <div className="c-box-2">
                            <form action="#">
                                <div className="name f-box">
                                    <div className="fName">
                                        <label htmlFor="fName">First Name :</label><br />
                                        <input type="text" name='fName' />
                                    </div>
                                    <div className="lName">
                                        <label htmlFor="lName">Last Name :</label><br />
                                        <input type="text" name='lName' />
                                    </div>
                                </div>
                                <div className='f-box f-box-2'>
                                    <label htmlFor="email">Email :</label><br />
                                    <input type="email" name='email' />
                                </div>

                                <div className='f-box f-box-3'>
                                    <label htmlFor="desc">Type your message here...</label><br />
                                    <input type="text" name='desc' />
                                </div>
                                <div className="btn">
                                    <button> Submit</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">

                <div className="socials">
                    <ul>
                        <li className='contact'>
                            <h3>Contact Us</h3>
                            <p>Ask us anything! We’re here to answer any questions you have.</p>
                            <p>Email: info@mysite.com</p>
                        </li>
                        <li className='follow'>
                            <h3>Follow Us</h3>
                            <div className="icons">
                                <ul>
                                    <li><FacebookIcon /></li>
                                    <li><InstagramIcon /></li>
                                    <li><XIcon /></li>
                                </ul>
                            </div>
                        </li>
                        <li className='subscribe'>
                            <h3>Subscribe for Updates & Offers</h3>
                            <div>
                                <label htmlFor="email">Email : </label><br/>
                                <input type="email" name="email" id="" /><br/>
                                <button > Subscribe Now</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Landing
