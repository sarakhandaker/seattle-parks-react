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
                        <p>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
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
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
