import Image from 'next/image'

import { StyleContainerMenu } from './MenusStyles'

function Menu({ options = [] }) {

  const handleClick= (onClick: any) => {
    onClick()
  }


  return (
    <StyleContainerMenu>
      {
         options.map((option, pos) => 
          <Image 
            src={option.src} 
            alt={option.alt} 
            width={15}
            height={15}
            key={`menu${pos}`}
            onClick={() => handleClick(option.onClick)}
          />
        )
      }
    </StyleContainerMenu>
  )
}

export default Menu