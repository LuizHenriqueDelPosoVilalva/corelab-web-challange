import Image from 'next/image'

import { StyleNav } from './StyleNav'
import { StyleContainer } from './StyleContainerNav'

function Navbar () {
  return (
    <StyleNav>
      <StyleContainer>
        <Image src="/icons/coreTarefasIcon.png" alt ="IconeCoreNotes" width={30} height={30}/>
        <h1>CoreNotas</h1>
      </StyleContainer>
    </StyleNav>
  )
}

export default Navbar