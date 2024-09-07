import React from 'react'
import './Top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import img from '../../../Assets/IMG-20240617-WA00041.jpg'
import img2 from '../../../Assets/img4.png'
import vid from '../../../Assets/video.mp4'

const Top = () => {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Planti.</h1>
                    <p>Hello Abdou, Welcome Back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard" />
                    <BiSearchAlt className='icon' />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon' />
                    <IoMdNotificationsOutline className='icon' />

                    <div className="adminImage">
                        <img src={img} alt="Admin Image" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary pruducts</h1>
                    <p>The world's fast growing industry today natural made products!</p>
                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={vid} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My Stat</h1>

                            <div className="flex">
                                <span>
                                    Today <br /><small>4 Orders</small>
                                </span>

                                <span>
                                    This Month <br /><small>400 Orders</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Go to my order <BsArrowRightShort className='icon' />
                            </span>


                        </div>

                        <div className="imgDiv">
                            <img src={img2} alt="Image" />
                        </div>

                                    
                        <div className="sideBarCard">
                            <BsQuestionCircle className='icon' />
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>Help Center</h3>
                                <p>Having Trouble in Planti, contact us from for more questions.</p>
                                <button className='btn'> Go to help center</button>
                            </div>
                        </div> 
                    
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Top