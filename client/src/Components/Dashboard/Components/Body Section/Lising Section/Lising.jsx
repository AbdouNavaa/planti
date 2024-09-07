import React from 'react'
import './Lising.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import img from '../../../Assets/plantwithoutbg3.png'
import img2 from '../../../Assets/img1.png'
import img3 from '../../../Assets/img2.png'
import img4 from '../../../Assets/img3.png'
import user1 from '../../../Assets/friend-01.jpg'
import user2 from '../../../Assets/friend-02.jpg'
import user3 from '../../../Assets/friend-04.jpg'
import user4 from '../../../Assets/avatar.png'

const Listing = () => {
    return (
        <div className='listingSection'>
            <div className="heading flex">
                <h1>My Listing</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className='icon'/>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className='icon'/>
                    <img src={img} alt="image Name" />
                    <h3>Annual Vince</h3>
                </div>


                <div className="singleItem">
                    <AiOutlineHeart className='icon'/>
                    <img src={img2} alt="image Name" />
                    <h3>Coffee Plant</h3>
                </div>

                <div className="singleItem">
                    <AiOutlineHeart className='icon'/>
                    <img src={img3} alt="image Name" />
                    <h3>Button Fern</h3>
                </div>

                
                <div className="singleItem">
                    <AiFillHeart className='icon'/>
                    <img src={img4} alt="image Name" />
                    <h3>Spider Plant</h3>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon' />
                        </button>
                    </div>
                <div className="card flex">
                    <div className="users">
                        <img src={user1} alt="" />
                        <img src={user2} alt="" />
                        <img src={user3} alt="" />
                        <img src={user4} alt="" />
                    </div>

                    <div className="cardText">
                        <span>14.444 Plant Sold <br/>
                        <small>
                            21 Sellers <span className='date'>7 Days</span>
                        </small>
                        </span>
                    </div>
                </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon' />
                        </button>
                    </div>
                <div className="card flex">
                    <div className="users">
                        <img src={user1} alt="" />
                        <img src={user4} alt="" />
                        <img src={user3} alt="" />
                        <img src={user2} alt="" />
                    </div>

                    <div className="cardText">
                        <span>14.444 Plant Sold <br/>
                        <small>
                            21 Sellers <span className='date'>7 Days</span>
                        </small>
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Listing