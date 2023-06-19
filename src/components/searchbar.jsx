import React from 'react'

export default function Searchbar() {
    return (
        <div className='display-row'>
            <div className='search-img'>
                {/* <img src="/Vector2.png" alt="" /> */}
                <input type="text" placeholder='Search for anything...' />
            </div>

            <div className='display-row profile-details'>
                <div className='margin-right shift-right'>
                    <img src="/Group5.png" alt="" />
                </div>
                <div className='display-row'>
                    <div>
                        <div className='margin-zero'>Anima Agrawal</div>
                        <div className='margin-zero color-fade'>U.P, India</div>
                    </div>
                    <div className='header-img'>
                        <img src="/image1.png" alt="" />
                    </div>
                    <div className='margin-right'>
                        <img src="/Vector.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
