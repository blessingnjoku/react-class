import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul style={{display:'flex'}}>


<Link to='/'> <li>Home</li> </Link>
<Link to='/about-us'> <li>About</li> </Link>
<Link to='/books'> <li>Books</li> </Link>
<Link to='/profiles'> <li>Profiles</li> </Link>

      


      </ul>
    </div>
  )
}

export default Nav