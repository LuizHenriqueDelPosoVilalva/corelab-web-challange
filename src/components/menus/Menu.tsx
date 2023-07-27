import Image from 'next/image'

import { StyleContainerMenu, StyledImageIcons } from './MenusStyles'

function Menu({ options = [] }) {

  const handleClick= (onClick: any) => {
    onClick()
  }


  return (
    <StyleContainerMenu>
      {
         options.map((option, pos) => 
          <StyledImageIcons 
            src={option.src} 
            alt={option.alt} 
            width={option.width}
            height={option.height}
            key={`menu${pos}`}
            onClick={() => handleClick(option.onClick)}
          />
        )
      }
    </StyleContainerMenu>
  )
}

export default Menu