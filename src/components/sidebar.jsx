import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className='display-row title'>
                <span>
                    <img src="/Group7.png" alt="" />
                    <span className='margin-left'>Project M.</span>
                </span>

                <span>
                    <img src="/Group8.png" alt="" />
                </span>
            </div>

            <div className="display-column">
                <div><img src="/Group 53.png" alt="" /></div>
                <div><img src="/Group 49.png" alt="" /></div>
                <div><img src="/Group 50.png" alt="" /></div>
                <div><img src="/Group 51.png" alt="" /></div>
                <div><img src="/Group 52.png" alt="" /></div>
            </div>

            <div className="my-projects">
                <div ><img src="/Group 54.png" alt="" className='add-img' /></div>
                 <div className='display-row mobile-app'>
                    <span><img src="/Ellipse 8.png" alt="" />
                    <span className='padding-left'>Mobile App</span>
                    </span>
                    
                    <span><img src="/dots.png" alt="" /></span>
                 </div>
                 <div>
                    <span>
                        <img src="/Ellipse 9.png" alt="" />
                    </span>
                    <span className='padding-left'> Website Redisgn</span>
                 </div>
                 <div>
                    <span>
                        <img src="/Ellipse 10.png" alt="" />
                    </span>
                    <span className='padding-left'>Design System</span>
                 </div>
                 <div>
                    <span>
                        <img src="/Ellipse 11.png" alt="" />
                    </span>
                    <span className='padding-left'>Wire Frames</span>
                 </div>
            </div>

            <div className="thoughts">
                <div className="elipse">
                    <img src="/Vector110.png" alt="" />
                </div>
                <h5>Thoughts Time</h5>
                <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                <div>Write a message</div>
            </div>
        </>
    )
}
