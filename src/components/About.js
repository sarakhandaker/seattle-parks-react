import React, { Component } from 'react'
import FallPark from '../images/park-fall.jpg'
import Kerry from '../images/kerry-park.jpg'

export class About extends Component {
    render() {
        return (
            <div class="container section">
                <div class="row">
                    <div class="col-md-6">
                        <h3>
                            About Seattle Parks
                    </h3>
                        <p> This Seattle Parks Application offers information on parks in the city of Seattle. This application will allow users to keep a record of all their trips, plan future trips and read about trips other people have taken. 
                        This application hopes to inspire users to explore new parks in the city while staying safe during COVID-19.</p>
                        <p> This application allows users to see a list of park in the Seattle area and filter through them on location, name and features. Users can login/ signup to keep a list of saved parks and submit reviews.</p>
                    </div>
                    <div class="col-md-6">
                        <img src={FallPark} alt="Greenlake Park" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <img src={Kerry} alt="Kerry Park View" />
                    </div>
                    <div class="col-md-6">
                        <h3>
                            About the Developer
                    </h3>
                        <p>
                            The developer, Sara Khandaker, is a Software Developer with a background in Civil Engineering and an interest in Urban design and planning. 
                            She is passionate about geospatial data and transportation/ transit. 
                            As technology is shaping and changing the way urban systems are managed, this developer hopes to work at the intersection of software and the smart cities of tomorrow. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
