export const Select = ({ tab, handleChangeTab }) => {
  return (
    <select
      placeholder="Choose your path"
      className="select-item"
      value={tab}
      onChange={handleChangeTab}
    >
      <option>Characters</option>
      <option>Other Planets</option>
      <option>Starships</option>
      <option>Weapons</option>
    </select>
  );
};
