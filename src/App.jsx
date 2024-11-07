import { useSelector } from "react-redux";

import CharacterCreator from "./features/party/CharacterCreator";

import "./App.css";

function App() {
  const characters = useSelector((state) => state.party.characters);

  return (
    <div>
      <CharacterCreator />
      {/* <div className="flex w-full justify-evenly">
        {characters.map((character) =>
          character.name === null ? (
            <div key={character.id} className="h-8 w-8 bg-slate-200"></div>
          ) : (
            <div>asdfads</div>
          )
        )}
      </div> */}
    </div>
  );
}

export default App;
