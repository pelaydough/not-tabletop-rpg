import { useState } from "react";

import lightning from "../../assets/lightning.svg";
import heart from "../../assets/heart.svg";

const CharacterCreator = ({ recruitingCharacter, setRecruitingCharacter }) => {
  const [character, setCharacter] = useState({
    name: "",
    stats: [
      { name: "Strength", value: 3 },
      { name: "Focus", value: 3 },
      { name: "Mind", value: 3 },
      { name: "Body", value: 3 },
      { name: "Reflex", value: 3 },
      { name: "Will", value: 3 },
    ],
    healthPoints: 150,
    energyPoints: 75,
    class: null,
    race: null,
    background: null,
  });

  const getStat = (statName) => {
    return character.stats.find((stat) => stat.name === statName).value;
  };

  const [characterClassHovered, setCharacterClassHovered] = useState("");

  const [raceHovered, setRaceHovered] = useState("");

  const [backgroundHovered, setBackgroundHovered] = useState("");

  const races = [
    {
      name: "Human",
      description:
        "Humans are versatile and ambitious, known for their adaptability and resilience. They excel in various fields and are often seen as natural leaders.",
    },
    {
      name: "Dwarf",
      description:
        "Dwarves are stout and sturdy, renowned for their craftsmanship and love of mining. They dwell in mountainous regions and are fiercely loyal to their kin.",
    },
    {
      name: "Elf",
      description:
        "Elves are graceful and wise, with a deep connection to nature. They are known for their longevity and mastery of magic, often residing in lush forests.",
    },
    {
      name: "Orc",
      description:
        "Orcs are strong and fierce warriors, known for their bravery and combat prowess. They value strength and honor, often living in tribal communities.",
    },
    {
      name: "Gnome",
      description:
        "Gnomes are inventive and curious, known for their technological prowess and love of tinkering. They often live in hidden villages and are experts in engineering.",
    },
    {
      name: "Troll",
      description:
        "Trolls are resilient and resourceful, known for their regenerative abilities and connection to the wild. They often inhabit jungles and are skilled hunters.",
    },
    {
      name: "Goblin",
      description:
        "Goblins are cunning and opportunistic, known for their business acumen and explosive inventions. They thrive in bustling trade cities and are adept at negotiation.",
    },
    {
      name: "Pandaren",
      description:
        "Pandaren are peaceful and wise, known for their love of balance and harmony. They often live in tranquil monasteries and are skilled in martial arts.",
    },
    {
      name: "Undead",
      description:
        "The Undead are relentless and determined, known for their resistance to pain and tireless nature. They often dwell in shadowy realms and are driven by a desire for vengeance.",
    },
  ];

  const characterClasses = [
    {
      name: "Cleric",
      description:
        "The Cleric is your party's divine protector, wielding holy power to heal, cleanse, and shield allies. With a balance of mercy and might, they mend wounds and smite foes, ensuring the light stands strong against darkness.",
      statBonuses: [
        { name: "Mind", amount: 1 },
        { name: "Body", amount: 2 },
        { name: "Will", amount: 2 },
      ],
      abilities: [
        {
          name: "Spirited (Passive)",
          level: 1,
          cost: 0,
          description: `Deal ${
            40 + getStat("Will") * 5
          } Spell damage to target enemy and restore half of it as Energy to all party members.`,
        },
        {
          name: "Group Heal",
          level: 1,
          cost: 70,
          description: `Restore ${
            40 + getStat("Focus") * 5
          } Health to all party members.`,
        },
        {
          name: "Weak Resurrection",
          level: 1,
          cost: 70,
          description: `Temporarily resurrect target ally with 10% Health and 10% Energy.`,
        },
        {
          name: "Wrath",
          level: 1,
          cost: 60,
          description: `Deal 84 Spell damage and 1 Weakness to target enemy. Deals 10% bonus damage per Weakness already on the enemy. Weakness removes and is removed by Inspiring Tunes.`,
        },
        {
          name: "Bless",
          level: 1,
          cost: 40,
          description: `Grant all party members 1 bonus to Saving Throws for 3 Rounds. Successful Saving Throws restore 21 Health. Removes and is removed by Corrupt.`,
        },
      ],
    },
    {
      name: "Warrior",
      description:
        "The Warrior is a powerhouse of strength and resilience, leading the charge with heavy armor and crushing blows. Built to take and deal damage, they shield allies and dominate foes, standing unyielding on the front lines.",
      statBonuses: [
        { name: "Strength", amount: 2 },
        { name: "Body", amount: 2 },
        { name: "Reflex", amount: 1 },
      ],
      abilities: [
        {
          name: "Taunting Jab (Passive)",
          level: 1,
          cost: 0,
          description: `Deal ${
            40 + getStat("Strength") * 3
          } Physical damage and Taunt target enemy. Taunted enemies are forced to target their Taunter.`,
        },
        {
          name: "Intimidating Roar",
          level: 1,
          cost: 60,
          description: `Deal ${
            50 + getStat("Strength") * 4
          } Physical damage to all enemies and reduce their damage by 15% for 2 rounds.`,
        },
        {
          name: "Shield Wall",
          level: 1,
          cost: 50,
          description: `Gain a shield that absorbs ${
            100 + getStat("Body") * 10
          } damage for 3 rounds. While active, 25% of damage dealt to allies is redirected to you.`,
        },
        {
          name: "Crushing Blow",
          level: 1,
          cost: 70,
          description: `Deal ${
            80 + getStat("Strength") * 6
          } Physical damage to target enemy and stun them for 1 round.`,
        },
        {
          name: "Rally",
          level: 1,
          cost: 40,
          description: `Increase all party members' Physical damage by ${
            10 + getStat("Will") * 2
          }% for 3 rounds.`,
        },
      ],
    },
    {
      name: "Mage",
      description:
        "The Mage is a master of arcane arts, wielding devastating spells to control the battlefield. With unparalleled magical prowess, they can unleash elemental fury, manipulate reality, and turn the tide of battle with a single incantation.",
      statBonuses: [
        { name: "Mind", amount: 3 },
        { name: "Focus", amount: 2 },
        { name: "Will", amount: 1 },
      ],
      abilities: [
        {
          name: "Arcane Missile (Passive)",
          level: 1,
          cost: 0,
          description: `Launch ${
            3 + Math.floor(getStat("Mind") / 3)
          } arcane missiles, each dealing 15 Spell damage to random enemies.`,
        },
        {
          name: "Fireball",
          level: 1,
          cost: 80,
          description: `Deal ${
            70 + getStat("Mind") * 6
          } Fire damage to target enemy and half that amount to adjacent enemies.`,
        },
        {
          name: "Frost Nova",
          level: 1,
          cost: 60,
          description: `Deal ${
            50 + getStat("Mind") * 4
          } Ice damage to all enemies and reduce their speed by 30% for 2 rounds.`,
        },
        {
          name: "Arcane Barrier",
          level: 1,
          cost: 50,
          description: `Create a magical barrier around an ally, absorbing ${
            80 + getStat("Focus") * 8
          } damage and reflecting 20% of absorbed damage back to attackers.`,
        },
        {
          name: "Mana Surge",
          level: 1,
          cost: 30,
          description: `Restore ${
            40 + getStat("Mind") * 3
          } Energy to target ally and increase their Spell damage by 20% for 2 rounds.`,
        },
      ],
    },
    {
      name: "Paladin",
      description:
        "The Paladin is a holy knight, combining martial prowess with divine blessings. They stand as a beacon of hope, protecting allies with unwavering faith and smiting evil with righteous fury.",
      statBonuses: [
        { name: "Strength", amount: 2 },
        { name: "Will", amount: 2 },
        { name: "Body", amount: 1 },
      ],
      abilities: [
        {
          name: "Divine Strike (Passive)",
          level: 1,
          cost: 0,
          description: `Deal ${
            35 + getStat("Strength") * 3 + getStat("Will") * 2
          } Holy damage to target enemy and heal yourself for 20% of the damage dealt.`,
        },
        {
          name: "Lay on Hands",
          level: 1,
          cost: 60,
          description: `Heal target ally for ${
            60 + getStat("Will") * 6
          } Health and remove one negative effect.`,
        },
        {
          name: "Divine Shield",
          level: 1,
          cost: 70,
          description: `Become invulnerable for 1 round and heal yourself for ${
            40 + getStat("Will") * 4
          } Health.`,
        },
        {
          name: "Righteous Hammer",
          level: 1,
          cost: 50,
          description: `Deal ${
            65 + getStat("Strength") * 5
          } Holy damage to target enemy and stun them for 1 round if they're undead or demonic.`,
        },
        {
          name: "Aura of Courage",
          level: 1,
          cost: 40,
          description: `Grant all party members ${
            10 + getStat("Will") * 2
          }% damage reduction and immunity to fear effects for 3 rounds.`,
        },
      ],
    },
    {
      name: "Rogue",
      description:
        "The Rogue is a master of stealth and precision, excelling in quick, deadly strikes and cunning tactics. With unparalleled agility and a knack for finding weak points, they can turn the tide of battle through subterfuge and sudden, devastating attacks.",
      statBonuses: [
        { name: "Reflex", amount: 3 },
        { name: "Focus", amount: 2 },
        { name: "Strength", amount: 1 },
      ],
      abilities: [
        {
          name: "Backstab (Passive)",
          level: 1,
          cost: 0,
          description: `Deal ${
            50 + getStat("Reflex") * 4
          } Physical damage to target enemy. Deals 50% more damage if attacking from stealth or from behind.`,
        },
        {
          name: "Shadowstep",
          level: 1,
          cost: 40,
          description: `Teleport behind target enemy and enter stealth for 1 round. Your next attack from stealth deals 30% more damage.`,
        },
        {
          name: "Poison Blade",
          level: 1,
          cost: 50,
          description: `Coat your weapon with poison, causing your next 3 attacks to deal an additional ${
            20 + getStat("Focus") * 3
          } Poison damage over 3 rounds.`,
        },
        {
          name: "Evasion",
          level: 1,
          cost: 60,
          description: `Increase your dodge chance by ${
            20 + getStat("Reflex") * 2
          }% for 2 rounds.`,
        },
        {
          name: "Expose Weakness",
          level: 1,
          cost: 30,
          description: `Reveal target enemy's weak points, increasing all damage they take by ${
            10 + getStat("Focus") * 2
          }% for 3 rounds.`,
        },
      ],
    },
    {
      name: "Hunter",
      description:
        "The Hunter is a master of ranged combat and wilderness survival. With keen senses and a deep connection to nature, they excel at tracking prey, setting traps, and unleashing precise attacks from afar.",
      statBonuses: [
        { name: "Focus", amount: 3 },
        { name: "Reflex", amount: 2 },
        { name: "Mind", amount: 1 },
      ],
      abilities: [
        {
          name: "Precise Shot (Passive)",
          level: 1,
          cost: 0,
          description: `Deal ${
            45 + getStat("Focus") * 4
          } Physical damage to target enemy. Has a 20% chance to critically strike, dealing 50% more damage.`,
        },
        {
          name: "Multishot",
          level: 1,
          cost: 60,
          description: `Fire ${
            3 + Math.floor(getStat("Focus") / 3)
          } arrows at random enemies, each dealing 30 Physical damage.`,
        },
        {
          name: "Trap",
          level: 1,
          cost: 40,
          description: `Set a trap that immobilizes the first enemy that triggers it for 2 rounds and deals ${
            40 + getStat("Mind") * 3
          } Physical damage.`,
        },
        {
          name: "Beast Companion",
          level: 1,
          cost: 70,
          description: `Summon a beast companion for 3 rounds that attacks enemies for ${
            30 + getStat("Mind") * 3
          } Physical damage each round.`,
        },
        {
          name: "Camouflage",
          level: 1,
          cost: 50,
          description: `Enter stealth for 2 rounds. Your next attack from stealth deals ${
            20 + getStat("Reflex") * 3
          }% more damage.`,
        },
      ],
    },
    {
      name: "Druid",
      description:
        "The Druid is a versatile spellcaster deeply attuned to nature. They can shapeshift into powerful beasts, command the elements, and call upon the healing energies of the natural world to aid allies and hinder foes.",
      statBonuses: [
        { name: "Mind", amount: 2 },
        { name: "Will", amount: 2 },
        { name: "Body", amount: 1 },
      ],
      abilities: [
        {
          name: "Wrath of Nature (Passive)",
          level: 1,
          cost: 0,
          description: `Deal ${
            40 + getStat("Mind") * 4
          } Nature damage to target enemy and restore ${
            20 + getStat("Will") * 2
          } Health to yourself.`,
        },
        {
          name: "Shapeshift: Bear",
          level: 1,
          cost: 80,
          description: `Transform into a bear for 3 rounds, gaining ${
            100 + getStat("Body") * 10
          } temporary Health and increasing your Physical damage by 30%.`,
        },
        {
          name: "Entangling Roots",
          level: 1,
          cost: 50,
          description: `Immobilize target enemy for 2 rounds and deal ${
            30 + getStat("Mind") * 3
          } Nature damage per round.`,
        },
        {
          name: "Rejuvenation",
          level: 1,
          cost: 60,
          description: `Heal target ally for ${
            50 + getStat("Will") * 5
          } Health over 3 rounds.`,
        },
        {
          name: "Hurricane",
          level: 1,
          cost: 70,
          description: `Summon a hurricane that deals ${
            60 + getStat("Mind") * 5
          } Nature damage to all enemies and reduces their accuracy by 20% for 2 rounds.`,
        },
      ],
    },
    {
      name: "Warlock",
      description:
        "The Warlock is a dark spellcaster who has made a pact with otherworldly entities. They wield chaotic energies, curse their enemies, and can summon demonic allies to fight by their side.",
      statBonuses: [
        { name: "Mind", amount: 3 },
        { name: "Will", amount: 2 },
        { name: "Focus", amount: 1 },
      ],
      abilities: [
        {
          name: "Shadow Bolt (Passive)",
          level: 1,
          cost: 0,
          description: `Deal ${
            45 + getStat("Mind") * 4
          } Shadow damage to target enemy. Has a 20% chance to apply a curse that deals 10 additional damage per round for 3 rounds.`,
        },
        {
          name: "Life Drain",
          level: 1,
          cost: 60,
          description: `Deal ${
            50 + getStat("Mind") * 5
          } Shadow damage to target enemy and heal yourself for 50% of the damage dealt.`,
        },
        {
          name: "Summon Imp",
          level: 1,
          cost: 70,
          description: `Summon an imp for 3 rounds that attacks enemies for ${
            35 + getStat("Mind") * 3
          } Fire damage each round.`,
        },
        {
          name: "Chaos Bolt",
          level: 1,
          cost: 50,
          description: `Launch a bolt of chaotic energy that deals ${
            60 + getStat("Mind") * 5
          } damage of a random type (Fire, Ice, or Lightning) to target enemy.`,
        },
        {
          name: "Dark Pact",
          level: 1,
          cost: 40,
          description: `Sacrifice 10% of your current Health to restore ${
            50 + getStat("Will") * 4
          } Energy.`,
        },
      ],
    },
    {
      name: "Artificer",
      description:
        "The Artificer is a master of magical invention, combining arcane knowledge with technological expertise. They create powerful gadgets, imbue items with magic, and use their ingenuity to solve problems and overcome challenges.",
      statBonuses: [
        { name: "Mind", amount: 2 },
        { name: "Focus", amount: 2 },
        { name: "Reflex", amount: 1 },
      ],
      abilities: [
        {
          name: "Arcane Turret (Passive)",
          level: 1,
          cost: 0,
          description: `Deploy a magical turret that fires at enemies each round, dealing ${
            30 + getStat("Mind") * 3
          } Arcane damage. Lasts for 3 rounds.`,
        },
        {
          name: "Infuse Weapon",
          level: 1,
          cost: 50,
          description: `Imbue an ally's weapon with magic, increasing their damage by ${
            20 + getStat("Focus") * 2
          }% for 3 rounds.`,
        },
        {
          name: "Repair Bot",
          level: 1,
          cost: 60,
          description: `Create a small robot that heals an ally for ${
            40 + getStat("Mind") * 4
          } Health. The robot lasts for 2 rounds.`,
        },
        {
          name: "Overcharge",
          level: 1,
          cost: 70,
          description: `Overload your magical devices, dealing ${
            60 + getStat("Mind") * 5
          } Lightning damage to all enemies and stunning them for 1 round.`,
        },
        {
          name: "Protective Field",
          level: 1,
          cost: 40,
          description: `Generate a force field around an ally, absorbing ${
            70 + getStat("Focus") * 6
          } damage. Lasts for 2 rounds.`,
        },
      ],
    },
  ];

  const backgrounds = [
    {
      name: "Academic",
      description:
        "Academics are well-versed in various fields of study, known for their intelligence and analytical skills. They excel in problem-solving and have a keen eye for detail.",
      statBonuses: [
        { name: "Mind", amount: 2 },
        { name: "Focus", amount: 1 },
      ],
    },
    {
      name: "Soldier",
      description:
        "Soldiers are trained in combat and survival, known for their physical strength and discipline. They are resilient and excel in strategic thinking during battles.",
      statBonuses: [
        { name: "Strength", amount: 2 },
        { name: "Body", amount: 1 },
      ],
    },
    {
      name: "Merchant",
      description:
        "Merchants are skilled in trade and negotiation, known for their charisma and resourcefulness. They have a knack for finding opportunities and making profitable deals.",
      statBonuses: [
        { name: "Focus", amount: 2 },
        { name: "Reflex", amount: 1 },
      ],
    },
    {
      name: "Noble",
      description:
        "Nobles are born into privilege and power, known for their leadership and influence. They are adept at diplomacy and have a strong sense of duty and honor.",
      statBonuses: [
        { name: "Will", amount: 2 },
        { name: "Mind", amount: 1 },
      ],
    },
    {
      name: "Outlander",
      description:
        "Outlanders are rugged and self-sufficient, known for their survival skills and connection to nature. They are resourceful and excel in navigating and thriving in the wild.",
      statBonuses: [
        { name: "Body", amount: 2 },
        { name: "Reflex", amount: 1 },
      ],
    },
    {
      name: "Artisan",
      description:
        "Artisans are masters of their craft, known for their creativity and precision. They have an eye for detail and excel in creating and repairing items.",
      statBonuses: [
        { name: "Focus", amount: 2 },
        { name: "Mind", amount: 1 },
      ],
    },
    {
      name: "Explorer",
      description:
        "Explorers are adventurous and curious, known for their love of discovery and travel. They excel in navigation and have a keen sense of direction.",
      statBonuses: [
        { name: "Reflex", amount: 2 },
        { name: "Mind", amount: 1 },
      ],
    },
    {
      name: "Healer",
      description:
        "Healers are compassionate and knowledgeable in the art of medicine, known for their ability to mend wounds and cure ailments. They excel in providing care and support.",
      statBonuses: [
        { name: "Will", amount: 2 },
        { name: "Focus", amount: 1 },
      ],
    },
    {
      name: "Warrior",
      description:
        "Warriors are fierce combatants, known for their unmatched strength and endurance. They thrive in the heat of battle and are always ready to defend their allies.",
      statBonuses: [
        { name: "Strength", amount: 2 },
        { name: "Will", amount: 1 },
      ],
    },
    {
      name: "Scout",
      description:
        "Scouts are agile and perceptive, known for their quick reflexes and keen senses. They excel in reconnaissance and are adept at avoiding danger.",
      statBonuses: [
        { name: "Reflex", amount: 2 },
        { name: "Focus", amount: 1 },
      ],
    },
    {
      name: "Guardian",
      description:
        "Guardians are stalwart defenders, known for their resilience and protective nature. They excel in shielding their allies from harm and standing firm against threats.",
      statBonuses: [
        { name: "Body", amount: 2 },
        { name: "Will", amount: 1 },
      ],
    },
    {
      name: "Sage",
      description:
        "Sages are wise and insightful, known for their deep understanding of the world and its mysteries. They excel in guiding others and making informed decisions.",
      statBonuses: [
        { name: "Mind", amount: 2 },
        { name: "Will", amount: 1 },
      ],
    },
  ];

  const calculateHealth = (bodyValue) => {
    return 150 + 50 * bodyValue;
  };

  const calculateEnergy = (focusValue) => {
    return 75 + 25 * focusValue;
  };

  const handleClassClick = (characterClass) => {
    // First, reset stats to base value
    let updatedStats = character.stats.map((stat) => ({
      ...stat,
      value: 3,
    }));

    // Apply the new class's stat bonuses
    characterClass.statBonuses.forEach((bonus) => {
      const statIndex = updatedStats.findIndex(
        (stat) => stat.name === bonus.name
      );
      if (statIndex !== -1) {
        updatedStats[statIndex] = {
          ...updatedStats[statIndex],
          value: updatedStats[statIndex].value + bonus.amount,
        };
      }
    });

    // If there's a background, reapply its bonuses
    if (character.background) {
      character.background.statBonuses.forEach((bonus) => {
        const statIndex = updatedStats.findIndex(
          (stat) => stat.name === bonus.name
        );
        if (statIndex !== -1) {
          updatedStats[statIndex] = {
            ...updatedStats[statIndex],
            value: updatedStats[statIndex].value + bonus.amount,
          };
        }
      });
    }

    // Calculate new health and energy based on updated stats
    const bodyValue = updatedStats.find((stat) => stat.name === "Body").value;
    const focusValue = updatedStats.find((stat) => stat.name === "Focus").value;

    setCharacter({
      ...character,
      class: characterClass,
      stats: updatedStats,
      healthPoints: calculateHealth(bodyValue),
      energyPoints: calculateEnergy(focusValue),
    });
  };

  const handleClassMouseover = (characterClass) => {
    setCharacterClassHovered(characterClass.name);
  };

  const handleClassMouseleave = () => {
    setCharacterClassHovered("");
  };

  const handleRaceMouseover = (race) => {
    setRaceHovered(race.name);
  };

  const handleRaceMouseleave = () => {
    setRaceHovered("");
  };

  const handleRaceClick = (race) => {
    setCharacter({
      ...character,
      race: race,
    });
  };

  const handleBackgroundMouseover = (background) => {
    setBackgroundHovered(background.name);
  };

  const handleBackgroundMouseleave = () => {
    setBackgroundHovered("");
  };

  const handleBackgroundClick = (background) => {
    // First, reset stats to base value
    let updatedStats = character.stats.map((stat) => ({
      ...stat,
      value: 3,
    }));

    // Apply the background's stat bonuses
    background.statBonuses.forEach((bonus) => {
      const statIndex = updatedStats.findIndex(
        (stat) => stat.name === bonus.name
      );
      if (statIndex !== -1) {
        updatedStats[statIndex] = {
          ...updatedStats[statIndex],
          value: updatedStats[statIndex].value + bonus.amount,
        };
      }
    });

    // If there's a class, reapply its bonuses
    if (character.class) {
      character.class.statBonuses.forEach((bonus) => {
        const statIndex = updatedStats.findIndex(
          (stat) => stat.name === bonus.name
        );
        if (statIndex !== -1) {
          updatedStats[statIndex] = {
            ...updatedStats[statIndex],
            value: updatedStats[statIndex].value + bonus.amount,
          };
        }
      });
    }

    // Calculate new health and energy based on updated stats
    const bodyValue = updatedStats.find((stat) => stat.name === "Body").value;
    const focusValue = updatedStats.find((stat) => stat.name === "Focus").value;

    setCharacter({
      ...character,
      background: background,
      stats: updatedStats,
      healthPoints: calculateHealth(bodyValue),
      energyPoints: calculateEnergy(focusValue),
    });
  };

  const handleNameChange = (e) => {
    setCharacter({
      ...character,
      name: e.target.value,
    });
  };

  // Add this helper function to check if all requirements are met
  const isCharacterComplete = () => {
    return (
      character.class !== null &&
      character.race !== null &&
      character.background !== null &&
      character.name.trim() !== ""
    );
  };

  return (
    <div className="bg-slate-100 h-screen w-full flex flex-col items-center justify-center">
      {character.class || character.race || character.background ? (
        <div className="bg-gray-200 p-2 border-2 border-gray-400 rounded">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h1>{character.name}</h1>
              <div className="flex gap-1">
                {character.race && (
                  <h3 className="font-thin">{character.race.name}</h3>
                )}
                {character.class && (
                  <h3 className="font-thin">{character.class.name}</h3>
                )}
              </div>
              {character.background && (
                <h4 className="italic font-thin text-sm">
                  Former {character.background.name.toLowerCase()}
                </h4>
              )}
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex gap-1 items-center">
                <img src={heart} className="w-4" />
                <div className="w-full min-w-[90px] relative p-0.5 bg-red-500 rounded-sm">
                  <p className="font-thin text-xs text-center">
                    {character.healthPoints} / {character.healthPoints}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <img src={lightning} className="w-4" />
                <div className="w-full min-w-[90px] relative p-0.5 bg-yellow-500 rounded-sm">
                  <p className="font-thin text-xs text-center">
                    {character.energyPoints} / {character.energyPoints}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-3 gap-1 w-full">
              {character.stats.map((stat, index) => (
                <div
                  key={stat.name}
                  className={`bg-gray-300 p-1.5 relative ${
                    index < 3 ? "mb-2" : ""
                  } rounded`}
                >
                  <h4 className="text-sm font-thin absolute -top-3">
                    {stat.name}
                  </h4>
                  <p className="text-sm text-center font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h2 className="font-thin text-lg">
          Start by selecting any class/race/background!
        </h2>
      )}

      <div className="fixed left-0 flex flex-col ml-5 gap-2">
        <h2 className="text-xl font-thin mb-10 text-center">Race</h2>
        {races.map((race, index) => (
          <div
            key={race.name}
            className={`relative cursor-pointer w-16 ${
              index % 2 === 0 ? "ml-0 -mt-8" : "ml-16 -mt-8"
            }`}
            onMouseOver={() => handleRaceMouseover(race)}
            onMouseLeave={() => handleRaceMouseleave()}
            onClick={() => handleRaceClick(race)}
          >
            <div
              className={`rounded-full w-16 h-16 bg-gray-200 border-2 ${
                character.race?.name === race.name
                  ? "border-yellow-500"
                  : "border-gray-400"
              }`}
            ></div>
            <div
              className={`z-40 bg-gray-200 w-[500px] rounded border border-gray-400 absolute p-2 left-[calc(100%+15px)] top-1/2 -translate-y-1/2 ${
                raceHovered === race.name ? "block" : "hidden"
              }`}
            >
              <h2 className="text-lg font-bold mb-2">{race.name}</h2>
              <p className="text-sm font-thin">{race.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed right-0 flex flex-col mr-5 gap-2">
        <h2 className="text-xl font-thin mb-10 text-center">Background</h2>
        {backgrounds.map((background, index) => (
          <div
            key={background.name}
            className={`relative cursor-pointer w-16 ${
              index % 2 === 0 ? "mr-0 -mt-8" : "ml-16 -mt-8"
            }`}
            onMouseOver={() => handleBackgroundMouseover(background)}
            onMouseLeave={() => handleBackgroundMouseleave()}
            onClick={() => handleBackgroundClick(background)}
          >
            <div
              className={`rounded-full w-16 h-16 bg-gray-200 border-2 ${
                character.background?.name === background.name
                  ? "border-yellow-500"
                  : "border-gray-400"
              }`}
            ></div>
            <div
              className={`z-40 bg-gray-200 w-[500px] rounded border border-gray-400 absolute p-2 right-[calc(100%+15px)] top-1/2 -translate-y-1/2 ${
                backgroundHovered === background.name ? "block" : "hidden"
              }`}
            >
              <h2 className="text-lg font-bold mb-2">{background.name}</h2>
              <p className="text-sm font-thin">{background.description}</p>
              <div className="mt-2 bg-gray-300 inline-flex gap-3 py-1 px-2 rounded">
                {background.statBonuses.map((statBonus) => (
                  <div
                    key={statBonus.name}
                    className="flex gap-1 *:text-sm *:font-thin"
                  >
                    <p>{statBonus.name}</p>
                    <p>+{statBonus.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 flex flex-col items-center pb-5">
        <input
          type="text"
          value={character.name}
          onChange={handleNameChange}
          placeholder="Character Name"
          className="bg-gray-200 border-2 text-center placeholder:font-thin font-thin border-gray-400 rounded outline-none px-2 py-1 mb-3"
        />
        <h2 className="text-xl font-thin mb-4">Class</h2>
        <div className="flex gap-2">
          {characterClasses.map((characterClass) => (
            <div
              key={characterClass.name}
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => handleClassClick(characterClass)}
            >
              <div
                onMouseOver={() => handleClassMouseover(characterClass)}
                onMouseLeave={() => handleClassMouseleave()}
                className={`rounded-full w-16 h-16 bg-gray-200 border-2 relative ${
                  character.class
                    ? character.class.name === characterClass.name
                      ? "border-yellow-500"
                      : "border-gray-400"
                    : "border-gray-400"
                }`}
              >
                <div
                  className={`bg-gray-200 w-[500px] rounded border border-gray-400 absolute p-2 bottom-[calc(100%+15px)] left-1/2 -translate-x-1/2 ${
                    characterClassHovered === characterClass.name
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <h2 className="text-sm font-thin">
                    {characterClass.description}
                  </h2>
                  <div className="p-2 pb-0 flex ">
                    <h2 className="font-bold mr-2">Bonus Stats:</h2>
                    <div className="bg-gray-300 flex gap-3 py-1 px-2 rounded">
                      {characterClass.statBonuses.map((statBonus) => (
                        <div
                          key={statBonus.name}
                          className="flex gap-1 *:text-sm *:font-thin"
                        >
                          <p>{statBonus.name}</p>
                          <p>+{statBonus.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 pt-1">
                    <h3 className="font-bold pb-1">Abilities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {characterClass.abilities.map((ability) => (
                        <div
                          key={ability.name}
                          className={`bg-gray-300 p-2 rounded-sm ${
                            ability.name === characterClass.abilities[0].name &&
                            "col-span-2"
                          }`}
                        >
                          <h3 className="font-bold text-sm">{ability.name}</h3>
                          <p className="text-sm font-thin">
                            {ability.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-sm font-thin">{characterClass.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={!isCharacterComplete()}
        className={`fixed right-0 bottom-0 mb-8 mr-12 p-2 rounded font-thin transition-colors
          ${
            isCharacterComplete()
              ? "bg-gray-200 hover:bg-gray-300 cursor-pointer"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
      >
        Recruit this party member!
      </button>
      <button
        onClick={() => setRecruitingCharacter("")}
        className="fixed left-0 bottom-0 ml-12 mb-8 p-2 rounded font-thin bg-gray-200 hover:bg-gray-300 cursor-pointer"
      >
        Go Back!
      </button>
    </div>
  );
};

export default CharacterCreator;
