import React from 'react'
import './Activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import user1 from '../../../Assets/friend-01.jpg'
import user2 from '../../../Assets/friend-02.jpg'
import user3 from '../../../Assets/friend-04.jpg'
import user4 from '../../../Assets/avatar.png'

const Activity = () => {
    return (
        <div className='activitySection'>
            <div className="heading flex">
                <h1>Recent Activities</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className='icon' />
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user1} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Ahmed Brahim</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user2} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Abdou Neffaa</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user3} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Dah Babana</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        25 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user4} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Sidi yahya</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 Hours ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user2} alt="Custom Image" />
                    <div className="customerDetails">
                        <span className='name'>Moulay Cheikh</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity