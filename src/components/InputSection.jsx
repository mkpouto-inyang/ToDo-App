import {Box, Button, InputBase, styled} from "@mui/material"
import { useState } from "react";

const CustomInput = styled(InputBase)({
    backgroundColor: "white",
    width:'100%',
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

const InputSection = ({addNewTask}) => {
    const [userInput, setUserInput] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(userInput);
        addNewTask(userInput);
        // localStorage.setItem('value', userInput)
        setUserInput(" ")
    }

    return ( 
        <Box component="form" sx={{display: "flex",justifyContent:"center", gap:"8px"}}>
           
            <CustomInput 
            placeholder="E.g Buy Groceries" value={userInput}
             onChange={(e)=>{setUserInput(e.target.value)}}/> 

            <AddButton variant="contained"  type="submit" onClick={handleSubmit}>ADD</AddButton>
            
        </Box>
     );
}
 
export default InputSection;