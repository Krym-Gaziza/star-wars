import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import swWeapons from "../../data/weapons.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { ReactComponent as PlanetSVG } from "../../assets/planet.svg";
import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Characters");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

  const planetRotationItem = (
    <>
      <PlanetSVG width={50} height={50} />
      <p>planets</p>
    </>
  );

  return (
    <div className="content-layout">
      <Select tab={tab} handleChangeTab={handleChangeTab} />

      {tab === "Characters" &&
        swCharacters.map((character) => (
            <div className="box">
                <CharacterLayout key={character.name} item={character}>
                    <CharacterList label="Name:" item={character.name} />
                    <CharacterList label="Species:" item={character.species} />
                    <CharacterList label="This: " item={character.this}/>
                </CharacterLayout>
            </div>
        ))}

      {tab === "Other Planets" &&
        swPlanets.map((planet) => (
          <CharacterLayout key={planet.name} item={planet}>
            <CharacterList label="Name:" item={planet.name} />
            <CharacterList
              label={planetRotationItem}
              item={planet.rotation_period}
            />
              <CharacterList label="Population:" item={planet.population} />
              <CharacterList label="Rotation Period:" item={planet.rotation_period} />
            <CharacterList label="This:" item={planet.this} />

          </CharacterLayout>
        ))}
        {tab === "Starships" &&
            swStarships.map((starship) => (
                <CharacterLayout key={starship.name} item={starship}>
                    <CharacterList label="Name:" item={starship.name} />
                    <CharacterList label="Model:" item={starship.model} />
                    <CharacterList label="Manufacturer: " item={starship.manufacturer} />
                    <CharacterList label="This:" item={starship.this} />
                </CharacterLayout>
            ))}
        {tab === "Weapons" &&
            swWeapons.map((weapons) => (
                <CharacterLayout key={weapons.name} item={weapons}>
                    <CharacterList label="Name:" item={weapons.name} />
                    <CharacterList label="This:" item={weapons.this} />
                </CharacterLayout>
            ))}
    </div>
  );
};
