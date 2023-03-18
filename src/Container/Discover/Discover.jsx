import React from 'react'
import Card from '../../components/Card/Card'
import {AiOutlineUsergroupDelete,AiOutlineCalendar,AiTwotoneCar,AiOutlineHeart} from 'react-icons/ai'
import {FaPlane} from 'react-icons/fa'
import './Discover.css'
import istanbul from '../../assets/istanbul.png'
import canada from '../../assets/canada.png'
import Flag from '../../components/Flag/Flag'

const Discover = () => {
    const url = "https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit"
  return (
    <div className="app__discover">
        <h1>Discover Weekly</h1>
        <p className="p-text">Explore new travel inspiration updated every Monday</p>
        <div className="app__cards">
            <Card>
                <img src={istanbul} alt="" width="100%" height="200"/>
                
                <div className="app_card-opt">
                    <div className="opt-fly opt">
                        <FaPlane/>
                    </div>
                    <div className="opt-car opt">
                        <AiTwotoneCar/>
                    </div>
                    <div className="opt-heart opt">
                        <AiOutlineHeart/>
                    </div>
                </div>

                <div className="app_card-desc">
                    <h3>Moraine Lake</h3>
                    <h3>$320</h3>
                </div>

                <div className="app_card-info">
                    <Flag/>
                    <span className="p-text" >Canada</span>
                    <AiOutlineUsergroupDelete/>
                    <span className="p-text">2 adults</span>
                </div>

                <div className="app_card-line"></div>

                <div className="app_card-time">
                    <p className="p-text">   <AiOutlineCalendar/> May 18 - 20 • 2 nights</p>
                </div>
                
            </Card>
        </div>
    </div>
  )
}

export default Discover