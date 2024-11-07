import { useState } from "react";

const CharacterCreator = () => {
  const [character, setCharacter] = useState({
    name: "",
    strength: 3,
    focus: 3,
    mind: 3,
    body: 3,
    reflex: 3,
    will: 3,
    healthPoints: 150,
    manaPoints: 75,
  });

  const characterClasses = [
    {
      name: "Rogue",
      description: "Evade, something something. Sneaky rogue.",
      statBonuses: [
        { name: "Reflex", amount: 2 },
        { name: "Strength", amount: 2 },
        { name: "Focus", amount: 1 },
      ],
      abilities: [
        {
          name: "Poison Touch",
          level: 1,
          cost: 0,
          description: `Deal ${
            40 + character.strength * 5
          } Physical damage and 1 Poison to a target enemy.`,
        },
        {
          name: "Dirty Trick",
          level: 1,
          cost: 70,
          description: `Deal ${
            40 + character.strength * 5
          } Physical damage and 1 Poison to a target enemy.`,
        },
      ],
    },
    {
      name: "Shaman",
      description: "No totems, blah blah. This is the shaman thing.",
      statBonuses: [
        { name: "Will", amount: 2 },
        { name: "Mind", amount: 2 },
        { name: "Body", amount: 1 },
      ],
      abilities: [
        {
          name: "Fury of the Wind",
          level: 1,
          cost: 0,
          description: `Deal ${
            40 + character.focus * 3
          } Spell damage to target enemy. This attack may repeat and it restores 8% max Health to all party members with each attack.`,
        },
        {
          name: "Chain Heal",
          level: 1,
          cost: 60,
          description: `Restore ${
            70 + character.focus * 8
          } Health to target ally. The effect leaps 3 times to the adjacent ally with lowest Health. Each leap halves the healing.`,
        },
      ],
    },
  ];

  return (
    <div className="bg-slate-100 p-3 w-[30%] h-screen flex flex-col items-center">
      <h1 className="text-2xl text-center mb-3">Recruit a Character!</h1>
      <input
        type="text"
        placeholder="Character Name"
        className=" rounded py-1 px-2 text-sm outline-none border border-gray-500 mb-3"
      />
      <div>
        <div className="flex p-1 gap-1">
          {characterClasses.map((characterClass) => (
            <div className="flex">
              <div className="bg-gray-300 rounded h-10 w-10 border border-gray-500"></div>
              <div>
                <h2 className="text-lg">{characterClass.name}</h2>
                <p className="text-sm">{characterClass.description}</p>
                {characterClass.abilities.map((ability) => (
                  <div>
                    <h1>
                      Lv.{ability.level} {ability.name}
                    </h1>
                    <p className="text-xs">{ability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;
