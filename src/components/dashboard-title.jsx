import React from 'react'

export default function DashboardTitle() {
    return (
        <div className='dashboard-divs'>
            <div className="display-row">
                <div>
                  <img src="/Group4.png" alt="" />
                </div>

                <div>
                   <div><img src="/Group3.png" alt="" className='shift-20'/></div>
                </div>
            </div>

            <div className="display-row">
                <div><img src="/Group1.png" alt="" /></div>
                <div><img src="/Group2.png" alt="" className='shift-20'/></div>
            </div>
        </div>
    )
}
