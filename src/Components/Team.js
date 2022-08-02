import React, {Component} from'react'
import image from '../react-assets/Our team.png'


class Team extends Component {
    render () {
        return (
            <>
                <div className='team'>
                    <img src={image} className="team-image" />
                </div>
            </>
        )
    }
}
export default Team;