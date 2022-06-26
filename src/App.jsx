import CharacterList from "./controllers/characterList";
import character from "./controllers/character";
function App() {

  return (
    <div className="bg-dark text-white">
      <h1 className="text-center py-4 display-1">Rick And Morty</h1>
      <CharacterList/>
    </div>
  )
}

export default App