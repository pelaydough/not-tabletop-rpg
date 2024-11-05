import { useSelector } from "react-redux";

import "./App.css";

function App() {
  const characters = useSelector((state) => state.party.characters);

  return (
    <div className="flex w-full justify-evenly">
      {characters.map((character) =>
        character.name === null ? (
          <div key={character.id} className="h-8 w-8 bg-slate-200"></div>
        ) : (
          <div>asdfads</div>
        )
      )}
    </div>
  );
}

export default App;
