import { Box, FormControl, MenuItem, Select, styled} from "@mui/material";


const CustomDropDown = styled(Select)({
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "0px 6px",
    "& .MuiSelect-icon": {
      backgroundColor: "#FF5946",
      borderRadius: "2px", 
      color: "white",
    }, 
    "& :hover":{
        border: "none"
    }
  });

  const CustomMenuItem = styled(MenuItem)({
    "&:hover": {
      backgroundColor: "#FF5946",
      color: "white",
    },
  });

const DropDownMenu = ({filter, handleFilterChange }) => {
  return (
    <FormControl sx={{ minWidth: 250, marginTop:4}} size="small">
      <CustomDropDown value={filter} handleFilterChange  onChange={(event) => handleFilterChange(event)} >
        <CustomMenuItem value="All">All</CustomMenuItem>
        <CustomMenuItem value="To do">To do</CustomMenuItem>
        <CustomMenuItem value="Completed">Completed</CustomMenuItem>
      </CustomDropDown>
    </FormControl>
  );
};
 
export default DropDownMenu;