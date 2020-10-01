import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon 
          icon={faBars} 
          onClick={() => setShowMenu(!showMenu)}
         />
      </span>
    </nav>
  )
}

export default Navigation