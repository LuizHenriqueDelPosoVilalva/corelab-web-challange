import Image from 'next/image'

import { StyleNav, StyleContainer } from './StyleNav'

function Navbar () {
  return (
    <StyleNav>
      <StyleContainer>
        <Image src="/icons/coreTarefasIcon.png" alt ="IconeCoreNotes" width={30} height={30}/>
        <h1>CoreNotas</h1>
        <form>
          <input type="text" placeholder="Pesquisar notas" />
          <button>
            <Image src="/icons/search.svg" alt ="iconSearch" width={15} height={15}/>
          </button>
        </form>
      </StyleContainer>
    </StyleNav>
  )
}

export default Navbar