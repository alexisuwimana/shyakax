import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.jpg'
import back_icon from '../../assets/back-icon.jpg'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn'/>
        <img src={back_icon} alt='' className='back-btn'/>
        <div className='slider'>
            <ul>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt='' />
                            <div>
                                <h3>William Jackson</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt='' />
                            <div>
                                <h3>William Jackson</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt='' />
                            <div>
                                <h3>William Jackson</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt='' />
                            <div>
                                <h3>William Jackson</h3>
                                <span>NC, USA</span>
                            </div>
                        </div>
                        <p>They have been very helpful and flexible which allow me plan my schedule. Special thanks to Zion & Yoon from their cleaner team</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials