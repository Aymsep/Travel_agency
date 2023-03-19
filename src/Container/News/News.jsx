import React from 'react'
import Flag from '../../components/Flag/Flag'
import './News.css'
import {FiSend} from 'react-icons/fi'

const News = () => {
  return (
    <div className="app__news">
        <div className="app__news-left">
            <h1>Get inspiration for <br /> future trips weekly</h1>

            <ul>
                <li>✔️ New trip destination every week. </li>
                <li>✔️ Less than 4-hour travel time. </li>
                <li>✔️ Itinearies for 2-4 night weekend. </li>
                <li>✔️ Made just for you , by our AI engine </li>
            </ul>

            <div className="app__news-input">
                <input type="text" placeholder="Please enter your email" />
                <FiSend/>
            </div>

        </div>
    </div>
  )
}

export default News