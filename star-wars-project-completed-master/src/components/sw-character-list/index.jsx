import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";

export const CharacterList = ({ label, item }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        {label} {item}
      </ListItemButton>
    </ListItem>
  );
};
