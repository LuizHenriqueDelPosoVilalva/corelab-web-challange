import Image from 'next/image'

import { StyleContainerMenu } from './MenusStyles'

function EditPost ({ options = [] }) {

  const handleClick= (onClick: any) => {
    onClick()
  }

  return (
    <StyleContainerMenu>
      {
         options.map((option, pos) => 
          <Image 
            src="/icons/edit.svg" 
            alt="iconEdit" 
            width={15}
            height={15}
            key={`menu-Edit${pos}`}
            onClick={() => handleClick(option.onClick)}
          />
        )
      }
    </StyleContainerMenu>
  )
}

export default EditPost