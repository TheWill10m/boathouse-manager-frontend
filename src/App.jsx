import BoatsExplorer from './components/BoatsExplorer.jsx'
import Header from './components/Header.jsx'
import NewBoatForm from './components/NewBoatForm.jsx'
import { createContext, useState } from 'react';

export const BoatContext = createContext();

function App() {

  const [boatList, setBoatList] = useState([
    {
      name: "1"
    },
    {
      name: "2"
    },
    {
      name: "3"
    }
  ])
  const context = { boatList, setBoatList };

  return (
    <>
      <Header />

      <BoatContext.Provider value={context}>
        <NewBoatForm />
        <BoatsExplorer />
      </BoatContext.Provider>
    </>
  )
}

export default App
