import { useSelector } from "react-redux";
import { useState } from "react";

import CharacterCreator from "./features/party/CharacterCreator";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const characters = useSelector((state) => state.party.characters);
  const [recruitingCharacter, setRecruitingCharacter] = useState("");

  return (
    <div>
      <Navbar />
      {!recruitingCharacter ? (
        <div className="flex gap-2 h-screen justify-center items-center">
          {characters.map((character, index) => (
            <div
              key={character.id}
              onClick={() => setRecruitingCharacter(index.toString())}
              className="h-12 w-12 bg-gray-200 rounded cursor-pointer"
            >
              {character.name}
            </div>
          ))}
        </div>
      ) : (
        <CharacterCreator
          recruitingCharacter={recruitingCharacter}
          setRecruitingCharacter={setRecruitingCharacter}
        />
      )}

      {/* <CharacterCreator /> */}
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
