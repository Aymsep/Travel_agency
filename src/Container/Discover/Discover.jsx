import React from 'react'
import Card from '../../components/Card/Card'
import './Discover.css'
import CardChild from '../../components/Card/CardChild'

import { cards_data } from '../../database/cards'


const Discover = () => {
    const url = "https://images.unsplash.com/photo-1613507681723-252eb6b66967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTAzMzB8MHwxfGFsbHx8fHx8fHx8fDE2Mjc1OTMzMTQ&ixlib=rb-1.2.1&q=80&w=1080&utm_source=travelities&utm_medium=referral&utm_campaign=api-credit"
  return (
    <div className="app__discover">
        <h1>Discover Weekly</h1>
        <p className="p-text">Explore new travel inspiration updated every Monday</p>
        <div className="app__cards">

                {
                    cards_data && cards_data.map((card, i) =>(
                <Card>
                        <CardChild 
                        key={i}
                        place_image={card.image}
                        plane={card.plane}
                        car={card.car}
                        price={card.price}
                        location={card.location}
                        country={card.country}
                        adults={card.adults}
                        date={card.date}
                        nights={card.nights}
                        flag={card.flag}
                        />
                </Card>
                    ))
                }

        </div>
                <div className="app__cards-a">
                    <a href="#" className="app_viewall">View All</a>
                </div>
    </div>
  )
}

export default Discover