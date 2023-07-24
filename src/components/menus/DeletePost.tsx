import Image from 'next/image'

import { StyleContainerMenu } from './MenusStyles'

function DeletePost ({ options = [] }) {

  const handleClick= (onClick: any) => {
    onClick()
  }

  return (
    <StyleContainerMenu>
      {
         options.map((option, pos) => 
          <Image 
            src="/icons/delete.svg" 
            alt="iconDelete" 
            width={15}
            height={15}
            key={`menu-delete${pos}`}
            onClick={() => handleClick(option.onClick)}
          />
        )
      }
    </StyleContainerMenu>
  )
}

export default DeletePost