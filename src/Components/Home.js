import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div className='home'>
            <Link className='home-link' to="/nasa/nasaphoto">Astronomy Pic of the day</Link>
            
        </div>
    )
}

export default Home


