import { useContext } from "react";

import { DefaultContext } from "../../Contexts";

export const CharacterLayout = ({ item, children }) => {
  const { handleChooseFan } = useContext(DefaultContext);
  return (
    <div key={item.name} className="item-list-layout">
      <div>{children}</div>
      <div className="item-image-layout">
        <button
          className="favorite-button"
          onClick={() => handleChooseFan(item)}
        >
          I am your fan!!
        </button>
        <img className="item-image" src={item.url} alt={item.name} />
        {/*<button className="delete-button">Delete</button>*/}
      </div>
    </div>
  );
};
