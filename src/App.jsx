import BoatEditor from './components/BoatEditor.jsx'
import BoatsExplorer from './components/BoatsExplorer.jsx'
import Header from './components/Header.jsx'
import NewBoatForm from './components/NewBoatForm.jsx'
import { createContext, useState } from 'react';

export const BoatContext = createContext();

function App() {

  const [boatList, setBoatList] = useState([
    {
      name: "1",
      isCoxed: false,
      type: "4x",
      inService: true,
    },
    {
      name: "2",
      isCoxed: false,
      type: "2x",
      inService: false,
    },
    {
      name: "3",
      isCoxed: true,
      type: "8+",
      inService: true,
    }
  ])
  const [editorOpen, setEditorOpen] = useState(false);
  const [editorListId, setEditorListId] = useState(-1);

  const context = {
    boatList, setBoatList,
    editorOpen, setEditorOpen,
    editorListId, setEditorListId
  };

  return (
    <>
      <Header />

      <BoatContext.Provider value={context}>
        <NewBoatForm />
        <BoatEditor />
        <BoatsExplorer />
      </BoatContext.Provider>
    </>
  )
}

export default App
