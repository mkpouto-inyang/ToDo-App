import {Box, Button, InputBase, styled} from "@mui/material"

const CustomInput = styled(InputBase)({
    backgroundColor: "white",
    width: "640px",
    padding: "8px 20px",
    borderRadius: "10px 2px 2px 10px",
  });

const AddButton = styled(Button)({
    backgroundColor: "#FF5946",
    color:"white",
    padding: "10px 20px",
    borderRadius: "2px 10px 10px 2px",
    fontSize: "18px",
    fontWeight: "bold"
})

const InputSection = () => {
    return ( 
        <Box sx={{display: "flex",justifyContent:"center", gap:"8px"}}>
            <CustomInput placeholder="E.g Buy Groceries"/> 
            <AddButton variant="contained">ADD</AddButton>
        </Box>
     );
}
 
export default InputSection;